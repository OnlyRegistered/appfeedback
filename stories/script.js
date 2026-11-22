
/*
  Stories for Little Dreamers
  Complete script.js

  Five bilingual stories
  Supabase counters, audio, PDFs and sharing

  Counter repair: November 2026
*/

// ================================================
// SETTINGS
// ================================================

const CONTACT_FORM_URL =
  'https://onlyregistered.github.io/appfeedback/#feedback';

const SUPABASE_URL =
  'https://kgowygqzqvoyajwmqzja.supabase.co';

const SUPABASE_ANON_KEY =
  'sb_publishable_r8DHRiQHHh5sEZHu-xHz6w_mwgixKpO';

const COUNTERS_ENABLED =
  Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);


// ================================================
// STORIES
// ================================================

const stories = [
  {
    id: 'wine',
    emoji: '🍷',
    age: '8',

    files: {
      de: {
        mp3: 'Der_geheimnisvolle_Weinverkaeufer.mp3',
        pdf: 'Der_geheimnisvolle_Weinverkaeufer.pdf'
      },
      en: {
        mp3: 'The_Mysterious_Wine_Seller.mp3',
        pdf: 'The_Mysterious_Wine_Seller.pdf'
      }
    },

    de: {
      title: 'Der geheimnisvolle Weinverkäufer',
      description:
        'Ein ungewöhnlicher Händler zeigt, wie sehr Worte und Erwartungen unsere Gedanken beeinflussen können.'
    },

    en: {
      title: 'The Mysterious Wine Seller',
      description:
        'A curious merchant shows how words and expectations can shape what we think and feel.'
    }
  },

  {
    id: 'sun',
    emoji: '☀️',
    age: '5',

    files: {
      de: {
        mp3: 'Die_Sonne_aus_Kimberley.mp3',
        pdf: 'Die_Sonne_aus_Kimberley.pdf'
      },
      en: {
        mp3: 'The_Little_Boy_and_the_Sunshine_from_Kimberley.mp3',
        pdf: 'The_Little_Boy_and_the_Sunshine_from_Kimberley.pdf'
      }
    },

    de: {
      title: 'Der kleine Junge und die Sonne aus Kimberley',
      description:
        'Eine warme Geschichte über Dankbarkeit, Freundlichkeit und ein Geschenk, das man nur fühlen kann.'
    },

    en: {
      title: 'The Little Boy and the Sunshine from Kimberley',
      description:
        'A heartwarming tale of gratitude, kindness, and a gift that can only be felt.'
    }
  },

  {
    id: 'cat',
    emoji: '🐈',
    age: '6',

    files: {
      de: {
        mp3: 'Rafaels_Abenteuer,_Eine_vierjährige_Reise_nach_Hause.mp3',
        pdf: 'Rafaels_Abenteuer,_Eine_vierjährige_Reise_nach_Hause.pdf'
      },
      en: {
        mp3: 'Rafaels_Adventures,_A_Four-Year_Journey_Home.mp3',
        pdf: 'Rafaels_Adventures,_A_Four-Year_Journey_Home.pdf'
      }
    },

    de: {
      title: 'Rafaels Abenteuer – Eine vierjährige Reise nach Hause',
      description:
        'Ein mutiger roter Kater entdeckt die große Welt und findet nach vier Jahren den Weg zurück zu seiner Familie.'
    },

    en: {
      title: 'Rafael’s Adventures – A Four-Year Journey Home',
      description:
        'A brave ginger cat explores the wide world and finds his way back to his family after four years.'
    }
  },

  {
    id: 'ronnie1',
    emoji: '🦚',
    age: '5',
    image: 'Ronnie_Band_1.jpg',

    files: {
      de: {
        mp3: 'Ronnie_Die_kleine_Pfauenhenne.mp3',
        pdf: 'Ronnie_Die_kleine_Pfauenhenne.pdf'
      },
      en: {
        mp3: 'Ronnie_The_Little_Peahen.mp3',
        pdf: 'Ronnie_The_Little_Peahen.pdf'
      }
    },

    de: {
      title: 'Ronnie – Die kleine Pfauenhenne',
      description:
        'Die wahre Geschichte einer kleinen Pfauenhenne, die auf Green Farm von Menschen großgezogen wird und ihre Familie mit Mut und Vertrauen überrascht.'
    },

    en: {
      title: 'Ronnie – The Little Peahen',
      description:
        'The true story of a little peahen raised by people at Green Farm, whose courage and trust bring wonderful surprises to her family.'
    }
  },

  {
    id: 'ronnie2',
    emoji: '🦚',
    age: '5',
    image: 'Ronnie_Band_2.jpg',

    files: {
      de: {
        mp3: 'Ronnie_Band_2_Weihnachtskueken.mp3',
        pdf: 'Ronnie_Band_2_Weihnachtskueken.pdf'
      },
      en: {
        mp3: 'Ronnie_Book_2_Christmas_Chicks.mp3',
        pdf: 'Ronnie_Book_2_Christmas_Chicks.pdf'
      }
    },

    de: {
      title: 'Ronnie und die Weihnachtsküken – Band 2',
      description:
        'Ronnie wird Mama! Kurz vor Weihnachten schlüpfen zwei kleine Pfauenküken namens Feliz und Navidad. Eine wahre Geschichte über Liebe, Vertrauen, Familie und das Leben auf Green Farm.'
    },

    en: {
      title: 'Ronnie and the Christmas Chicks – Book 2',
      description:
        'Ronnie becomes a mother! Just in time for Christmas, two little peafowl chicks named Feliz and Navidad hatch. A true story of love, trust, family and life at Green Farm.'
    }
  }
];


