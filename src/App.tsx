import { useState, useEffect } from 'react';
import {
	Menu, X, Linkedin, Mail, Phone, MapPin,
	ChevronRight, Database,
	Cloud, Layout, Server, Moon, Sun,
	Award, Briefcase, GraduationCap, Download,
	Globe, Shield, Zap, CheckCircle2, Layers,
	ExternalLink
} from 'lucide-react';

const FlagBackground = () => {
	return (
		<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
			{/* CSS for custom animations */}
			<style>
				{`
          @keyframes wave-slow {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes wave-fast {
            0% { transform: translateX(-100%) skewX(-12deg); }
            50% { transform: translateX(0%) skewX(-5deg); }
            100% { transform: translateX(100%) skewX(-12deg); }
          }
        `}
			</style>

			{/* Base Container - Opacity control for subtlety */}
			<div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] transition-opacity duration-500">

				{/* 1. The Flag Construction */}
				<div className="absolute inset-0 flex flex-col w-[150%] h-[120%] -left-[10%] -top-[10%] transform -rotate-2">
					{/* Stripes */}
					{[...Array(13)].map((_, i) => (
						<div key={i} className={`flex-1 w-full ${i % 2 === 0 ? 'bg-[#BF0A30]' : 'bg-slate-100'}`} />
					))}

					{/* Canton (Blue Field) */}
					<div className="absolute top-0 left-0 w-[45%] h-[54%] bg-[#002868]">
						{/* Stars Pattern (Abstracted as dots for cleaner background look) */}
						<div className="w-full h-full opacity-90"
							style={{
								backgroundImage: 'radial-gradient(circle, white 2px, transparent 2.5px)',
								backgroundSize: '24px 24px',
								backgroundPosition: '12px 12px'
							}}
						/>
					</div>
				</div>

				{/* 2. Fabric Folds (Static Depth) */}
				<div
					className="absolute inset-0 w-full h-full mix-blend-multiply dark:mix-blend-overlay opacity-30"
					style={{
						background: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.3) 80px, transparent 120px)'
					}}
				/>

				{/* 3. Waving Animation (Light Sheen) */}
				<div
					className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent mix-blend-overlay"
					style={{
						animation: 'wave-slow 15s linear infinite'
					}}
				/>
			</div>
		</div>
	);
};

