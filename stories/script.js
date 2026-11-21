/* CONFIGURATION: Set the URL of your existing website's contact form here. */
const CONTACT_FORM_URL = '../';
// Set these two values after completing COUNTER_SETUP.txt.
const SUPABASE_URL = '';
const SUPABASE_ANON_KEY = '';
const COUNTERS_ENABLED = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY); // Example: '/contact.html' or 'https://yourdomain.com/contact'
const stories = [
 {id:'wine',emoji:'🍷',age:'8',files:{de:{mp3:'Der_geheimnisvolle_Weinverkaeufer.mp3',pdf:'Der_geheimnisvolle_Weinverkaeufer.pdf'},en:{mp3:'The_Mysterious_Wine_Seller.mp3',pdf:'The_Mysterious_Wine_Seller.pdf'}},de:{title:'Der geheimnisvolle Weinverkäufer',description:'Ein ungewöhnlicher Händler zeigt, wie sehr Worte und Erwartungen unsere Gedanken beeinflussen können.'},en:{title:'The Mysterious Wine Seller',description:'A curious merchant shows how words and expectations can shape what we think and feel.'}},
 {id:'sun',emoji:'☀️',age:'5',files:{de:{mp3:'Die_Sonne_aus_Kimberley.mp3',pdf:'Die_Sonne_aus_Kimberley.pdf'},en:{mp3:'The_Little_Boy_and_the_Sunshine_from_Kimberley.mp3',pdf:'The_Little_Boy_and_the_Sunshine_from_Kimberley.pdf'}},de:{title:'Der kleine Junge und die Sonne aus Kimberley',description:'Eine warme Geschichte über Dankbarkeit, Freundlichkeit und ein Geschenk, das man nur fühlen kann.'},en:{title:'The Little Boy and the Sunshine from Kimberley',description:'A heartwarming tale of gratitude, kindness, and a gift that can only be felt.'}},
 {id:'cat',emoji:'🐈',age:'6',files:{de:{mp3:'Rafaels_Abenteuer,_Eine_vierjährige_Reise_nach_Hause.mp3',pdf:'Rafaels_Abenteuer,_Eine_vierjährige_Reise_nach_Hause.pdf'},en:{mp3:'Rafaels Adventures, A Four-Year Journey Home.mp3',pdf:'Rafaels Adventures, A Four-Year Journey Home.pdf'}},de:{title:'Rafaels Abenteuer – Eine vierjährige Reise nach Hause',description:'Ein mutiger roter Kater entdeckt die große Welt und findet nach vier Jahren den Weg zurück zu seiner Familie.'},en:{title:'Rafael’s Adventures – A Four-Year Journey Home',description:'A brave ginger cat explores the wide world and finds his way back to his family after four years.'}}
];
const translations={
 de:{eyebrow:'Kleine Geschichten, große Gedanken',heroTitle:'Willkommen in unserer kleinen Geschichtenwelt',heroText:'Dies ist ein kleines Hobby von uns. Aus Erlebnissen, besonderen Momenten und Ideen entstehen liebevoll erzählte Geschichten – besonders für Kinder.',explore:'Geschichten entdecken ↓',collectionLabel:'Unsere Sammlung',collectionTitle:'Geschichten zum Träumen',collectionHint:'Anhören, lesen und kostenlos herunterladen',listen:'▶ Anhören',read:'📖 PDF öffnen',download:'↓ Herunterladen',age:'Empfohlen ab',whyTitle:'Mit Herz erzählt',whyText:'Hinter jeder Geschichte steckt ein kleiner Gedanke über Freundlichkeit, Mut, Dankbarkeit oder Zusammenhalt.',agesTitle:'Für kleine und große Zuhörer',agesText:'Unsere Geschichten sind ungefähr für Kinder von 5 bis 12 Jahren gedacht – zum Vorlesen, Selberlesen und Zuhören.',freeTitle:'Kostenlos zum Teilen',freeText:'Du darfst die Geschichten kostenlos lesen, herunterladen, anhören und an andere weitergeben. Bitte nenne dabei unsere Sammlung.',contactLabel:'Erzähl uns deine Idee',contactTitle:'Welche Geschichte sollen wir als Nächstes erzählen?',contactText:'Du hast einen Wunsch, ein besonderes Erlebnis oder eine Idee? Wir freuen uns über eine Nachricht über das Kontaktformular unserer Hauptwebsite.',contactButton:'Zum Kontaktformular ↗',footer:'Ein kleines Hobby, mit Freude geteilt.'},
 en:{eyebrow:'Little stories, big thoughts',heroTitle:'Welcome to our little world of stories',heroText:'This is a small hobby of ours. We turn experiences, special moments, and ideas into lovingly told stories – especially for children.',explore:'Explore the stories ↓',collectionLabel:'Our collection',collectionTitle:'Stories to dream about',collectionHint:'Listen, read and download for free',listen:'▶ Listen',read:'📖 Open PDF',download:'↓ Download',age:'Suggested from age',whyTitle:'Stories told with heart',whyText:'Every story holds a little lesson about kindness, courage, gratitude, or togetherness.',agesTitle:'For young readers and listeners',agesText:'Our stories are generally for children aged 5 to 12 – to read aloud, read independently, or listen to.',freeTitle:'Free to enjoy and share',freeText:'You are welcome to read, download, listen to and share these stories for free. Please credit our collection when sharing.',contactLabel:'Tell us your idea',contactTitle:'What story should we tell next?',contactText:'Have a wish, a special experience, or a story idea? We would love to hear from you through the contact form on our main website.',contactButton:'Go to contact form ↗',footer:'A small hobby, shared with joy.'}
};
let language = localStorage.getItem('story-language') === 'en' ? 'en' : 'de';
const metrics = ['views','listens','reads','downloads'];
const counterCache = {};
const counterKey = (storyId, lang) => `${storyId}_${lang}`;
function counterText(value) { return Number.isFinite(value) ? value.toLocaleString(language === 'de' ? 'de-DE' : 'en-GB') : '—'; }
function counterLabels() { return language === 'de' ? ['Aufrufe','Angehört','Gelesen','Downloads'] : ['Views','Listens','Reads','Downloads']; }
function paintCounters() {
  for (const story of stories) {
    const counts = counterCache[counterKey(story.id, language)] || {};
    metrics.forEach(metric => { const el = document.getElementById(`count-${story.id}-${metric}`); if (el) el.textContent = counterText(counts[metric]); });
  }
}
async function loadCounters() {
  if (!COUNTERS_ENABLED) return;
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/story_counts?select=story_id,language,views,listens,reads,downloads`, {headers:{apikey:SUPABASE_ANON_KEY,Authorization:`Bearer ${SUPABASE_ANON_KEY}`}});
    if (!response.ok) throw new Error('Counter request failed');
    for (const row of await response.json()) counterCache[counterKey(row.story_id,row.language)] = row;
    paintCounters();
  } catch (error) { console.warn('Counters unavailable:', error); }
}
async function recordEvent(storyId, lang, metric) {
  if (!COUNTERS_ENABLED || !metrics.includes(metric)) return;
  const key = counterKey(storyId, lang);
  const counts = counterCache[key] || {views:0,listens:0,reads:0,downloads:0};
  counterCache[key] = counts;
  counts[metric] = (Number(counts[metric]) || 0) + 1;
  paintCounters();
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/record_story_event`, {method:'POST',headers:{apikey:SUPABASE_ANON_KEY,Authorization:`Bearer ${SUPABASE_ANON_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({p_story_id:storyId,p_language:lang,p_metric:metric}),keepalive:true});
    if (!response.ok) throw new Error('Event could not be recorded');
  } catch (error) {console.warn('Counter update unavailable:', error); counts[metric]--;paintCounters();}
}
function trackView(storyId, lang) {
  // Count a visit to this story once per browser tab/session, rather than on every language re-render.
  const key = `story-viewed-${storyId}-${lang}`;
  if (sessionStorage.getItem(key)) return;
  sessionStorage.setItem(key,'1');
  recordEvent(storyId,lang,'views');
}

function render(){const t=translations[language];document.documentElement.lang=language;document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t[el.dataset.i18n]);document.querySelectorAll('.lang').forEach(btn=>{const active=btn.dataset.lang===language;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});document.getElementById('storyGrid').innerHTML=stories.map(s=>{const f=s.files[language],d=s[language];return `<article class="story-card"><div class="story-art ${s.id}" aria-hidden="true"><img src="images/${s.id==='cat'?'rafael':s.id}.jpg" alt="${d.title}" loading="lazy"></div><div class="story-body"><span class="age">${t.age} ${s.age} ${language==='de'?'Jahren':'years'}</span><h3>${d.title}</h3><p>${d.description}</p><div class="story-counts" aria-label="${language==='de'?'Statistik':'Story statistics'}">${metrics.map((m,i)=>`<span><b id="count-${s.id}-${m}">—</b> ${counterLabels()[i]}</span>`).join('')}</div><div class="story-actions"><button type="button" class="action listen" data-play="${s.id}" aria-expanded="false">${t.listen}</button><a class="action read" data-track="reads" data-story="${s.id}" href="stories/${encodeURIComponent(f.pdf)}" target="_blank" rel="noopener">${t.read}</a><a class="action download" data-track="downloads" data-story="${s.id}" href="stories/${encodeURIComponent(f.mp3)}" download>${t.download} MP3</a><a class="action download" data-track="downloads" data-story="${s.id}" href="stories/${encodeURIComponent(f.pdf)}" download>${t.download} PDF</a></div><audio class="player" id="player-${s.id}" controls preload="metadata" src="stories/${encodeURIComponent(f.mp3)}"></audio><p class="audio-help" id="audio-help-${s.id}" hidden>${language==='de'?'Die Audiodatei konnte nicht geladen werden. Bitte prüfe, ob die MP3 im inneren stories-Ordner liegt und der Dateiname genau stimmt.':'Audio could not be loaded. Check that the MP3 is in the inner stories folder and that its filename matches exactly.'}</p></div></article>`}).join('');document.querySelectorAll('audio').forEach(a=>a.addEventListener('error',()=>{const id=a.id.replace('player-','');const help=document.getElementById('audio-help-'+id);if(help)help.hidden=false;}));document.querySelectorAll('[data-play]').forEach(btn=>btn.addEventListener('click',()=>{trackView(btn.dataset.play,language);const audio=document.getElementById('player-'+btn.dataset.play);const open=!audio.classList.contains('visible');audio.classList.toggle('visible',open);btn.setAttribute('aria-expanded',String(open));if(open){document.querySelectorAll('audio').forEach(other=>{if(other!==audio)other.pause()});audio.play().then(()=>recordEvent(btn.dataset.play,language,'listens')).catch(()=>{audio.setAttribute('data-error','true');document.getElementById('audio-help-'+btn.dataset.play).hidden=false;});}else{audio.pause()}}));document.querySelectorAll('[data-track]').forEach(link=>link.addEventListener('click',()=>{trackView(link.dataset.story,language);recordEvent(link.dataset.story,language,link.dataset.track);}));paintCounters();}
document.querySelectorAll('.lang').forEach(btn=>btn.addEventListener('click',()=>{language=btn.dataset.lang;localStorage.setItem('story-language',language);render();}));document.getElementById('year').textContent=new Date().getFullYear();const contact=document.getElementById('contactLink');if(CONTACT_FORM_URL){contact.href=CONTACT_FORM_URL;}else{contact.classList.add('unconfigured');contact.addEventListener('click',e=>{e.preventDefault();alert(language==='de'?'Bitte zuerst die Kontaktformular-Adresse in script.js eintragen.':'Please configure your contact form URL in script.js first.');});}render();loadCounters();
