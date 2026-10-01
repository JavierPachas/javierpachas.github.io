// Language switcher: English is the source text in the HTML; elements with
// data-i18n="key" get their innerHTML swapped from the dictionaries below.
(() => {
  const SUPPORTED = ['en', 'es', 'pt'];
  const STORAGE_KEY = 'lang';

  const translations = {
    es: {
      // index.html
      'title.index': 'Javier Pachas – Ingeniero de IA / ML',
      'nav.about': 'Sobre mí',
      'nav.education': 'Educación',
      'nav.skills': 'Habilidades',
      'nav.consulting': 'Consultoría',
      'nav.contact': 'Contacto',
      'hero.tagline': 'AI PM &nbsp;·&nbsp; Líder de Analítica &nbsp;·&nbsp; MSc en Física',
      'about.title': 'Sobre mí',
      'about.p1': 'Lead Data Scientist y consultor de ML con más de siete años de experiencia entregando soluciones basadas en datos para consumo masivo, salud, gobierno, telecomunicaciones, streaming y investigación atmosférica.',
      'about.p2': 'Dominio de Python, SQL, visualización de datos, computación en la nube, optimización matemática e IA aplicada. Hablo inglés, portugués y español (nativo).',
      'about.p3': 'Fundador y AI PM de <a href="https://edbotlab.com" target="_blank" rel="noopener noreferrer" class="project-link">una plataforma EdTech impulsada por IA</a> que personaliza la preparación para exámenes de admisión. Conectemos si quieres colaborar, conversar sobre aplicaciones de IA o compartir historias de innovación.',
      'about.previous': 'Empresas y roles anteriores',
      'role.pg': 'Senior Manager de Analytics &amp; Insights',
      'role.cgr': 'Consultor de ML y BI',
      'role.crp': 'Líder de Data Science',
      'role.clinica': 'Líder de Analítica de Datos',
      'role.telefonica': 'Especialista de Pricing',
      'role.movix': 'Analista de Negocios',
      'education.title': 'Educación',
      'edu.mit': 'Remoto · MicroMaster en Ciencia de Datos y Estadística · 2023',
      'edu.puc': 'Brasil · MSc en Física de Altas Energías · 2015',
      'edu.uni': 'Perú · Bachiller en Física · 2008',
      'skills.title': 'Habilidades principales',
      'skill.dsa': 'Estructuras de datos y algoritmos',
      'skill.llm': 'Modelos de lenguaje (LLMs)',
      'contact.title': 'Conectemos',
      'footer.index': '© 2025 Javier Pachas. Hecho con HTML/CSS puro, alojado en GitHub Pages.',

      // consulting.html
      'title.consulting': 'Consultoría en IA – Javier Pachas',
      'c.hero.title': 'Estrategia e Implementación de IA',
      'c.hero.tagline': 'Ayudo a empresas a construir soluciones de IA prácticas que generan retorno',
      'c.nav.services': 'Servicios',
      'c.nav.experience': 'Experiencia',
      'c.nav.back': 'Volver al inicio',
      'c.about.p1': 'Soy AI Product Manager con más de 7 años entregando soluciones basadas en datos en consumo masivo, salud, gobierno y telecomunicaciones. Ex Líder de Analítica en Procter &amp; Gamble, he construido productos de IA desde el concepto hasta la escala, incluida una plataforma EdTech que creció a más de 1,000 usuarios.',
      'c.about.p2': 'Ayudo a las empresas a implementar IA: desde definir la estrategia y el roadmap hasta elegir las herramientas adecuadas y supervisar la ejecución. Hablo inglés, portugués y español.',
      'c.services.title': 'Servicios',
      'c.s1.title': 'Evaluación de Oportunidades de IA',
      'c.s1.duration': '<strong>2 semanas</strong>',
      'c.s1.desc': 'Auditoría de tus procesos y productos actuales para identificar de 3 a 5 casos de uso de IA de alto impacto, con estimaciones de ROI. Incluye un roadmap priorizado para la implementación.',
      'c.s2.title': 'Asesoría en Implementación de IA',
      'c.s2.duration': '<strong>Mensual · Continuo</strong>',
      'c.s2.desc': 'Guía estratégica para el desarrollo de productos de IA: revisión de arquitectura técnica, selección de proveedores y herramientas, y supervisión de la implementación. Para equipos que construyen funcionalidades o productos de IA.',
      'c.s3.title': 'Entrega de Proyecto Piloto de IA',
      'c.s3.duration': '<strong>6-8 semanas</strong>',
      'c.s3.desc': 'Entrega de principio a fin de una solución o funcionalidad de IA, desde el levantamiento de requerimientos hasta el despliegue. Ideal para empresas que buscan una implementación llave en mano.',
      'c.pricing': '<strong>El precio depende del alcance.</strong> Escríbeme para una cotización.',
      'c.cases.title': 'Casos de Estudio',
      'c.cases.body': '<strong>Casos de estudio disponibles a solicitud (compatible con NDA).</strong>',
      'c.contact.title': 'Trabajemos Juntos',
      'c.contact.cta': 'Agenda una evaluación de IA gratuita de 30 minutos para conversar sobre tu proyecto.',
      'c.footer': '© 2025 Javier Pachas. Consultoría en Estrategia e Implementación de IA.'
    },

    pt: {
      // index.html
      'title.index': 'Javier Pachas – Engenheiro de IA / ML',
      'nav.about': 'Sobre',
      'nav.education': 'Formação',
      'nav.skills': 'Competências',
      'nav.consulting': 'Consultoria',
      'nav.contact': 'Contato',
      'hero.tagline': 'AI PM &nbsp;·&nbsp; Líder de Analytics &nbsp;·&nbsp; MSc em Física',
      'about.title': 'Sobre',
      'about.p1': 'Lead Data Scientist e consultor de ML com mais de sete anos de experiência entregando soluções orientadas a dados para bens de consumo, saúde, governo, telecomunicações, streaming e pesquisa atmosférica.',
      'about.p2': 'Domínio de Python, SQL, visualização de dados, computação em nuvem, otimização matemática e IA aplicada. Fluente em inglês, português e espanhol (nativo).',
      'about.p3': 'Fundador e AI PM de <a href="https://edbotlab.com" target="_blank" rel="noopener noreferrer" class="project-link">uma plataforma EdTech movida por IA</a> que personaliza a preparação para processos seletivos. Vamos conversar se você quiser colaborar, discutir aplicações de IA ou compartilhar histórias de inovação.',
      'about.previous': 'Empresas e cargos anteriores',
      'role.pg': 'Senior Manager de Analytics &amp; Insights',
      'role.cgr': 'Consultor de ML e BI',
      'role.crp': 'Líder de Data Science',
      'role.clinica': 'Líder de Análise de Dados',
      'role.telefonica': 'Especialista em Pricing',
      'role.movix': 'Analista de Negócios',
      'education.title': 'Formação',
      'edu.mit': 'Remoto · MicroMaster em Ciência de Dados e Estatística · 2023',
      'edu.puc': 'Brasil · Mestrado em Física de Altas Energias · 2015',
      'edu.uni': 'Peru · Bacharelado em Física · 2008',
      'skills.title': 'Principais competências',
      'skill.dsa': 'Estruturas de dados e algoritmos',
      'skill.llm': 'Modelos de linguagem (LLMs)',
      'contact.title': 'Vamos conversar',
      'footer.index': '© 2025 Javier Pachas. Feito com HTML/CSS puro, hospedado no GitHub Pages.',

      // consulting.html
      'title.consulting': 'Consultoria em IA – Javier Pachas',
      'c.hero.title': 'Estratégia e Implementação de IA',
      'c.hero.tagline': 'Ajudo empresas a construir soluções de IA práticas que geram retorno',
      'c.nav.services': 'Serviços',
      'c.nav.experience': 'Experiência',
      'c.nav.back': 'Voltar ao início',
      'c.about.p1': 'Sou AI Product Manager com mais de 7 anos entregando soluções orientadas a dados em bens de consumo, saúde, governo e telecomunicações. Ex-Líder de Analytics na Procter &amp; Gamble, construí produtos de IA do conceito à escala, incluindo uma plataforma EdTech que cresceu para mais de 1.000 usuários.',
      'c.about.p2': 'Ajudo empresas a implementar IA: da definição da estratégia e do roadmap à escolha das ferramentas certas e ao acompanhamento da execução. Fluente em inglês, português e espanhol.',
      'c.services.title': 'Serviços',
      'c.s1.title': 'Avaliação de Oportunidades de IA',
      'c.s1.duration': '<strong>2 semanas</strong>',
      'c.s1.desc': 'Análise dos seus processos e produtos atuais para identificar de 3 a 5 casos de uso de IA de alto impacto, com estimativas de ROI. Inclui um roadmap priorizado para a implementação.',
      'c.s2.title': 'Assessoria em Implementação de IA',
      'c.s2.duration': '<strong>Mensal · Contínuo</strong>',
      'c.s2.desc': 'Orientação estratégica para o desenvolvimento de produtos de IA: revisão de arquitetura técnica, seleção de fornecedores e ferramentas, e acompanhamento da implementação. Para times que constroem funcionalidades ou produtos de IA.',
      'c.s3.title': 'Entrega de Projeto Piloto de IA',
      'c.s3.duration': '<strong>6-8 semanas</strong>',
      'c.s3.desc': 'Entrega ponta a ponta de uma solução ou funcionalidade de IA, do levantamento de requisitos ao deploy. Ideal para empresas que querem uma implementação feita para elas.',
      'c.pricing': '<strong>O preço depende do escopo.</strong> Entre em contato para um orçamento.',
      'c.cases.title': 'Estudos de Caso',
      'c.cases.body': '<strong>Estudos de caso disponíveis sob solicitação (compatível com NDA).</strong>',
      'c.contact.title': 'Vamos Trabalhar Juntos',
      'c.contact.cta': 'Agende uma avaliação de IA gratuita de 30 minutos para conversar sobre o seu projeto.',
      'c.footer': '© 2025 Javier Pachas. Consultoria em Estratégia e Implementação de IA.'
    }
  };

  const elements = document.querySelectorAll('[data-i18n]');
  const buttons = document.querySelectorAll('.lang-switch button[data-lang]');
  const titleKey = document.documentElement.dataset.i18nTitle;

  // Remember the original English so switching back needs no dictionary.
  const english = new Map();
  elements.forEach(el => english.set(el, el.innerHTML));
  const englishTitle = document.title;

  function readSaved() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function save(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // Storage unavailable (private mode etc.); the choice just won't persist.
    }
  }

  function initialLang() {
    const saved = readSaved();
    if (SUPPORTED.includes(saved)) {
      return saved;
    }
    const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : 'en';
  }

  function apply(lang) {
    const dict = translations[lang] || {};
    elements.forEach(el => {
      const key = el.dataset.i18n;
      el.innerHTML = dict[key] || english.get(el);
    });
    document.title = (titleKey && dict[titleKey]) || englishTitle;
    document.documentElement.lang = lang;
    buttons.forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      save(lang);
      apply(lang);
    });
  });

  apply(initialLang());
})();
