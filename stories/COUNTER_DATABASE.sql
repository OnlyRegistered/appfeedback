-- Run once in your existing Supabase project's SQL Editor.
-- Keeps all existing counts, including the old combined downloads total.
ALTER TABLE public.story_counts
  ADD COLUMN IF NOT EXISTS mp3_downloads bigint NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS pdf_downloads bigint NOT NULL DEFAULT 0;

ALTER TABLE public.story_counts
  DROP CONSTRAINT IF EXISTS story_counts_mp3_downloads_nonnegative;
ALTER TABLE public.story_counts
  ADD CONSTRAINT story_counts_mp3_downloads_nonnegative CHECK (mp3_downloads >= 0);
ALTER TABLE public.story_counts
  DROP CONSTRAINT IF EXISTS story_counts_pdf_downloads_nonnegative;
ALTER TABLE public.story_counts
  ADD CONSTRAINT story_counts_pdf_downloads_nonnegative CHECK (pdf_downloads >= 0);

-- This RPC counts both a specific download type and the legacy downloads total.
CREATE OR REPLACE FUNCTION public.record_story_event(
  p_story_id text,
  p_language text,
  p_metric text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  IF p_story_id NOT IN ('wine', 'sun', 'cat')
     OR p_language NOT IN ('de', 'en')
     OR p_metric NOT IN ('views', 'listens', 'reads', 'mp3_downloads', 'pdf_downloads') THEN
    RAISE EXCEPTION 'Invalid story event';
  END IF;

  INSERT INTO public.story_counts (story_id, language)
  VALUES (p_story_id, p_language)
  ON CONFLICT (story_id, language) DO NOTHING;

  UPDATE public.story_counts
  SET views = views + CASE WHEN p_metric = 'views' THEN 1 ELSE 0 END,
      listens = listens + CASE WHEN p_metric = 'listens' THEN 1 ELSE 0 END,
      reads = reads + CASE WHEN p_metric = 'reads' THEN 1 ELSE 0 END,
      downloads = downloads + CASE WHEN p_metric IN ('mp3_downloads', 'pdf_downloads') THEN 1 ELSE 0 END,
      mp3_downloads = mp3_downloads + CASE WHEN p_metric = 'mp3_downloads' THEN 1 ELSE 0 END,
      pdf_downloads = pdf_downloads + CASE WHEN p_metric = 'pdf_downloads' THEN 1 ELSE 0 END
  WHERE story_id = p_story_id AND language = p_language;
END;
$$;

REVOKE ALL ON FUNCTION public.record_story_event(text, text, text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.record_story_event(text, text, text) TO anon;

-- Keep the existing read-only browser policy and grant.
GRANT SELECT ON public.story_counts TO anon;
