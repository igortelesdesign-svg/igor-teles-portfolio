import { 
  Project, 
  ExperienceItem, 
  Course, 
  Certification, 
  SkillItem, 
  ServiceItem, 
  WorkProcessStep, 
  TechIcon, 
  FAQItem, 
  Article, 
  Testimonial 
} from '../types/portfolio';

export const personalInfo = {
  name: "Igor Teles",
  title: "Brand & Marketing Designer | Full Stack Developer",
  shortRole: "Multidisciplinary Design & Tech Specialist",
  location: "Brasil / Europa Remote Ready (EU Timezone Sync)",
  email: "igortelesdesign@gmail.com",
  whatsapp: "+55 11 99999-8888",
  linkedin: "https://linkedin.com/in/igorteles",
  github: "https://github.com/igorteles",
  yearsExperience: 15,
  heroPortrait: "/src/assets/images/hero_portrait_1784673419983.jpg",
  workspaceImage: "/src/assets/images/about_workspace_1784673430707.jpg",
  headline: {
    pt: "Criando experiências digitais que unem estratégia, design e tecnologia de alta performance.",
    en: "Crafting digital experiences that seamlessly bridge strategy, design, and high-performance technology."
  },
  bioSummary: {
    pt: "Profissional multidisciplinar com mais de 15 anos de trajetória integrando Branding de alto impacto, Marketing Estratégico, Design UI/UX refinado e Desenvolvimento Full Stack moderno. Especializado em construir ecossistemas digitais completos para startups e empresas globais.",
    en: "Multidisciplinary senior specialist with over 15 years of experience fusing high-impact Branding, Strategic Marketing, refined UI/UX Design, and modern Full Stack Engineering. Specialized in building complete digital ecosystems for tech scale-ups and global brands."
  },
  europePitch: {
    pt: "Preparado para integrar squads internacionais e empresas europeias na modalidade 100% remota ou B2B/Contract. Fluência em inglês, alinhamento de fuso horário (UTC/CET) e rápida adaptação técnica.",
    en: "Fully equipped to join international squads and European companies as a 100% remote specialist or B2B Contractor. Fluent English, UTC/CET timezone overlap, and high technical agility."
  }
};

export const floatingTags = [
  "+15 Anos de Exp.",
  "Branding",
  "Marketing",
  "UI/UX Design",
  "Full Stack",
  "React & Next.js",
  "IA & Automações",
  "Node.js & APIs"
];

export const statisticsData = [
  { value: "15+", label: { pt: "Anos de Experiência", en: "Years Experience" } },
  { value: "120+", label: { pt: "Projetos Entregues", en: "Projects Delivered" } },
  { value: "80+", label: { pt: "Marcas Atendidas", en: "Brands Served" } },
  { value: "45+", label: { pt: "Campanhas de Performance", en: "Growth Campaigns" } },
  { value: "60+", label: { pt: "Clientes Globais", en: "Global Clients" } },
  { value: "25+", label: { pt: "Tecnologias Dominadas", en: "Tech & Design Stack" } }
];

export const skillsData: SkillItem[] = [
  // Marketing & Strategy
  { name: "Branding & Identidade", level: 98, category: "marketing" },
  { name: "Marketing Estratégico", level: 95, category: "marketing" },
  { name: "Posicionamento de Marca", level: 92, category: "marketing" },
  { name: "Marketing de Performance & Paid Ads", level: 88, category: "marketing" },
  { name: "Copywriting & Storytelling", level: 90, category: "marketing" },
  { name: "Social Media & Growth", level: 92, category: "marketing" },
  { name: "SEO Técnico & Inbound", level: 86, category: "marketing" },
  { name: "Gestão de Projetos & Agilidade", level: 90, category: "marketing" },

  // Design & UI/UX
  { name: "Figma & Design Systems", level: 98, category: "design" },
  { name: "UI Design (Web & Mobile)", level: 96, category: "design" },
  { name: "UX Research & Prototipagem", level: 92, category: "design" },
  { name: "Adobe Photoshop & Illustrator", level: 95, category: "design" },
  { name: "Adobe Premiere & After Effects", level: 85, category: "design" },
  { name: "Direção de Arte Digital", level: 94, category: "design" },
  { name: "Motion & Microinterações", level: 88, category: "design" },

  // Development & AI
  { name: "HTML5 / CSS3 / Tailwind CSS", level: 98, category: "development" },
  { name: "JavaScript (ES6+) & TypeScript", level: 92, category: "development" },
  { name: "React.js & State Management", level: 94, category: "development" },
  { name: "Next.js & SSR/SSG Architecture", level: 90, category: "development" },
  { name: "Node.js & Express REST APIs", level: 88, category: "development" },
  { name: "Git, GitHub & CI/CD Workflows", level: 90, category: "development" },
  { name: "Firebase & Supabase Databases", level: 86, category: "development" },
  { name: "SQL & NoSQL Architecture", level: 82, category: "development" },
  { name: "IA Generativa & Prompt Engineering", level: 92, category: "development" },
  { name: "Automações N8N / Make / Python", level: 85, category: "development" },
  { name: "Python (Fundamentos)", level: 75, category: "development" }
];

