const SIGMAL = {
  allowedProfiles: ['admin', 'heteronimo', 'wagner planas', 'wagner_planas'],
  emergencyMode: false,
  elenco: [
    {
      codigo: 'AVH-001',
      nome: 'Rovonilson Reigns Bautista',
      tipo: 'Ator audiovisual completo',
      funcoes: ['Narrador', 'Apresentador', 'Artista musical', 'Presença institucional audiovisual'],
      idadeBase: 54,
      voz: 'VOICE_WAGNER_TRANSFORMADA_RAP',
      territorio: 'musical urbano institucional',
      status: 'ativo'
    }
  ],
  vozes: [
    { id: 'CROONER_LYRIC_HYBRID_MASC', nome: 'Crooner lírico híbrido masculino', textura: 'quente, narrativa, romântica', referencias: 'Elvis / Jon Secada / Ivo Pessoa', uso: 'vinhetas, baladas, narrador musical' },
    { id: 'MPB_ROCK_LYRIC_NARRATIVE_MASC', nome: 'MPB rock narrativo masculino', textura: 'limpa com leve aspereza', referencias: 'Renato Russo / Ivo Pessoa', uso: 'trilha brasileira, poesia musicada' },
    { id: 'EPIC_VIKING_BARITONE_MASC', nome: 'Barítono épico viking', textura: 'profunda, heroica, coralizada', referencias: 'Peyton Parrish', uso: 'épico, medieval, fantasia' },
    { id: 'CHORAL_EPIC_LATIN', nome: 'Coral épico latino', textura: 'ritual, cinematográfica, mista', referencias: 'ERA / Gregorian', uso: 'Canticum Angelorum, aberturas, trilhas' },
    { id: 'SERTANEJO_RAIZ_HARMONIC_DUO', nome: 'Dupla sertaneja raiz harmônica', textura: 'segunda voz caipira tradicional', referencias: 'Pena Branca & Xavantinho / Liu & Léu', uso: 'Raízes da Roça' },
    { id: 'MPB_DRAMATIC_INTERPRETER_SUPREME_FEM', nome: 'Intérprete dramática MPB feminina', textura: 'expressiva, intensa, sofisticada', referencias: 'Elis Regina', uso: 'trilha literária dramática' },
    { id: 'SCANDI_POP_POWER_FEM', nome: 'Pop rock feminino escandinavo', textura: 'limpa, forte, radiofônica', referencias: 'Marie Fredriksson / Roxette', uso: 'duetos, trilhas TV, festival' },
    { id: 'COUNTRY_POP_POWER_FEM', nome: 'Country pop feminino mundial', textura: 'brilhante, positiva, global', referencias: 'Shania Twain / Dolly Parton', uso: 'country/sertanejo global' },
    { id: 'NARRATOR_INSTITUTIONAL', nome: 'Narrador institucional Celeiro', textura: 'médio-grave, confiável', referencias: 'locução cultural', uso: 'Web Rádio, WebTV, aberturas' }
  ],
  instrumentos: [
    { id: 'BRAZIL_CAIPIRA_CORE_STRING', nome: 'Viola caipira', territorio: 'Brasil interior', uso: 'Raízes da Roça, moda de viola, documentário rural' },
    { id: 'ANDES_PANPIPE_PRIMARY_ENGINE', nome: 'Zampoña', territorio: 'Andes', uso: 'trilha andina, espiritualidade latino-americana' },
    { id: 'ARMENIA_SPIRITUAL_WOODWIND_ENGINE', nome: 'Duduk', territorio: 'Armênia / Oriente antigo', uso: 'trilha espiritual, histórica, bíblica' },
    { id: 'SCOTLAND_EPIC_PIPE_ENGINE', nome: 'Gaita escocesa', territorio: 'Escócia / celta épico', uso: 'batalhas, clãs, fantasia medieval' },
    { id: 'ANDEAN_CHARANGO_LEAD_GROUP', nome: 'Charango', territorio: 'Andes', uso: 'Los Kjarkas, trilha sul-americana' },
    { id: 'ACCORDION_ROOTS_ENGINE', nome: 'Acordeon raiz', territorio: 'Nordeste / sertanejo / gaúcho', uso: 'Luiz Gonzaga, forró, sertanejo raiz' },
    { id: 'ARENA_LEAD_GUITAR_ENGINE', nome: 'Guitarra arena rock', territorio: 'rock mundial', uso: 'Slash, Scorpions, Bon Jovi, Survivor' },
    { id: 'PIANO_POP_ENGINE', nome: 'Piano pop performático', territorio: 'pop mundial', uso: 'Elton John, Freddie Mercury' }
  ],
  grupos: [
    { id: 'CANTICUM_ANGELORUM', nome: 'Canticum Angelorum', tipo: 'avatar coral épico', membros: 'vozes corais persistentes', status: 'pacote persistente' },
    { id: 'INDIOS', nome: 'Índios', tipo: 'banda-avatar', membros: 'registro individual por integrante', status: 'em formação' },
    { id: 'RAIZES_DA_ROCA_SOUND', nome: 'Raízes da Roça — território sonoro', tipo: 'pacote literário-musical', membros: 'dupla raiz + narrador interiorano', status: 'ativo' }
  ],
  territorios: [
    { id: 'BRASIL_INTERIOR_NARRATIVO', nome: 'Brasil interior narrativo', instrumentos: 'viola caipira, acordeon, zabumba', vozes: 'sertanejo raiz, narrador caipira clássico' },
    { id: 'ANDES_CONTINENTAL', nome: 'Andes continental', instrumentos: 'zampoña, quena, charango, bombo andino', vozes: 'coral andino / instrumental contemplativo' },
    { id: 'CORAL_EPICO_LATINO', nome: 'Coral épico latino', instrumentos: 'coral, órgão, cordas, zampoña opcional', vozes: 'CHORAL_EPIC_LATIN' },
    { id: 'ROCK_ARENA_MUNDIAL', nome: 'Rock arena mundial', instrumentos: 'guitarra lead, bateria arena, baixo driver', vozes: 'arena rock / tenor heroico' }
  ],
  projetos: [
    { id: 'APIP_CANTICUM_ANGELORUM', nome: 'Canticum Angelorum', descricao: 'Pacote persistente de artista coral multilíngue', status: 'congelável' },
    { id: 'APIP_ROVONILSON', nome: 'Rovonilson Reigns Bautista', descricao: 'Imagem + voz transformada + rap + apresentação', status: 'ativo' },
    { id: 'APIP_RAIZES_DA_ROCA', nome: 'Raízes da Roça', descricao: 'Universo sonoro do heterônimo Daniel Fernandes', status: 'ativo' }
  ]
};

function getProfileFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return (params.get('perfil') || params.get('profile') || '').toLowerCase().trim();
}

function authorize(profile) {
  return SIGMAL.allowedProfiles.includes(profile);
}

function openApp() {
  document.getElementById('emergencyGate')?.setAttribute('hidden', 'hidden');
  const shell = document.getElementById('appShell');
  if (shell) shell.hidden = false;
  renderAll();
}

function card(title, lines = []) {
  return `<article class="ficha"><strong>${title}</strong>${lines.map(line => `<p>${line}</p>`).join('')}</article>`;
}

function renderAll() {
  const elenco = document.querySelector('[data-elenco]');
  if (elenco) elenco.innerHTML = SIGMAL.elenco.map(p => card(`${p.codigo} — ${p.nome}`, [p.tipo, p.funcoes.join(' • '), `Idade-base: ${p.idadeBase}`, `Voz: ${p.voz}`, `Território: ${p.territorio}`, `Status: ${p.status}`])).join('');

  const vozes = document.querySelector('[data-vozes]');
  if (vozes) vozes.innerHTML = SIGMAL.vozes.map(v => card(v.id, [v.nome, `Textura: ${v.textura}`, `Referências estéticas: ${v.referencias}`, `Uso: ${v.uso}`])).join('');

  const instrumentos = document.querySelector('[data-instrumentos]');
  if (instrumentos) instrumentos.innerHTML = SIGMAL.instrumentos.map(i => card(i.id, [i.nome, `Território: ${i.territorio}`, `Uso: ${i.uso}`])).join('');

  const grupos = document.querySelector('[data-grupos]');
  if (grupos) grupos.innerHTML = SIGMAL.grupos.map(g => card(g.id, [g.nome, `Tipo: ${g.tipo}`, `Membros: ${g.membros}`, `Status: ${g.status}`])).join('');

  const territorios = document.querySelector('[data-territorios]');
  if (territorios) territorios.innerHTML = SIGMAL.territorios.map(t => card(t.id, [t.nome, `Instrumentos: ${t.instrumentos}`, `Vozes: ${t.vozes}`])).join('');

  const projetos = document.querySelector('[data-projetos]');
  if (projetos) projetos.innerHTML = SIGMAL.projetos.map(p => card(p.id, [p.nome, p.descricao, `Status: ${p.status}`])).join('');

  fillSelect('matchVoice', SIGMAL.vozes, 'id', 'nome');
  fillSelect('matchInstrument', SIGMAL.instrumentos, 'id', 'nome');
  fillSelect('matchTerritory', SIGMAL.territorios, 'id', 'nome');
}

function fillSelect(id, items, valueKey, labelKey) {
  const el = document.getElementById(id);
  if (!el || el.dataset.ready) return;
  el.innerHTML = items.map(item => `<option value="${item[valueKey]}">${item[labelKey]}</option>`).join('');
  el.dataset.ready = '1';
}

function setView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === viewId));
  document.querySelectorAll('.nav').forEach(n => n.classList.toggle('active', n.dataset.view === viewId));
  const title = document.getElementById('viewTitle');
  const active = document.querySelector(`.nav[data-view="${viewId}"]`);
  if (title && active) title.textContent = active.textContent;
}

function runMatch() {
  const voice = document.getElementById('matchVoice')?.value || '';
  const instrument = document.getElementById('matchInstrument')?.value || '';
  const territory = document.getElementById('matchTerritory')?.value || '';
  let score = 84;
  const text = `${voice} ${instrument} ${territory}`.toLowerCase();
  if (text.includes('sertanejo') || text.includes('caipira') || text.includes('brasil_interior')) score = 96;
  if (text.includes('choral') || text.includes('canticum') || text.includes('coral')) score = 94;
  if (text.includes('andes') || text.includes('zampo')) score = 95;
  if (text.includes('rock') || text.includes('guitarra')) score = 92;
  const status = score >= 90 ? 'APROVADO' : score >= 80 ? 'AJUSTÁVEL' : 'REPROVADO';
  const result = document.getElementById('matchResult');
  if (result) result.innerHTML = `<strong>${status}</strong><span>Compatibilidade estimada: ${score}%</span><small>Regra SIGMAL: mínimo 90% para produção.</small>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const profile = getProfileFromUrl();
  if (authorize(profile)) openApp();

  document.getElementById('btnEmergencyEnter')?.addEventListener('click', () => {
    SIGMAL.emergencyMode = true;
    openApp();
  });

  document.querySelectorAll('.nav').forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.view)));
  document.getElementById('btnRunMatch')?.addEventListener('click', runMatch);
});
