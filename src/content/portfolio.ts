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
        { label: '03 / Apply', title: 'Organizational AI', body: 'I guide senior executives across DECNO’s 12 areas through practical AI adoption and the planning of high-impact projects for their teams.' }
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
      decno: { heading: 'Program phases', phases: ['Initial familiarity', 'Practical learning & case logs', 'Area-wide projects & evaluation'], current: 'Current phase', planned: 'Planned', caption: 'Public conceptual roadmap; no internal documents or outcomes are represented.' },
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
        role: 'Program lead and one-on-one AI adviser to senior executives across 12 areas, under management supervision', status: 'Ongoing; learning and practical adoption phase',
        stack: '12 organizational areas · senior executives · phased AI roadmap',
        teaser: 'I lead DECNO’s company-wide AI adoption program, working directly with senior executives across 12 areas to guide practical use and plan high-impact projects.',
        overview: 'I lead the design and progressive implementation of DECNO’s AI adoption program and work one-on-one with the senior executive of each of its 12 areas. My role is to guide them in using AI to solve meaningful problems and improve substantial processes, while building their independence with the tools. The current phase combines hands-on learning, individual guidance, and weekly logs of practical cases. Each executive is also expected to bring forward one larger project for their area, aimed at a significant bottleneck or opportunity with the potential to improve productivity across that team. These projects belong to a later development and evaluation phase. One proposed example for production is an AI-powered application that would organize factory records and analyze operational metrics to find lost time, inefficient shifts, avoidable costs, and opportunities to increase daily output. A neural network could be considered if the data and evaluation justify it.',
        built: 'I designed the phased roadmap and progression criteria, coordinate the 12 participating executives, and provide direct guidance as they work through practical cases and shape their area-wide project proposals. I organized practice through an enterprise ChatGPT environment, weekly case logs, and private collaboration channels. Additional platforms may be explored for future needs but are not presented as completed deployments.',
        evidence: 'The program is ongoing. Area-wide projects, including the production-records application, are proposals rather than completed systems. No quantified business impact or productivity savings are claimed yet. Only approved, non-sensitive examples may appear on the website.',
        architecture: 'The program moves from initial familiarity to guided practice and weekly case logs. Each executive then develops a proposal for a high-impact project in their area, followed by planned implementation and evaluation.',
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
        { label: '03 / Aplicar', title: 'IA organizacional', body: 'Acompaño a los directivos de las 12 áreas de DECNO en la adopción práctica de IA y la planificación de proyectos de alto impacto para sus equipos.' }
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
      decno: { heading: 'Fases del programa', phases: ['Conocimiento inicial', 'Aprendizaje práctico y bitácoras', 'Proyectos por área y evaluación'], current: 'Fase actual', planned: 'Previsto', caption: 'Roadmap conceptual público; no representa documentos ni resultados internos.' },
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
        role: 'Liderazgo del programa y asesoría individual en IA a los directivos de 12 áreas, con supervisión de Gerencia', status: 'En ejecución; fase de aprendizaje y práctica',
        stack: '12 áreas organizacionales · directivos · hoja de ruta por fases',
        teaser: 'Lidero el programa de adopción de IA de DECNO y trabajo directamente con los directivos de sus 12 áreas para orientar su uso práctico y planear proyectos de alto impacto.',
        overview: 'Lidero el diseño y la implementación progresiva del programa de adopción de IA de DECNO y trabajo de manera individual con el directivo de cada una de sus 12 áreas. Mi misión es orientarlos para usar IA en la solución de problemas importantes y la mejora de procesos de gran alcance, mientras desarrollan autonomía con las herramientas. La etapa actual combina aprendizaje práctico, acompañamiento individual y bitácoras semanales de casos. Cada directivo también deberá proponer un proyecto de mayor escala para su área, dirigido a un problema o cuello de botella significativo y con potencial para mejorar la productividad de todo su equipo. Estos proyectos corresponden a una fase posterior de desarrollo y evaluación. Un ejemplo propuesto para producción es una aplicación con IA que organizaría los registros de la fábrica y analizaría métricas operativas para detectar pérdidas de tiempo, turnos ineficientes, costos evitables y oportunidades para aumentar la producción diaria. Podría considerarse una red neuronal si los datos y la evaluación justifican su uso.',
        built: 'Diseñé la hoja de ruta por fases y los criterios de avance, coordino a los 12 directivos participantes y los oriento personalmente mientras resuelven casos prácticos y definen propuestas de proyectos de alcance amplio para sus áreas. Organicé el trabajo mediante un entorno empresarial de ChatGPT, bitácoras semanales y canales internos de colaboración. El programa contempla explorar otras plataformas, pero no se presentan como soluciones ya desplegadas.',
        evidence: 'El programa sigue en ejecución. Los proyectos por área, incluida la aplicación para analizar registros de producción, son propuestas y no sistemas terminados. Todavía no se afirman ahorros de tiempo ni resultados de impacto empresarial cuantificados. Solo se muestran ejemplos no sensibles y aprobados para divulgación.',
        architecture: 'El programa avanza desde el conocimiento inicial hasta la práctica guiada y las bitácoras semanales. Después, cada directivo desarrolla una propuesta de alto impacto para su área, seguida de implementación y evaluación previstas.',
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