// ================================================
// TRANSLATIONS
// ================================================

const translations = {
  de: {
    eyebrow: 'Kleine Geschichten, große Gedanken',
    heroTitle: 'Willkommen in unserer kleinen Geschichtenwelt',
    heroText:
      'Dies ist ein kleines Hobby von uns. Aus Erlebnissen, besonderen Momenten und Ideen entstehen liebevoll erzählte Geschichten – besonders für Kinder.',
    explore: 'Geschichten entdecken ↓',

    collectionLabel: 'Unsere Sammlung',
    collectionTitle: 'Geschichten zum Träumen',
    collectionHint: 'Anhören, lesen und kostenlos herunterladen',

    listen: '▶ Anhören',
    read: '📖 PDF öffnen',
    download: '↓ Herunterladen',
    age: 'Empfohlen ab',
    share: 'Teilen',
    shareCopied: 'Link kopiert!',
    shareCopy: 'Link kopieren',

    whyTitle: 'Mit Herz erzählt',
    whyText:
      'Hinter jeder Geschichte steckt ein kleiner Gedanke über Freundlichkeit, Mut, Dankbarkeit oder Zusammenhalt.',

    agesTitle: 'Für kleine und große Zuhörer',
    agesText:
      'Unsere Geschichten sind ungefähr für Kinder von 5 bis 12 Jahren gedacht – zum Vorlesen, Selberlesen und Zuhören.',

    freeTitle: 'Kostenlos zum Teilen',
    freeText:
      'Du darfst die Geschichten kostenlos lesen, herunterladen, anhören und an andere weitergeben. Bitte nenne dabei unsere Sammlung.',

    contactLabel: 'Erzähl uns deine Idee',
    contactTitle: 'Welche Geschichte sollen wir als Nächstes erzählen?',
    contactText:
      'Du hast einen Wunsch, ein besonderes Erlebnis oder eine Idee? Wir freuen uns über eine Nachricht über das Kontaktformular unserer Hauptwebsite.',
    contactButton: 'Zum Kontaktformular ↗',

    footer: 'Ein kleines Hobby, mit Freude geteilt.'
  },

  en: {
    eyebrow: 'Little stories, big thoughts',
    heroTitle: 'Welcome to our little world of stories',
    heroText:
      'This is a small hobby of ours. We turn experiences, special moments, and ideas into lovingly told stories – especially for children.',
    explore: 'Explore the stories ↓',

    collectionLabel: 'Our collection',
    collectionTitle: 'Stories to dream about',
    collectionHint: 'Listen, read and download for free',

    listen: '▶ Listen',
    read: '📖 Open PDF',
    download: '↓ Download',
    age: 'Suggested from age',
    share: 'Share',
    shareCopied: 'Link copied!',
    shareCopy: 'Copy link',

    whyTitle: 'Stories told with heart',
    whyText:
      'Every story holds a little lesson about kindness, courage, gratitude, or togetherness.',

    agesTitle: 'For young readers and listeners',
    agesText:
      'Our stories are generally for children aged 5 to 12 – to read aloud, read independently, or listen to.',

    freeTitle: 'Free to enjoy and share',
    freeText:
      'You are welcome to read, download, listen to and share these stories for free. Please credit our collection when sharing.',

    contactLabel: 'Tell us your idea',
    contactTitle: 'What story should we tell as our next story?',
    contactText:
      'Have a wish, a special experience, or a story idea? We would love to hear from you through the contact form on our main website.',
    contactButton: 'Go to contact form ↗',

    footer: 'A small hobby, shared with joy.'
  }
};


