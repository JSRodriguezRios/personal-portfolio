export type Locale = 'en' | 'es';
export type ProjectId = 'hmm' | 'arima' | 'decno' | 'althlon';

export interface ProjectContent {
  id: ProjectId;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  role: string;
  status: string;
  stack?: string;
  teaser: string;
  overview: string;
  built: string;
  evidence: string;
  architecture: string;
  detailAction: string;
}

export interface PortfolioContent {
  meta: { title: string; description: string };
  nav: { about: string; projects: string; research: string; contact: string; language: string; menu: string };
  hero: { eyebrow: string; title: string; message: string; action: string; github: string; visual: [string, string, string] };
  about: { eyebrow: string; title: string; body: string; note: string };
  projectsSection: { eyebrow: string; title: string; intro: string; period: string; role: string; status: string; stack: string; overview: string; built: string; architecture: string; evidence: string; links: string; readPaper: string; earlyCode: string; liveDemo: string; repository: string };
  research: { eyebrow: string; title: string; intro: string; tracks: { label: string; title: string; body: string }[] };
  contact: { eyebrow: string; title: string; intro: string; email: string; phone: string; socials: string; github: string; instagram: string; x: string };
  footer: { line: string; backToTop: string };
  visuals: {
    hmm: { heading: string; nodes: [string, string, string, string, string]; regimes: [string, string, string]; caption: string };
    arima: { heading: string; nodes: [string, string, string, string]; python: string; r: string; caption: string };
    decno: { heading: string; phases: [string, string, string]; current: string; planned: string; caption: string };
    althlon: { heading: string; nodes: [string, string, string, string]; caption: string };
  };
  projects: [ProjectContent, ProjectContent, ProjectContent, ProjectContent];
}

export const projectLinks: Record<ProjectId, { paper?: string; earlyCode?: string; demo?: string; repository?: string }> = {
  hmm: {
    paper: 'https://doi.org/10.5281/zenodo.23865457',
    earlyCode: 'https://github.com/JSRodriguezRios/Markov-chains-crypto-SOL-BNB-BTC-ETH-.git'
  },
  arima: { paper: 'https://doi.org/10.5281/zenodo.23852087' },
  decno: {},
  althlon: {
    demo: 'https://althlon-synthesis.onrender.com',
    repository: 'https://github.com/JSRodriguezRios/Althlon-synthesis.git'
  }
};

export const contactLinks = {
  email: 'mailto:sebasrodriguezrios4@gmail.com',
  phone: 'tel:+573187354170',
  github: 'https://github.com/JSRodriguezRios',
  instagram: 'https://www.instagram.com/trebuchetseb?mdxt=MXVjcDV3YWI4cWZ3ag==',
  x: 'https://x.com/trebuchetseb'
};

