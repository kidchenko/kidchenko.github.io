export const languages = {
	en: "English",
	pt: "Português",
} as const;

export const defaultLang = "en" as const;

export type Lang = keyof typeof languages;

export const ui = {
	en: {
		nav: {
			home: "Home",
			about: "About",
			portfolio: "Portfolio",
			writing: "Writing",
			cv: "CV",
			contact: "Contact",
		},
		common: {
			languageLabel: "Language",
		},
		home: {
			meta: { title: "Engineering Director" },
			heroName: "Jose Barbosa",
			heroRole: "Engineering Director",
			heroFocus: "AI Agents / SaaS / Team Building / Distributed Teams",
			heroBlurb:
				"15 years building engineering teams across Thailand and Brazil. Ex-Thoughtworks; ran a <strong>60-engineer department</strong> with <strong>$3M+ P&amp;L</strong>, <strong>27 nationalities</strong>. Now founding AI products and consulting from Brazil.",
			scrollCue: "Selected outcomes",
			outcomesHeading: "Selected outcomes",
			outcomes: [
				{
					eyebrow: "01 / Scale",
					heading: "Led an engineering team of 60.",
					body: "At Seven Peaks Software, promoted from Head of Backend to Head of Engineering within a year. Led the 60-engineer department via 16 direct reports (4 principals, 12 tech leads) across 27 nationalities, with distributed teams in India and Eastern Europe.",
				},
				{
					eyebrow: "02 / Retention",
					heading: "Halved quarterly attrition.",
					body: "Bi-weekly 1:1s with 12 direct reports, quarterly 1:1s with every engineer in the department. Redesigned the interview process to filter for fit early. Created the Leader Development Program for tech leads.",
				},
				{
					eyebrow: "03 / Revenue",
					heading: "Trained enterprise engineering teams on AI.",
					body: "Two tracks: AI-augmented development (LLM workflows, agentic coding patterns) and building AI agents (n8n, LLM orchestration, production deployment). Both started as bi-monthly internal workshops, then became a paid enterprise program. Clients include a leading Thai utility.",
				},
			],
			featuredHeading: "Featured writing",
		},
		about: {
			meta: {
				title: "About",
				description:
					"Engineering Director who scaled teams across Thailand and Brazil. Now founding AI products and consulting from São Paulo.",
			},
			eyebrow: "Profile",
			heading: "About",
			photoAlt: "Jose Barbosa, casual portrait",
			hi: "Hi, I'm Jose.",
			intro: [
				"I grew up in São Paulo and started writing code professionally in 2010. By 2017 I was in Bangkok - first as a senior engineer at Jetabroad, then a tech lead at Thoughtworks, and most recently as Head of Engineering at Seven Peaks Software, where I scaled a 30-person backend team into a 60-engineer department across 27 nationalities.",
				"Eight years and a lot of conferences, hires, and retros later, I'm back in Brazil. I came home at the end of 2025 with a clearer sense of what I want to build next: leverage what I've learned about scaling teams to scale a product instead.",
				"I'm currently founding two AI-augmented B2B SaaS products - Vera, a company-data enrichment platform, and a .NET SaaS for AI-augmented backend development - while running enterprise AI training across APAC and Brazil, and consulting selectively.",
				"I read a lot, lift weights, organize meetups, and care about treating engineers like adults.",
			],
			now: {
				heading: "Now",
				items: [
					"<strong>Building.</strong> Vera (AI-driven company data enrichment) and a .NET SaaS for AI-augmented backend development.",
					"<strong>Training.</strong> Running enterprise AI workshops (n8n, LLM workflows, automation) for clients across APAC and Brazil.",
					"<strong>Consulting.</strong> Selectively, on engineering architecture, AI integration, and team scaling.",
					"<strong>Writing.</strong> First posts coming soon.",
				],
			},
			beyond: {
				heading: "Beyond engineering",
				body: [
					"I've founded a few companies before this one. <strong>Rose</strong> was a student-era startup that became a Microsoft Imagine Cup finalist and raised over $100K. <strong>Unline</strong> followed with a $15K seed. Later, while working full-time in Bangkok, I founded <strong>Isho Group</strong>, a small mining operation in Thailand that returned 2x on operational costs through procurement and supply-chain optimization.",
					"I co-organize <strong>.NET Conf Thailand</strong>, the largest .NET conference in Thailand (~200 attendees, 7 years and counting), and have spoken at conferences across Latin America and Southeast Asia. I invest, lift, and spend a lot of weekends on AI automation pipelines.",
				],
			},
			reading: {
				heading: "Reading & interests",
				lead: "I read broadly. The books I return to:",
				items: [
					"<strong>Engineering & leadership:</strong> <em>The Making of a Manager</em>, <em>Managing Humans</em>, <em>Leading Effective Engineering Teams</em>",
					"<strong>Teams:</strong> <em>The Five Dysfunctions of a Team</em>",
					"<strong>Strategy & decisions:</strong> <em>Principles</em> (Dalio), <em>The First 90 Days</em>",
					"<strong>Human nature:</strong> <em>The Laws of Human Nature</em>, <em>Atomic Habits</em>",
					"<strong>Stoicism:</strong> <em>Meditations</em>, <em>Letters from a Stoic</em>, <em>Tao Te Ching</em>",
				],
				closing:
					"Topics I think about most: organizational design, AI and automation, product strategy, and stoic decision-making.",
			},
			connect: {
				heading: "Connect",
				body: 'Best way to reach me is via <a href="{contactUrl}">the contact form</a>. You can also find me on <a href="https://github.com/kidchenko" rel="noreferrer" target="_blank">GitHub</a> and <a href="https://linkedin.com/in/kidchenko" rel="noreferrer" target="_blank">LinkedIn</a>.',
			},
		},
		portfolio: {
			meta: {
				title: "Portfolio",
				description:
					"Things I'm building, ventures I've founded, and code I've shared. Active SaaS products, past startups, and open source.",
			},
			eyebrow: "Work",
			heading: "Portfolio",
			lead: "Things I'm building, ventures I've founded, and code I've shared.",
			now: {
				heading: "Building now",
				eyebrow: "2026",
				items: [
					{
						label: "Building",
						title: "Vera",
						subtitle: "AI-driven company data enrichment platform",
						body: "B2B SaaS that pulls and enriches company data using AI for sales teams, analysts, and operators who need clean, current information about their pipeline. Product operations - sales, support, marketing - run through AI automation pipelines.",
					},
					{
						label: "Building",
						title: ".NET SaaS",
						subtitle: "AI-augmented backend boilerplate for .NET developers",
						body: "A SaaS that generates production-ready .NET backend boilerplate using AI. Speeds up project bootstrapping while keeping the generated code idiomatic and maintainable.",
					},
				],
			},
			past: {
				heading: "Past ventures",
				items: [
					{
						period: "2019-2023",
						title: "Isho Group",
						subtitle: "Thailand - CEO and Founder",
						body: "Founded and registered an independent company in Thailand while employed full-time. Built and operated a small mining operation, achieving 2x return on operational costs through procurement, energy, and supply-chain optimization.",
					},
					{
						period: "Earlier",
						title: "Unline",
						subtitle: "Brazil - Co-founder, Germinadora",
						body: "Second startup from the Germinadora incubator era. Closed a $15K seed round to fund early development.",
					},
					{
						period: "Earlier",
						title: "Rose",
						subtitle: "Brazil - Co-founder, Germinadora",
						body: "B2C startup founded during the Germinadora incubator era. Microsoft Imagine Cup finalist; raised over $100K in early funding.",
					},
				],
			},
			oss: {
				heading: "Open source",
				body: "I publish projects, experiments, and small tools on GitHub. Recently: AI-augmentation tooling, .NET boilerplates, and utilities I use myself.",
				link: "View all on GitHub →",
			},
		},
		contact: {
			meta: {
				title: "Contact",
				description:
					"Get in touch with Jose Barbosa. For consulting inquiries, AI training, or anything that needs a real reply.",
			},
			eyebrow: "Channels",
			heading: "Contact",
			lead: "Drop a note. I'm interested in consulting, AI training engagements, and conversations about engineering at scale. The more specific your message, the faster the reply.",
			form: {
				name: "Name",
				email: "Email",
				subject: "Subject",
				subjectOptional: "(optional)",
				message: "Message",
				submit: "Send message",
				sending: "Sending...",
				success: "Message sent. I'll get back to you.",
				error: "Something went wrong. Try again, or email kidchenko@gmail.com directly.",
				honeypotLabel: "Leave this field empty",
			},
			other: {
				heading: "Other ways to reach me",
				items: [
					{
						url: "https://linkedin.com/in/kidchenko",
						name: "LinkedIn",
						note: "best for professional inquiries",
					},
					{
						url: "https://github.com/kidchenko",
						name: "GitHub",
						note: "for open source and code",
					},
				],
				footnote:
					'Note: cold sales, generic recruiter spam, and "quick chat" requests without context tend to get archived.',
			},
		},
		writing: {
			meta: {
				title: "Writing",
				description:
					"Notes on engineering leadership, scaling teams, AI-augmented work, and what I'm thinking about.",
			},
			eyebrow: "Notes",
			heading: "Writing",
			lead: "Notes on engineering leadership, scaling teams, AI-augmented work, and what I'm thinking about.",
			featured: "Featured",
			tags: "Tags",
			viewAll: "View all",
			viewAllSr: "blog tags",
			postsInYear: "Posts in",
			rssLabel: "RSS feed",
			pagination: { prev: "← Previous Page", next: "Next Page →" },
		},
		cv: {
			meta: {
				title: "CV",
				description:
					"CV of Jose Barbosa - Engineering Director with 15+ years scaling engineering teams and high-traffic systems across Southeast Asia and Latin America.",
			},
			eyebrow: "Resume",
			heading: "CV",
			print: "Print / Save PDF",
			lead: "Engineering Director, 15+ years scaling teams and high-traffic systems across Southeast Asia and Latin America.",
			printName: "Jose Barbosa",
			printTitle: "Director of Engineering",
			contact: { label: "Contact", location: "São Paulo, BR / Bangkok, TH", locationPrint: "São Paulo, BR \u00a0\u00a0 Bangkok, TH" },
			summary: {
				label: "Summary",
				body: [
					"Engineering leader with <strong>15+ years</strong> scaling teams and high-traffic systems across Southeast Asia and Latin America. Promoted within a year from Head of Backend to Head of Engineering at Seven Peaks Software, scaling the department from <strong>30 to 60 engineers across 27+ nationalities</strong> (4 principals, 12 tech leads) while owning a <strong>multi-million USD annual P&amp;L</strong>. Hired 20+ engineers across Thailand and abroad, redesigned the interview process, and halved quarterly attrition over the tenure.",
					"At Thoughtworks, led technical strategy for 50+ engineers across 9 squads serving a leading Australian airline, and delivered a real-time <strong>1.5TB</strong> Kafka migration pipeline with built-in PII compliance. Earlier scaled a global travel platform from <strong>5M to 20M+ daily requests</strong>. Today: founder of two AI-augmented B2B SaaS products, enterprise AI training partner across APAC and Brazil (clients include a leading Thai utility), and 7-year organizer of .NET Conf Thailand.",
				],
			},
			workHeading: "Work history",
			work: [
				{
					period: "12/2025 - Current",
					location: "Brazil",
					title: "Founder & Technical Consultant",
					body: [
						"After scaling Seven Peaks Software's engineering department, transitioned to full-time founder and technical consultant. Building two AI-augmented B2B SaaS products: <strong>Vera</strong> (AI-driven company data enrichment platform) and <strong>.NET SaaS</strong> (AI boilerplate generator for .NET developers).",
						"Running end-to-end product operations - B2B sales, customer support, marketing - via AI automation pipelines. Delivering AI and automation training (n8n, LLM workflows) for SMBs in Brazil. Technical consulting on backend architecture, AI integration, and system audits. Working on open-source projects and community.",
					],
					stack: "AI, LLMs, n8n, SaaS, B2B Sales, .NET, Node.js, Product Operations",
				},
				{
					period: "08/2022 - 12/2025",
					location: "Bangkok, Thailand",
					title: "Seven Peaks Software",
					role: "Head of Backend Engineering, Head of Engineering",
					body: [
						"<strong>Head of Backend.</strong> Joined to structure the backend department. Mapped strengths, weaknesses, and operational gaps in the first 90 days. Established weekly knowledge-sharing sessions, bi-monthly technical workshops (DDD, OWASP, AI, Performance), monthly team newsletters, and four governance teams (Onboarding, Process & Practices, Recruitment, Community & Mastery). The workshop program evolved into a revenue-generating product, delivering paid AI training to enterprise clients including a leading Thai utility.",
						"<strong>Head of Engineering.</strong> Promoted within a year, unifying backend, web, and mobile under one department, managing 4 principals and 12 tech leads, scaling from 30 to 60 engineers across 27+ nationalities, with distributed teams in India and Eastern Europe. Owned a multi-million USD annual P&amp;L.",
						"Hired 20+ engineers across Thailand and abroad and redesigned the interview process to improve hiring quality and speed at scale. Maintained bi-weekly 1:1s with 12 direct reports and quarterly 1:1s with every engineer in the department, driving retention initiatives that halved quarterly attrition over the tenure.",
						"Created the Leader Development Program (LDP) to develop tech leads. Led three full appraisal cycles using a custom-built tool to pull data and metrics about the engineering team. Delivered internal automation, saving 600K+ THB/year in operational and cloud costs.",
					],
					stack: "Enterprise AI Training, Team Scaling, P&L Management, Distributed Teams, Engineering Culture, Azure, AWS",
				},
				{
					period: "01/2020 - 08/2022",
					location: "Bangkok, Thailand",
					title: "Thoughtworks",
					role: "Senior Software Engineer, Tech Lead, Principal Engineer",
					body: [
						"Led technical strategy and delivery for a 50+ person account across 9 squads, developing an omnichannel API for a leading Australian airline. Owned architecture, testing strategy, and the full development lifecycle.",
						"Designed and delivered a real-time data migration pipeline processing <strong>1.5TB+</strong> using Kafka, with built-in reconciliation and PII compliance for sensitive government data. Performance partner for 2 engineers, providing ongoing mentoring and career development. Recognized as senior leadership both by the client and within Thoughtworks.",
					],
					stack: ".NET, AWS, Kafka, Distributed Systems, Data Migration, PII Compliance, Architecture, Mentoring",
				},
				{
					period: "01/2019 - 09/2023",
					location: "Nonthaburi, Thailand",
					locationNote: "(side venture)",
					title: "Isho Group",
					role: "CEO and Founder",
					body: [
						"Founded and registered an independent company in Thailand while employed full-time. Built and operated a small mining operation, achieving 2x return on operational costs through procurement, energy, and supply-chain optimization.",
					],
					stack: "Operations, Cost Optimization, International Supply Chain",
				},
				{
					period: "12/2017 - 12/2019",
					location: "Bangkok, Thailand",
					title: "Jetabroad",
					role: "Senior Software Engineer, Lead Software Engineer",
					body: [
						"First international role. Scaled platform from <strong>5M to 20M daily requests</strong>, growing infrastructure from 20 to 100 AWS instances. Optimized GDS query logging to consolidate redundant API calls, reducing AWS costs by ~$2K+/month. Built data pipelines for business reporting. Owned bi-weekly release cycles with A/B testing.",
					],
					stack: ".NET, AWS, High-Scale Systems, Performance Optimization, Cost Reduction, Data Pipelines",
				},
				{
					period: "2010 - 2017",
					location: "São Paulo, Brazil",
					title: "Earlier career",
					body: [
						"<strong>Lambda3.</strong> Mid-Engineer, Senior Engineer, Lead Software Engineer / DevOps Consultant.",
						"<strong>Germinadora.</strong> Founded two startups - Rose (Imagine Cup finalist, $100K+ raised) and Unline ($15K seed).",
						"<strong>Arcnet.</strong> Software Engineer / Scrum Master.",
					],
					stack: "C#, JavaScript, Azure, Docker, CI/CD, Scrum, DevOps, Microservices, Startups",
				},
			],
			eduHeading: "Education",
			edu: [
				{
					period: "2010 - 2013",
					title: "Salvador Arena Foundation Educational Center",
					role: "Bachelor in Systems Analysis and Development",
				},
				{
					period: "2008 - 2009",
					title: "ETEC Jorge Street",
					role: "Vocational Diploma in Mechatronics and Electronics",
				},
			],
			skillsHeading: "Skills",
			skills: [
				{
					label: "Leadership & people",
					body: "Team scaling (30 to 60 across 27+ nationalities); distributed teams (India, Eastern Europe); 1:1 programs at scale (bi-weekly with reports, quarterly with every engineer); performance reviews & appraisal cycles; coaching & mentoring; Leader Development Programs; OKRs; engineering culture.",
				},
				{
					label: "Strategy & vision",
					body: "Technical strategy & engineering roadmaps; engineering org design; architecture decision-making; build-vs-buy evaluation; multi-year planning; executive & stakeholder reporting; data-driven engineering decisions.",
				},
				{
					label: "Engineering excellence",
					body: "Governance programs (process, recruitment, onboarding, community); knowledge-sharing & technical workshop programs; engineering metrics tooling; quality & code-review practices; security & compliance (OWASP, PII); technical due diligence & system audits.",
				},
				{
					label: "Operations & business",
					body: "P&L management at multi-million USD scale; budgeting & capacity planning; revenue forecasting; vendor & cost optimization; risk management; stakeholder management; hiring at scale; public speaking.",
				},
				{
					label: "AI & automation",
					body: "Enterprise AI workshop design & delivery; LLM-augmented product development; AI automation across sales, marketing, and support; n8n workflow automation; engineering team AI enablement; AI-driven SaaS operations.",
				},
				{
					label: "Technical",
					body: ".NET, Node.js, TypeScript, Python, AWS, Azure, Kafka, Kubernetes, microservices, distributed systems.",
				},
			],
			community: {
				label: "Community & speaking",
				body: "Co-organizer and speaker at <strong>.NET Conf Thailand</strong> since 2018 (7 years) - the largest .NET conference in Thailand, ~200 attendees annually, supported by Microsoft. Grew the conference team from 3 to 7. Organizer of <strong>.NET Bangkok Meetup</strong>. Speaker at technical events across Latin America and Southeast Asia. <strong>Microsoft Imagine Cup Finalist</strong>.",
			},
			learning: {
				label: "Continuous learning",
				body: "<strong>100+ courses</strong> completed across distributed systems, cloud architecture, DDD, DevSecOps, and Kubernetes. AWS Partner Training. <strong>PSD</strong> (Professional Scrum Developer) certified.",
			},
			languages: {
				label: "Languages",
				body: "Portuguese (Native), English (Fluent), Spanish (Basic), Thai (Basic).",
			},
		},
	},
	pt: {
		nav: {
			home: "Início",
			about: "Sobre",
			portfolio: "Portfólio",
			writing: "Blog",
			cv: "CV",
			contact: "Contato",
		},
		common: {
			languageLabel: "Idioma",
		},
		home: {
			meta: { title: "Diretor de Engenharia" },
			heroName: "Jose Barbosa",
			heroRole: "Diretor de Engenharia",
			heroFocus: "AI Agents / SaaS / Team Building / Distributed Teams",
			heroBlurb:
				"15 anos construindo times de engenharia entre Tailândia e Brasil. Ex-Thoughtworks; liderei um <strong>departamento de 60 engenheiros</strong> com <strong>P&amp;L de US$ 3M+</strong>, <strong>27 nacionalidades</strong>. Atualmente fundando produtos de IA e atuando como consultor no Brasil.",
			scrollCue: "Resultados selecionados",
			outcomesHeading: "Resultados selecionados",
			outcomes: [
				{
					eyebrow: "01 / Escala",
					heading: "Liderei um time de engenharia de 60 pessoas.",
					body: "Na Seven Peaks Software, fui promovido de Head de Backend para Head de Engenharia em menos de um ano. Liderei o departamento de 60 engenheiros via 16 reports diretos (4 principals, 12 tech leads) de 27 nacionalidades, com times distribuídos na Índia e Europa Oriental.",
				},
				{
					eyebrow: "02 / Retenção",
					heading: "Cortei a atrição trimestral pela metade.",
					body: "1:1s quinzenais com 12 reports diretos e trimestrais com cada engenheiro do departamento. Redesenhei o processo de entrevista para filtrar fit cedo. Criei o Leader Development Program para tech leads.",
				},
				{
					eyebrow: "03 / Receita",
					heading: "Treinei times de engenharia corporativos em IA.",
					body: "Duas trilhas: desenvolvimento aumentado por IA (workflows com LLM, padrões de codificação com agentes) e construção de AI Agents (n8n, orquestração de LLM, deploy em produção). Ambas começaram como workshops internos bimensais, viraram um programa pago corporativo. Clientes incluem uma das principais empresas de energia da Tailândia.",
				},
			],
			featuredHeading: "Em destaque",
		},
		about: {
			meta: {
				title: "Sobre",
				description:
					"Diretor de Engenharia que escalou times na Tailândia e no Brasil. Agora fundando produtos de IA e consultando de São Paulo.",
			},
			eyebrow: "Perfil",
			heading: "Sobre",
			photoAlt: "Jose Barbosa, retrato casual",
			hi: "Oi, eu sou o Jose.",
			intro: [
				"Cresci em São Paulo e comecei a programar profissionalmente em 2010. Em 2017 eu já estava em Bangkok - primeiro como engenheiro sênior na Jetabroad, depois tech lead na Thoughtworks, e mais recentemente Head de Engenharia na Seven Peaks Software, onde escalei um time de backend de 30 pessoas para um departamento de 60 engenheiros de 27 nacionalidades.",
				"Oito anos e muitas conferências, contratações e retros depois, voltei pro Brasil. Cheguei em casa no fim de 2025 com uma ideia mais clara do que quero construir: usar o que aprendi escalando times pra escalar um produto.",
				"Atualmente estou fundando dois produtos B2B SaaS aumentados por IA - Vera, uma plataforma de enriquecimento de dados corporativos, e um SaaS em .NET para desenvolvimento backend aumentado por IA - enquanto ministro treinamentos corporativos de IA em toda a APAC e no Brasil, e atuo como consultor de forma seletiva.",
				"Eu leio bastante, treino musculação, organizo meetups, e me importo em tratar engenheiros como adultos.",
			],
			now: {
				heading: "Agora",
				items: [
					"<strong>Construindo.</strong> Vera (enriquecimento de dados corporativos com IA) e um SaaS em .NET para desenvolvimento backend aumentado por IA.",
					"<strong>Treinando.</strong> Workshops corporativos de IA (n8n, workflows com LLM, automação) para clientes na APAC e no Brasil.",
					"<strong>Consultando.</strong> De forma seletiva, em arquitetura de engenharia, integração de IA e escalonamento de times.",
					"<strong>Escrevendo.</strong> Primeiros posts em breve.",
				],
			},
			beyond: {
				heading: "Além da engenharia",
				body: [
					"Já fundei algumas empresas antes dessa. <strong>Rose</strong> foi uma startup da época da faculdade que virou finalista do Microsoft Imagine Cup e captou mais de US$ 100 mil. <strong>Unline</strong> veio depois com US$ 15 mil de seed. Mais tarde, enquanto trabalhava em tempo integral em Bangkok, fundei o <strong>Isho Group</strong>, uma pequena operação de mineração na Tailândia que retornou 2x sobre os custos operacionais via otimização de compras e cadeia de suprimentos.",
				"Co-organizo o <strong>.NET Conf Thailand</strong>, a maior conferência .NET da Tailândia (~200 participantes, 7 anos e contando), e já palestrei em conferências pela América Latina e Sudeste Asiático. Eu invisto, treino, e passo muitos fins de semana em pipelines de automação com IA.",
				],
			},
			reading: {
				heading: "Leituras e interesses",
				lead: "Eu leio bastante. Os livros aos quais eu volto:",
				items: [
					"<strong>Engenharia e liderança:</strong> <em>The Making of a Manager</em>, <em>Managing Humans</em>, <em>Leading Effective Engineering Teams</em>",
					"<strong>Times:</strong> <em>Os 5 Desafios das Equipes</em>",
					"<strong>Estratégia e decisões:</strong> <em>Princípios</em> (Dalio), <em>Os Primeiros 90 Dias</em>",
					"<strong>Natureza humana:</strong> <em>As Leis da Natureza Humana</em>, <em>Hábitos Atômicos</em>",
					"<strong>Estoicismo:</strong> <em>Meditações</em>, <em>Cartas de um Estoico</em>, <em>Tao Te Ching</em>",
				],
				closing:
					"Temas que eu mais penso: design organizacional, IA e automação, estratégia de produto, e tomada de decisão estoica.",
			},
			connect: {
				heading: "Contato",
				body: 'A melhor forma de me contatar é via <a href="{contactUrl}">o formulário de contato</a>. Você também me encontra no <a href="https://github.com/kidchenko" rel="noreferrer" target="_blank">GitHub</a> e no <a href="https://linkedin.com/in/kidchenko" rel="noreferrer" target="_blank">LinkedIn</a>.',
			},
		},
		portfolio: {
			meta: {
				title: "Portfólio",
				description:
					"Coisas que estou construindo, empresas que fundei, e código que compartilhei. SaaS em atividade, startups passadas, e open source.",
			},
			eyebrow: "Trabalho",
			heading: "Portfólio",
			lead: "Coisas que estou construindo, empresas que fundei, e código que compartilhei.",
			now: {
				heading: "Construindo agora",
				eyebrow: "2026",
				items: [
					{
						label: "Construindo",
						title: "Vera",
						subtitle: "Plataforma de enriquecimento de dados corporativos com IA",
						body: "B2B SaaS que extrai e enriquece dados de empresas usando IA, para times de vendas, analistas e operadores que precisam de informação limpa e atualizada sobre o pipeline. Operações do produto - vendas, suporte, marketing - rodam via pipelines de automação com IA.",
					},
					{
						label: "Construindo",
						title: ".NET SaaS",
						subtitle: "Boilerplate backend aumentado por IA para devs .NET",
						body: "Um SaaS que gera boilerplate backend .NET pronto pra produção usando IA. Acelera o bootstrap de projetos mantendo o código gerado idiomático e fácil de manter.",
					},
				],
			},
			past: {
				heading: "Empresas anteriores",
				items: [
					{
						period: "2019-2023",
						title: "Isho Group",
						subtitle: "Tailândia - CEO e Fundador",
						body: "Fundei e registrei uma empresa independente na Tailândia enquanto trabalhava em tempo integral. Construí e operei uma pequena operação de mineração, atingindo retorno 2x sobre custos operacionais via otimização de compras, energia, e cadeia de suprimentos.",
					},
					{
						period: "Anterior",
						title: "Unline",
						subtitle: "Brasil - Co-fundador, Germinadora",
						body: "Segunda startup da era da incubadora Germinadora. Fechou rodada seed de US$ 15 mil para custear o desenvolvimento inicial.",
					},
					{
						period: "Anterior",
						title: "Rose",
						subtitle: "Brasil - Co-fundador, Germinadora",
						body: "Startup B2C fundada na era da incubadora Germinadora. Finalista do Microsoft Imagine Cup; captou mais de US$ 100 mil em rodada inicial.",
					},
				],
			},
			oss: {
				heading: "Open source",
				body: "Eu publico projetos, experimentos e ferramentas pequenas no GitHub. Recentemente: tooling pra augmentation com IA, boilerplates .NET, e utilidades que eu mesmo uso.",
				link: "Ver tudo no GitHub →",
			},
		},
		contact: {
			meta: {
				title: "Contato",
				description:
					"Entre em contato com Jose Barbosa. Para consultoria, treinamentos de IA, ou qualquer coisa que mereça uma resposta de verdade.",
			},
			eyebrow: "Canais",
			heading: "Contato",
			lead: "Manda uma mensagem. Tenho interesse em consultoria, treinamentos de IA, e conversas sobre engenharia em escala. Quanto mais específica a mensagem, mais rápida a resposta.",
			form: {
				name: "Nome",
				email: "E-mail",
				subject: "Assunto",
				subjectOptional: "(opcional)",
				message: "Mensagem",
				submit: "Enviar mensagem",
				sending: "Enviando...",
				success: "Mensagem enviada. Eu volto pra você.",
				error: "Algo deu errado. Tente de novo, ou mande direto para kidchenko@gmail.com.",
				honeypotLabel: "Deixe este campo vazio",
			},
			other: {
				heading: "Outras formas de contato",
				items: [
					{
						url: "https://linkedin.com/in/kidchenko",
						name: "LinkedIn",
						note: "melhor para questões profissionais",
					},
					{
						url: "https://github.com/kidchenko",
						name: "GitHub",
						note: "para open source e código",
					},
				],
				footnote:
					"Aviso: prospecção fria, spam genérico de recrutador, e pedidos de \"papo rápido\" sem contexto costumam ser arquivados.",
			},
		},
		writing: {
			meta: {
				title: "Blog",
				description:
					"Notas sobre liderança em engenharia, escalonamento de times, trabalho aumentado por IA, e o que ando pensando.",
			},
			eyebrow: "Notas",
			heading: "Blog",
			lead: "Notas sobre liderança em engenharia, escalonamento de times, trabalho aumentado por IA, e o que ando pensando.",
			featured: "Em destaque",
			tags: "Tags",
			viewAll: "Ver todas",
			viewAllSr: "tags do blog",
			postsInYear: "Posts em",
			rssLabel: "Feed RSS",
			pagination: { prev: "← Página anterior", next: "Próxima página →" },
		},
		cv: {
			meta: {
				title: "CV",
				description:
					"CV de Jose Barbosa - Diretor de Engenharia com 15+ anos escalando times de engenharia e sistemas de alto tráfego pelo Sudeste Asiático e América Latina.",
			},
			eyebrow: "Currículo",
			heading: "CV",
			print: "Imprimir / Salvar PDF",
			lead: "Diretor de Engenharia, 15+ anos escalando times e sistemas de alto tráfego pelo Sudeste Asiático e América Latina.",
			printName: "Jose Barbosa",
			printTitle: "Diretor de Engenharia",
			contact: { label: "Contato", location: "São Paulo, BR / Bangkok, TH", locationPrint: "São Paulo, BR \u00a0\u00a0 Bangkok, TH" },
			summary: {
				label: "Resumo",
				body: [
					"Líder de engenharia com <strong>15+ anos</strong> escalando times e sistemas de alto tráfego pelo Sudeste Asiático e América Latina. Promovido em menos de um ano de Head de Backend para Head de Engenharia na Seven Peaks Software, escalando o departamento de <strong>30 para 60 engenheiros de 27+ nacionalidades</strong> (4 principals, 12 tech leads) com <strong>P&amp;L anual em milhões de USD</strong>. Contratei 20+ engenheiros na Tailândia e no exterior, redesenhei o processo de entrevista, e cortei pela metade a atrição trimestral ao longo do período.",
					"Na Thoughtworks, liderei a estratégia técnica para 50+ engenheiros em 9 squads atendendo uma das maiores companhias aéreas da Austrália, e entreguei um pipeline de migração Kafka em tempo real de <strong>1.5TB</strong> com compliance de PII embutido. Antes, escalei uma plataforma global de viagens de <strong>5M para 20M+ requisições diárias</strong>. Hoje: fundador de dois SaaS B2B aumentados por IA, parceiro de treinamento corporativo em IA pela APAC e Brasil (clientes incluem uma das principais empresas de energia da Tailândia), e há 7 anos organizador da .NET Conf Thailand.",
				],
			},
			workHeading: "Histórico profissional",
			work: [
				{
					period: "12/2025 - Atual",
					location: "Brasil",
					title: "Fundador e Consultor Técnico",
					body: [
						"Após escalar o departamento de engenharia da Seven Peaks Software, transicionei para fundador em tempo integral e consultor técnico. Construindo dois produtos B2B SaaS aumentados por IA: <strong>Vera</strong> (plataforma de enriquecimento de dados corporativos com IA) e <strong>.NET SaaS</strong> (gerador de boilerplate IA para desenvolvedores .NET).",
						"Operando o produto ponta a ponta - vendas B2B, suporte ao cliente, marketing - via pipelines de automação com IA. Entregando treinamentos de IA e automação (n8n, workflows com LLM) para PMEs no Brasil. Consultoria técnica em arquitetura backend, integração de IA e auditoria de sistemas. Trabalhando em projetos open source e comunidade.",
					],
					stack: "IA, LLMs, n8n, SaaS, Vendas B2B, .NET, Node.js, Operações de Produto",
				},
				{
					period: "08/2022 - 12/2025",
					location: "Bangkok, Tailândia",
					title: "Seven Peaks Software",
					role: "Head de Backend Engineering, Head de Engenharia",
					body: [
						"<strong>Head de Backend.</strong> Entrei para estruturar o departamento de backend. Mapeei pontos fortes, fracos e gaps operacionais nos primeiros 90 dias. Estabeleci sessões semanais de compartilhamento de conhecimento, workshops técnicos bimensais (DDD, OWASP, IA, Performance), newsletters mensais do time, e quatro times de governança (Onboarding, Process & Practices, Recruitment, Community & Mastery). O programa de workshops virou um produto gerador de receita, entregando treinamento pago em IA para clientes corporativos incluindo uma das principais empresas de energia da Tailândia.",
						"<strong>Head de Engenharia.</strong> Promovido em menos de um ano, unificando backend, web e mobile sob um único departamento, gerenciando 4 principals e 12 tech leads, escalando de 30 para 60 engenheiros de 27+ nacionalidades, com times distribuídos na Índia e Europa Oriental. P&amp;L anual em milhões de USD.",
						"Contratei 20+ engenheiros na Tailândia e no exterior e redesenhei o processo de entrevista para melhorar a qualidade e a velocidade da contratação em escala. Mantive 1:1s quinzenais com 12 reports diretos e 1:1s trimestrais com cada engenheiro do departamento, com iniciativas de retenção que cortaram a atrição trimestral pela metade.",
						"Criei o Leader Development Program (LDP) para desenvolver tech leads. Liderei três ciclos completos de avaliação usando uma ferramenta interna pra puxar dados e métricas do time de engenharia. Entreguei automação interna, economizando 600K+ THB/ano em custos operacionais e de cloud.",
					],
					stack: "Treinamento Corporativo de IA, Escalonamento de Times, Gestão de P&L, Times Distribuídos, Cultura de Engenharia, Azure, AWS",
				},
				{
					period: "01/2020 - 08/2022",
					location: "Bangkok, Tailândia",
					title: "Thoughtworks",
					role: "Senior Software Engineer, Tech Lead, Principal Engineer",
					body: [
						"Liderei a estratégia técnica e a entrega de uma conta de 50+ pessoas em 9 squads, desenvolvendo uma API omnichannel para uma das maiores companhias aéreas da Austrália. Responsável pela arquitetura, estratégia de testes, e ciclo completo de desenvolvimento.",
						"Projetei e entreguei um pipeline de migração de dados em tempo real processando <strong>1.5TB+</strong> usando Kafka, com reconciliação e compliance de PII embutidos para dados governamentais sensíveis. Performance partner de 2 engenheiros, com mentoria contínua e desenvolvimento de carreira. Reconhecido como senior leadership tanto pelo cliente quanto dentro da Thoughtworks.",
					],
					stack: ".NET, AWS, Kafka, Sistemas Distribuídos, Migração de Dados, Compliance PII, Arquitetura, Mentoria",
				},
				{
					period: "01/2019 - 09/2023",
					location: "Nonthaburi, Tailândia",
					locationNote: "(empreendimento paralelo)",
					title: "Isho Group",
					role: "CEO e Fundador",
					body: [
						"Fundei e registrei uma empresa independente na Tailândia enquanto trabalhava em tempo integral. Construí e operei uma pequena operação de mineração, atingindo retorno 2x sobre custos operacionais via otimização de compras, energia e cadeia de suprimentos.",
					],
					stack: "Operações, Otimização de Custos, Cadeia de Suprimentos Internacional",
				},
				{
					period: "12/2017 - 12/2019",
					location: "Bangkok, Tailândia",
					title: "Jetabroad",
					role: "Senior Software Engineer, Lead Software Engineer",
					body: [
						"Primeira posição internacional. Escalei a plataforma de <strong>5M para 20M de requisições diárias</strong>, crescendo a infraestrutura de 20 para 100 instâncias AWS. Otimizei o logging de queries GDS pra consolidar chamadas de API redundantes, reduzindo custo AWS em ~US$ 2K+/mês. Construí pipelines de dados para reporting de negócio. Responsável por ciclos de release quinzenais com A/B testing.",
					],
					stack: ".NET, AWS, Sistemas de Alta Escala, Otimização de Performance, Redução de Custos, Pipelines de Dados",
				},
				{
					period: "2010 - 2017",
					location: "São Paulo, Brasil",
					title: "Carreira anterior",
					body: [
						"<strong>Lambda3.</strong> Engenheiro Pleno, Engenheiro Sênior, Lead Software Engineer / Consultor DevOps.",
						"<strong>Germinadora.</strong> Fundei duas startups - Rose (finalista do Imagine Cup, US$ 100K+ captados) e Unline (US$ 15K seed).",
						"<strong>Arcnet.</strong> Engenheiro de Software / Scrum Master.",
					],
					stack: "C#, JavaScript, Azure, Docker, CI/CD, Scrum, DevOps, Microsserviços, Startups",
				},
			],
			eduHeading: "Educação",
			edu: [
				{
					period: "2010 - 2013",
					title: "Centro Educacional Fundação Salvador Arena",
					role: "Bacharelado em Análise e Desenvolvimento de Sistemas",
				},
				{
					period: "2008 - 2009",
					title: "ETEC Jorge Street",
					role: "Diploma Técnico em Mecatrônica e Eletrônica",
				},
			],
			skillsHeading: "Competências",
			skills: [
				{
					label: "Liderança e pessoas",
					body: "Escalonamento de times (30 para 60, com 27+ nacionalidades); times distribuídos (Índia, Europa Oriental); programas de 1:1 em escala (quinzenais com reports, trimestrais com cada engenheiro); ciclos de avaliação de performance; coaching e mentoria; Leader Development Programs; OKRs; cultura de engenharia.",
				},
				{
					label: "Estratégia e visão",
					body: "Estratégia técnica e roadmaps de engenharia; design organizacional de engenharia; tomada de decisão arquitetural; avaliação build-vs-buy; planejamento de múltiplos anos; reporting executivo e para stakeholders; decisões de engenharia orientadas por dados.",
				},
				{
					label: "Excelência em engenharia",
					body: "Programas de governança (processo, recrutamento, onboarding, comunidade); programas de compartilhamento de conhecimento e workshops técnicos; tooling de métricas de engenharia; práticas de qualidade e code review; segurança e compliance (OWASP, PII); due diligence técnica e auditoria de sistemas.",
				},
				{
					label: "Operações e negócio",
					body: "Gestão de P&L em escala de milhões de USD; orçamento e planejamento de capacidade; previsão de receita; otimização de fornecedores e custos; gestão de risco; gestão de stakeholders; contratação em escala; palestras públicas.",
				},
				{
					label: "IA e automação",
					body: "Design e entrega de workshops corporativos de IA; desenvolvimento de produto aumentado por LLM; automação com IA em vendas, marketing e suporte; automação de workflow com n8n; capacitação de times de engenharia em IA; operações de SaaS orientadas por IA.",
				},
				{
					label: "Técnico",
					body: ".NET, Node.js, TypeScript, Python, AWS, Azure, Kafka, Kubernetes, microsserviços, sistemas distribuídos.",
				},
			],
			community: {
				label: "Comunidade e palestras",
				body: "Co-organizador e palestrante na <strong>.NET Conf Thailand</strong> desde 2018 (7 anos) - a maior conferência .NET da Tailândia, ~200 participantes anualmente, apoiada pela Microsoft. Cresci o time da conferência de 3 para 7 pessoas. Organizador do <strong>.NET Bangkok Meetup</strong>. Palestrante em eventos técnicos pela América Latina e Sudeste Asiático. <strong>Finalista do Microsoft Imagine Cup</strong>.",
			},
			learning: {
				label: "Aprendizado contínuo",
				body: "<strong>100+ cursos</strong> concluídos em sistemas distribuídos, arquitetura cloud, DDD, DevSecOps e Kubernetes. AWS Partner Training. Certificado <strong>PSD</strong> (Professional Scrum Developer).",
			},
			languages: {
				label: "Idiomas",
				body: "Português (Nativo), Inglês (Fluente), Espanhol (Básico), Tailandês (Básico).",
			},
		},
	},
} as const;