export const educationData: Course[] = [
  {
    id: "edu-1",
    title: {
      pt: "Desenvolvimento Full Stack Web & Mobile",
      en: "Full Stack Web & Mobile Software Engineering"
    },
    institution: "Escola de Tecnologia Avançada",
    year: "2024 — Presente",
    status: "in_progress",
    hours: "600h",
    certificateUrl: "#"
  },
  {
    id: "edu-2",
    title: {
      pt: "Especialização em Branding & Strategic Brand Architecture",
      en: "Branding & Strategic Brand Architecture Specialization"
    },
    institution: "Brand Academy Europe & Latam",
    year: "2021",
    status: "completed",
    hours: "240h",
    certificateUrl: "#"
  },
  {
    id: "edu-3",
    title: {
      pt: "Executive Marketing & Digital Growth Analytics",
      en: "Executive Marketing & Digital Growth Analytics"
    },
    institution: "Digital Business Institute",
    year: "2018",
    status: "completed",
    hours: "180h",
    certificateUrl: "#"
  },
  {
    id: "edu-4",
    title: {
      pt: "Ensino Médio e Formação Técnica",
      en: "High School & Technical Foundation"
    },
    institution: "Instituição de Ensino Técnico",
    year: "2009",
    status: "completed"
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: {
      pt: "Certificação Profissional React & TypeScript Engineering",
      en: "React & TypeScript Professional Software Engineer"
    },
    institution: "Meta & Tech Certification Board",
    year: "2023",
    hours: "120h",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    credentialUrl: "https://github.com/igorteles"
  },
  {
    id: "cert-2",
    title: {
      pt: "Especialista em Figma Design Systems e UX UI Moderno",
      en: "Figma Design Systems & Advanced UI/UX Specialist"
    },
    institution: "UX Design Institute",
    year: "2022",
    hours: "90h",
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
    credentialUrl: "https://github.com/igorteles"
  },
  {
    id: "cert-3",
    title: {
      pt: "Inbound Marketing & Growth Strategy Master",
      en: "Inbound Marketing & Growth Strategy Master"
    },
    institution: "HubSpot Academy",
    year: "2021",
    hours: "60h",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    credentialUrl: "https://github.com/igorteles"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Teles Studio & Digital Advisory",
    period: "2020 — Presente",
    location: "São Paulo / Remote Global",
    role: {
      pt: "Senior Brand Designer & Full Stack Consultant",
      en: "Senior Brand Designer & Full Stack Consultant"
    },
    summary: {
      pt: "Liderança de projetos de reposicionamento de marca, design de sistemas de produto e desenvolvimento de aplicações web escaláveis para startups e empresas médias com expansão internacional.",
      en: "Leading brand repositioning projects, design system engineering, and full-stack web application development for tech startups and scale-ups targeting global markets."
    },
    keyResults: [
      {
        pt: "Aumento médio de +140% em conversão em landing pages desenvolvidas com Next.js e Tailwind CSS.",
        en: "Average +140% increase in conversion rates for custom Next.js landing pages and web apps."
      },
      {
        pt: "Criação de mais de 30 identidades visuais completas com design system no Figma e componentes em React.",
        en: "Built over 30 complete brand identity visual systems with Figma design kits & React components."
      },
      {
        pt: "Implementação de automações com inteligência artificial para otimização de fluxos de atendimento e marketing.",
        en: "Integrated generative AI workflows reducing manual marketing ops lead response time by 80%."
      }
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Node.js", "OpenAI API", "Firebase"]
  },
  {
    id: "exp-2",
    company: "Global Growth & Creative Agency",
    period: "2015 — 2020",
    location: "São Paulo, SP",
    role: {
      pt: "Head de Design & Estratégia de Marketing",
      en: "Head of Design & Marketing Strategy"
    },
    summary: {
      pt: "Gestão da equipe criativa, direção de arte de campanhas digitais e liderança no desenvolvimento de ecossistemas web corporativos.",
      en: "Managed creative squad, led art direction for digital performance campaigns, and oversaw production of enterprise corporate web platforms."
    },
    keyResults: [
      {
        pt: "Direção de campanhas de tráfego e conteúdo que movimentaram mais de R$ 5MM em vendas para clientes.",
        en: "Directed digital campaigns generating over €1M in client revenue across multi-channel growth funnels."
      },
      {
        pt: "Padronização do workflow de design UI/UX reduzindo o tempo de entrega de protótipos em 40%.",
        en: "Standardized UI/UX design workflow reducing prototyping lead time by 40%."
      }
    ],
    technologies: ["Figma", "Adobe CC", "HTML5", "CSS3", "JavaScript", "Google Analytics", "WordPress"]
  },
  {
    id: "exp-3",
    company: "Creative Media Studio",
    period: "2009 — 2015",
    location: "Brasil",
    role: {
      pt: "Designer Gráfico, UI & Especialista em Social Media",
      en: "Graphic & UI Designer / Social Media Lead"
    },
    summary: {
      pt: "Criação de identidades visuais, materiais impressos e digitais, gestão de presença de marcas nas mídias sociais e desenvolvimento front-end inicial.",
      en: "Created visual identities, print and digital media, managed multi-channel social media strategies and executed early front-end code."
    },
    keyResults: [
      {
        pt: "Atendimento de mais de 50 marcas de diversos setores na fase de consolidação digital.",
        en: "Successfully launched digital identity campaigns for over 50 brands across retail and services."
      }
    ],
    technologies: ["Photoshop", "Illustrator", "InDesign", "HTML/CSS", "PHP", "Social Media Analytics"]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Aura Fintech — Next-Gen Neobank Platform",
    category: ["all", "fullstack", "websites", "ui", "applications"],
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    shortDescription: {
      pt: "Aplicação web financeira completa com Dashboard interativo, sistema de transações em tempo real e identidade visual minimalista.",
      en: "Comprehensive fintech web application featuring real-time transaction analytics, sleek dark UI dashboard, and componentized design system."
    },
    fullDescription: {
      pt: "Plataforma de inteligência financeira construída com Next.js 14, Tailwind CSS, TypeScript e Supabase. O projeto inclui criação da marca desde o conceito de branding até a entrega do código de produção.",
      en: "Next-gen financial intelligence platform built with Next.js 14, TypeScript, Tailwind CSS, and Supabase. The project spans end-to-end execution from brand design system to production application code."
    },
    problem: {
      pt: "O cliente precisava consolidar uma marca moderna para investidores europeus e lançar um MVP funcional em menos de 8 semanas.",
      en: "Client required a high-trust brand identity targeting European investors alongside a functional web MVP in under 8 weeks."
    },
    solution: {
      pt: "Desenvolvimento de design system no Figma com componentes reutilizáveis e código em React com rotas seguras e estado reativo.",
      en: "Engineered a Figma design system mirrored in modular React code with secure API endpoints and optimized state management."
    },
    results: {
      pt: "Lançamento em tempo recorde de 6 semanas, captação de 1.2k usuários beta e nota de usabilidade 98/100.",
      en: "Launched in record 6 weeks, onboarded 1.2k beta users, achieving a 98/100 usability benchmark score."
    },
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Figma", "Recharts"],
    liveUrl: "https://example.com/aura",
    githubUrl: "https://github.com/igorteles/aura-fintech",
    client: "Aura Capital Europe",
    year: "2024"
  },
  {
    id: "proj-2",
    title: "Nordic Lumina — Luxury Brand Identity & E-Commerce",
    category: ["all", "branding", "marketing", "websites", "design"],
    featured: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    shortDescription: {
      pt: "Estratégia de branding completa, direção de fotografia e e-commerce ultra rápido para marca dinamarquesa de iluminação sustentável.",
      en: "End-to-end brand strategy, photography direction, and lightning-fast e-commerce experience for a Danish sustainable lighting studio."
    },
    fullDescription: {
      pt: "Reestruturação completa de marca incluindo logotipo, guia de estilo, packaging design, estratégia de marketing de conteúdo e plataforma headless e-commerce.",
      en: "Complete brand overhaul including logo mark, brand guidelines, eco packaging design, content strategy, and headless web storefront."
    },
    problem: {
      pt: "Dificuldade de se destacar no mercado nórdico devido à identidade desatualizada e e-commerce lento.",
      en: "Brand struggled in Nordic markets due to outdated visual identity and slow legacy e-commerce platform."
    },
    solution: {
      pt: "Branding focado no conceito de 'hygge' nórdico contemporâneo e storefront headless com tempo de carregamento < 0.8s.",
      en: "Created a modern Scandinavian aesthetic paired with a headless React storefront delivering sub-800ms load times."
    },
    results: {
      pt: "Crescimento de +210% nas vendas online no primeiro trimestre pós-rebranding.",
      en: "+210% surge in online revenue within the first quarter post-relaunch."
    },
    technologies: ["Branding", "UI/UX", "React", "Tailwind CSS", "Shopify API", "Figma"],
    liveUrl: "https://example.com/lumina",
    githubUrl: "https://github.com/igorteles/nordic-lumina",
    client: "Nordic Lumina ApS (Copenhagen)",
    year: "2024"
  },
  {
    id: "proj-3",
    title: "OmniAI Agent Studio — SaaS Dashboard & Automation Engine",
    category: ["all", "fullstack", "applications", "ui"],
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    shortDescription: {
      pt: "Plataforma SaaS para orquestração de agentes de IA generativa com interface visual drag-and-drop e integrações de API.",
      en: "SaaS platform for orchestrating generative AI agents with visual drag-and-drop node workflows and API integrations."
    },
    fullDescription: {
      pt: "Dashboard em dark mode para criação de fluxos de automação de marketing e atendimento alimentados por modelos Gemini e OpenAI.",
      en: "Dark mode SaaS application interface for designing AI marketing & customer workflows powered by Gemini & OpenAI endpoints."
    },
    problem: {
      pt: "Ferramentas existentes eram demasiadamente técnicas e sem apelo visual para times de marketing e produto.",
      en: "Existing automation tools lacked intuitive UX and sleek design required by non-technical marketing executives."
    },
    solution: {
      pt: "UX altamente intuitivo com nodes visuais, componentes em React, suporte a webhooks e streaming em tempo real.",
      en: "Engineered node-based visual workflow editor in React with live WebSocket streaming and instant template deployment."
    },
    results: {
      pt: "Adotado por 15 agências de marketing e mais de 4.000 fluxos executados por dia.",
      en: "Adopted by 15 marketing agencies processing 4,000+ daily autonomous workflow executions."
    },
    technologies: ["React", "TypeScript", "Node.js", "Express", "OpenAI API", "Gemini API", "Tailwind CSS"],
    liveUrl: "https://example.com/omniai",
    githubUrl: "https://github.com/igorteles/omniai-studio",
    client: "Omni Tech Labs",
    year: "2024"
  },
  {
    id: "proj-4",
    title: "Vortex Growth — Performance Marketing & Social Campaign",
    category: ["all", "marketing", "branding", "design"],
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    shortDescription: {
      pt: "Campanha multimídia de lançamento de produto com estratégias de tráfego pago, motion graphics e landing page de alta conversão.",
      en: "Multi-channel product launch campaign featuring paid growth funnels, custom motion graphics, and ultra-high conversion landing pages."
    },
    fullDescription: {
      pt: "Estratégia completa de marketing para nova linha B2B SaaS, incluindo vídeos promocionais no Premiere/After Effects, peças para redes sociais e testes A/B.",
      en: "Comprehensive B2B growth marketing stack including motion ads created in Premiere & After Effects, social ad kits, and A/B tested landing pages."
    },
    problem: {
      pt: "Alto custo por aquisição (CAC) nas campanhas anteriores do cliente.",
      en: "Client faced unsustainable Customer Acquisition Costs (CAC) on legacy channels."
    },
    solution: {
      pt: "Redesign dos anúncios criativos e otimização da landing page focada no framework de Copywriting AIDA.",
      en: "Complete creative visual overhaul combined with AIDA copywriting framework landing page optimization."
    },
    results: {
      pt: "Redução de 45% no CAC e ROI de 5.2x durante a campanha de 30 dias.",
      en: "45% reduction in CAC with a 5.2x ROAS over the 30-day launch window."
    },
    technologies: ["Copywriting", "Motion Design", "After Effects", "Figma", "Google Ads", "Meta Ads"],
    client: "Vortex Tech Global",
    year: "2023"
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "srv-1",
    icon: "Palette",
    title: { pt: "Branding & Identidade Visual", en: "Branding & Visual Identity" },
    description: {
      pt: "Criação de ecossistemas visuais memoráveis, estratégias de posicionamento de marca e brand guidelines escaláveis para o mercado global.",
      en: "Creating memorable visual ecosystems, brand positioning frameworks, and scalable design systems tailored for global expansion."
    },
    highlights: [
      { pt: "Logotipos e Marcas", en: "Logo Marks & Identity Systems" },
      { pt: "Brand Guidelines & Manuals", en: "Brand Guidelines & Style Guides" },
      { pt: "Design Systems no Figma", en: "Figma Design Systems" }
    ]
  },
  {
    id: "srv-2",
    icon: "TrendingUp",
    title: { pt: "Marketing Estratégico & Performance", en: "Strategic Growth Marketing" },
    description: {
      pt: "Planejamento de funis de vendas, estratégias de Inbound Marketing, copywriting persuasivo e campanhas digitais focadas em ROI.",
      en: "Sales funnel strategy, Inbound growth frameworks, high-converting copywriting, and ROI-driven paid campaigns."
    },
    highlights: [
      { pt: "Funis de Conversão", en: "Conversion Funnels" },
      { pt: "Copywriting & Storytelling", en: "Persuasive Copywriting" },
      { pt: "Estratégia de Performance", en: "Performance Ad Strategy" }
    ]
  },
  {
    id: "srv-3",
    icon: "Layout",
    title: { pt: "UI/UX Design & Prototipagem", en: "UI/UX Design & Prototyping" },
    description: {
      pt: "Interfaces digitais elegantes, centradas no usuário, testadas e otimizadas para máxima retenção e usabilidade em web e mobile.",
      en: "User-centric, high-converting web and mobile interfaces built with extreme attention to visual detail, microinteractions, and accessibility."
    },
    highlights: [
      { pt: "Protótipos Interativos", en: "Interactive Prototypes" },
      { pt: "Pesquisa de Usuário (UX)", en: "User Experience Research" },
      { pt: "Design Responsivo Moderno", en: "Modern Responsive Layouts" }
    ]
  },
  {
    id: "srv-4",
    icon: "Code2",
    title: { pt: "Desenvolvimento Web & Full Stack", en: "Full Stack Web Engineering" },
    description: {
      pt: "Desenvolvimento de sites e aplicações modernas em React, Next.js, Node.js e TypeScript com alta velocidade e SEO técnico excelente.",
      en: "Building robust, scalable web applications with React, Next.js, Node.js, and TypeScript focused on sub-second speed and clean code."
    },
    highlights: [
      { pt: "Aplicações React & Next.js", en: "React & Next.js Applications" },
      { pt: "APIs REST & Serverless", en: "REST APIs & Serverless Nodes" },
      { pt: "Bancos Firebase & Supabase", en: "Firebase & Supabase Cloud Backends" }
    ]
  },
  {
    id: "srv-5",
    icon: "Zap",
    title: { pt: "Landing Pages de Alta Conversão", en: "High-Converting Landing Pages" },
    description: {
      pt: "Páginas promocionais sob medida desenvolvidas para converter visitantes em clientes qualificados com copywriting e design impecáveis.",
      en: "Bespoke promotional pages built with persuasive copy, seamless motion, and optimized call-to-actions that drive qualified leads."
    },
    highlights: [
      { pt: "Carregamento Instantâneo", en: "Sub-second Page Load" },
      { pt: "Animações com Framer Motion", en: "Fluid Framer Motion FX" },
      { pt: "Integração com CRM & Formularíos", en: "CRM & Form Integrations" }
    ]
  },
  {
    id: "srv-6",
    icon: "Bot",
    title: { pt: "Automações com IA Generativa", en: "AI Automations & Agents" },
    description: {
      pt: "Integração de APIs da OpenAI e Gemini para automatizar fluxos de atendimento, criação de conteúdo e processos de marketing.",
      en: "Integrating OpenAI & Gemini LLM APIs into business workflows to automate customer support, lead qualification, and content pipelines."
    },
    highlights: [
      { pt: "Chatbots & Assistentes Virtuais", en: "AI Chatbots & Agents" },
      { pt: "Engenharia de Prompts", en: "Custom Prompt Engineering" },
      { pt: "Workflows com N8N & Make", en: "N8N & Make Automation Pipelines" }
    ]
  },
  {
    id: "srv-7",
    icon: "Globe",
    title: { pt: "Sites Institucionais Globais", en: "Corporate & Agency Platforms" },
    description: {
      pt: "Portais empresariais multilíngues para posicionar marcas de forma relevante e confiável frente ao mercado europeu e americano.",
      en: "Multilingual enterprise platforms designed to elevate company stature, trust, and brand perception in international markets."
    },
    highlights: [
      { pt: "Suporte Multilíngue (i18n)", en: "Multilingual i18n Architecture" },
      { pt: "SEO Internacional", en: "International Technical SEO" },
      { pt: "CMS Editável sem Código", en: "Headless CMS Integration" }
    ]
  },
  {
    id: "srv-8",
    icon: "PieChart",
    title: { pt: "Dashboards & SaaS Systems", en: "SaaS Systems & Dashboards" },
    description: {
      pt: "Painéis administrativos e softwares em nuvem com gráficos dinâmicos, filtros em tempo real e controle de acesso seguro.",
      en: "Complex data dashboards and cloud software tools equipped with interactive charts, real-time filters, and secure authentication."
    },
    highlights: [
      { pt: "Visualização de Dados (D3/Recharts)", en: "Data Viz (Recharts / D3)" },
      { pt: "Painéis Dark/Light Mode", en: "Sleek Dark & Light Themes" },
      { pt: "Arquitetura Escalável", en: "Scalable Component Tree" }
    ]
  }
];

export const workProcessSteps: WorkProcessStep[] = [
  {
    step: 1,
    title: { pt: "Descoberta & Imersão", en: "Discovery & Immersion" },
    description: {
      pt: "Alinhamento de objetivos, análise de mercado, estudo do público-alvo e levantamento dos requisitos do projeto.",
      en: "Aligning business goals, conducting market research, defining user personas, and specifying core technical scope."
    },
    icon: "Search"
  },
  {
    step: 2,
    title: { pt: "Planejamento Estratégico", en: "Strategic Roadmap" },
    description: {
      pt: "Definição do conceito criativo, arquitetura de informação, mapa de tecnologia e cronograma detalhado de entregas.",
      en: "Defining creative direction, information architecture, tech stack mapping, and structured delivery milestones."
    },
    icon: "Compass"
  },
  {
    step: 3,
    title: { pt: "Pesquisa & Copywriting", en: "Research & Copywriting" },
    description: {
      pt: "Elaboração de textos persuasivos, estruturação do tom de voz da marca e testes de mensagens de valor.",
      en: "Crafting persuasive narrative frameworks, establishing brand voice tone, and refining core value propositions."
    },
    icon: "Feather"
  },
  {
    step: 4,
    title: { pt: "Design & Prototipagem", en: "Design & UI/UX" },
    description: {
      pt: "Criação do visual no Figma, desde wireframes de alta fidelidade até o design system interativo pronto para aprovação.",
      en: "Designing pixel-perfect UI in Figma, building scalable component kits, and interactive wireframes for rapid client review."
    },
    icon: "Figma"
  },
  {
    step: 5,
    title: { pt: "Desenvolvimento Full Stack", en: "Full Stack Engineering" },
    description: {
      pt: "Codificação limpa, componentes React/Next.js otimizados, APIs REST seguras e bancos de dados estruturados.",
      en: "Transforming design into production-grade React/Next.js code with REST APIs, clean modular architecture, and cloud backends."
    },
    icon: "Terminal"
  },
  {
    step: 6,
    title: { pt: "Testes & Otimização", en: "Testing & QA" },
    description: {
      pt: "Testes de usabilidade, checagem de responsividade em múltiplos dispositivos, auditoria de acessibilidade e velocidade.",
      en: "Rigorous cross-device testing, accessibility AA audits, lighthouse speed optimizations, and security verification."
    },
    icon: "CheckCircle2"
  },
  {
    step: 7,
    title: { pt: "Lançamento & Entrega", en: "Launch & Deployment" },
    description: {
      pt: "Deploy em ambiente de produção (Vercel/Cloud Run), configuração de domínio, SSL, analytics e SEO.",
      en: "Production cloud deployment, custom domain & SSL setup, analytics tracking integration, and search indexation."
    },
    icon: "Rocket"
  },
  {
    step: 8,
    title: { pt: "Suporte & Evolução", en: "Support & Iteration" },
    description: {
      pt: "Acompanhamento pós-lançamento, treinamento da equipe do cliente e roadmap de melhorias contínuas.",
      en: "Post-launch monitoring, team documentation walkthrough, and proactive roadmap iterations for steady growth."
    },
    icon: "HeartHandshake"
  }
];

export const techIcons: TechIcon[] = [
  { name: "React", category: "frontend", icon: "Code2", level: "Avançado" },
  { name: "Next.js", category: "frontend", icon: "Globe", level: "Avançado" },
  { name: "TypeScript", category: "frontend", icon: "FileCode", level: "Avançado" },
  { name: "JavaScript", category: "frontend", icon: "FileJson", level: "Avançado" },
  { name: "Tailwind CSS", category: "frontend", icon: "Paintbrush", level: "Avançado" },
  { name: "HTML5 / CSS3", category: "frontend", icon: "Layout", level: "Avançado" },
  
  { name: "Node.js", category: "backend", icon: "Server", level: "Avançado" },
  { name: "Express.js", category: "backend", icon: "Cpu", level: "Avançado" },
  { name: "Firebase", category: "backend", icon: "Database", level: "Intermediário" },
  { name: "Supabase", category: "backend", icon: "Layers", level: "Intermediário" },
  { name: "SQL & Postgre", category: "backend", icon: "HardDrive", level: "Intermediário" },
  { name: "Git & GitHub", category: "backend", icon: "GitBranch", level: "Avançado" },

  { name: "Figma", category: "design", icon: "Figma", level: "Especialista" },
  { name: "Adobe Photoshop", category: "design", icon: "Image", level: "Especialista" },
  { name: "Adobe Illustrator", category: "design", icon: "PenTool", level: "Especialista" },
  { name: "Premiere / After FX", category: "design", icon: "Video", level: "Avançado" },

  { name: "OpenAI API", category: "ai", icon: "Bot", level: "Avançado" },
  { name: "Gemini API", category: "ai", icon: "Sparkles", level: "Avançado" },
  { name: "N8N & Make", category: "ai", icon: "Zap", level: "Avançado" },
  { name: "Python (Básico)", category: "ai", icon: "Terminal", level: "Básico" },

  { name: "Docker", category: "devops", icon: "Box", level: "Estudando / Futuro", isFuture: true },
  { name: "GraphQL", category: "devops", icon: "Share2", level: "Estudando / Futuro", isFuture: true }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "remote",
    question: {
      pt: "Você está disponível para contratação em fuso horário europeu (CET / BST)?",
      en: "Are you available to work synchronously within European timezones (CET / BST)?"
    },
    answer: {
      pt: "Sim, perfeitamente! Tenho total flexibilidade para alinhar meu horário de trabalho aos fusos horários de Londres, Berlim, Amsterdã, Lisboa ou Paris, garantindo reuniões diárias e comunicação em tempo real via Slack/Teams.",
      en: "Yes, absolutely! I maintain high flexibility to align core working hours with London, Berlin, Amsterdam, Lisbon, or Paris timezones, enabling daily standups and continuous real-time Slack/Teams collaboration."
    }
  },
  {
    id: "faq-2",
    category: "contract",
    question: {
      pt: "Quais são os modelos de contratação aceitos?",
      en: "What contract engagement models do you accept?"
    },
    answer: {
      pt: "Atuo via B2B Internacional (Invoice / Contractor), Freelance por Projeto ou Contrato de Trabalho Remoto em tempo integral (Full-time Remote). Possuo empresa aberta para emissão de notas internacionais de serviços.",
      en: "I operate via International B2B Contractor agreements, Fixed-Scope Project Freelancing, or Full-time Remote employment through EOR platforms (Deel, Remote.com). I hold a registered corporate entity for seamless cross-border invoicing."
    }
  },
  {
    id: "faq-3",
    category: "technical",
    question: {
      pt: "Como você une Branding/Design com Desenvolvimento Full Stack no dia a dia?",
      en: "How do you bridge Branding/Design with Full Stack Development in practice?"
    },
    answer: {
      pt: "Minha grande vantagem competitiva é eliminar o 'telefone sem fio' entre o time de design e a engenharia. Consigo conceber a marca, prototipar a interface no Figma pensando na arquitetura de componentes e escrever o código React/TypeScript pronto para produção sem atritos.",
      en: "My core superpower is eliminating the traditional friction between product designers and engineering squads. I design the brand identity, prototype modular Figma UI systems with component tokens in mind, and immediately build production-ready React/TypeScript code."
    }
  },
  {
    id: "faq-4",
    category: "workflow",
    question: {
      pt: "Qual é o seu nível de fluência na língua inglesa?",
      en: "What is your level of English proficiency?"
    },
    answer: {
      pt: "Possuo inglês avançado/fluente para comunicação profissional oral e escrita, elaboração de documentações técnicas, participação em reuniões executivas e apresentações de projetos para clientes internacionais.",
      en: "I speak and write fluent professional English for technical documentation, cross-functional squad standups, client demonstrations, and strategic discussions."
    }
  }
];