export const content: Record<Locale, PortfolioContent> = {
  en: {
    meta: {
      title: 'Sebastián Rodríguez Ríos — Computer Science Portfolio',
      description: 'Independent research, software engineering, and applied AI projects by Sebastián Rodríguez Ríos.'
    },
    nav: { about: 'About', projects: 'Projects', research: 'Research & Engineering', contact: 'Contact', language: 'Language', menu: 'Sections' },
    hero: {
      eyebrow: 'Computer Science · Quantitative Research · Applied AI · Software Engineering',
      title: 'Sebastián Rodríguez Ríos',
      message: 'From time-series research and probabilistic modeling to working software and real-world organizational AI adoption.',
      action: 'Explore projects',
      github: 'GitHub profile',
      visual: ['Research', 'Engineering', 'Applied AI']
    },
    about: {
      eyebrow: '01 / About',
      title: 'A practice shaped by questions and implementation.',
      body: 'My work spans independent school research on time series and probabilistic models, an academic software prototype, and an ongoing organizational AI adoption program.',
      note: 'Across these projects, I define the approach, direct AI-assisted implementation, review the work, and document what the evidence does and does not support.'
    },
    projectsSection: {
      eyebrow: '02 / Selected work',
      title: 'Featured projects',
      intro: 'Four projects across research, software, and applied AI. Each one includes its method, my contribution, and its current scope.',
      period: 'Period', role: 'Role', status: 'Status', stack: 'Tools & methods', overview: 'Overview', built: 'How I built it', architecture: 'Architecture', evidence: 'Evidence and scope', links: 'Explore the evidence',
      readPaper: 'Read paper', earlyCode: 'View early code', liveDemo: 'Live demo', repository: 'GitHub repository'
    },
    research: {
      eyebrow: '03 / Research & Engineering',
      title: 'Methods moving into practice.',
      intro: 'From time-series research and probabilistic modeling to working software and real-world organizational AI adoption.',
      tracks: [
        { label: '01 / Investigate', title: 'Quantitative research', body: 'Independent school studies of ARIMA forecasts and Hidden Markov Models, with methods and limitations recorded in research papers.' },
        { label: '02 / Build', title: 'Software engineering', body: 'A deployed school prototype joining a custom frontend, an Express backend, and a PayPal checkout integration.' },
        { label: '03 / Apply', title: 'Organizational AI', body: 'An ongoing, phased program at DECNO focused on practical learning and documenting small work problems solved with AI.' }
      ]
    },
    contact: {
      eyebrow: '04 / Contact', title: 'Connect with me.',
      intro: 'For academic conversations, project questions, or a closer look at the work, reach me through these channels.',
      email: 'Email', phone: 'Phone', socials: 'Social', github: 'GitHub', instagram: 'Instagram', x: 'X'
    },
    footer: { line: 'Research, engineering, and applied AI.', backToTop: 'Back to top' },
    visuals: {
      hmm: { heading: 'Model workflow', nodes: ['Observations', 'Features', 'HMM', 'Regime probabilities', 'Signals & evaluation'], regimes: ['Bullish', 'Bearish', 'Consolidation'], caption: 'Conceptual workflow; no performance figures are shown.' },
      arima: { heading: 'Research method', nodes: ['Daily closes', 'ADF & differentiation', 'Parameter selection', 'Forecast comparison'], python: 'EACF in Python · AIC', r: 'SCAN in R kernel', caption: 'Python and R were used within the same Jupyter project.' },
      decno: { heading: 'Program phases', phases: ['Initial familiarity', 'Practical learning & case logs', 'Larger projects & evaluation'], current: 'Current phase', planned: 'Planned', caption: 'Public conceptual roadmap; no internal documents or outcomes are represented.' },
      althlon: { heading: 'Prototype architecture', nodes: ['Frontend', 'Express API', 'PayPal SDK', 'Order state'], caption: 'Conceptual architecture of the school prototype; no transaction data is shown.' }
    },
    projects: [
      {
        id: 'hmm', title: 'Hidden Markov Models', subtitle: 'Cryptocurrency market regimes', category: 'Independent school research', period: '2024–2026',
        role: 'Independent research and technical direction; AI-assisted implementation', status: 'Research completed; paper and early code repository available',
        stack: 'Python · hmmlearn · pandas · NumPy · scikit-learn · QuantConnect/LEAN · Docker',
        teaser: 'I conducted an independent school research project exploring Hidden Markov Models to identify bullish, bearish, and consolidation regimes in BTC, ETH, SOL, and BNB.',
        overview: 'I conducted an independent school research project exploring Hidden Markov Models to identify bullish, bearish, and consolidation regimes in BTC, ETH, SOL, and BNB. I designed a system combining log returns, trading volume, sentiment indicators, and liquidity approximations to estimate regime probabilities and map them to spot-trading decisions. I evaluated the strategy through both a local backtest and QuantConnect/LEAN, which supports more realistic execution assumptions. The project became my graduation research monograph and research paper, alongside a broader implementation than the early code version publicly available.',
        built: 'I defined the mathematical approach and organized implementation with Codex into planning and execution stages. I reviewed API integrations, debugged early data-ingestion problems, structured preprocessing and probabilistic modeling, and migrated the environment to Linux using Docker.',
        evidence: 'The final research design uses daily observations for trading signals; some liquidity collection was planned at hourly frequency. Where complete historical order-book data was unavailable, liquidity proxies were used. The linked GitHub repository contains an early version, not the final system.',
        architecture: 'Observed market data and engineered features feed the HMM. Its estimated regime probabilities inform signals, evaluated locally and with QuantConnect/LEAN.',
        detailAction: 'Explore HMM research'
      },
      {
        id: 'arima', title: 'ARIMA', subtitle: 'Forecasting cryptocurrency time series', category: 'Independent school research', period: '2025–2026',
        role: 'Independent research and implementation direction; AI-assisted coding', status: 'Research completed; paper available; final code kept private',
        stack: 'Python · Jupyter · pandas · NumPy · statsmodels · scikit-learn · R kernel',
        teaser: 'I investigated the limitations of ARIMA models when forecasting daily closing prices for SOL, BNB, and TON using 50 historical observations and 10-day versus 30-day horizons.',
        overview: 'I investigated the limitations of ARIMA models when forecasting daily closing prices for SOL, BNB, and TON using 50 historical observations and 10-day versus 30-day horizons. I organized and evaluated separate notebooks for each asset, testing stationarity with ADF, selecting parameters using EACF, SCAN, and AIC, and comparing forecasts against observed prices with error metrics. Performance differed across assets and horizons, highlighting the limitations of small datasets and linear forecasting assumptions in volatile markets. The project motivated my later work with more complex probabilistic models.',
        built: 'I managed an AI-assisted, phase-based workflow. I incorporated an external Python implementation of EACF. For SCAN, I installed the R kernel in Jupyter and executed the original R routine within the same project alongside the Python notebooks; I did not translate it into Python. Evaluation was local and controlled.',
        evidence: 'This was a forecasting experiment, not a deployed automated trading strategy. The complete working code remains private; the research paper is linked.',
        architecture: 'Daily closing prices were tested for stationarity. Parameter selection combined EACF in Python, SCAN in the R kernel, and AIC before forecast and error comparison.',
        detailAction: 'Explore ARIMA research'
      },
      {
        id: 'decno', title: 'DECNO AI', subtitle: 'Enterprise AI adoption program', category: 'Ongoing program', period: '2026–present',
        role: 'Program methodology and leadership, under management supervision', status: 'Ongoing; learning and practical adoption phase',
        stack: '12 organizational areas · 12 participating leaders',
        teaser: 'I currently lead the design and progressive implementation of an AI adoption program at DECNO.',
        overview: 'I currently lead the design and progressive implementation of an AI adoption program at DECNO. Its purpose is to help leaders across 12 business functions move from basic familiarity with AI tools to a systematic approach to solving day-to-day work problems. I designed a phased roadmap, a hands-on learning methodology, and a weekly case-logging process. At the current stage, participating leaders document small problems they have solved with AI and receive individual support to build independence. Later stages are intended to tackle more complex departmental projects and assess overall results.',
        built: 'I developed the roadmap and progression criteria, coordinated the participating leaders, and organized practice through an enterprise ChatGPT environment, weekly case logs, and private collaboration channels. Additional platforms may be explored for future needs but are not presented as completed deployments.',
        evidence: 'The initiative is ongoing. No quantified business impact or productivity savings are claimed yet. Only approved, non-sensitive examples may appear on the website.',
        architecture: 'The public roadmap distinguishes the current practical-learning stage from later, planned departmental projects and evaluation.',
        detailAction: 'View project overview'
      },
      {
        id: 'althlon', title: 'Althlon Synthesis', subtitle: 'Website and PayPal checkout integration', category: 'School software prototype', period: 'January–May 2025',
        role: 'Product concept, specification, and AI-assisted development direction', status: 'Deployed school prototype; navigation and checkout demonstration',
        stack: 'HTML · CSS · JavaScript · Node.js · Express · PayPal Checkout SDK · Render',
        teaser: 'For a school entrepreneurship assignment, I chose to build Althlon Synthesis, an AI-fitness coaching concept, rather than produce a slide deck or rely on a no-code site builder.',
        overview: 'For a school entrepreneurship assignment, I chose to build Althlon Synthesis, an AI-fitness coaching concept, rather than produce a slide deck or rely on a no-code site builder. I specified and deployed a custom website with navigation and subscription-plan selection, connected to a Node.js/Express backend. I integrated PayPal’s SDK to create and capture payment orders server-side and record transaction status. The result is a working technical prototype demonstrating web and payment integration, not an operating commercial fitness coaching service.',
        built: 'I used a specification-led, AI-assisted development workflow called bridgecoding. I defined the user experience, subscription flow, and integration requirements; directed iterative frontend, backend, and PayPal-service development; and deployed the prototype on Render.',
        evidence: 'The code supports PayPal test and live environments and exposes order-creation/capture endpoints. This does not establish that real commercial payments occurred. No credentials or sensitive configuration should be surfaced in the portfolio.',
        architecture: 'A custom frontend connects to a Node.js/Express backend. The server integrates the PayPal Checkout SDK to create and capture orders and record their status.',
        detailAction: 'Explore the prototype'
      }
    ]
  },
  es: {
    meta: {
      title: 'Sebastián Rodríguez Ríos — Portafolio de Ciencias de la Computación',
      description: 'Investigación independiente, ingeniería de software e inteligencia artificial aplicada por Sebastián Rodríguez Ríos.'
    },
    nav: { about: 'Sobre mí', projects: 'Proyectos', research: 'Investigación e ingeniería', contact: 'Contacto', language: 'Idioma', menu: 'Secciones' },
    hero: {
      eyebrow: 'Ciencias de la Computación · Investigación Cuantitativa · IA Aplicada · Ingeniería de Software',
      title: 'Sebastián Rodríguez Ríos',
      message: 'De la investigación en series temporales y modelos probabilísticos a la construcción de software funcional y la aplicación de IA en organizaciones.',
      action: 'Explorar proyectos',
      github: 'Perfil de GitHub',
      visual: ['Investigación', 'Ingeniería', 'IA aplicada']
    },
    about: {
      eyebrow: '01 / Sobre mí',
      title: 'Una práctica guiada por preguntas e implementación.',
      body: 'Mi trabajo abarca investigaciones escolares independientes sobre series temporales y modelos probabilísticos, un prototipo académico de software y un programa de adopción de IA en desarrollo dentro de una organización.',
      note: 'En estos proyectos defino el enfoque, dirijo el desarrollo asistido por IA, reviso el trabajo y documento tanto la evidencia como sus límites.'
    },
    projectsSection: {
      eyebrow: '02 / Trabajos seleccionados',
      title: 'Proyectos destacados',
      intro: 'Cuatro proyectos de investigación, software e IA aplicada. Cada uno presenta su método, mi contribución y su alcance actual.',
      period: 'Periodo', role: 'Rol', status: 'Estado', stack: 'Herramientas y métodos', overview: 'Resumen', built: 'Cómo lo construí', architecture: 'Arquitectura', evidence: 'Evidencia y alcance', links: 'Explorar la evidencia',
      readPaper: 'Leer paper', earlyCode: 'Ver código inicial', liveDemo: 'Ver demo', repository: 'Repositorio en GitHub'
    },
    research: {
      eyebrow: '03 / Investigación e ingeniería',
      title: 'Métodos llevados a la práctica.',
      intro: 'De la investigación en series temporales y modelos probabilísticos a la construcción de software funcional y la aplicación de IA en organizaciones.',
      tracks: [
        { label: '01 / Investigar', title: 'Investigación cuantitativa', body: 'Estudios escolares independientes de pronósticos ARIMA y Modelos Ocultos de Markov, con métodos y limitaciones documentados en papers.' },
        { label: '02 / Construir', title: 'Ingeniería de software', body: 'Un prototipo escolar desplegado que une un frontend propio, un backend Express y una integración de checkout con PayPal.' },
        { label: '03 / Aplicar', title: 'IA organizacional', body: 'Un programa por fases en DECNO, aún en ejecución, centrado en aprendizaje práctico y registro de problemas pequeños resueltos con IA.' }
      ]
    },
    contact: {
      eyebrow: '04 / Contacto', title: 'Conversemos.',
      intro: 'Para conversaciones académicas, preguntas sobre los proyectos o conocer mejor mi trabajo, puedes escribirme por estos medios.',
      email: 'Correo', phone: 'Teléfono', socials: 'Redes', github: 'GitHub', instagram: 'Instagram', x: 'X'
    },
    footer: { line: 'Investigación, ingeniería e IA aplicada.', backToTop: 'Volver arriba' },
    visuals: {
      hmm: { heading: 'Flujo del modelo', nodes: ['Observaciones', 'Variables', 'HMM', 'Probabilidades de régimen', 'Señales y evaluación'], regimes: ['Alcista', 'Bajista', 'Consolidación'], caption: 'Flujo conceptual; no se muestran cifras de rendimiento.' },
      arima: { heading: 'Método de investigación', nodes: ['Cierres diarios', 'ADF y diferenciación', 'Selección de parámetros', 'Comparación de pronósticos'], python: 'EACF en Python · AIC', r: 'SCAN en kernel R', caption: 'Se utilizaron Python y R dentro del mismo proyecto en Jupyter.' },
      decno: { heading: 'Fases del programa', phases: ['Conocimiento inicial', 'Aprendizaje práctico y bitácoras', 'Proyectos mayores y evaluación'], current: 'Fase actual', planned: 'Previsto', caption: 'Roadmap conceptual público; no representa documentos ni resultados internos.' },
      althlon: { heading: 'Arquitectura del prototipo', nodes: ['Frontend', 'API Express', 'SDK de PayPal', 'Estado de órdenes'], caption: 'Arquitectura conceptual del prototipo escolar; no se muestran datos de transacciones.' }
    },
    projects: [
      {
        id: 'hmm', title: 'Hidden Markov Models', subtitle: 'Detección de regímenes de mercado', category: 'Investigación escolar independiente', period: '2024–2026',
        role: 'Investigación y dirección técnica individual; desarrollo asistido por Codex', status: 'Investigación terminada; paper y primera versión del repositorio públicos',
        stack: 'Python · hmmlearn · pandas · NumPy · scikit-learn · QuantConnect/LEAN · Docker',
        teaser: 'Desarrollé una investigación escolar independiente sobre el uso de Modelos Ocultos de Markov para identificar regímenes alcistas, bajistas y de consolidación en BTC, ETH, SOL y BNB.',
        overview: 'Desarrollé una investigación escolar independiente sobre el uso de Modelos Ocultos de Markov para identificar regímenes alcistas, bajistas y de consolidación en BTC, ETH, SOL y BNB. Diseñé un sistema que combina retornos logarítmicos, volumen, indicadores de sentimiento y aproximaciones de liquidez para estimar probabilidades de régimen y convertirlas en decisiones para trading spot. Evalué la estrategia tanto con un backtest local como con QuantConnect/LEAN, que permite incorporar supuestos de ejecución más realistas. El proyecto fue mi monografía de graduación y dio lugar a un paper y una implementación más amplia que las primeras versiones públicas del código.',
        built: 'Definí la metodología matemática y organicé la implementación con Codex en fases de planificación y ejecución. Revisé las integraciones de APIs, corregí problemas iniciales de extracción de datos, estructuré el procesamiento y el modelado probabilístico y trasladé el entorno a Linux mediante Docker.',
        evidence: 'El modelo utiliza observaciones diarias para sus señales; algunas capturas de liquidez se plantearon por hora. Ante la falta de un historial completo de libros de órdenes, la implementación utilizó también proxies de liquidez. El repositorio enlazado es una versión inicial, no el sistema final.',
        architecture: 'Los datos de mercado observados y las variables preparadas alimentan el HMM. Sus probabilidades estimadas de régimen informan señales evaluadas localmente y con QuantConnect/LEAN.',
        detailAction: 'Explorar la investigación HMM'
      },
      {
        id: 'arima', title: 'ARIMA', subtitle: 'Predicción de series temporales de criptomonedas', category: 'Investigación escolar independiente', period: '2025–2026',
        role: 'Investigación y coordinación de la implementación individual; desarrollo asistido por IA', status: 'Investigación completada; paper disponible; código final privado',
        stack: 'Python · Jupyter · pandas · NumPy · statsmodels · scikit-learn · R kernel',
        teaser: 'Investigué los límites de los modelos ARIMA al pronosticar los precios de cierre diarios de SOL, BNB y TON con un conjunto de 50 observaciones y horizontes de 10 y 30 días.',
        overview: 'Investigué los límites de los modelos ARIMA al pronosticar los precios de cierre diarios de SOL, BNB y TON con un conjunto de 50 observaciones y horizontes de 10 y 30 días. Construí y evalué notebooks para las tres criptomonedas: comprobé estacionariedad con ADF, seleccioné parámetros mediante EACF, SCAN y AIC, y comparé predicciones con datos reales usando métricas de error. Los resultados variaron entre activos y horizontes, y dejaron clara la sensibilidad de los modelos lineales a muestras pequeñas y mercados volátiles. Fue una experiencia que reforzó mi interés en aproximaciones probabilísticas más complejas.',
        built: 'Organicé el trabajo en fases de desarrollo asistido por IA. Integré una implementación externa de EACF en Python; para SCAN instalé y utilicé el kernel de R en Jupyter, ejecutando el algoritmo directamente en R dentro del mismo proyecto. No lo traduje a Python. Los resultados se generaron y compararon localmente.',
        evidence: 'El estudio fue un experimento controlado de pronóstico y evaluación de errores, no una estrategia de trading desplegada. El código funcional completo no se publica; se enlaza el paper.',
        architecture: 'Los cierres diarios se comprobaron para estacionariedad. La selección de parámetros combinó EACF en Python, SCAN en el kernel R y AIC antes de comparar pronósticos y errores.',
        detailAction: 'Explorar la investigación ARIMA'
      },
      {
        id: 'decno', title: 'DECNO AI', subtitle: 'Programa de adopción y escalamiento de IA', category: 'Programa en ejecución', period: '2026–actualidad',
        role: 'Diseño metodológico y liderazgo del programa; con supervisión de Gerencia', status: 'En ejecución; fase de aprendizaje y práctica',
        stack: '12 áreas organizacionales · 12 líderes participantes',
        teaser: 'Actualmente lidero el diseño y la implementación progresiva de un programa de adopción de inteligencia artificial en DECNO.',
        overview: 'Actualmente lidero el diseño y la implementación progresiva de un programa de adopción de inteligencia artificial en DECNO. El objetivo es que responsables de 12 áreas empresariales pasen del conocimiento inicial de las herramientas a la resolución sistemática de problemas de trabajo. Diseñé una hoja de ruta por fases, una metodología de aprendizaje práctico y un sistema de registro semanal de casos. En la etapa actual, los líderes documentan problemas pequeños resueltos con IA y reciben acompañamiento individual para desarrollar autonomía. Las fases posteriores contemplan proyectos de mayor complejidad y una evaluación integral de los resultados.',
        built: 'Definí el roadmap y los criterios de avance; coordiné a los líderes por área; organicé el trabajo mediante un entorno empresarial de ChatGPT, una bitácora de casos y canales internos de colaboración. El programa contempla explorar otras plataformas para problemas futuros, pero estas aplicaciones no se presentan como soluciones terminadas.',
        evidence: 'Es una iniciativa organizacional en desarrollo. Todavía no se publican ahorros de tiempo ni resultados de impacto empresarial cuantificados. Compartir únicamente documentos y ejemplos aprobados para divulgación.',
        architecture: 'El roadmap público distingue la etapa actual de aprendizaje práctico de los proyectos por área y la evaluación previstos para más adelante.',
        detailAction: 'Ver proyecto'
      },
      {
        id: 'althlon', title: 'Althlon Synthesis', subtitle: 'Web y flujo de pago con PayPal', category: 'Prototipo escolar de software', period: 'enero–mayo de 2025',
        role: 'Concepto de producto, especificación y dirección del desarrollo asistido por IA', status: 'Prototipo escolar desplegado; demostración de navegación y checkout',
        stack: 'HTML · CSS · JavaScript · Node.js · Express · PayPal Checkout SDK · Render',
        teaser: 'Para una actividad escolar de emprendimiento decidí desarrollar Althlon Synthesis, un concepto de asesoramiento fitness con IA, en lugar de construir únicamente una presentación o utilizar un creador de sitios.',
        overview: 'Para una actividad escolar de emprendimiento decidí desarrollar Althlon Synthesis, un concepto de asesoramiento fitness con IA, en lugar de construir únicamente una presentación o utilizar un creador de sitios. Especifiqué y desplegué una web propia con navegación y selección de planes, conectada a un backend Node.js/Express. Integré el SDK de PayPal para crear y capturar órdenes de pago desde el servidor y registrar el estado de las transacciones. El sitio funciona como prototipo técnico y demostración de integración web; no representa un servicio de asesoramiento fitness comercial actualmente operativo.',
        built: 'Utilicé un flujo de desarrollo asistido por IA basado en especificaciones detalladas y ejecución por etapas (bridgecoding). Definí la experiencia de usuario, el flujo de suscripciones y los requisitos de integración; dirigí las iteraciones del frontend, el backend y el servicio de PayPal y desplegué el resultado en Render.',
        evidence: 'El código contempla los entornos de prueba y producción de PayPal, así como endpoints de creación/captura; esto no equivale a afirmar ventas reales. Las credenciales o configuraciones sensibles nunca deben mostrarse en esta web.',
        architecture: 'Un frontend propio se conecta a un backend Node.js/Express. El servidor integra PayPal Checkout SDK para crear y capturar órdenes y registrar su estado.',
        detailAction: 'Explorar el prototipo'
      }
    ]
  }
};
