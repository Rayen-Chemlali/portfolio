// ═══════════════════════════════════════════════════════
//  PORTFOLIO DATA — Edit only this object to update content
// ═══════════════════════════════════════════════════════
const PORTFOLIO_DATA = {
  meta: {
    name: "Rayen Chemlali",
    title: { en: "Software Engineer & AI Developer", fr: "Ingénieur Logiciel & Développeur IA" },
    description: {
      en: "Rayen Chemlali is a software engineering student at INSAT Tunisia, specializing in full-stack development, machine learning, and competitive programming. Available for internships and collaborations.",
      fr: "Rayen Chemlali est étudiant ingénieur à l'INSAT Tunisie, spécialisé en développement full-stack, machine learning et programmation compétitive. Disponible pour des stages et collaborations."
    },
    email: "rayen.chemlali@insat.ucar.tn",
    phone: "+216 56042251",
    location: "Tunis, Tunisia",
    linkedin: "https://www.linkedin.com/in/chemlali-rayen-69aa65243/",
    github: "https://github.com/Rayen-Chemlali",
    cvUrl: { en: "Rayen-Chemlali-CV.pdf", fr: "CV-Rayen-Chemlali.pdf" },
    roles: {
      en: ["Software Engineer","ML & AI Enthusiast","Competitive Programmer","Full-Stack Developer"],
      fr: ["Ingénieur Logiciel","Passionné ML & IA","Programmeur Compétitif","Développeur Full-Stack"]
    }
  },
  about: {
    en: "I'm a 4th-year Software Engineering student at INSAT, Tunisia. I started with mathematics, baccalaureate with Highest Honors (18.16/20), and never really stopped thinking like one. At INSAT I ranked 32nd/410 in the common first year, then 5th/90 and 6th/96 in Software Engineering.\n\nI've always been driven by a simple instinct: not just understanding things, but making them work. That led me to competitive programming, which I genuinely loved. It shaped the way I reason about problems more than any course did. I participated in the TCPC twice, came close to qualifying for the ACPC both times, and earned a bronze medal. I also took part in AI hackathons where delivering under pressure mattered as much as technical skill.\n\nOn the professional side, I've built things across three fronts: internships (cloud storage optimization with AI, HR platform with NestJS/React), freelance projects (an AI business copilot, a visual C++ code generator), and part-time work developing VoIP microservices in Go. I care about software architecture and distributed systems, and I'm increasingly drawn to ML and AI, having gone deep into the field through dedicated training and multiple end-to-end projects.\n\nI'm open to new opportunities, internships, collaborations, or anything that puts me in a challenging environment.",
    fr: "Étudiant en 4ème année Génie Logiciel à l'INSAT, Tunisie. J'ai commencé par les mathématiques, baccalauréat mention Très Bien (18,16/20), et je n'ai jamais vraiment arrêté de penser comme un mathématicien. À l'INSAT, je me suis classé 32ème/410 en tronc commun, puis 5ème/90 et 6ème/96 en Génie Logiciel.\n\nCe qui me caractérise, c'est l'envie de faire fonctionner les choses, pas juste de les comprendre. La programmation compétitive, que j'ai vraiment aimée, m'a appris à raisonner plus que n'importe quel cours. J'ai participé deux fois au TCPC, deux fois à un problème près de l'ACPC, avec une médaille de bronze. J'ai aussi participé à des hackathons IA où livrer sous pression comptait autant que les compétences techniques.\n\nCôté professionnel, j'ai construit des choses sur trois fronts : stages (optimisation stockage cloud avec IA, plateforme RH NestJS/React), projets freelance (copilote business IA, générateur de code C++ visuel), et temps partiel en développement de microservices VoIP en Go. Je m'intéresse à l'architecture logicielle et aux systèmes distribués, et de plus en plus à l'IA et au ML, un domaine dans lequel je me suis investi en profondeur à travers des formations et plusieurs projets complets.\n\nJe suis ouvert à de nouvelles opportunités, stages, collaborations, ou tout environnement stimulant."
  },
  skills: [
    {
      category: { en: "Languages", fr: "Langages" },
      tag: "lang",
      items: ["Python","Java","C++","JavaScript","Go","PHP"]
    },
    {
      category: { en: "Frontend & Backend", fr: "Frontend & Backend" },
      tag: "web",
      items: ["Angular","React","Next.js","NestJS","Symfony","ASP.NET"]
    },
    {
      category: { en: "AI & Machine Learning", fr: "IA & Machine Learning" },
      tag: "ai",
      items: ["TensorFlow","Scikit-learn","NumPy","Pandas","NLP","Computer Vision","RAG","Supervised & Unsupervised Learning"]
    },
    {
      category: { en: "DevOps & Infrastructure", fr: "DevOps & Infrastructure" },
      tag: "devops",
      items: ["Docker","Kubernetes","CI/CD","Linux","Git"]
    },
    {
      category: { en: "Architecture & Design", fr: "Architecture & Design" },
      tag: "arch",
      items: ["Design Patterns","UML","Relational Databases","Non-relational Databases","Distributed Systems","Microservices"]
    }
  ],
  experience: [
    {
      role: { en: "Part-Time Software Engineer", fr: "Ingénieur Logiciel (Temps Partiel)" },
      company: "Plug & Tel",
      period: "Nov 2025 – Present",
      type: { en: "Part-Time", fr: "Temps Partiel" },
      description: {
        en: "Working part-time as a software engineer, contributing to production software projects and applying full-stack skills in a professional setting while completing my engineering degree.",
        fr: "Travail à temps partiel en tant qu'ingénieur logiciel, contribution à des projets de développement en production tout en terminant mon diplôme d'ingénieur."
      }
    },
    {
      role: { en: "ML Intern", fr: "Stagiaire ML" },
      company: "Elevvo Pathways",
      period: "Feb 2026 – Mar 2026",
      type: { en: "Internship", fr: "Stage" },
      linkedProjectId: "ml-suite",
      description: {
        en: "Completed 5 end-to-end machine learning projects spanning clustering, classification, time series forecasting, computer vision, and audio classification. Gained hands-on experience with the full ML pipeline from data preprocessing to model evaluation and deployment.",
        fr: "Réalisation de 5 projets ML complets couvrant le clustering, la classification, la prévision de séries temporelles, la vision par ordinateur et la classification audio. Maîtrise du pipeline ML complet du prétraitement des données jusqu'au déploiement."
      }
    },
    {
      role: { en: "Summer Intern", fr: "Stagiaire d'Été" },
      company: "Talan Tunisie Consulting",
      period: "Jun 2025 – Aug 2025",
      type: { en: "Internship", fr: "Stage" },
      linkedProjectId: "container-registry",
      description: {
        en: "Designed and developed Phase 1 of a Smart Container Registry platform to optimize Docker storage costs at scale: AI-powered conversational chatbot, unified Kubernetes/S3 dashboard, and configurable automated deletion rules engine.",
        fr: "Conception et développement de la phase 1 d'un Smart Container Registry : chatbot IA conversationnel, tableau de bord unifié Kubernetes/S3 et moteur de règles de suppression automatisé pour optimiser les coûts de stockage Docker."
      }
    },
    {
      role: { en: "Summer Intern", fr: "Stagiaire d'Été" },
      company: "Talan Tunisie Consulting",
      period: "Jul 2024 – Aug 2024",
      type: { en: "Internship", fr: "Stage" },
      description: {
        en: "Built an HR Management Application with NestJS backend and React frontend, focusing on user experience optimization, role-based access control, and application security hardening.",
        fr: "Développement d'une application de gestion RH avec backend NestJS et frontend React, optimisation UX, contrôle d'accès par rôles et renforcement de la sécurité."
      }
    },
    {
      role: { en: "Freelance Software Developer", fr: "Développeur Logiciel Freelance" },
      company: "Strategy AI Assistant",
      period: "Aug 2025 – Present",
      type: { en: "Freelance", fr: "Freelance" },
      linkedProjectId: "strategy-ai",
      description: {
        en: "Co-developed an AI-powered business strategy platform featuring a conversational chatbot, financial projection modeling, market analysis with interactive graph visualizations, and PDF/pitch deck export.",
        fr: "Co-développement d'une plateforme de stratégie d'affaires IA avec chatbot conversationnel, modélisation de projections financières, analyses de marché avec graphiques interactifs et export PDF/pitch deck."
      }
    },
    {
      role: { en: "Freelance Software Developer", fr: "Développeur Logiciel Freelance" },
      company: "Shannon",
      period: "Nov 2025 – Jan 2026",
      type: { en: "Freelance", fr: "Freelance" },
      linkedProjectId: "shannon",
      description: {
        en: "Co-developed Shannon, a free open-source alternative to Simulink. An interactive canvas lets users place and connect functional blocks to model systems, then automatically generates executable C++ code from the graph.",
        fr: "Co-développement de Shannon, alternative open-source gratuite à Simulink. Canvas interactif pour modéliser des systèmes par blocs et générer automatiquement du code C++ exécutable à partir du graphe."
      }
    },
    {
      role: { en: "Summer Intern", fr: "Stagiaire d'Été" },
      company: "Centre Informatique – Ministère des Finances",
      period: "Jul 2023",
      type: { en: "Internship", fr: "Stage" },
      description: {
        en: "First professional experience in an IT maintenance department. Introduction to enterprise IT infrastructure, ticketing systems, and professional work culture.",
        fr: "Première expérience professionnelle dans un service de maintenance informatique. Introduction à l'infrastructure IT d'entreprise et à la culture professionnelle."
      }
    }
  ],
  projects: [
    {
      id: "house-prices", name: "House Prices in Grand Tunis", emoji: "🏘️", category: "academic", date: "Dec 2025 – Feb 2026",
      tagline: { en: "Data mining & ML analysis of real estate prices in Grand Tunis", fr: "Data mining & ML sur les prix immobiliers du Grand Tunis" },
      accentColor: "#8b5cf6", watermark: "ML",
      status: { en: "Completed", fr: "Terminé" }, statusType: "done",
      duration: "3 months", team: "5 developers",
      myRole: { en: "Team member", fr: "Membre de l'équipe" },
      tech: ["Python","Pandas","Scikit-learn","Matplotlib","Seaborn","Jupyter","Streamlit"],
      links: [
        { label: "View Code", url: "https://github.com/Rayen-Chemlali/House-Prices-in-Grand-Tunis-Data-Mining" },
        { label: "Live Demo", url: "https://house-prices-in-grand-tunis-ml.streamlit.app/" }
      ],
      tabs: {
        overview: { en: "A comprehensive data mining project analyzing real estate prices across Grand Tunis. Merged two datasets (2020 & 2024) covering 1,513 apartment listings across 6 cities and 95 regions. Applied a 25% inflation adjustment based on Tunisia INS statistics, performed full EDA, and built a predictive pricing model deployed via Streamlit.", fr: "Projet complet de data mining sur les prix immobiliers du Grand Tunis. Fusion de deux datasets (2020 & 2024) couvrant 1 513 annonces d'appartements dans 6 villes et 95 régions. Ajustement inflation 25% selon les données INS, EDA complète et modèle prédictif déployé via Streamlit." },
        features: { en: ["Multi-source data integration (2020 + 2024 datasets)","Inflation adjustment (+25%) based on Tunisia INS data","Comprehensive EDA with price correlations and distributions","Intelligent deduplication across data sources","Geographic analysis: 6 cities, 95 regions of Grand Tunis","Predictive ML model for apartment pricing","Deployed interactive Streamlit app"], fr: ["Intégration multi-sources (datasets 2020 + 2024)","Ajustement inflation (+25%) basé sur les données INS Tunisie","EDA complète avec corrélations et distributions de prix","Déduplication intelligente inter-sources","Analyse géographique : 6 villes, 95 régions du Grand Tunis","Modèle ML prédictif pour les prix d'appartements","Application Streamlit interactive déployée"] },
        challenges: { en: "Merging datasets from different years and sources with inconsistent formats required a robust cleaning pipeline. Implementing statistically sound inflation adjustment while preserving data integrity across 95 geographic regions.", fr: "Fusionner des datasets d'années et sources différentes avec des formats incohérents a nécessité un pipeline de nettoyage robuste. Implémenter un ajustement d'inflation statistiquement valide tout en préservant l'intégrité des données sur 95 régions géographiques." },
        learnings: { en: "End-to-end data science workflow, multi-source data integration, inflation modeling, and deploying ML models to production with Streamlit.", fr: "Workflow data science de bout en bout, intégration multi-sources, modélisation de l'inflation, et déploiement de modèles ML en production avec Streamlit." }
      }
    },
    {
      id: "kickstream", name: "KickStream", emoji: "⚽", category: "academic", date: "Dec 2025 – Feb 2026",
      tagline: { en: "Real-time football prediction & streaming platform", fr: "Plateforme de prédiction et streaming football en temps réel" },
      accentColor: "#00aaff", watermark: "KICK",
      status: { en: "Completed", fr: "Terminé" }, statusType: "done",
      duration: "3 months", team: "5 developers",
      tech: ["Angular 20","NestJS","Rust","WebSocket","MySQL","Redis"],
      myRole: { en: "Full-stack & Rust real-time engine", fr: "Full-stack & moteur temps réel Rust" },
      links: [{ label: "View Code", url: "https://github.com/Rayen-Chemlali/kickstream" }],
      tabs: {
        overview: { en: "KickStream is a full-stack football platform combining real-time match streaming with ML-powered match outcome predictions. Built with Angular 20 frontend, NestJS backend, and a Rust-powered WebSocket engine for high-throughput real-time data delivery.", fr: "KickStream est une plateforme football full-stack combinant streaming de matchs en temps réel et prédictions ML. Frontend Angular 20, backend NestJS et moteur WebSocket Rust pour la diffusion de données temps réel." },
        features: { en: ["Live match streaming via WebSocket","ML-based match outcome prediction","Real-time score and stats updates","Angular 20 reactive UI","Redis caching for live data","NestJS REST + WebSocket API"], fr: ["Streaming live via WebSocket","Prédiction ML des résultats de matchs","Mises à jour scores et stats en temps réel","UI réactive Angular 20","Cache Redis pour données live","API REST + WebSocket NestJS"] },
        challenges: { en: "Building a low-latency real-time engine in Rust that integrates seamlessly with the NestJS backend required careful API contract design and concurrency management.", fr: "Construire un moteur temps réel bas-latence en Rust intégré au backend NestJS a nécessité une conception d'API soignée et une gestion de la concurrence." },
        learnings: { en: "Rust async programming, WebSocket architecture at scale, integrating multiple languages in one system, and real-time data pipeline design.", fr: "Programmation async Rust, architecture WebSocket à l'échelle, intégration multi-langages et conception de pipelines temps réel." }
      }
    },
    {
      id: "strategy-ai", name: "Strategy AI Assistant", emoji: "🤖", category: "freelance", date: "Aug 2025 – Present",
      tagline: { en: "AI-powered business strategy & diagnostic platform", fr: "Plateforme de stratégie business et diagnostic par IA" },
      accentColor: "#f59e0b", watermark: "AI",
      status: { en: "In Development", fr: "En Développement" }, statusType: "dev",
      duration: "Ongoing", team: "2 developers",
      tech: ["React","NestJS","OpenAI","LangChain","PDF Generation","Chatbot"],
      myRole: { en: "Co-developer — AI pipeline & backend", fr: "Co-développeur — pipeline IA & backend" },
      links: [],
      tabs: {
        overview: { en: "An AI-powered business strategy assistant actively in development since August 2025. Generates complete business diagnostics, financial projections, and market analysis through a conversational chatbot. Visualizes strategic data as interactive graphs and exports results as PDF reports or pitch decks. Note: not currently in production — no public demo available.", fr: "Assistant stratégique IA en développement actif depuis août 2025. Génère des diagnostics business complets, des projections financières et des analyses de marché via chatbot conversationnel. Visualisations en graphiques interactifs, exports PDF et pitch deck. Note : pas en production actuellement." },
        features: { en: ["Conversational AI chatbot for business questions","Automated business diagnostic generation","Financial projection modeling","Market analysis with interactive graph visualizations","PDF and pitch deck export"], fr: ["Chatbot IA conversationnel pour questions business","Génération automatisée de diagnostics","Modélisation de projections financières","Analyses de marché avec graphiques interactifs","Export PDF et pitch deck"] },
        challenges: { en: "Structuring unstructured business input into coherent, actionable diagnostics required careful prompt engineering and output validation.", fr: "Structurer des données business non structurées en diagnostics cohérents a nécessité une ingénierie de prompts soignée et une validation rigoureuse des sorties." },
        learnings: { en: "Advanced prompt engineering, building AI pipelines that produce structured business outputs, and data visualization for strategic content.", fr: "Ingénierie de prompts avancée, construction de pipelines IA produisant des sorties structurées, et visualisation de données pour contenu stratégique." }
      }
    },
    {
      id: "shannon", name: "Shannon", emoji: "⚙️", category: "freelance", date: "Nov 2025 – Jan 2026",
      tagline: { en: "Open-source Simulink-inspired visual code generator", fr: "Générateur de code visuel open-source inspiré de Simulink" },
      accentColor: "#8b5cf6", watermark: "SHN",
      status: { en: "Completed", fr: "Terminé" }, statusType: "done",
      duration: "Freelance", team: "2 developers",
      tech: ["Canvas API","Graph Model","Code Generation","Open Source"],
      myRole: { en: "Co-developer — canvas engine and code generation", fr: "Co-développeur — moteur canvas et génération de code" },
      links: [{ label: "View Demo", url: "https://drive.google.com/file/d/1FP3jKk7bzvZEF6kKc1ofRmF47yAf0qW2/view?usp=sharing" }],
      tabs: {
        overview: { en: "Co-developed Shannon, a free open-source alternative to Simulink. An interactive visual canvas lets users place and connect functional blocks to model systems, then automatically generates executable code from the graph. Built for engineers needing accessible model-based design tooling.", fr: "Co-développement de Shannon, alternative open-source gratuite à Simulink. Canvas visuel interactif pour modéliser des systèmes par blocs et liens, avec génération automatique de code exécutable." },
        features: { en: ["Interactive drag-and-drop block canvas","Block and link modeling system","Integrated code generation engine","Export to multiple code targets"], fr: ["Canvas de blocs interactif drag-and-drop","Système de modélisation par blocs et liens","Moteur de génération de code intégré","Export vers plusieurs cibles de code"] },
        challenges: { en: "Building a reliable graph-to-code compiler handling cycles, ordering, and block type validation was the core algorithmic challenge.", fr: "Construire un compilateur graphe-vers-code gérant les cycles, l'ordonnancement et la validation des types de blocs était le défi algorithmique central." },
        learnings: { en: "Graph data structures for UI, visual programming language design, and building developer tools from scratch.", fr: "Structures de données graphes pour UI, conception de langages de programmation visuels, et développement d'outils from scratch." }
      }
    },
    {
      id: "ml-suite", name: "ML Projects Suite", emoji: "🧠", category: "internship", date: "Feb 2026 – Mar 2026",
      tagline: { en: "5 end-to-end ML projects across domains", fr: "5 projets machine learning complets sur différents domaines" },
      accentColor: "#22c55e", watermark: "ML",
      status: { en: "Completed", fr: "Terminé" }, statusType: "done",
      duration: "1 month", team: "Solo",
      tech: ["Python","Scikit-learn","TensorFlow","CV","NLP","Audio"],
      myRole: { en: "Full project — sole developer", fr: "Projet complet — développeur unique" },
      links: [{ label: "View Code", url: "https://github.com/Rayen-Chemlali/Elevvo-ml-internship-projects" }],
      tabs: {
        overview: { en: "A suite of 5 complete ML projects built during the Elevvo Pathways internship. Each covers the full pipeline: data collection, preprocessing, EDA, feature engineering, model training, evaluation, and deployment packaging. Domains: clustering, classification, time series, computer vision, audio.", fr: "Suite de 5 projets ML complets réalisés lors du stage Elevvo Pathways. Pipeline complet : collecte, prétraitement, EDA, feature engineering, entraînement, évaluation et déploiement." },
        features: { en: ["Customer segmentation with clustering","Binary and multi-class classification pipelines","Time series forecasting with LSTM/ARIMA","Image classification with CNNs","Audio classification with spectral features"], fr: ["Segmentation client par clustering","Pipelines de classification binaire et multi-classes","Prévision de séries temporelles LSTM/ARIMA","Classification d'images avec CNNs","Classification audio avec features spectrales"] },
        challenges: { en: "Each domain had unique data challenges — audio spectrogram extraction, time series stationarity, and class imbalance all required domain-specific solutions.", fr: "Chaque domaine avait ses défis spécifiques — spectrogrammes audio, stationnarité des séries temporelles, déséquilibre de classes." },
        learnings: { en: "Breadth of the ML landscape, domain-specific feature engineering, model selection trade-offs, and professional ML project structure.", fr: "Vue d'ensemble du paysage ML, feature engineering spécifique, compromis de sélection de modèles et structure professionnelle de projets ML." }
      }
    },
    {
      id: "medisys", name: "MediSys", emoji: "🏥", category: "academic", date: "Mar 2025 – Jun 2025",
      tagline: { en: "AI-powered medical management platform", fr: "Plateforme de gestion médicale propulsée par l'IA" },
      accentColor: "#a855f7", watermark: "MEDI",
      status: { en: "In Development", fr: "En Développement" }, statusType: "dev",
      duration: "8 months", team: "5 developers",
      tech: ["NestJS","Next.js","GraphQL","WebSocket","Python","OCR","AI"],
      myRole: { en: "Backend architecture and AI/OCR integration module", fr: "Architecture backend et module d'intégration IA/OCR" },
      links: [
        { label: "Frontend", url: "https://github.com/Khalil-Ghimaji/DoussiyaFidaya" },
        { label: "Backend", url: "https://github.com/Rayen-Chemlali/DoussiyaFidaya" },
        { label: "View Demo", url: "https://drive.google.com/drive/folders/16hEZMV6pYsY01KwefGd6txBG_8jKuWM9?usp=sharing" }
      ],
      tabs: {
        overview: { en: "MediSys handles full medical workflows: consultations, appointments, analyses, prescriptions, and patient records. Hybrid GraphQL/REST API with SSE and WebSocket for real-time features, and an AI module for medical document OCR processing.", fr: "MediSys gère les workflows médicaux complets : consultations, rendez-vous, analyses, prescriptions et dossiers patients. API hybride GraphQL/REST avec SSE, WebSocket, et module IA pour l'OCR." },
        features: { en: ["Full medical workflow: appointments, consultations, prescriptions","AI-powered OCR for medical document digitization","Real-time notifications via WebSocket and SSE","Role-based access: doctors, patients, administrators","Hybrid GraphQL/REST API"], fr: ["Workflow médical complet : rendez-vous, consultations, prescriptions","OCR IA pour numérisation de documents médicaux","Notifications temps réel via WebSocket et SSE","Accès par rôles : médecins, patients, administrateurs","API hybride GraphQL/REST"] },
        challenges: { en: "Integrating OCR in a medical context required handling high document variability. Designing a GraphQL schema flexible enough for multiple medical specialties while keeping queries performant was also a major challenge.", fr: "L'intégration OCR dans un contexte médical nécessitait de gérer une grande variabilité documentaire. La conception d'un schéma GraphQL flexible pour plusieurs spécialités médicales tout en maintenant de bonnes performances était un défi majeur." },
        learnings: { en: "Deep expertise in GraphQL schema design, hybrid API architectures, OCR pipeline integration, and healthcare data modeling.", fr: "Expertise approfondie en conception de schémas GraphQL, architectures API hybrides, intégration de pipelines OCR et modélisation de données de santé." }
      }
    },
    {
      id: "erp", name: "Mini-ERP System", emoji: "📊", category: "academic", date: "Dec 2024 – Feb 2025",
      tagline: { en: "Enterprise resource planning for sales operations", fr: "Système ERP pour les opérations de vente" },
      accentColor: "#f59e0b", watermark: "ERP",
      status: { en: "Completed", fr: "Terminé" }, statusType: "done",
      duration: "4 months", team: "3 developers",
      tech: ["ASP.NET","C#","SQL Server"],
      myRole: { en: "Backend architecture, database design, business logic", fr: "Architecture backend, conception base de données, logique métier" },
      links: [{ label: "View Code", url: "https://github.com/Khalil-Ghimaji/dotnetERP" }],
      tabs: {
        overview: { en: "A complete ERP system covering the entire sales process with four integrated modules: order management, inventory management, invoicing, and customer management. Built with ASP.NET and SQL Server for enterprise-grade reliability.", fr: "Système ERP complet couvrant l'intégralité du processus de vente avec quatre modules intégrés : gestion des commandes, stocks, facturation et clients. Développé avec ASP.NET et SQL Server." },
        features: { en: ["Order management with full lifecycle tracking","Inventory management with stock level alerts","Invoice generation and management","Customer relationship module","Integrated reporting and dashboards"], fr: ["Gestion des commandes avec suivi du cycle de vie","Gestion des stocks avec alertes de niveau","Génération et gestion des factures","Module de gestion de la relation client","Tableaux de bord et rapports intégrés"] },
        challenges: { en: "Designing a normalized database schema supporting complex business rules across all modules without redundancy. Implementing transaction management to ensure data consistency across the order-inventory-invoice pipeline.", fr: "Conception d'un schéma de base de données normalisé supportant des règles métier complexes sans redondance. Implémentation de la gestion des transactions pour la cohérence des données." },
        learnings: { en: "Enterprise application architecture with ASP.NET, relational database design for business apps, and ERP business logic end-to-end.", fr: "Architecture d'application d'entreprise avec ASP.NET, conception de bases de données relationnelles pour applications business, et logique ERP de bout en bout." }
      }
    },
    {
      id: "interim", name: "InterimCo Website", emoji: "🌐", category: "academic", date: "Mar 2024 – May 2024",
      tagline: { en: "Corporate site built in PHP then migrated to Symfony", fr: "Site corporate développé en PHP puis migré vers Symfony" },
      accentColor: "#10b981", watermark: "SYM",
      status: { en: "Completed", fr: "Terminé" }, statusType: "done",
      duration: "6 months", team: "5 developers",
      tech: ["PHP","Symfony","Doctrine ORM","MySQL","MVC"],
      myRole: { en: "Full project — sole developer", fr: "Projet complet — développeur unique" },
      links: [
        { label: "Symfony Version", url: "https://github.com/Rayen-Chemlali/InterimCo-symfony" },
        { label: "Native PHP Version", url: "https://github.com/Rayen-Chemlali/Interim-Co-webApplication" }
      ],
      tabs: {
        overview: { en: "A major milestone in my web dev journey. Built a full corporate website for an interim staffing company, first in native PHP, then fully refactored and migrated to Symfony — gaining deep experience with MVC architecture, Symfony routing, and Doctrine ORM.", fr: "Étape majeure dans mon parcours. Site corporate complet d'une entreprise intérimaire, d'abord en PHP natif, puis entièrement migré vers Symfony — maîtrise approfondie de l'architecture MVC, du routing Symfony et de Doctrine ORM." },
        features: { en: ["Corporate pages: services, team, contact","Job listing and application management","Admin panel for content management","Full form handling and validation"], fr: ["Pages corporate : services, équipe, contact","Gestion des offres d'emploi et candidatures","Panneau d'administration","Gestion complète des formulaires et validation"] },
        challenges: { en: "Migrating a working PHP app to Symfony without breaking functionality required careful planning. Understanding Symfony's bundle system and Doctrine entity mapping had a steep but rewarding learning curve.", fr: "Migrer une application PHP fonctionnelle vers Symfony sans casser les fonctionnalités a nécessité une planification minutieuse. La courbe d'apprentissage de Symfony était raide mais enrichissante." },
        learnings: { en: "In-depth Symfony knowledge, MVC in a real project, Doctrine ORM, and the long-term value of migrating legacy code to a proper framework.", fr: "Connaissance approfondie de Symfony, MVC dans un vrai projet, Doctrine ORM, et la valeur à long terme de la migration de code legacy vers un framework structuré." }
      }
    },
    {
      id: "aria", name: "ARIA", emoji: "🛡️", category: "hackathon", date: "2025",
      tagline: { en: "ML app predicting insurance bundle purchases with SHAP explanations", fr: "App ML prédisant l'achat de bundle d'assurance avec explications SHAP" },
      accentColor: "#6366f1", watermark: "ARIA",
      status: { en: "Completed", fr: "Terminé" }, statusType: "done",
      duration: "Hackathon — DataQuest", team: "Solo",
      tech: ["LightGBM","SHAP","FastAPI","Next.js","Docker","Python"],
      myRole: { en: "Full project — sole developer", fr: "Projet complet — développeur unique" },
      links: [
        { label: "View Code", url: "https://github.com/Rayen-Chemlali/ARIA-Insurance-Bundle-Predictor" },
        { label: "View Demo", url: "https://drive.google.com/file/d/1H7aMbbFKjfAymFi7h-F3yMwXy7kXgC9h/view" },
        { label: "Live App", url: "https://amusing-connection-production.up.railway.app" }
      ],
      tabs: {
        overview: { en: "ARIA (Autonomous Risk Intelligence Advisor) is a full-stack ML application built for the DataQuest competition. It predicts which insurance coverage bundle a client will purchase using a trained LightGBM classifier. A conversational UI guides brokers through client intake, returning a prediction with confidence scoring and SHAP-based explanations.", fr: "ARIA (Autonomous Risk Intelligence Advisor) est une application ML full-stack construite pour la compétition DataQuest. Elle prédit quel bundle d'assurance un client achètera via un classifieur LightGBM, avec une interface conversationnelle, un scoring de confiance et des explications SHAP." },
        features: { en: ["Conversational predict UI for step-by-step client intake","Batch CSV predictions with paginated results and charts","Live dashboard: prediction counts, latency, feature importances","SHAP top-5 explanations for every prediction","Confidence bands: High / Medium / Low","CI/CD with Railway + Vercel deployment"], fr: ["Interface conversationnelle pour collecte de profil client","Prédictions CSV en masse avec résultats paginés et graphiques","Dashboard live : compteurs, latence, importances des features","Explications SHAP top-5 pour chaque prédiction","Bandes de confiance : Haute / Moyenne / Faible","CI/CD déployé sur Railway + Vercel"] },
        challenges: { en: "Handling class imbalance across 10 insurance bundles required a 3-step resampling strategy (ROS + SMOTE). Integrating SHAP TreeExplainer into a low-latency API without degrading response time was the key engineering challenge.", fr: "Gérer le déséquilibre de classes sur 10 bundles a nécessité une stratégie de rééchantillonnage en 3 étapes (ROS + SMOTE). Intégrer SHAP dans une API bas-latence sans dégrader les temps de réponse était le défi technique principal." },
        learnings: { en: "End-to-end ML product delivery, LightGBM tuning for multiclass problems, SHAP explainability in production, and full CI/CD pipeline automation.", fr: "Livraison ML de bout en bout, tuning LightGBM multiclasse, explicabilité SHAP en production et automatisation CI/CD complète." }
      }
    },
    {
      id: "soundguard", name: "SoundGuard", emoji: "🔊", category: "hackathon", date: "2024",
      tagline: { en: "AI system detecting dangerous noise levels to protect workers' hearing", fr: "Système IA détectant les niveaux sonores dangereux pour protéger l'audition" },
      accentColor: "#f43f5e", watermark: "SND",
      status: { en: "Completed", fr: "Terminé" }, statusType: "done",
      duration: "Samsung Innovation Campus Capstone", team: "Team",
      tech: ["Python","Audio Classification","ML","Signal Processing","TensorFlow"],
      myRole: { en: "ML developer — audio classification pipeline", fr: "Développeur ML — pipeline de classification audio" },
      links: [
        { label: "View Demo", url: "https://drive.google.com/file/d/1HGZXY4uEW1PzCPmhjkFVkj6V5w_yPTkL/view?usp=drive_link" },
        { label: "Code & Report", url: "https://drive.google.com/drive/folders/1__1i_2a0eI8Zz69PaIDkRbfMakr-S80h?usp=drive_link" }
      ],
      tabs: {
        overview: { en: "SoundGuard is a capstone AI project developed as part of the Samsung Innovation Campus program. It detects dangerous environmental noise levels in real time to protect workers' hearing health. The system classifies audio signals and triggers alerts when sound exposure exceeds safety thresholds.", fr: "SoundGuard est un projet IA capstone développé dans le cadre du Samsung Innovation Campus. Il détecte en temps réel les niveaux sonores dangereux pour protéger la santé auditive des travailleurs, avec classification de signaux audio et alertes automatiques." },
        features: { en: ["Real-time audio signal classification","Dangerous noise level detection and alerting","Worker hearing protection use case","Signal processing pipeline","ML model trained on environmental audio"], fr: ["Classification de signaux audio en temps réel","Détection et alerte de niveaux sonores dangereux","Cas d'usage protection auditive des travailleurs","Pipeline de traitement du signal","Modèle ML entraîné sur audio environnemental"] },
        challenges: { en: "Accurately classifying noisy real-world audio with limited labeled data required careful feature engineering using spectral and temporal features.", fr: "Classifier avec précision des sons réels bruités avec peu de données annotées a nécessité un feature engineering soigné avec des features spectrales et temporelles." },
        learnings: { en: "Audio signal processing, spectrogram-based feature extraction, real-time ML inference, and applying AI to occupational health and safety.", fr: "Traitement du signal audio, extraction de features par spectrogramme, inférence ML temps réel et application de l'IA à la santé au travail." }
      }
    },
    {
      id: "container-registry", name: "Smart Container Registry", emoji: "🐳", category: "internship", date: "Jun 2025 – Aug 2025",
      tagline: { en: "AI-powered Docker storage optimizer for Kubernetes", fr: "Optimiseur de stockage Docker pour Kubernetes par IA" },
      accentColor: "#38bdf8", watermark: "K8S",
      status: { en: "Phase 1 Delivered", fr: "Phase 1 Livrée" }, statusType: "p1",
      duration: "3 months", team: "Solo (Internship)",
      tech: ["Docker","Kubernetes","S3","AI","NestJS","Chatbot"],
      myRole: { en: "Full project — sole intern developer", fr: "Projet complet — seul développeur stagiaire" },
      links: [
        { label: "Frontend", url: "https://github.com/Rayen-Chemlali/smart-sontainer-registry-frontend" },
        { label: "Backend", url: "https://github.com/Rayen-Chemlali/smart-sontainer-registry-backend" },
        { label: "View Demo", url: "https://drive.google.com/file/d/1AnnoEEvm6beafDYBIRuaVlhW8Cwf4YH0/view?usp=sharing" }
      ],
      tabs: {
        overview: { en: "Developed at Talan Tunisie Consulting. Smart Container Registry optimizes Docker image storage costs in enterprise Kubernetes environments. Phase 1 delivers: AI chatbot for storage insights, unified K8s/S3 dashboard, and configurable automated image deletion rules engine.", fr: "Développé chez Talan Tunisie Consulting. Smart Container Registry optimise les coûts de stockage Docker en environnement Kubernetes d'entreprise. Phase 1 : chatbot IA, tableau de bord K8s/S3 unifié et moteur de règles de suppression." },
        features: { en: ["AI conversational chatbot for storage cost analysis","Unified Kubernetes + S3 metrics dashboard","Configurable automated image deletion rules","Cost tracking and savings reporting"], fr: ["Chatbot IA pour analyse des coûts de stockage","Tableau de bord unifié K8s + S3","Règles de suppression d'images automatisées","Suivi des coûts et rapports d'économies"] },
        challenges: { en: "Aggregating metrics from heterogeneous sources (K8s API, S3 SDK) into a consistent unified model required careful abstraction design.", fr: "Agréger des métriques de sources hétérogènes (API K8s, SDK S3) dans un modèle unifié cohérent a nécessité une conception d'abstraction soignée." },
        learnings: { en: "Container ecosystems, Kubernetes API interaction, cloud storage cost optimization, and enterprise-grade internal tooling.", fr: "Écosystèmes de conteneurs, interaction avec l'API Kubernetes, optimisation des coûts de stockage cloud et outils internes de qualité entreprise." }
      }
    }
  ],
  education: [
    {
      institution: "INSAT",
      full: "Institut National des Sciences Appliquées et de Technologie",
      degree: { en: "Engineering Degree — Software Engineering", fr: "Diplôme d'Ingénieur — Génie Logiciel" },
      period: "2022 – Present",
      highlights: { en: ["Ranked 32nd / 410 — 1st year common cycle (MPI)","Ranked 5th / 90 — 2nd year preparatory cycle","Ranked 6th / 96 — 1st year engineering cycle"], fr: ["Classé 32ème / 410 — 1ère année tronc commun (MPI)","Classé 5ème / 90 — 2ème année préparatoire","Classé 6ème / 96 — 1ère année cycle ingénieur"] }
    },
    {
      institution: { en: "Baccalaureate in Mathematics", fr: "Baccalauréat en Mathématiques" },
      full: "Lycée — Tunisia",
      degree: { en: "Mathematics Baccalaureate — Highest Honors", fr: "Baccalauréat Mathématiques — Mention Très Bien" },
      period: "2022",
      highlights: { en: ["Highest Honors — 18.16 / 20","Strong mathematical foundation for CS and AI"], fr: ["Mention Très Bien — 18.16 / 20","Solide base mathématique pour l'informatique et l'IA"] }
    }
  ],
  certifications: [
    { name: "Supervised Machine Learning", issuer: "Coursera", icon: "🎓", url: "https://www.coursera.org/account/accomplishments/verify/QNR4LRWNRVFB" },
    { name: "Advanced Learning Algorithms", issuer: "Coursera", icon: "🎓", url: "https://www.coursera.org/account/accomplishments/verify/14QA5AQFDPQ4" },
    { name: "Efficient LLM Customization", issuer: "NVIDIA Deep Learning Institute", icon: "🔥", url: "https://learn.nvidia.com/certificates?id=NiPMpiopQRGOW1fBsx3pZQ#" },
    { name: "Building RAG Agents with LLMs", issuer: "NVIDIA Deep Learning Institute", icon: "🔥", url: "https://learn.nvidia.com/certificates?id=txMdLISsRYizzGSQXBmvAw#" },
    { name: "Samsung Innovation Campus AI", issuer: "Samsung", icon: "⭐", url: "https://drive.google.com/file/d/1uMrPLNYzwKXtVgN3_iSDjSsD_ESujxVe/view?usp=drive_link", linkedProjectId: "soundguard" }
  ],
  achievements: [
    {
      place: "2nd", medal: "🥈",
      title: { en: "Code Quest 2023", fr: "Code Quest 2023" },
      subtitle: { en: "Competitive Programming Contest @ INSAT", fr: "Concours de Programmation Compétitive @ INSAT" },
      color: "#94a3b8", url: "https://www.linkedin.com/posts/mohammed-achref-hemissi_exciting-news-untraceable-team-takes-2nd-activity-7152624917576892417-eWMU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx9s5YB71VOxyG-0xt1QKdyDM9DES69bfM"
    },
    {
      place: "11th", medal: "🥉",
      title: { en: "TCPC 2024 — Bronze Medal", fr: "TCPC 2024 — Médaille de Bronze" },
      subtitle: { en: "Tunisian Collegiate Programming Contest", fr: "Concours Tunisien de Programmation Universitaire" },
      color: "#cd7f32", url: "https://www.linkedin.com/posts/chemlali-rayen-69aa65243_competitiveprogramming-problemsolving-tcpc-activity-7246469206592958465-Jsn4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx9s5YB71VOxyG-0xt1QKdyDM9DES69bfM"
    },
    {
      place: "3rd", medal: "🥉",
      title: { en: "AI 4 New Generation Hackathon", fr: "Hackathon AI 4 New Generation" },
      subtitle: { en: "by EY & Université Ibn Khaldoun — 2024", fr: "par EY & Université Ibn Khaldoun — 2024" },
      color: "#f97316", url: "https://www.linkedin.com/posts/chemlali-rayen-69aa65243_ai-hackathon-llm-activity-7277362902594908160-I_RN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx9s5YB71VOxyG-0xt1QKdyDM9DES69bfM"
    }
  ],
  languages: [
    { lang: "Arabic", level: { en: "Native", fr: "Langue maternelle" }, pct: 100 },
    { lang: "French", level: { en: "Fluent", fr: "Courant" }, pct: 90 },
    { lang: "English", level: { en: "Good", fr: "Bon niveau" }, pct: 75 },
    { lang: "Spanish", level: { en: "Beginner", fr: "Débutant" }, pct: 20 }
  ]
};