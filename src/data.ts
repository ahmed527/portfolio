// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavLink {
	name: string;
	href: string;
}

export interface SkillCategory {
	category: string;
	items: string[];
}

export interface ExperienceEntry {
	company: string;
	role: string;
	period: string;
	location: string;
	countryCode: string;
	description: string;
	achievements: string[];
}

export interface ProjectEntry {
	title: string;
	fullName: string;
	client: string;
	tech: string[];
	details: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
	{ name: 'Home', href: '#home' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Experience', href: '#experience' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Certifications & Education', href: '#education' },
];

export const skills: SkillCategory[] = [
	{
		category: "Back-End Architecture",
		items: [".NET | 3.5 - 10", "ASP.NET MVC", "C#", "Web API", "EF Core | 4 - 10", "Microservices", "Hibernate", "RabbitMQ", "SSRS", "Backround Jobs"]
	},
	{
		category: "Front-End Development",
		items: ["Angular | 7, 8, 14, 20", "React", "Vue.js", "TypeScript", "JavaScript", "HTML5/CSS3", "Bootstrap | 3 - 5"]
	},
	{
		category: "Cloud & DevOps",
		items: ["Azure", "Docker", "Kubernetes", "CI/CD Pipelines", "Azure DevOps", "Application Insights"]
	},
	{
		category: "Databases",
		items: ["SQL Server", "Oracle | 10g - 19c", "Redis", "MongoDB", "Firebase"]
	}
];

export const experience: ExperienceEntry[] = [
	{
		company: "Collasys LLC (Contractor for PennDot)",
		role: "Senior Full Stack .NET Developer",
		period: "Oct 2025 – Present",
		location: "PA",
		countryCode: "us",
		description: "MATP Mileage Reimbursement.",
		achievements: [
			"Develop and optimize secure, scalable web applications using .NET and Angular.",
			"Leverage Azure services (Key Vault, Functions, Redis Cache, Storage Accounts, etc.) and integrate them with the application.",
			"Implement user authentication using OAuth2, OIDC  and Siteminder.",
			"Ensure WCAG 2.1 AA accessibility and compliance with state privacy regulations."
		]
	},
	{
		company: "Sigma Resources (Contractor for Deloitte)",
		role: "Senior Full Stack .NET Developer",
		period: "Nov 2022 – Oct 2025",
		location: "PA",
		countryCode: "us",
		description: "COMPASS and eCIS Modernization for the State of Pennsylvania.",
		achievements: [
			"Modernized the COMPASS system by transitioning from a legacy .NET monolith to a highly scalable .NET microservices architecture.",
			"Modernized the eCIS system from a legacy mainframe to a .NET architecture, enhancing scalability and significantly reducing processing time for large-scale datasets.",
			"Developed .NET Web API with Oracle and MSSQL.",
			"Implemented background jobs to process massive data efficiently at scale.",
			"Optimized application architecture, significantly enhancing response times.",
		]
	},
	{
		company: "Collabrium Systems (Contractor for CAI)",
		role: "Full Stack .NET Developer",
		period: "May 2022 – Jul 2022",
		location: "PA",
		countryCode: "us",
		description: "NG911 Emergency Response System.",
		achievements: [
			"Designed key software components ensuring real-time data accuracy.",
			"Modernized real-time data processing solutions using React, .NET Web API and SQL.",
			"Fine-tuned performance for front-end and back-end applications."
		]
	},
	{
		company: "Sigma Resources, State of Wisconsin",
		role: ".NET Developer",
		period: "Jan 2022 – May 2022",
		location: "PA",
		countryCode: "us",
		description: "WIC (Women, Infants and Children) Nutrition Program.",
		achievements: [
			"Developed and maintained software solutions using ASP.NET and JavaScript.",
			"Designed secure backend solutions to support high-traffic user interactions.",
			"Optimized SQL queries to improve database efficiency and reduce response times.",
			"Automated nightly benefit processing and data validation."
		]
	},
	{
		company: "Sigma Resources, (Contractor for Deloitte)",
		role: ".NET Developer",
		period: "Nov 2020 – Jan 2022",
		location: "PA",
		countryCode: "us",
		description: "WCAIS (Workers' Compensation Automation and Integration System).",
		achievements: [
			"Developed .NET Web APIs to streamline data processing.",
			"Built Vue.js based UI components improving responsiveness.",
			"Collaborated on seamless integration of statewide regulatory compliance features."
		]
	},
	{
		company: "Sigma Resources, (Contractor for Deloitte)",
		role: ".NET Developer",
		period: "Apr 2020 – Jul 2020",
		location: "PA",
		countryCode: "us",
		description: "Compass Project API Implementation.",
		achievements: [
			"Implemented new API features integrating .NET Web API with Oracle databases.",
			"Developed custom authentication middleware to meet security requirements.",
			"Built key features to automate claims processing."
		]
	},
	{
		company: "Jackson State University Innovation Center",
		role: "Research And Teaching Assistant (Software Developer)",
		period: "Aug 2019 – Apr 2020",
		location: "MS",
		countryCode: "us",
		description: "University Registration & Management Applications.",
		achievements: [
			"Led development of web-based registration apps using .NET and Flutter.",
			"Provided mentorship to junior developers on full-stack practices."
		]
	},
	{
		company: "The Cohen International Group (TCIG)",
		role: "Software Developer",
		period: "Jun 2018 – Jul 2019",
		location: "Bahrain",
		countryCode: "bh",
		description: "Travel Solutions Platform.",
		achievements: [
			"Developed applications using .NET, Angular, React, and RabbitMQ.",
			"Implemented RESTful APIs and integrated third-party services.",
			"Optimized backend services enhancing scalability."
		]
	},
	{
		company: "Reliance Technology",
		role: "Software Engineer",
		period: "Feb 2017 – May 2018",
		location: "Sudan",
		countryCode: "sd",
		description: "Banking & Enterprise Applications.",
		achievements: [
			"Built Electronic Cheque Clearing (ECC) and ERP platforms.",
			"Managed full SDLC from requirement gathering to deployment and maintenance.",
			"Designed secure backend architectures for enterprise apps.",
			"Collaborated with clients to analyze business requirements, translating them into robust application features through iterative feedback loops."
		]
	}
];

export const projects: ProjectEntry[] = [
	{
		title: "MATP Mileage Reimbursement",
		fullName: "Medical Assistance Transportation Program",
		client: "PennDOT  - State of Pennsylvania",
		tech: [".NET", "Angular", "Azure", "SQL", "Azure DevOps"],
		details: [
			"Develop and optimize .NET and Angular applications for PennDOT Medicaid and MATP reimbursement systems, ensuring high scalability, accessibility (WCAG 2.1 AA) and secure data exchange.",
			"Implement security standards by integrating the application with SiteMinder using OpenID Connect and OAuth 2.0 with PKCE, enforcing strict access control policies.",
			"Integrate a variety of Azure services with the application."
		]
	},
	{
		title: "eCIS Modernization",
		fullName: "Electronic Client Information System",
		client: "DHS - State of Pennsylvania",
		tech: [".NET", "Oracle", "SSRS Reports", "Batches", "TFS"],
		details: [
			"Complete modernization of legacy systems to a robust architecture, improving maintainability.",
			"Significantly enhanced system performance and scalability for state-wide usage.",
			"Implemented Batches (Background jobs) to handle large data processing.",
			"Implemented SSRS Reports for generating reports.",
		]
	},
	{
		title: "NG911 Emergency Response",
		fullName: "Next Generation 9-1-1",
		client: "PennDOT - State of Pennsylvania",
		tech: ["React", ".NET Web API", "Real-time Data", "Azure DevOps"],
		details: [
			"Built the full-stack application, developing secure .NET Web APIs for backend services and a responsive React frontend for the user interface.",
			"Real-time processing system for emergency dispatch services, ensuring critical data accuracy.",
			"Greatly improved response times for critical emergency queries."
		]
	},
	{
		title: "Compass",
		fullName: "Commonwealth of Pennsylvania Application for Social Services",
		client: "DHS - State of Pennsylvania",
		tech: ["Web API", "Azure DevOps", "Oracle", "SSRS Reports", "Batches"],
		details: [
			"Transitioned the Compass platform to latest .NET technology with a focus on API performance and security (Modernization)",
			"Automated deployment and testing reduced release cycles and manual errors.",
			"Implemented Batches (Background jobs) to handle large data processing.",
			"Implemented SSRS Reports for generating reports.",
			"Maintained the legacy application by adding new features as per the new requirements, beside fixing issues."
		]
	},
	{
		title: "WIC Nutrition Program",
		fullName: "Special Supplemental Nutrition Program for Women, Infants, and Children",
		client: "DHS - State of Wisconsin",
		tech: [".NET Web API", "JavaScript", "SQL Server", "TFS"],
		details: [
			"Developed secure .NET Web APIs and plain JavaScript front-ends for real-time eligibility and data interaction.",
			"Managed complex SQL Server databases and automated nightly benefit processing and data validation using SQL Server Jobs.",
			"Optimized .NET API response times by tuning bottlenecked SQL Server queries for high-traffic clinic modules.",
			"Reduced server load and enhanced UX with client-side validation and dynamic content rendering using plain JavaScript."
		]
	},
	{
		title: "WCAIS",
		fullName: "Workers' Compensation Automation and Integration System",
		client: "L&I - State of Pennsylvania",
		tech: [".NET Web API", "PWA", "UI Components", "Vue", "TFS"],
		details: [
			"Built the full-stack application, developing secure .NET Web APIs for backend services and a responsive Vue.js frontend for the user interface.",
			"Created reusable component libraries for commonly requested UI elements, enabling quicker future development and promoting a consistent user experience.",
			"Integrated progressive web app (PWA) features, ensuring smooth performance across multiple devices."
		]
	}
];

export const profileStack = ['.NET', 'Angular', 'React', 'Azure'];