// ================================================
// LANGUAGE AND COUNTER SETTINGS
// ================================================

let language =
  localStorage.getItem('story-language') === 'en'
    ? 'en'
    : 'de';

const metrics = [
  'views',
  'listens',
  'reads',
  'mp3_downloads',
  'pdf_downloads'
];

const counterCache = {};

const countedViews = new Set();

let storyObserver = null;

let counterLoadSequence = 0;

const zeroCounts = () => ({
  views: 0,
  listens: 0,
  reads: 0,
  downloads: 0,
  mp3_downloads: 0,
  pdf_downloads: 0
});

function counterKey(storyId, lang) {
  return `${storyId}_${lang}`;
}

function counterText(value) {
  if (
    value === undefined ||
    value === null ||
    !Number.isFinite(Number(value))
  ) {
    return '—';
  }

  return Number(value).toLocaleString(
    language === 'de' ? 'de-DE' : 'en-GB'
  );
}

function counterLabels() {
  return language === 'de'
    ? [
        'Aufrufe',
        'Angehört',
        'Gelesen',
        'MP3-Downloads',
        'PDF-Downloads'
      ]
    : [
        'Views',
        'Listens',
        'Reads',
        'MP3 downloads',
        'PDF downloads'
      ];
}


// ================================================
// SUPABASE REQUEST HEADERS
// ================================================

function supabaseHeaders() {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`
  };
}


// ================================================
// DISPLAY COUNTERS
// ================================================

function paintCounters() {
  for (const story of stories) {
    const counts =
      counterCache[counterKey(story.id, language)] || {};

    metrics.forEach(metric => {
      const element = document.getElementById(
        `count-${story.id}-${metric}`
      );

      if (element) {
        element.textContent = counterText(counts[metric]);
      }
    });
  }
}


// ================================================
// LOAD COUNTERS
// ================================================

async function loadCounters() {
  if (!COUNTERS_ENABLED) return;

  const sequence = ++counterLoadSequence;

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/story_counts?select=story_id,language,views,listens,reads,downloads,mp3_downloads,pdf_downloads`,
      {
        method: 'GET',
        headers: supabaseHeaders(),
        cache: 'no-store'
      }
    );

    if (!response.ok) {
      const detail = await response.text();

      throw new Error(
        `Counter loading failed: ${response.status} ${detail}`
      );
    }

    const rows = await response.json();

    // Ignore an older request if a newer one has started.
    if (sequence !== counterLoadSequence) return;

    for (const row of rows) {
      counterCache[
        counterKey(row.story_id, row.language)
      ] = row;
    }

    paintCounters();

  } catch (error) {
    console.error('Supabase counter loading error:', error);
  }
}


