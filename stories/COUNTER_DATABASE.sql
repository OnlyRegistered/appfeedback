-- Run once in your Supabase project's SQL Editor.
create table if not exists public.story_counts (
  story_id text not null check (story_id in ('wine','sun','cat')),
  language text not null check (language in ('de','en')),
  views bigint not null default 0 check (views >= 0),
  listens bigint not null default 0 check (listens >= 0),
  reads bigint not null default 0 check (reads >= 0),
  downloads bigint not null default 0 check (downloads >= 0),
  primary key (story_id, language)
);
alter table public.story_counts enable row level security;
drop policy if exists "Anyone may read story counts" on public.story_counts;
create policy "Anyone may read story counts" on public.story_counts for select to anon using (true);
revoke all on public.story_counts from anon, authenticated;
grant select on public.story_counts to anon;
create or replace function public.record_story_event(p_story_id text, p_language text, p_metric text)
returns void language plpgsql security definer set search_path = '' as $$
begin
  if p_story_id not in ('wine','sun','cat') or p_language not in ('de','en') or p_metric not in ('views','listens','reads','downloads') then
    raise exception 'Invalid story event';
  end if;
  insert into public.story_counts (story_id,language) values (p_story_id,p_language)
  on conflict (story_id,language) do nothing;
  update public.story_counts set
    views = views + case when p_metric = 'views' then 1 else 0 end,
    listens = listens + case when p_metric = 'listens' then 1 else 0 end,
    reads = reads + case when p_metric = 'reads' then 1 else 0 end,
    downloads = downloads + case when p_metric = 'downloads' then 1 else 0 end
  where story_id = p_story_id and language = p_language;
end;$$;
revoke all on function public.record_story_event(text,text,text) from public, anon, authenticated;
grant execute on function public.record_story_event(text,text,text) to anon;