export const articlesData: Article[] = [
  {
    id: "art-1",
    title: {
      pt: "Como unificar Branding e Engenharia Frontend para criar produtos memoráveis",
      en: "How to Unify Brand Identity and Frontend Engineering to Build Iconic Products"
    },
    summary: {
      pt: "Descubra como transformar os valores visuais de uma marca em tokens de design e componentes React performáticos.",
      en: "Discover how to translate strategic brand attributes into design tokens and high-performance React component libraries."
    },
    category: "Design & Code",
    date: "15 Jul 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    content: {
      pt: "No mercado atual, marcas de sucesso não se destacam apenas por logotipos bonitos, mas pela consistência de toda a jornada do usuário. Quando um desenvolvedor domina princípios de UI/UX e Branding, a velocidade de lançamento do produto triplica...",
      en: "In today's digital landscape, winning brands succeed not just through polished logos, but through end-to-end user experience consistency. When frontend engineers master UI/UX fundamentals, product speed-to-market triples..."
    },
    tags: ["Branding", "React", "Design System", "Frontend"]
  },
  {
    id: "art-2",
    title: {
      pt: "Automação com IA Generativa no Marketing de Performance em 2024",
      en: "Generative AI Workflows in Modern Performance Marketing"
    },
    summary: {
      pt: "Estudo prático sobre como integrar APIs de IA para gerar copys, análises de concorrência e testes A/B automaticamente.",
      en: "A hands-on guide to integrating LLM APIs for automated ad copy generation, competitive research, and A/B campaign iterations."
    },
    category: "AI & Marketing",
    date: "02 Jun 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    content: {
      pt: "A Inteligência Artificial aplicada ao marketing vai além do ChatGPT básico. Com conectores N8N e APIs da Gemini/OpenAI, é possível criar agentes autônomos que ajustam campanhas de tráfego pago em tempo real...",
      en: "AI in marketing goes far beyond basic prompts. By building autonomous agents using N8N and OpenAI/Gemini endpoints, growth teams can optimize paid funnels automatically..."
    },
    tags: ["AI", "Marketing", "Node.js", "OpenAI"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Lukas Lindqvist",
    role: { pt: "Founder & CEO", en: "Founder & CEO" },
    company: "Nordic Tech Ventures (Stockholm)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    content: {
      pt: "O Igor entregou um trabalho fenomenal. Ele não apenas refez a nossa identidade visual com elegância nórdica, mas construiu a plataforma inteira em React em tempo recorde. Altamente recomendado para qualquer empresa europeia!",
      en: "Igor delivered exceptional work. He didn't just redesign our brand identity with sleek Nordic elegance, but built our entire web app in React in record time. Highly recommended for any European scale-up!"
    },
    countryFlag: "🇸🇪"
  },
  {
    id: "test-2",
    name: "Elena Rostova",
    role: { pt: "VP of Product", en: "VP of Product" },
    company: "Aura Capital (London)",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    content: {
      pt: "A habilidade de transitar do Figma ao código em TypeScript sem nenhuma perda de qualidade visual é rarássima. O Igor é um profissional completo e extremamente organizado.",
      en: "The ability to seamlessly transition from Figma design systems to clean TypeScript code without dropping a single pixel is extremely rare. Igor is a world-class professional."
    },
    countryFlag: "🇬🇧"
  }
];
