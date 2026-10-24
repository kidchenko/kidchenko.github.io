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
				"I grew up in São Paulo and started writing code professionally in 2010. By 2017 I was in Bangkok: first as a senior engineer at Jetabroad, then a tech lead at Thoughtworks, and most recently Head of Engineering at Seven Peaks Software, where I grew a 30-person backend team into a 60-engineer department across 27 nationalities.",
				"Eight years and a lot of conferences, hires, and retros later, I'm back in Brazil. I came home at the end of 2025 with a clearer sense of what I want to build next: use what I learned scaling teams to scale a product instead.",
				"I'm founding two AI-augmented B2B SaaS products: Vera, a company-data enrichment platform, and a .NET SaaS template for starting new projects faster. On the side I ship small open-source tray apps for Windows and macOS. I also run enterprise AI training across APAC and Brazil, and take on consulting work selectively.",
				"I read a lot, lift weights, organize meetups, and care about treating engineers like adults.",
			],
			now: {
				heading: "Now",
				items: [
					"<strong>Building.</strong> Vera (AI-driven company data enrichment), a .NET SaaS template for new projects, and small tray apps like Cota, Porta and Sua Vez.",
					"<strong>Training.</strong> Running enterprise AI workshops (n8n, LLM workflows, automation) for clients across APAC and Brazil.",
					"<strong>Consulting.</strong> Selectively, on engineering architecture, AI integration, and team scaling.",
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
					"Desktop apps and SaaS products I'm building, companies I founded earlier, and open source.",
			},
			eyebrow: "Work",
			heading: "Portfolio",
			lead: "What I'm building now, companies I founded before, and code on GitHub.",
			apps: {
				heading: "Apps",
				lead: "Small tray apps for Windows and macOS, all free and open source, plus two SaaS products still in the yard.",
				visit: "Open →",
				groups: {
					desktop: "Tray apps · Windows and macOS · Free, open source",
					saas: "SaaS · In progress",
				},
				items: [
					{
						slug: "cafe",
						status: "Shipped",
						kind: "App",
						pricing: "Free",
						pricingKey: "free",
						title: "Cafe",
						subtitle: "Keeps your computer awake, from the tray",
						body: "A coffee cup in the tray. Click it and the computer stays awake until you click again or a timer runs out. Steam on the cup means the screen stays on too. About half a megabyte, nothing else to install.",
						stack: "Rust · Windows · macOS",
						href: "https://josebarbosa.dev/cafe/",
						iconAlt: "Cafe coffee cup icon",
					},
					{
						slug: "cantos",
						status: "Shipped",
						kind: "App",
						pricing: "Free",
						pricingKey: "free",
						title: "Cantos",
						subtitle: "Hot corners, with actions you pick",
						body: "Throw the cursor into a corner and something happens: show the desktop, lock, take a screenshot, or open any program. It waits a beat before firing, so stray moves do nothing. On a Mac it edits the system's own hot corners and adds its own actions. Also runs on Linux.",
						stack: "Rust · Windows · macOS · Linux",
						href: "https://josebarbosa.dev/cantos/",
						imageAlt:
							"The Cantos settings window, with a display diagram and an action on each corner",
						iconAlt: "Cantos app icon",
					},
					{
						slug: "cota",
						status: "Shipped",
						kind: "App",
						pricing: "Free",
						pricingKey: "free",
						title: "Cota",
						subtitle: "Your Claude usage limits, in the tray",
						body: "A ring in the tray that fills as your Claude usage does. It turns amber at 75% and red at 90%, and projects when you will run out at the current rate. About a megabyte, no account, no telemetry.",
						stack: "Rust · Windows · macOS",
						href: "https://josebarbosa.dev/cota/",
						imageAlt: "The Cota tray panel, weekly usage at 88 percent in amber",
						iconAlt: "Cota usage ring",
					},
					{
						slug: "luz",
						status: "Shipped",
						kind: "App",
						pricing: "Free",
						pricingKey: "free",
						title: "Luz",
						subtitle: "Warms your screen at night, like f.lux",
						body: "At sunset it shifts the screen to a warm, lamp-like light, slowly enough that you won't notice, and shifts it back in the morning. It uses f.lux's colors and shortcuts, works out sunrise without asking for your location, and never touches the network.",
						stack: "Rust · Windows · macOS",
						href: "https://josebarbosa.dev/luz/",
						iconAlt: "Luz sun icon",
					},
					{
						slug: "porta",
						status: "Shipped",
						kind: "App",
						pricing: "Free",
						pricingKey: "free",
						title: "Porta",
						subtitle: "What's listening on your ports, and a way to stop it",
						body: "Port 3000 is already in use, and one of six node processes has it. Porta lists every server you started from a terminal, with its port, command and uptime. Open one in the browser or stop it in two clicks.",
						stack: "Rust · Windows · macOS",
						href: "https://josebarbosa.dev/porta/",
						iconAlt: "Porta door icon",
					},
					{
						slug: "sonus",
						status: "Shipped",
						kind: "App",
						pricing: "Free",
						pricingKey: "free",
						title: "Sonus",
						subtitle: "A volume slider for every app",
						body: "The call is too quiet and the music is too loud. Click Sonus in the tray for a slider, a level meter and a mute button for each app playing sound, with the output device at the top. macOS has no per-app volume of its own.",
						stack: "Rust · Windows · macOS",
						href: "https://josebarbosa.dev/sonus/",
						imageAlt: "The Sonus mixer, with sliders for Spotify, Brave, Slack, Discord and Teams",
						iconAlt: "Sonus app icon",
					},
					{
						slug: "suavez",
						status: "Shipped",
						kind: "App",
						pricing: "Free",
						pricingKey: "free",
						title: "Sua Vez",
						subtitle: "Tells you when your coding agent needs you",
						body: "A speech bubble in the tray that turns amber when an agent is waiting on a permission prompt and green when it's done. Works with Claude Code, Codex, Gemini CLI and Devin. Click a session to bring its terminal to the front.",
						stack: "Rust · Windows · macOS",
						href: "https://josebarbosa.dev/suavez/",
						iconAlt: "Sua Vez speech bubble icon",
					},
					{
						slug: "vera",
						status: "Building",
						kind: "SaaS",
						pricing: "Paid",
						pricingKey: "paid",
						title: "Vera",
						subtitle: "AI-driven company data enrichment",
						body: "Finds and enriches company data with AI. Built for sales teams and analysts who want clean, current information about their pipeline without the manual digging.",
						stack: "AI · B2B · SaaS",
						imageAlt: "The Vera partnership inbox, three matched companies with match scores",
						iconAlt: "Vera network mark",
					},
					{
						slug: "dotnet-saas",
						status: "Building",
						kind: "SaaS",
						pricing: "Paid",
						pricingKey: "paid",
						title: ".NET SaaS",
						subtitle: "Template to speed up new .NET projects",
						body: "A template for starting .NET products quickly: production-ready, idiomatic backend code that stays easy to maintain after launch.",
						stack: ".NET · SaaS",
						imageAlt: "The .NET SaaS billing page, with plan, amount, and payment history",
						iconAlt: ".NET SaaS grid mark",
					},
				],
			},
			past: {
				heading: "Past ventures",
				items: [
					{
						period: "2019-2023",
						title: "Isho Group",
						subtitle: "Thailand · CEO and Founder",
						body: "Founded and registered an independent company in Thailand while employed full-time. Built and operated a small mining operation, achieving 2x return on operational costs through procurement, energy, and supply-chain optimization.",
					},
					{
						period: "Earlier",
						title: "Unline",
						subtitle: "Brazil · Co-founder, Germinadora",
						body: "Second startup from the Germinadora incubator era. Closed a $15K seed round to fund early development.",
					},
					{
						period: "Earlier",
						title: "Rose",
						subtitle: "Brazil · Co-founder, Germinadora",
						body: "B2C startup founded during the Germinadora incubator era. Microsoft Imagine Cup finalist; raised over $100K in early funding.",
					},
				],
			},
			oss: {
				heading: "Open source",
				body: "Most of what I build ends up on GitHub. Lately that means the tray apps above, .NET boilerplates, and tooling for working with AI agents.",
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
		footer: {
			elsewhere: "Elsewhere",
			navigate: "Navigate",
			rss: "RSS",
		},
		cv: {
			meta: {
				title: "CV",
				description:
					"Jose Barbosa's CV. Engineering Director with 15+ years scaling engineering teams and high-traffic systems across Southeast Asia and Latin America.",
			},
			eyebrow: "Resume",
			heading: "CV",
			print: "Print / Save PDF",
			lead: "Engineering Director, 15+ years scaling teams and high-traffic systems across Southeast Asia and Latin America.",
			printName: "Jose Barbosa",
			printTitle: "Director of Engineering",
			contact: {
				label: "Contact",
				location: "São Paulo, BR / Bangkok, TH",
				locationPrint: "São Paulo, BR \u00a0\u00a0 Bangkok, TH",
			},
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
						"After scaling Seven Peaks Software's engineering department, transitioned to full-time founder and technical consultant. Building two AI-augmented B2B SaaS products: <strong>Vera</strong> (AI-driven company data enrichment platform) and <strong>.NET SaaS</strong> (template to speed up new .NET projects).",
						"Running product operations end to end (B2B sales, customer support, marketing) through AI automation pipelines. Delivering AI and automation training (n8n, LLM workflows) for SMBs in Brazil. Technical consulting on backend architecture, AI integration, and system audits.",
						"Shipped seven open-source desktop utilities in Rust for Windows and macOS: Cota, Cantos, Cafe, Luz, Porta, Sonus and Sua Vez.",
					],
					stack: "AI, LLMs, n8n, SaaS, B2B Sales, .NET, Node.js, Product Operations",
				},
				{
					period: "08/2022 - 12/2025",
					location: "Bangkok, Thailand",
					title: "Seven Peaks Software",
					role: "Head of Backend Engineering, Head of Engineering",
					body: [
						"<strong>Head of Backend.</strong> Joined to structure the backend department. Mapped strengths, weaknesses, and operational gaps in the first 90 days. Established weekly knowledge-sharing sessions, bi-monthly technical workshops (DDD, OWASP, AI, Performance), monthly team newsletters, and four governance teams (Onboarding, Process & Practices, Recruitment, Community & Mastery). The workshop program later became a paid product: AI training for enterprise clients, including a leading Thai utility.",
						"<strong>Head of Engineering.</strong> Promoted within a year. Unified backend, web, and mobile into one department with 4 principals and 12 tech leads, and grew it from 30 to 60 engineers across 27+ nationalities, with distributed teams in India and Eastern Europe. Owned a multi-million USD annual P&amp;L.",
						"Hired 20+ engineers across Thailand and abroad and redesigned the interview process to improve hiring quality and speed at scale. Maintained bi-weekly 1:1s with 12 direct reports and quarterly 1:1s with every engineer in the department. The retention work that came out of those conversations halved quarterly attrition over the tenure.",
						"Created the Leader Development Program (LDP) to develop tech leads. Led three full appraisal cycles using a custom-built tool to pull data and metrics about the engineering team. Built internal automation that saves 600K+ THB/year in operational and cloud costs.",
					],
					stack:
						"Enterprise AI Training, Team Scaling, P&L Management, Distributed Teams, Engineering Culture, Azure, AWS",
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
					stack:
						".NET, AWS, Kafka, Distributed Systems, Data Migration, PII Compliance, Architecture, Mentoring",
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
					stack:
						".NET, AWS, High-Scale Systems, Performance Optimization, Cost Reduction, Data Pipelines",
				},
				{
					period: "2010 - 2017",
					location: "São Paulo, Brazil",
					title: "Earlier career",
					body: [
						"<strong>Lambda3.</strong> Mid-Engineer, Senior Engineer, Lead Software Engineer / DevOps Consultant.",
						"<strong>Germinadora.</strong> Founded two startups: Rose (Imagine Cup finalist, $100K+ raised) and Unline ($15K seed).",
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
				body: "Co-organizer and speaker at <strong>.NET Conf Thailand</strong> since 2018 (7 years). It is the largest .NET conference in Thailand, with ~200 attendees a year and support from Microsoft. Grew the conference team from 3 to 7. Organizer of <strong>.NET Bangkok Meetup</strong>. Speaker at technical events across Latin America and Southeast Asia. <strong>Microsoft Imagine Cup Finalist</strong>.",
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
				"Cresci em São Paulo e comecei a programar profissionalmente em 2010. Em 2017 eu já estava em Bangkok: primeiro como engenheiro sênior na Jetabroad, depois tech lead na Thoughtworks, e mais recentemente Head de Engenharia na Seven Peaks Software, onde transformei um time de backend de 30 pessoas para um departamento de 60 engenheiros de 27 nacionalidades.",
				"Oito anos e muitas conferências, contratações e retros depois, voltei pro Brasil. Cheguei em casa no fim de 2025 com uma ideia mais clara do que quero construir: usar o que aprendi escalando times pra escalar um produto.",
				"Estou fundando dois produtos B2B SaaS aumentados por IA: Vera, uma plataforma de enriquecimento de dados corporativos, e um template SaaS em .NET para começar novos projetos mais rápido. Nas horas vagas lanço pequenos apps de bandeja open source para Windows e macOS. Também dou treinamentos corporativos de IA na APAC e no Brasil, e pego consultoria de forma seletiva.",
				"Eu leio bastante, treino musculação, organizo meetups, e me importo em tratar engenheiros como adultos.",
			],
			now: {
				heading: "Agora",
				items: [
					"<strong>Construindo.</strong> Vera (enriquecimento de dados corporativos com IA), um template SaaS em .NET para novos projetos, e apps de bandeja como Cota, Porta e Sua Vez.",
					"<strong>Treinando.</strong> Workshops corporativos de IA (n8n, workflows com LLM, automação) para clientes na APAC e no Brasil.",
					"<strong>Consultando.</strong> De forma seletiva, em arquitetura de engenharia, integração de IA e escalonamento de times.",
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
					"Apps de desktop e produtos SaaS que estou construindo, empresas que fundei antes, e open source.",
			},
			eyebrow: "Trabalho",
			heading: "Portfólio",
			lead: "O que estou construindo agora, empresas que fundei antes, e código no GitHub.",
			apps: {
				heading: "Apps",
				lead: "Pequenos apps de bandeja para Windows e macOS, todos grátis e open source, e dois SaaS ainda no estaleiro.",
				visit: "Abrir →",
				groups: {
					desktop: "Apps de bandeja · Windows e macOS · Grátis, open source",
					saas: "SaaS · Em construção",
				},
				items: [
					{
						slug: "cafe",
						status: "Lançado",
						kind: "App",
						pricing: "Grátis",
						pricingKey: "free",
						title: "Cafe",
						subtitle: "Mantém o computador acordado, da bandeja",
						body: "Uma xícara de café na bandeja. Clique e o computador fica acordado até você clicar de novo ou um timer acabar. Xícara com vapor quer dizer que a tela também fica ligada. Cerca de meio megabyte, nada mais para instalar.",
						stack: "Rust · Windows · macOS",
						href: "https://josebarbosa.dev/cafe/",
						iconAlt: "Ícone de xícara do Cafe",
					},
					{
						slug: "cantos",
						status: "Lançado",
						kind: "App",
						pricing: "Grátis",
						pricingKey: "free",
						title: "Cantos",
						subtitle: "Hot corners, com as ações que você escolher",
						body: "Joga o cursor num canto e alguma coisa acontece: mostrar a área de trabalho, bloquear, tirar um print, ou abrir qualquer programa. Ele espera um instante antes de disparar, então movimentos acidentais não fazem nada. No Mac, edita os hot corners do próprio sistema e adiciona ações dele. Também roda no Linux.",
						stack: "Rust · Windows · macOS · Linux",
						href: "https://josebarbosa.dev/cantos/",
						imageAlt:
							"A janela de configurações do Cantos, com o diagrama da tela e uma ação em cada canto",
						iconAlt: "Ícone do Cantos",
					},
					{
						slug: "cota",
						status: "Lançado",
						kind: "App",
						pricing: "Grátis",
						pricingKey: "free",
						title: "Cota",
						subtitle: "Seus limites de uso do Claude, na bandeja",
						body: "Um anel na bandeja que enche conforme o seu uso do Claude. Fica âmbar em 75% e vermelho em 90%, e projeta quando você vai estourar no ritmo atual. Cerca de um megabyte, sem conta, sem telemetria.",
						stack: "Rust · Windows · macOS",
						href: "https://josebarbosa.dev/cota/",
						imageAlt: "O painel do Cota na bandeja, uso semanal em 88 por cento, em âmbar",
						iconAlt: "Anel de uso do Cota",
					},
					{
						slug: "luz",
						status: "Lançado",
						kind: "App",
						pricing: "Grátis",
						pricingKey: "free",
						title: "Luz",
						subtitle: "Esquenta a tela à noite, como o f.lux",
						body: "No pôr do sol, muda a tela para uma luz quente de abajur, devagar o bastante para você não perceber, e volta de manhã. Usa as cores e atalhos do f.lux, calcula o nascer do sol sem pedir sua localização, e nunca usa a rede.",
						stack: "Rust · Windows · macOS",
						href: "https://josebarbosa.dev/luz/",
						iconAlt: "Ícone de sol do Luz",
					},
					{
						slug: "porta",
						status: "Lançado",
						kind: "App",
						pricing: "Grátis",
						pricingKey: "free",
						title: "Porta",
						subtitle: "O que está escutando nas suas portas, e como parar",
						body: "A porta 3000 já está em uso, e um de seis processos node está com ela. O Porta lista cada servidor que você subiu pelo terminal, com porta, comando e tempo no ar. Abra no navegador ou pare em dois cliques.",
						stack: "Rust · Windows · macOS",
						href: "https://josebarbosa.dev/porta/",
						iconAlt: "Ícone de porta do Porta",
					},
					{
						slug: "sonus",
						status: "Lançado",
						kind: "App",
						pricing: "Grátis",
						pricingKey: "free",
						title: "Sonus",
						subtitle: "Um controle de volume para cada app",
						body: "A call está baixa e a música está alta. Clique no Sonus na bandeja e cada app tocando som ganha um slider, um medidor de nível e um botão de mudo, com o dispositivo de saída no topo. O macOS não tem volume por app.",
						stack: "Rust · Windows · macOS",
						href: "https://josebarbosa.dev/sonus/",
						imageAlt: "O mixer do Sonus, com sliders para Spotify, Brave, Slack, Discord e Teams",
						iconAlt: "Ícone do Sonus",
					},
					{
						slug: "suavez",
						status: "Lançado",
						kind: "App",
						pricing: "Grátis",
						pricingKey: "free",
						title: "Sua Vez",
						subtitle: "Avisa quando seu agente de código precisa de você",
						body: "Um balão na bandeja que fica âmbar quando um agente está esperando uma permissão e verde quando termina. Funciona com Claude Code, Codex, Gemini CLI e Devin. Clique numa sessão para trazer o terminal dela para frente.",
						stack: "Rust · Windows · macOS",
						href: "https://josebarbosa.dev/suavez/",
						iconAlt: "Ícone de balão do Sua Vez",
					},
					{
						slug: "vera",
						status: "Construindo",
						kind: "SaaS",
						pricing: "Pago",
						pricingKey: "paid",
						title: "Vera",
						subtitle: "Enriquecimento de dados corporativos com IA",
						body: "Busca e enriquece dados de empresas com IA. Feito para times de vendas e analistas que querem informação limpa e atualizada sobre o pipeline, sem garimpo manual.",
						stack: "IA · B2B · SaaS",
						imageAlt: "A inbox de parcerias da Vera, três empresas com índice de compatibilidade",
						iconAlt: "Marca de rede da Vera",
					},
					{
						slug: "dotnet-saas",
						status: "Construindo",
						kind: "SaaS",
						pricing: "Pago",
						pricingKey: "paid",
						title: ".NET SaaS",
						subtitle: "Template para acelerar novos projetos .NET",
						body: "Um template para começar produtos .NET rápido: código backend pronto pra produção, idiomático e fácil de manter depois do lançamento.",
						stack: ".NET · SaaS",
						imageAlt:
							"A página de cobrança do .NET SaaS, com plano, valor e histórico de pagamentos",
						iconAlt: "Marca em grade do .NET SaaS",
					},
				],
			},
			past: {
				heading: "Empresas anteriores",
				items: [
					{
						period: "2019-2023",
						title: "Isho Group",
						subtitle: "Tailândia · CEO e Fundador",
						body: "Fundei e registrei uma empresa independente na Tailândia enquanto trabalhava em tempo integral. Construí e operei uma pequena operação de mineração, atingindo retorno 2x sobre custos operacionais via otimização de compras, energia, e cadeia de suprimentos.",
					},
					{
						period: "Anterior",
						title: "Unline",
						subtitle: "Brasil · Co-fundador, Germinadora",
						body: "Segunda startup da era da incubadora Germinadora. Fechou rodada seed de US$ 15 mil para custear o desenvolvimento inicial.",
					},
					{
						period: "Anterior",
						title: "Rose",
						subtitle: "Brasil · Co-fundador, Germinadora",
						body: "Startup B2C fundada na era da incubadora Germinadora. Finalista do Microsoft Imagine Cup; captou mais de US$ 100 mil em rodada inicial.",
					},
				],
			},
			oss: {
				heading: "Open source",
				body: "Quase tudo que eu construo vai parar no GitHub. Ultimamente: os apps de bandeja acima, boilerplates .NET, e ferramentas para trabalhar com agentes de IA.",
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
					'Aviso: prospecção fria, spam genérico de recrutador, e pedidos de "papo rápido" sem contexto costumam ser arquivados.',
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
		footer: {
			elsewhere: "Em outros lugares",
			navigate: "Navegação",
			rss: "RSS",
		},
		cv: {
			meta: {
				title: "CV",
				description:
					"CV de Jose Barbosa. Diretor de Engenharia com 15+ anos escalando times de engenharia e sistemas de alto tráfego pelo Sudeste Asiático e América Latina.",
			},
			eyebrow: "Currículo",
			heading: "CV",
			print: "Imprimir / Salvar PDF",
			lead: "Diretor de Engenharia, 15+ anos escalando times e sistemas de alto tráfego pelo Sudeste Asiático e América Latina.",
			printName: "Jose Barbosa",
			printTitle: "Diretor de Engenharia",
			contact: {
				label: "Contato",
				location: "São Paulo, BR / Bangkok, TH",
				locationPrint: "São Paulo, BR \u00a0\u00a0 Bangkok, TH",
			},
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
						"Após escalar o departamento de engenharia da Seven Peaks Software, transicionei para fundador em tempo integral e consultor técnico. Construindo dois produtos B2B SaaS aumentados por IA: <strong>Vera</strong> (plataforma de enriquecimento de dados corporativos com IA) e <strong>.NET SaaS</strong> (template para acelerar novos projetos .NET).",
						"Operando o produto ponta a ponta (vendas B2B, suporte ao cliente, marketing) com pipelines de automação com IA. Entregando treinamentos de IA e automação (n8n, workflows com LLM) para PMEs no Brasil. Consultoria técnica em arquitetura backend, integração de IA e auditoria de sistemas.",
						"Lancei sete utilitários de desktop open source em Rust para Windows e macOS: Cota, Cantos, Cafe, Luz, Porta, Sonus e Sua Vez.",
					],
					stack: "IA, LLMs, n8n, SaaS, Vendas B2B, .NET, Node.js, Operações de Produto",
				},
				{
					period: "08/2022 - 12/2025",
					location: "Bangkok, Tailândia",
					title: "Seven Peaks Software",
					role: "Head de Backend Engineering, Head de Engenharia",
					body: [
						"<strong>Head de Backend.</strong> Entrei para estruturar o departamento de backend. Mapeei pontos fortes, fracos e gaps operacionais nos primeiros 90 dias. Estabeleci sessões semanais de compartilhamento de conhecimento, workshops técnicos bimensais (DDD, OWASP, IA, Performance), newsletters mensais do time, e quatro times de governança (Onboarding, Process & Practices, Recruitment, Community & Mastery). Depois, o programa de workshops virou um produto pago: treinamento em IA para clientes corporativos, incluindo uma das principais empresas de energia da Tailândia.",
						"<strong>Head de Engenharia.</strong> Promovido em menos de um ano. Unifiquei backend, web e mobile num único departamento com 4 principals e 12 tech leads, e cresci de 30 para 60 engenheiros de 27+ nacionalidades, com times distribuídos na Índia e Europa Oriental. Responsável por um P&amp;L anual em milhões de USD.",
						"Contratei 20+ engenheiros na Tailândia e no exterior e redesenhei o processo de entrevista para melhorar a qualidade e a velocidade da contratação em escala. Mantive 1:1s quinzenais com 12 reports diretos e 1:1s trimestrais com cada engenheiro do departamento. As iniciativas de retenção que saíram dessas conversas cortaram a atrição trimestral pela metade.",
						"Criei o Leader Development Program (LDP) para desenvolver tech leads. Liderei três ciclos completos de avaliação usando uma ferramenta interna pra puxar dados e métricas do time de engenharia. Construí automação interna que economiza 600K+ THB/ano em custos operacionais e de cloud.",
					],
					stack:
						"Treinamento Corporativo de IA, Escalonamento de Times, Gestão de P&L, Times Distribuídos, Cultura de Engenharia, Azure, AWS",
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
					stack:
						".NET, AWS, Kafka, Sistemas Distribuídos, Migração de Dados, Compliance PII, Arquitetura, Mentoria",
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
					stack:
						".NET, AWS, Sistemas de Alta Escala, Otimização de Performance, Redução de Custos, Pipelines de Dados",
				},
				{
					period: "2010 - 2017",
					location: "São Paulo, Brasil",
					title: "Carreira anterior",
					body: [
						"<strong>Lambda3.</strong> Engenheiro Pleno, Engenheiro Sênior, Lead Software Engineer / Consultor DevOps.",
						"<strong>Germinadora.</strong> Fundei duas startups: Rose (finalista do Imagine Cup, US$ 100K+ captados) e Unline (US$ 15K seed).",
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
				body: "Co-organizador e palestrante na <strong>.NET Conf Thailand</strong> desde 2018 (7 anos). É a maior conferência .NET da Tailândia, com ~200 participantes por ano e apoio da Microsoft. Cresci o time da conferência de 3 para 7 pessoas. Organizador do <strong>.NET Bangkok Meetup</strong>. Palestrante em eventos técnicos pela América Latina e Sudeste Asiático. <strong>Finalista do Microsoft Imagine Cup</strong>.",
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