const App = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const [darkMode, setDarkMode] = useState(true);
	const [scrolled, setScrolled] = useState(false);
	const [experienceString, setExperienceString] = useState('');

	useEffect(() => {
		// Scroll handler
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			const sections = ['home', 'skills', 'experience', 'projects', 'education'];
			const current = sections.find(section => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top >= -100 && rect.top <= 300;
				}
				return false;
			});
			if (current) setActiveSection(current);
		};

		window.addEventListener('scroll', handleScroll);

		// Experience Calculation
		const startDate = new Date('2017-05-01');
		const now = new Date();

		let years = now.getFullYear() - startDate.getFullYear();
		let months = now.getMonth() - startDate.getMonth();

		// Adjust for negative month difference
		if (months < 0) {
			years -= 1;
			months += 12;
		}

		// Format string: Hide months if 0
		if (months === 0) {
			setExperienceString(`${years}y`);
		} else {
			setExperienceString(`${years}y ${months}m`);
		}

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleTheme = () => {
		setDarkMode(!darkMode);
	};

	const navLinks = [
		{ name: 'Home', href: '#home' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Experience', href: '#experience' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Education', href: '#education' },
	];

	const skills = [
		{
			category: "Back-End Architecture",
			icon: <Server className="w-6 h-6" />,
			items: [".NET Core", "ASP.NET MVC", "C#", "Web API", "Entity Framework", "Microservices", "SOLID Principles", "RabbitMQ", "SSRS", "Backround Jobs"]
		},
		{
			category: "Front-End Development",
			icon: <Layout className="w-6 h-6" />,
			items: ["Angular", "React", "Vue.js", "TypeScript", "JavaScript", "HTML5/CSS3", "Bootstrap"]
		},
		{
			category: "Cloud & DevOps",
			icon: <Cloud className="w-6 h-6" />,
			items: ["Azure", "Docker", "Kubernetes", "CI/CD Pipelines", "Azure DevOps", "Application Insights"]
		},
		{
			category: "Databases",
			icon: <Database className="w-6 h-6" />,
			items: ["SQL Server", "Oracle", "Redis", "MongoDB", "Firebase"]
		}
	];

	const experience = [
		{
			company: "Collasys LLC, State of Pennsylvania",
			role: "Senior Full Stack .NET Developer",
			period: "Oct 2025 – Present",
			location: "PA",
			countryCode: "us",
			type: "Contract",
			description: "DHS MATP Mileage Reimbursement.",
			achievements: [
				"Design and develop secure, scalable web applications using .NET Core and Angular.",
				"Optimize SQL Server (Azure SQL) databases through query tuning and indexing.",
				"Implement RESTful APIs leveraging Azure services like (keyvalut, functions, storage account).",
				"Ensure WCAG 2.1 AA accessibility and compliance with state privacy regulations."
			]
		},
		{
			company: "Sigma Resources (Contractor for Deloitte)",
			role: "Senior Full Stack .NET Developer",
			period: "Nov 2022 – Oct 2025",
			location: "PA",
			countryCode: "us",
			type: "Contract",
			description: "eCIS Modernization for the State of Pennsylvania.",
			achievements: [
				"Modernized eCIS projects implementing microservices architecture.",
				"Spearheaded API development integrating .NET Web API with Oracle and MSSQL.",
				"Optimized application architecture, significantly enhancing response times.",
				"Supported CI/CD pipeline implementation in Azure DevOps."
			]
		},
		{
			company: "Collabrium Systems (Contractor for CAI)",
			role: ".NET Developer",
			period: "May 2022 – Jul 2022",
			location: "PA",
			countryCode: "us",
			type: "Contract",
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
			type: "Contract",
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
			type: "Contract",
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
			type: "Contract",
			description: "Compass Project API Implementation.",
			achievements: [
				"Implemented new API features integrating .NET Web API with Oracle databases.",
				"Developed custom authentication middleware to meet security requirements.",
				"Built key features to automate claims processing."
			]
		},
		{
			company: "Jackson State University Innovation Center",
			role: "Software Developer",
			period: "Aug 2019 – Apr 2020",
			location: "MS",
			countryCode: "us",
			type: "Employee",
			description: "University Registration & Management Applications.",
			achievements: [
				"Led development of web-based registration apps using .NET MVC Core and Flutter.",
				"Provided mentorship to junior developers on full-stack practices."
			]
		},
		{
			company: "The Cohen International Group (TCIG)",
			role: "Full Stack Software Developer",
			period: "Jun 2018 – Jul 2019",
			location: "Bahrain",
			countryCode: "bh",
			type: "Employee",
			description: "Travel Solutions Platform.",
			achievements: [
				"Developed applications using .NET, Angular, React, and RabbitMQ.",
				"Implemented RESTful APIs and integrated third-party services.",
				"Optimized backend services enhancing scalability."
			]
		},
		{
			company: "Reliance Technology",
			role: "Full Stack Software Developer",
			period: "Feb 2017 – May 2018",
			location: "Sudan",
			countryCode: "sd",
			type: "Employee",
			description: "Banking & Enterprise Applications.",
			achievements: [
				"Built Electronic Cheque Clearing (ECC) and ERP platforms.",
				"Managed full SDLC from requirement gathering to deployment.",
				"Designed secure backend architectures for enterprise apps."
			]
		}
	];

	const projects = [
		{
			title: "MATP Mileage Reimbursement",
			fullName: "Medical Assistance Transportation Program",
			client: "DHS - State of Pennsylvania",
			icon: <Shield className="w-6 h-6 text-teal-400" />,
			tech: [".NET Core", "Angular", "Azure", "SQL"],
			details: [
				"Develop and optimize .NET Core and Angular applications for DHS’s Medicaid and MATP administration systems, ensuring high scalability, accessibility (WCAG 2.1 AA) and secure data exchange.",
				"Implement security standards by integrating the application with SiteMinder using OpenID Connect and OAuth 2.0 with PKCE, enforcing strict access control policies."
			]
		},
		{
			title: "eCIS Modernization",
			fullName: "Electronic Client Information System",
			client: "DHS - State of Pennsylvania",
			icon: <Server className="w-6 h-6 text-blue-400" />,
			tech: [".NET", "Oracle", "SSRS Reports", "Batches"],
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
			icon: <Zap className="w-6 h-6 text-red-400" />,
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
			icon: <Globe className="w-6 h-6 text-purple-400" />,
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
			icon: <Layers className="w-6 h-6 text-orange-400" />,
			tech: [".NET Web API", "JavaScript", "SQL Server"],
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
			icon: <Layout className="w-6 h-6 text-indigo-400" />,
			tech: [".NET Web API", "PWA", "UI Components", "Vue", "TFS"],
			details: [
				"Built the full-stack application, developing secure .NET Web APIs for backend services and a responsive Vue.js frontend for the user interface.",
				"Created reusable component libraries for commonly requested UI elements, enabling quicker future development and promoting a consistent user experience.",
				"Integrated progressive web app (PWA) features, ensuring smooth performance across multiple devices."
			]
		}
	];

	const profileStack = ['.NET', 'Angular', 'React', 'Azure'];

	return (
		<div className={`min-h-screen relative transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans`}>

			{/* The Waving Flag Background */}
			<FlagBackground />

			{/* Main Content Wrapper - z-10 ensures it sits above the flag */}
			<div className="relative z-10">
				{/* Navigation */}
				<nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-slate-900/90 shadow-lg backdrop-blur-md' : 'bg-white/90 shadow-lg backdrop-blur-md') : 'bg-transparent'}`}>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-between h-16">
							<div className="flex-shrink-0 font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
								AM.
							</div>

							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-8">
									{navLinks.map((link) => (
										<a
											key={link.name}
											href={link.href}
											className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === link.href.substring(1)
												? 'text-blue-400'
												: (darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900')
												}`}
										>
											{link.name}
										</a>
									))}
									<button
										onClick={toggleTheme}
										aria-label="Toggle theme"
										className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'}`}
									>
										{darkMode ? <Sun size={18} /> : <Moon size={18} />}
									</button>
								</div>
							</div>

							<div className="md:hidden flex items-center gap-4">
								<button
									onClick={toggleTheme}
									aria-label="Toggle theme"
									className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}
								>
									{darkMode ? <Sun size={18} /> : <Moon size={18} />}
								</button>
								<button
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									aria-label="Toggle menu"
									className={`inline-flex items-center justify-center p-2 rounded-md ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
								>
									{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
								</button>
							</div>
						</div>
					</div>

					{/* Mobile menu */}
					{isMenuOpen && (
						<div className={`md:hidden ${darkMode ? 'bg-slate-900' : 'bg-white'} border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
							<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
								{navLinks.map((link) => (
									<a
										key={link.name}
										href={link.href}
										onClick={() => setIsMenuOpen(false)}
										className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === link.href.substring(1)
											? 'text-blue-400 bg-blue-400/10'
											: (darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900')
											}`}
									>
										{link.name}
									</a>
								))}
							</div>
						</div>
					)}
				</nav>

				{/* Hero Section */}
				<section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
					<div className="flex-1 space-y-8 animate-fade-in-up">
						<div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-500/10 text-blue-500 border border-blue-500/20">
							Senior Full Stack .NET Developer
						</div>
						<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
							Ahmed <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400">
								Mohammedali
							</span>
						</h1>
						<p className={`text-xl md:text-2xl max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
							Building scalable enterprise applications with
							<span className="text-blue-400 font-semibold"> .NET</span>,
							<span className="text-teal-400 font-semibold"> Azure</span>, and
							<span className="text-emerald-400 font-semibold"> Modern JavaScript</span> frameworks.
							Specializing in microservices, cloud solutions and high-performance architecture.
						</p>

						<div className="flex flex-wrap gap-4 pt-4">
							<a href="mailto:ahmed5_27@hotmail.com" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/25">
								<Mail size={20} /> Contact Me
							</a>
							<a href="https://www.linkedin.com/in/ahmed527" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all border ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-100'}`}>
								<Linkedin size={20} /> LinkedIn
							</a>
							<a
								href="https://e.pcloud.link/publink/show?code=XZWPuQZePPygjnxSESI5VDJOjBjT8Ycisik"
								target="_blank"
								rel="noopener noreferrer"
								className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all border ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-100'}`}>
								<Download size={20} /> Resume
							</a>
						</div>

						<div className={`flex items-center gap-6 text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'} pt-8`}>
							<div className="flex items-center gap-2">
								<MapPin size={16} /> Mechanicsburg, PA
							</div>
							<div className="flex items-center gap-2">
								<Phone size={16} /> (601) 201-1671
							</div>
						</div>
					</div>

					{/* Hero Visual/Grid */}
					<div className="flex-1 w-full max-w-lg relative group">
						<div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>

						{/* New Profile Card Visual */}
						<div className={`relative w-full aspect-square rounded-2xl border ${darkMode ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white/60 border-slate-200'} backdrop-blur-xl p-8 flex flex-col justify-center gap-6 shadow-2xl`}>

							{/* Header / Avatar Area */}
							<div className="flex items-center gap-5 pb-6 border-b border-dashed border-slate-500/30">
								<div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold bg-gradient-to-br from-blue-500 to-teal-400 text-white shadow-lg`}>
									AM
								</div>
								<div>
									<h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Ahmed Mohammedali</h2>
									<p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 font-semibold">Senior Full Stack .NET Developer</p>
								</div>
							</div>

							{/* Status Item */}
							<div className={`flex items-center gap-4 p-4 rounded-xl ${darkMode ? 'bg-slate-700/30' : 'bg-slate-50'}`}>
								<div className={`p-2 rounded-lg ${darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
									<CheckCircle2 size={24} />
								</div>
								<div>
									<p className={`text-xs uppercase tracking-wider font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Professional Focus</p>
									<p className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Dedicated Impact Builder</p>
								</div>
							</div>

							{/* Stack Items */}
							<div className={`flex flex-col gap-3 p-4 rounded-xl ${darkMode ? 'bg-slate-700/30' : 'bg-slate-50'}`}>
								<div className="flex items-center gap-2 mb-1">
									<Layers size={16} className={darkMode ? 'text-slate-400' : 'text-slate-500'} />
									<p className={`text-xs uppercase tracking-wider font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Core Stack</p>
								</div>
								<div className="flex flex-wrap gap-2">
									{profileStack.map((tech, i) => (
										<span key={i} className={`px-3 py-1.5 rounded-md text-sm font-semibold shadow-sm ${darkMode ? 'bg-slate-800 text-blue-300 border border-slate-600' : 'bg-white text-blue-600 border border-slate-200'}`}>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Stats Grid */}
							<div className="grid grid-cols-3 gap-4 mt-2">
								<div className="text-center">
									<div className="text-xl font-bold text-blue-400 whitespace-nowrap">{experienceString}</div>
									<div className="text-[10px] uppercase text-slate-500">Experience</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-teal-400">6</div>
									<div className="text-[10px] uppercase text-slate-500">Projects (USA)</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-purple-400">4.0</div>
									<div className="text-[10px] uppercase text-slate-500">GPA</div>
								</div>
							</div>

						</div>
					</div>
				</section>

				{/* Skills Section */}
				<section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/30' : 'bg-slate-100/50'}`}>
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
							<div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
							<p className={`mt-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Comprehensive stack proficiency from database to frontend.</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{skills.map((skill, index) => (
								<div key={index} className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${darkMode ? 'bg-slate-800 border-slate-700 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-400/50'}`}>
									<div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${darkMode ? 'bg-slate-700 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
										{skill.icon}
									</div>
									<h3 className="text-xl font-bold mb-4">{skill.category}</h3>
									<div className="flex flex-wrap gap-2">
										{skill.items.map((item, idx) => (
											<span key={idx} className={`px-2.5 py-1 rounded-md text-sm font-medium ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
												{item}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Experience Section */}
				<section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
					<div className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
						<div className="w-20 h-1 bg-teal-500 rounded-full"></div>
					</div>

					<div className="space-y-12">
						{experience.map((job, index) => (
							<div key={index} className="relative pl-8 md:pl-0">
								{/* Timeline Line (Desktop) */}
								<div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-slate-700/30 -ml-px md:left-[200px]"></div>

								<div className="flex flex-col md:flex-row gap-8 relative">
									{/* Date & Company (Left side) */}
									<div className="md:w-[180px] flex-shrink-0 md:text-right pt-1 md:pr-8">
										<div className="font-bold text-blue-400 text-sm">{job.period}</div>
										<div className={`text-sm mt-1 flex flex-wrap gap-2 md:justify-end ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
											<span>{job.location}</span>
											<img
												src={`https://flagcdn.com/24x18/${job.countryCode}.png`}
												alt={`Flag of ${job.countryCode === 'us' ? 'United States' : job.countryCode === 'bh' ? 'Bahrain' : 'Sudan'}`}
												className="w-5 h-auto object-contain inline-block"
												loading="lazy"
												width="24"
												height="18"
											/>
										</div>
										<div className={`text-xs mt-1 inline-block px-2 py-0.5 rounded ${darkMode ? 'bg-slate-800 text-slate-500' : 'bg-slate-200 text-slate-600'}`}>
											{job.type}
										</div>
									</div>

									{/* Timeline Dot */}
									<div className={`absolute left-[-37px] md:left-[195px] top-1.5 w-3 h-3 rounded-full border-2 ${darkMode ? 'bg-slate-900 border-blue-500' : 'bg-white border-blue-500'} z-10`}></div>

									{/* Content Card */}
									<div className={`flex-1 p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' : 'bg-white border-slate-200 hover:shadow-lg'}`}>
										<div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
											<div className="flex items-center gap-3">
												<div className={`p-2 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
													<Briefcase size={18} className="text-blue-500" />
												</div>
												<h3 className="text-xl font-bold">{job.role}</h3>
											</div>
											<div className={`text-sm font-semibold md:text-right ${darkMode ? 'text-teal-400' : 'text-teal-700'}`}>
												{job.company}
											</div>
										</div>
										<p className={`mb-4 italic ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{job.description}</p>
										<ul className="space-y-2">
											{job.achievements.map((item, i) => (
												<li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
													<ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
													<span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Projects Section */}
				<section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/30' : 'bg-slate-100/50'}`}>
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
							<div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
							<p className={`mt-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>High-impact solutions delivered for state governments.</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{projects.map((project, index) => (
								<div key={index} className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
									<div className={`h-2 w-full bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-500 to-teal-500' : 'from-purple-500 to-pink-500'}`}></div>
									<div className="p-8 flex flex-col h-full">
										<div className="flex justify-between items-start mb-2">
											<div className="flex items-center gap-3">
												<div className={`p-2 rounded-lg ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
													{project.icon}
												</div>
												<h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
											</div>
										</div>

										{/* Full Name Display */}
										<div className={`text-sm font-medium mb-4 leading-snug ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
											{project.fullName}
										</div>

										<div className="mb-6">
											<span className={`text-xs font-bold tracking-wider uppercase px-2 py-1 rounded ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
												{project.client}
											</span>
										</div>

										<ul className="space-y-3 mb-6 flex-grow">
											{project.details.map((detail, i) => (
												<li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
													<div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}></div>
													<span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{detail}</span>
												</li>
											))}
										</ul>

										<div className="flex flex-wrap gap-2 mt-auto">
											{project.tech.map((tag, idx) => (
												<span key={idx} className={`px-3 py-1 text-xs font-medium rounded-full border ${darkMode ? 'border-slate-600 text-slate-400' : 'border-slate-200 text-slate-600'}`}>
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Education & Certs */}
				<section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div>
							<div className="flex items-center gap-3 mb-8">
								<GraduationCap className="w-8 h-8 text-blue-500" />
								<h2 className="text-3xl font-bold">Education</h2>
							</div>
							<div className="space-y-8">
								<div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}>
									<h3 className="text-xl font-bold">Master's in Computer Science</h3>
									<p className="text-blue-400 font-medium">Jackson State University</p>
									<div className="flex justify-between mt-2 text-sm text-slate-500">
										<span>2019 - 2021</span>
										<span className="font-bold text-teal-400">GPA: 4.0 / 4</span>
									</div>
								</div>
								<div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}>
									<h3 className="text-xl font-bold">B.Sc. Electrical & Electronics Engineering</h3>
									<p className="text-blue-400 font-medium">University of Khartoum</p>
									<div className="flex justify-between mt-2 text-sm text-slate-500">
										<span>2008 - 2013</span>
										<span className="font-bold text-teal-400">CGPA: 3.2 / 4</span>
									</div>
								</div>
							</div>
						</div>

						<div>
							<div className="flex items-center gap-3 mb-8">
								<Award className="w-8 h-8 text-purple-500" />
								<h2 className="text-3xl font-bold">Certifications</h2>
							</div>
							<div className={`p-8 rounded-2xl border h-full ${darkMode ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700' : 'bg-gradient-to-br from-white to-slate-50 border-slate-200'}`}>
								<div className="space-y-6">

									<a
										href="https://learn.microsoft.com/en-us/users/ahmed527/credentials/1afcab418bea81f5?ref=https%3A%2F%2Fwww.linkedin.com%2F"
										target="_blank"
										rel="noopener noreferrer"
										className="flex gap-4 group cursor-pointer hover:opacity-80 transition-opacity"
									>
										<div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
											<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M5.89062 19.9531L13.0469 3.01562L16.9219 5.25L9.67188 22H5.03125L5.89062 19.9531Z" fill="#0078D4" />
												<path d="M13.0469 3.01562L16.9219 5.25L13.5 13.5L13.0469 3.01562Z" fill="#3E9CD6" />
												<path d="M19 22H9.67188L13.5 13.5L18.0625 22H19Z" fill="#3E9CD6" />
												<path d="M18.0625 22L13.5 13.5L16.9219 5.25L23 21.1406L23.8281 22H18.0625Z" fill="#0078D4" />
											</svg>
										</div>
										<div className="flex-1">
											<div className="flex items-center gap-2">
												<h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">Microsoft Certified: Azure Developer Associate</h3>
												<ExternalLink className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
											</div>
											<p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Validation of proficiency in Azure development, cloud security, and integration.</p>
										</div>
									</a>

									<div className="pt-6 border-t border-slate-700/50">
										<h4 className="text-sm uppercase tracking-wider font-semibold mb-4 text-slate-500">Currently Pursuing</h4>
										<ul className="space-y-3">
											<li className="flex items-center gap-2">
												<div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
												<span>Azure DevOps Certification</span>
											</li>
											<li className="flex items-center gap-2">
												<div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
												<span>Azure AI Certification</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>

				{/* Footer */}
				<footer className={`py-12 px-4 border-t ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
					<div className="max-w-7xl mx-auto text-center">
						<h2 className="text-2xl font-bold mb-6">Ready to Drive Enterprise Success</h2>
						<div className="flex justify-center gap-8 mb-8">
							<a href="mailto:ahmed5_27@hotmail.com" className={`hover:text-blue-400 transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
								<Mail size={24} />
							</a>
							<a href="https://www.linkedin.com/in/ahmed527" className={`hover:text-blue-400 transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
								<Linkedin size={24} />
							</a>
						</div>
						<p className={`text-sm ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
							© {new Date().getFullYear()} Ahmed Mohammedali. All rights reserved.
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default App;