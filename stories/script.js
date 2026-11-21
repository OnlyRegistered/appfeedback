/*
  Stories for Little Dreamers
  Bilingual stories, Supabase counters,
  audio playback, downloads and sharing.
*/

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
        mp3: 'Rafaels_Abenteuer,_Eine vierjährige Reise nach Hause.mp3',
        pdf: 'Rafaels_Abenteuer,_Eine vierjährige Reise nach Hause.pdf'
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
  }
];

// Preserve the original German filenames.
stories[2].files.de.mp3 =
  'Rafaels_Abenteuer,_Eine vierjährige Reise nach Hause.mp3'
    .replaceAll(' ', '_');

stories[2].files.de.pdf =
  'Rafaels_Abenteuer,_Eine vierjährige Reise nach Hause.pdf'
    .replaceAll(' ', '_');


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
        element.textContent =
          counterText(counts[metric]);
      }
    });
  }
}


// ================================================
// LOAD COUNTERS FROM SUPABASE
// ================================================

async function loadCounters() {
  if (!COUNTERS_ENABLED) return;

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/story_counts?select=story_id,language,views,listens,reads,downloads,mp3_downloads,pdf_downloads`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(
        `Counter request failed (${response.status})`
      );
    }

    const rows = await response.json();

    for (const row of rows) {
      counterCache[
        counterKey(row.story_id, row.language)
      ] = row;
    }

    paintCounters();

  } catch (error) {
    console.warn('Counters unavailable:', error);
  }
}


// ================================================
// RECORD EVENTS
// ================================================

async function recordEvent(storyId, lang, metric) {
  if (
    !COUNTERS_ENABLED ||
    !metrics.includes(metric)
  ) {
    return;
  }

  const key = counterKey(storyId, lang);

  const counts = counterCache[key] || {
    views: 0,
    listens: 0,
    reads: 0,
    downloads: 0,
    mp3_downloads: 0,
    pdf_downloads: 0
  };

  counterCache[key] = counts;

  counts[metric] =
    (Number(counts[metric]) || 0) + 1;

  paintCounters();

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/rpc/record_story_event`,
      {
        method: 'POST',
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          p_story_id: storyId,
          p_language: lang,
          p_metric: metric
        }),
        keepalive: true
      }
    );

    if (!response.ok) {
      throw new Error(
        `Event could not be recorded (${response.status})`
      );
    }

  } catch (error) {
    console.warn(
      'Counter update unavailable:',
      error
    );

    counts[metric] = Math.max(
      0,
      (Number(counts[metric]) || 0) - 1
    );

    paintCounters();
  }
}


// ================================================
// STORY VIEWS
// ================================================

function trackView(storyId, lang) {
  const key = `story-viewed-${storyId}-${lang}`;

  if (sessionStorage.getItem(key)) {
    return;
  }

  sessionStorage.setItem(key, '1');

  recordEvent(storyId, lang, 'views');
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
    if (error.name === 'AbortError') {
      return;
    }

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
    /^#story-(wine|sun|cat)-(de|en)$/
      .exec(window.location.hash);

  if (!match) return;

  const [, id, lang] = match;

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

  // Translate website text.

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

  // Update language buttons.

  document.querySelectorAll(
    'button.lang[data-lang]'
  ).forEach(button => {
    const active =
      button.dataset.lang === language;

    button.classList.toggle(
      'active',
      active
    );

    button.setAttribute(
      'aria-pressed',
      String(active)
    );
  });

  // Build story cards.

  const storyGrid =
    document.getElementById('storyGrid');

  if (!storyGrid) return;

  storyGrid.innerHTML = stories.map(story => {
    const files = story.files[language];
    const details = story[language];

    const image =
      story.id === 'cat' ? 'rafael' : story.id;

    const audioPath =
      `stories/${encodeURIComponent(files.mp3)}`;

    const pdfPath =
      `stories/${encodeURIComponent(files.pdf)}`;

    return `
      <article class="story-card"
               id="story-${story.id}">

        <div class="story-art ${story.id}">

          <img
            src="images/${image}.jpg"
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
                ? 'Die Audiodatei konnte nicht geladen werden. Bitte prüfe, ob die MP3 im inneren stories-Ordner liegt und der Dateiname genau stimmt.'
                : 'Audio could not be loaded. Check that the MP3 is in the inner stories folder and that its filename matches exactly.'
            }
          </p>

        </div>

      </article>
    `;
  }).join('');


  // ==============================================
  // AUDIO PLAYBACK AND LISTEN COUNTER
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

      if (help) {
        help.hidden = false;
      }
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

      audio.classList.toggle(
        'visible',
        open
      );

      button.setAttribute(
        'aria-expanded',
        String(open)
      );

      if (open) {
        document.querySelectorAll(
          'audio'
        ).forEach(other => {
          if (other !== audio) {
            other.pause();
          }
        });

        audio.play().catch(error => {
          console.warn(
            'Audio playback failed:',
            error
          );

          const help = document.getElementById(
            `audio-help-${storyId}`
          );

          if (help) {
            help.hidden = false;
          }
        });

      } else {
        audio.pause();
      }
    });
  });


  // ==============================================
  // PDF AND DOWNLOAD COUNTERS
  // ==============================================

  document.querySelectorAll(
    '[data-track]'
  ).forEach(link => {
    link.addEventListener('click', () => {
      trackView(
        link.dataset.story,
        language
      );

      recordEvent(
        link.dataset.story,
        language,
        link.dataset.track
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
  openSharedStory();
}


// ================================================
// LANGUAGE BUTTONS
// ================================================

document.querySelectorAll(
  'button.lang[data-lang]'
).forEach(button => {
  button.addEventListener('click', () => {
    language = button.dataset.lang;

    localStorage.setItem(
      'story-language',
      language
    );

    render();
  });
});


// ================================================
// FOOTER YEAR
// ================================================

const year = document.getElementById('year');

if (year) {
  year.textContent =
    new Date().getFullYear();
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
