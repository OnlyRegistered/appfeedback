-- ================================================
-- STORIES FOR LITTLE DREAMERS
-- COMPLETE COUNTER FUNCTION REPAIR
-- November 2026
--
-- Supports all 6 stories
-- German and English
-- Preserves existing statistics
-- ================================================


-- STEP 1
-- Update the allowed story IDs in the table.

ALTER TABLE public.story_counts
DROP CONSTRAINT IF EXISTS story_counts_story_id_check;

ALTER TABLE public.story_counts
ADD CONSTRAINT story_counts_story_id_check
CHECK (
    story_id IN (
        'wine',
        'sun',
        'cat',
        'ronnie1',
        'ronnie2',
        'ronnie3'
    )
);


-- STEP 2
-- Replace the existing counter function.
-- This does not delete any counter data.

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

    -- Validate the story, language and event.

    IF p_story_id IS NULL
       OR p_story_id NOT IN (
           'wine',
           'sun',
           'cat',
           'ronnie1',
           'ronnie2',
           'ronnie3'
       )

       OR p_language IS NULL
       OR p_language NOT IN (
           'de',
           'en'
       )

       OR p_metric IS NULL
       OR p_metric NOT IN (
           'views',
           'listens',
           'reads',
           'mp3_downloads',
           'pdf_downloads'
       )

    THEN
        RAISE EXCEPTION 'Invalid story event';
    END IF;


    -- Create a counter row if it does not exist.

    INSERT INTO public.story_counts (
        story_id,
        language
    )
    VALUES (
        p_story_id,
        p_language
    )
    ON CONFLICT (story_id, language)
    DO NOTHING;


    -- Increase the appropriate counter.

    UPDATE public.story_counts

    SET

        views = views +
            CASE
                WHEN p_metric = 'views'
                THEN 1
                ELSE 0
            END,

        listens = listens +
            CASE
                WHEN p_metric = 'listens'
                THEN 1
                ELSE 0
            END,

        reads = reads +
            CASE
                WHEN p_metric = 'reads'
                THEN 1
                ELSE 0
            END,

        downloads = downloads +
            CASE
                WHEN p_metric IN (
                    'mp3_downloads',
                    'pdf_downloads'
                )
                THEN 1
                ELSE 0
            END,

        mp3_downloads = mp3_downloads +
            CASE
                WHEN p_metric = 'mp3_downloads'
                THEN 1
                ELSE 0
            END,

        pdf_downloads = pdf_downloads +
            CASE
                WHEN p_metric = 'pdf_downloads'
                THEN 1
                ELSE 0
            END

    WHERE
        story_id = p_story_id
        AND language = p_language;

END;
$$;


-- STEP 3
-- Preserve your original security permissions.

REVOKE ALL
ON FUNCTION public.record_story_event(text, text, text)
FROM PUBLIC, anon, authenticated;

GRANT EXECUTE
ON FUNCTION public.record_story_event(text, text, text)
TO anon;


-- STEP 4
-- Ensure both new story counter rows exist.
-- Existing statistics are not overwritten.

INSERT INTO public.story_counts (
    story_id,
    language,
    views,
    listens,
    reads,
    downloads,
    mp3_downloads,
    pdf_downloads
)

VALUES

    ('ronnie3', 'de', 0, 0, 0, 0, 0, 0),

    ('ronnie3', 'en', 0, 0, 0, 0, 0, 0)

ON CONFLICT (story_id, language)
DO NOTHING;


-- STEP 5
-- Show the new story's counters.

SELECT
    story_id,
    language,
    views,
    listens,
    reads,
    downloads,
    mp3_downloads,
    pdf_downloads

FROM public.story_counts

WHERE story_id = 'ronnie3'

ORDER BY language;