// ================================================
// RECORD EVENTS
// ================================================

async function recordEvent(storyId, lang, metric) {
  if (
    !COUNTERS_ENABLED ||
    !metrics.includes(metric) ||
    !stories.some(story => story.id === storyId) ||
    !['de', 'en'].includes(lang)
  ) {
    return false;
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/rpc/record_story_event`,
      {
        method: 'POST',
        headers: {
          ...supabaseHeaders(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          p_story_id: storyId,
          p_language: lang,
          p_metric: metric
        }),
        cache: 'no-store',
        keepalive: true
      }
    );

    if (!response.ok) {
      const detail = await response.text();

      throw new Error(
        `Counter saving failed: ${response.status} ${detail}`
      );
    }

    // Update the local display immediately after success.
    const key = counterKey(storyId, lang);

    if (!counterCache[key]) {
      counterCache[key] = zeroCounts();
    }

    counterCache[key][metric] =
      Number(counterCache[key][metric] || 0) + 1;

    if (
      metric === 'mp3_downloads' ||
      metric === 'pdf_downloads'
    ) {
      counterCache[key].downloads =
        Number(counterCache[key].downloads || 0) + 1;
    }

    paintCounters();

    // Read the authoritative database values again.
    await loadCounters();

    return true;

  } catch (error) {
    console.error(
      `Could not save ${metric} for ${storyId}/${lang}:`,
      error
    );

    return false;
  }
}


// ================================================
// STORY VIEWS
// ================================================

// Count once per card, per language, per page load.
// A new page visit can register a new view.

async function trackView(storyId, lang) {
  const key = counterKey(storyId, lang);

  if (countedViews.has(key)) {
    return;
  }

  // Prevent duplicate simultaneous requests.
  countedViews.add(key);

  const saved = await recordEvent(
    storyId,
    lang,
    'views'
  );

  // Allow retry if Supabase did not save it.
  if (!saved) {
    countedViews.delete(key);
  }
}


// ================================================
// OBSERVE VISIBLE STORY CARDS
// ================================================

function setupStoryViews() {
  if (storyObserver) {
    storyObserver.disconnect();
    storyObserver = null;
  }

  const observedLanguage = language;

  const cards = document.querySelectorAll(
    '.story-card'
  );

  if (!('IntersectionObserver' in window)) {
    cards.forEach(card => {
      const storyId = card.id.replace('story-', '');
      trackView(storyId, observedLanguage);
    });

    return;
  }

  storyObserver = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const card = entry.target;
        const storyId = card.id.replace('story-', '');

        storyObserver.unobserve(card);

        trackView(storyId, observedLanguage);
      }
    },
    {
      threshold: 0.25
    }
  );

  cards.forEach(card => {
    storyObserver.observe(card);
  });
}


// ================================================
// SHARE STORY
// ================================================

function getStoryLink(storyId, lang) {
  const url = new URL(window.location.href);

  url.hash = `story-${storyId}-${lang}`;

  return url.toString();
}

async function copyStoryLink(link) {
  if (
    navigator.clipboard &&
    window.isSecureContext
  ) {
    await navigator.clipboard.writeText(link);
    return;
  }

  const input = document.createElement('textarea');

  input.value = link;
  input.style.position = 'fixed';
  input.style.opacity = '0';

  document.body.appendChild(input);

  input.select();

  const copied = document.execCommand('copy');

  input.remove();

  if (!copied) {
    throw new Error('Copy unavailable');
  }
}

function showShareNotice(button, message) {
  const original = button.innerHTML;

  button.textContent = message;

  window.setTimeout(() => {
    if (button.isConnected) {
      button.innerHTML = original;
    }
  }, 2200);
}

async function shareStory(storyId, button) {
  const story = stories.find(
    item => item.id === storyId
  );

  if (!story) return;

  const details = story[language];
  const t = translations[language];

  const link = getStoryLink(story.id, language);

  const shareData = {
    title: details.title,
    text:
      `${details.title}\n\n` +
      `${details.description}\n\n` +
      'Stories for Little Dreamers',
    url: link
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await copyStoryLink(link);

    showShareNotice(button, t.shareCopied);

  } catch (error) {
    if (error.name === 'AbortError') return;

    try {
      await copyStoryLink(link);
      showShareNotice(button, t.shareCopied);
    } catch (copyError) {
      window.prompt(t.shareCopy, link);
    }
  }
}


// ================================================
// OPEN DIRECT STORY LINKS
// ================================================

function openSharedStory() {
  const match =
    /^#story-([a-z0-9]+)-(de|en)$/
      .exec(window.location.hash);

  if (!match) return;

  const [, id, lang] = match;

  if (!stories.some(story => story.id === id)) {
    return;
  }

  if (language !== lang) {
    language = lang;

    localStorage.setItem(
      'story-language',
      lang
    );

    render();
    return;
  }

  const card = document.getElementById(
    `story-${id}`
  );

  if (card) {
    window.requestAnimationFrame(() => {
      card.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      });
    });
  }
}

window.addEventListener(
  'hashchange',
  openSharedStory
);


// ================================================
// RENDER WEBSITE AND STORY CARDS
// ================================================

function render() {
  const t = translations[language];

  document.documentElement.lang = language;

  document.querySelectorAll(
    '[data-i18n]'
  ).forEach(element => {
    const key = element.dataset.i18n;

    if (
      Object.prototype.hasOwnProperty.call(t, key)
    ) {
      element.textContent = t[key];
    }
  });

  document.querySelectorAll(
    'button.lang[data-lang]'
  ).forEach(button => {
    const active =
      button.dataset.lang === language;

    button.classList.toggle('active', active);

    button.setAttribute(
      'aria-pressed',
      String(active)
    );
  });

  const storyGrid =
    document.getElementById('storyGrid');

  if (!storyGrid) return;

  storyGrid.innerHTML = stories.map(story => {
    const files = story.files[language];
    const details = story[language];

    const image =
      story.image ||
      (story.id === 'cat'
        ? 'rafael.jpg'
        : `${story.id}.jpg`);

    const audioPath =
      `stories/${encodeURIComponent(files.mp3)}`;

    const pdfPath =
      `stories/${encodeURIComponent(files.pdf)}`;

    return `
      <article class="story-card"
               id="story-${story.id}">

        <div class="story-art ${story.id}">
          <img
            src="images/${image}"
            alt="${details.title}"
            loading="lazy"
          >
        </div>

        <div class="story-body">

          <div class="story-badges">

            <span class="age">
              ${t.age} ${story.age}
              ${language === 'de'
                ? 'Jahren'
                : 'years'}
            </span>

            <button
              type="button"
              class="story-share"
              data-share="${story.id}"
              aria-label="${t.share}: ${details.title}"
            >
              <span aria-hidden="true">↗</span>
              ${t.share}
            </button>

          </div>

          <h3>${details.title}</h3>

          <p>${details.description}</p>

          <div
            class="story-counts"
            aria-label="${
              language === 'de'
                ? 'Statistik'
                : 'Story statistics'
            }"
          >
            ${metrics.map(
              (metric, index) => `
                <span>
                  <b id="count-${story.id}-${metric}">
                    —
                  </b>
                  ${counterLabels()[index]}
                </span>
              `
            ).join('')}
          </div>

          <div class="story-actions">

            <button
              type="button"
              class="action listen"
              data-play="${story.id}"
              aria-expanded="false"
            >
              ${t.listen}
            </button>

            <a
              class="action read"
              data-track="reads"
              data-story="${story.id}"
              href="${pdfPath}"
              target="_blank"
              rel="noopener"
            >
              ${t.read}
            </a>

            <a
              class="action download"
              data-track="mp3_downloads"
              data-story="${story.id}"
              href="${audioPath}"
              download
            >
              ${t.download} MP3
            </a>

            <a
              class="action download"
              data-track="pdf_downloads"
              data-story="${story.id}"
              href="${pdfPath}"
              download
            >
              ${t.download} PDF
            </a>

          </div>

          <audio
            class="player"
            id="player-${story.id}"
            controls
            preload="metadata"
            src="${audioPath}"
          ></audio>

          <p
            class="audio-help"
            id="audio-help-${story.id}"
            hidden
          >
            ${
              language === 'de'
                ? 'Die Audiodatei konnte nicht geladen werden. Bitte prüfe den Dateinamen und den stories-Ordner.'
                : 'Audio could not be loaded. Check the filename and stories folder.'
            }
          </p>

        </div>

      </article>
    `;
  }).join('');


  // ==============================================
  // AUDIO EVENTS
  // ==============================================

  document.querySelectorAll(
    'audio.player'
  ).forEach(audio => {
    const storyId =
      audio.id.replace('player-', '');

    const playedLanguage = language;

    let countedThisPlayback = false;

    audio.addEventListener('error', () => {
      const help = document.getElementById(
        `audio-help-${storyId}`
      );

      if (help) help.hidden = false;
    });

    audio.addEventListener('playing', () => {
      trackView(storyId, playedLanguage);

      if (!countedThisPlayback) {
        countedThisPlayback = true;

        recordEvent(
          storyId,
          playedLanguage,
          'listens'
        );
      }
    });

    audio.addEventListener('ended', () => {
      countedThisPlayback = false;
    });
  });


  // ==============================================
  // LISTEN BUTTONS
  // ==============================================

  document.querySelectorAll(
    '[data-play]'
  ).forEach(button => {
    button.addEventListener('click', () => {
      const storyId = button.dataset.play;

      const audio = document.getElementById(
        `player-${storyId}`
      );

      if (!audio) return;

      const open =
        !audio.classList.contains('visible');

      audio.classList.toggle('visible', open);

      button.setAttribute(
        'aria-expanded',
        String(open)
      );

      if (open) {
        document.querySelectorAll(
          'audio'
        ).forEach(other => {
          if (other !== audio) other.pause();
        });

        audio.play().catch(error => {
          console.warn('Audio playback failed:', error);

          const help = document.getElementById(
            `audio-help-${storyId}`
          );

          if (help) help.hidden = false;
        });

      } else {
        audio.pause();
      }
    });
  });


  // ==============================================
  // PDF AND DOWNLOAD EVENTS
  // ==============================================

  document.querySelectorAll(
    '[data-track]'
  ).forEach(link => {
    link.addEventListener('click', () => {
      const storyId = link.dataset.story;
      const metric = link.dataset.track;
      const selectedLanguage = language;

      trackView(storyId, selectedLanguage);

      recordEvent(
        storyId,
        selectedLanguage,
        metric
      );
    });
  });


  // ==============================================
  // SHARE BUTTONS
  // ==============================================

  document.querySelectorAll(
    '[data-share]'
  ).forEach(button => {
    button.addEventListener('click', () => {
      shareStory(
        button.dataset.share,
        button
      );
    });
  });

  paintCounters();

  // Count visible cards.
  setupStoryViews();

  openSharedStory();
}


// ================================================
// LANGUAGE BUTTONS
// ================================================

document.querySelectorAll(
  'button.lang[data-lang]'
).forEach(button => {
  button.addEventListener('click', () => {
    if (language === button.dataset.lang) return;

    language = button.dataset.lang;

    localStorage.setItem(
      'story-language',
      language
    );

    render();

    loadCounters();
  });
});


// ================================================
// FOOTER YEAR
// ================================================

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}


// ================================================
// CONTACT FORM
// ================================================

const contact =
  document.getElementById('contactLink');

if (contact) {
  contact.href = CONTACT_FORM_URL;
}


// ================================================
// START WEBSITE
// ================================================

render();
loadCounters();
