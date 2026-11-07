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

export interface DecnoContent {
  companyHeading: string;
  company: string;
  companyLink: string;
  areasHeading: string;
  areas: string[];
  workflowHeading: string;
  phases: [
    { title: string; body: string; steps: [string, string, string] },
    { title: string; body: string },
    { title: string; body: string }
  ];
  exampleHeading: string;
  example: string;
  certificatesHeading: string;
  certificatesIntro: string;
  certificates: [
    { title: string; detail: string; alt: string; src: string; width: number; height: number },
    { title: string; detail: string; alt: string; src: string; width: number; height: number }
  ];
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
    decno: { heading: string; current: string; planned: string; caption: string };
    althlon: { heading: string; nodes: [string, string, string, string]; caption: string };
  };
  decno: DecnoContent;
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
      decno: { heading: 'Program phases', current: 'In progress', planned: 'Planned', caption: 'The shared app and area projects are proposals, not completed deployments.' },
      althlon: { heading: 'Prototype architecture', nodes: ['Frontend', 'Express API', 'PayPal SDK', 'Order state'], caption: 'Conceptual architecture of the school prototype; no transaction data is shown.' }
    },
    decno: {
      companyHeading: 'The organization',
      company: 'Laboratorios DECNO S.A.S. is a Colombian veterinary pharmaceutical manufacturer with 28 years of experience. Its work spans manufacturing, laboratory analysis, and product development, so the AI program must account for very different operational and quality needs.',
      companyLink: 'About DECNO',
      areasHeading: 'The 12 areas I work with',
      areas: ['Accounting', 'Finance', 'Operations', 'Production', 'Human Resources', 'IT', 'Engineering & equipment maintenance', 'Quality Assurance', 'Procurement & supplies', 'Technical & chemistry', 'Executive management', 'Quality Control'],
      workflowHeading: 'The updated three-stage plan',
      phases: [
        {
          title: 'Guided learning',
          body: 'The current stage builds each executive’s ability to use AI on real work. We set goals at the start of the month, then review progress and errors together at month-end.',
          steps: [
            'Each week, every executive identifies three small problems or processes they want to improve.',
            'I meet each executive one-on-one and guide them through a case in real time, without giving them the answer.',
            'They log independent attempts, including the method, time, outcome, and lessons. At month-end, we review the records together and give feedback.'
          ]
        },
        {
          title: 'Shared documentation app',
          body: 'Executives identified manual transcription and processing of large volumes of documents as a common bottleneck. The proposed AI-supported app would keep each area’s authorized information separate, organize its records, draft needed documents for human review, and surface useful metrics for improving processes. This is a shared project proposal, not a deployed system.'
        },
        {
          title: 'Executive-led area projects',
          body: 'Each executive will propose one substantial project for their own area, aimed at a major problem or slow process. I will work alongside them to shape and evaluate these initiatives after the earlier stages. A final review should help each leader continue with greater independence and light supervision. Benefits have not yet been measured.'
        }
      ],
      exampleHeading: 'Example under consideration · production',
      example: 'A separate production-area proposal would bring factory records together and analyze operational metrics to expose lost time, inefficient shifts, avoidable costs, and opportunities to improve daily output. An advanced model, such as a neural network, would only be considered if suitable data and validation support it.',
      certificatesHeading: 'Training alongside the work',
      certificatesIntro: 'These certificates document training that helps me work responsibly across a pharmaceutical manufacturer’s different functions; they are evidence of coursework, not proof that the planned AI applications have been delivered.',
      certificates: [
        { title: 'GMP auditor training', detail: 'BPM auditor course · 16 hours · July–August 2026', alt: 'Certificate for Sebastián Rodríguez Ríos confirming completion of 16 hours of Good Manufacturing Practices auditor training', src: '/decno/gmp-auditor-certificate.png', width: 1027, height: 768 },
        { title: 'Leadership workshops', detail: 'Teamwork, communication, emotional management, and resilience · 16 hours · February 2026', alt: 'Certificate for Sebastián Rodríguez Ríos confirming attendance at DECNO leadership workshops', src: '/decno/leadership-certificate.jpeg', width: 1080, height: 767 }
      ]
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
        role: 'AI adoption program lead; one-on-one guidance to executives in 12 areas, under management supervision', status: 'Ongoing; guided learning phase',
        stack: '12 organizational areas · one-on-one coaching · case logs · planned AI applications',
        teaser: 'At a veterinary pharmaceutical manufacturer with 28 years of experience, I lead AI adoption alongside executives in 12 areas, from production and quality to finance and IT.',
        overview: 'I lead DECNO’s AI adoption program and work directly with an executive from each of its 12 areas. Because their work ranges from factory production and quality assurance to finance and IT, I guide each leader on real problems in their own context while building a shared path toward larger AI initiatives.',
        built: 'I designed the phased roadmap and now run individual, hands-on learning sessions. Each executive brings three small problems or processes to improve that week; I guide their thinking in real time without supplying the answer. They record independent attempts and lessons in a learning log, which we review together at the end of each month.',
        evidence: 'The learning phase is underway. The shared documentation application and the individual area projects are proposals. No completed deployment, quantified savings, or productivity gains are claimed. Internal records and case logs are not published.',
        architecture: 'The program has three stages: guided learning, a proposed shared application for document-heavy work across areas, and planned high-impact projects proposed by each executive for their own area.',
        detailAction: 'Explore the program and certificates'
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
      decno: { heading: 'Fases del programa', current: 'En curso', planned: 'Previsto', caption: 'La aplicación compartida y los proyectos por área son propuestas, no sistemas desplegados.' },
      althlon: { heading: 'Arquitectura del prototipo', nodes: ['Frontend', 'API Express', 'SDK de PayPal', 'Estado de órdenes'], caption: 'Arquitectura conceptual del prototipo escolar; no se muestran datos de transacciones.' }
    },
    decno: {
      companyHeading: 'La organización',
      company: 'Laboratorios DECNO S.A.S. fabrica productos farmacéuticos veterinarios en Colombia y cuenta con 28 años de experiencia. Su actividad incluye fabricación, análisis de laboratorio y desarrollo de productos, por lo que el programa de IA debe responder a necesidades operativas y de calidad muy distintas.',
      companyLink: 'Conoce a DECNO',
      areasHeading: 'Las 12 áreas con las que trabajo',
      areas: ['Contabilidad', 'Finanzas', 'Operaciones', 'Producción', 'Recursos humanos', 'Tecnología', 'Ingeniería y mantenimiento de equipos', 'Aseguramiento de calidad', 'Compras y abastecimiento', 'Área técnica y química', 'Gerencia general', 'Control de calidad'],
      workflowHeading: 'El plan actualizado en tres etapas',
      phases: [
        {
          title: 'Aprendizaje guiado',
          body: 'La etapa actual desarrolla la capacidad de cada directivo para aplicar IA a su trabajo. Definimos objetivos al iniciar el mes y revisamos juntos avances y errores al terminarlo.',
          steps: [
            'Cada semana, cada directivo identifica tres problemas pequeños o procesos que quiere mejorar.',
            'Me reúno con cada uno y lo guío en tiempo real para resolver un caso, sin darle la respuesta.',
            'Registran sus intentos autónomos, incluidos método, tiempo, resultado y aprendizajes. Al final del mes revisamos juntos la bitácora y damos retroalimentación.'
          ]
        },
        {
          title: 'Aplicación documental compartida',
          body: 'Los directivos identificaron como problema común la transcripción y el procesamiento manual de grandes volúmenes de documentos. La aplicación propuesta, apoyada por IA, mantendría separada la información autorizada de cada área, organizaría sus registros, prepararía los documentos necesarios para revisión humana y mostraría métricas útiles para mejorar procesos. Es una propuesta conjunta, no un sistema desplegado.'
        },
        {
          title: 'Proyectos liderados por cada área',
          body: 'Cada directivo propondrá un proyecto de gran alcance para su área, orientado a un problema importante o un proceso lento. Trabajaré con ellos para definir y evaluar estas iniciativas después de las etapas anteriores. Una revisión final debe permitirles continuar con más autonomía y supervisión ligera. Todavía no hay resultados medidos.'
        }
      ],
      exampleHeading: 'Ejemplo en consideración · producción',
      example: 'Una propuesta distinta para el área de producción reuniría los registros de la fábrica y analizaría métricas operativas para detectar pérdidas de tiempo, turnos ineficientes, costos evitables y oportunidades de aumentar la producción diaria. Un modelo avanzado, como una red neuronal, solo se consideraría si los datos y la validación justifican su uso.',
      certificatesHeading: 'Formación para acompañar el trabajo',
      certificatesIntro: 'Estos certificados documentan formación que me ayuda a trabajar con responsabilidad en las distintas funciones de una empresa farmacéutica; acreditan cursos, no la entrega de las aplicaciones de IA previstas.',
      certificates: [
        { title: 'Formación como auditor BPM', detail: 'Curso de auditoría en Buenas Prácticas de Manufactura · 16 horas · julio–agosto de 2026', alt: 'Certificado de Sebastián Rodríguez Ríos por completar 16 horas de formación como auditor de Buenas Prácticas de Manufactura', src: '/decno/gmp-auditor-certificate.png', width: 1027, height: 768 },
        { title: 'Talleres de liderazgo', detail: 'Trabajo en equipo, comunicación, gestión emocional y resiliencia · 16 horas · febrero de 2026', alt: 'Certificado de Sebastián Rodríguez Ríos por asistir a talleres de liderazgo de DECNO', src: '/decno/leadership-certificate.jpeg', width: 1080, height: 767 }
      ]
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
        role: 'Liderazgo del programa de adopción de IA; guía individual a directivos de 12 áreas, con supervisión de Gerencia', status: 'En ejecución; etapa de aprendizaje guiado',
        stack: '12 áreas organizacionales · acompañamiento individual · bitácoras · aplicaciones de IA previstas',
        teaser: 'En una farmacéutica veterinaria con 28 años de trayectoria, lidero la adopción de IA junto a directivos de 12 áreas, desde producción y calidad hasta finanzas y tecnología.',
        overview: 'Lidero el programa de adopción de IA de DECNO y trabajo directamente con un directivo de cada una de sus 12 áreas. Como su labor abarca desde la producción en fábrica y el aseguramiento de calidad hasta las finanzas y la tecnología, oriento a cada líder sobre problemas reales de su propio contexto y construimos un camino común hacia iniciativas de IA de mayor escala.',
        built: 'Diseñé la hoja de ruta por etapas y ahora dirijo sesiones individuales de aprendizaje práctico. Cada directivo lleva tres problemas pequeños o procesos que quiere mejorar esa semana; lo guío en tiempo real sin darle la respuesta. Registran los intentos autónomos y aprendizajes en una bitácora, que revisamos juntos al final de cada mes.',
        evidence: 'La etapa de aprendizaje está en marcha. La aplicación documental compartida y los proyectos individuales por área son propuestas. No se afirman despliegues terminados, ahorros cuantificados ni aumentos de productividad. No se publican registros internos ni bitácoras.',
        architecture: 'El programa tiene tres etapas: aprendizaje guiado, una aplicación compartida propuesta para el trabajo documental de las áreas y proyectos de alto impacto que cada directivo propondrá para su propia área.',
        detailAction: 'Explorar el programa y los certificados'
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
