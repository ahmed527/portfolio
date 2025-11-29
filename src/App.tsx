import { useState, useEffect } from 'react';
import {
	Menu, X, Linkedin, Mail, Phone, MapPin,
	ChevronRight, Database,
	Cloud, Layout, Server, Moon, Sun,
	Award, Briefcase, GraduationCap, Download,
	Globe, Shield, Zap, CheckCircle2, Layers
} from 'lucide-react';

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
		// Start Date anchored to April 2017 to result in 8y 7m as of Nov 2025
		const startDate = new Date('2017-04-01');
		const now = new Date();

		let years = now.getFullYear() - startDate.getFullYear();
		let months = now.getMonth() - startDate.getMonth();

		if (months < 0) {
			years -= 1;
			months += 12;
		}

		setExperienceString(`${years}y ${months}m`);

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
			items: [".NET Core", "ASP.NET MVC", "C#", "Web API", "Entity Framework", "Microservices", "SOLID Principles", "RabbitMQ"]
		},
		{
			category: "Front-End Development",
			icon: <Layout className="w-6 h-6" />,
			items: ["React", "Angular", "Vue.js", "TypeScript", "JavaScript", "HTML5/CSS3", "Tailwind CSS"]
		},
		{
			category: "Cloud & DevOps",
			icon: <Cloud className="w-6 h-6" />,
			items: ["Azure", "Docker", "Kubernetes", "CI/CD Pipelines", "Azure DevOps", "Application Insights"]
		},
		{
			category: "Databases",
			icon: <Database className="w-6 h-6" />,
			items: ["SQL Server", "Oracle", "Redis", "MongoDB", "Firebase", "PostgreSQL"]
		}
	];

	const experience = [
		{
			company: "Collasys LLC",
			role: "Senior Full Stack .NET Engineer",
			period: "Oct 2025 - Present",
			location: "Mechanicsburg, PA",
			countryCode: "us",
			type: "Full-time",
			description: "Leading development for PennDOT's Medicaid and MATP administration systems.",
			achievements: [
				"Architecting secure, scalable web apps using .NET Core and Angular.",
				"Optimizing high-volume SQL Server and Azure SQL transactions.",
				"Implementing event-driven architectures with Azure Functions and Queues.",
				"Ensuring WCAG 2.1 AA accessibility and state privacy compliance."
			]
		},
		{
			company: "Sigma Resources (Deloitte)",
			role: "Senior Full Stack .NET Engineer",
			period: "Nov 2022 - Oct 2025",
			location: "Mechanicsburg, PA",
			countryCode: "us",
			type: "Contract",
			description: "Modernized critical eCIS projects for the State of Pennsylvania.",
			achievements: [
				"Transitioned legacy systems to microservices architecture.",
				"Spearheaded API development integrating .NET Web API with Oracle/MSSQL.",
				"Optimized eCIS module for faster high-volume transaction processing.",
				"Collaborated on scalable cloud security best practices."
			]
		},
		{
			company: "Collabrium Systems (CAI)",
			role: ".NET Developer",
			period: "May 2022 - Jul 2022",
			location: "Mechanicsburg, PA",
			countryCode: "us",
			type: "Contract",
			description: "Critical component design for NG911 emergency response system.",
			achievements: [
				"Built real-time data processing solutions using React and .NET.",
				"Enhanced emergency dispatch efficiency and reduced response times.",
				"Fine-tuned full-stack application performance."
			]
		},
		{
			company: "Sigma Resources (State of WI)",
			role: ".NET Developer",
			period: "Jan 2020 - May 2022",
			location: "Remote / PA",
			countryCode: "us",
			type: "Contract",
			description: "Maintained WIC Nutrition Program software solutions.",
			achievements: [
				"Developed secure .NET Web APIs for real-time eligibility checks.",
				"Optimized complex SQL queries to reduce database response times.",
				"Automated nightly benefit processing and validation jobs."
			]
		},
		{
			company: "Jackson State University",
			role: "Software Developer",
			period: "Aug 2019 - Apr 2020",
			location: "Jackson, MS",
			countryCode: "us",
			type: "Employee",
			description: "Led development of university registration web applications.",
			achievements: [
				"Built management apps using .NET MVC Core and Flutter.",
				"Mentored junior developers on full-stack best practices."
			]
		},
		{
			company: "The Cohen International Group",
			role: "Software Engineer",
			period: "Jun 2018 - Jul 2019",
			location: "Bahrain",
			countryCode: "bh",
			type: "Employee",
			description: "Full-stack development for travel solution platforms.",
			achievements: [
				"Leveraged Angular, React, and RabbitMQ for scalable solutions.",
				"Integrated third-party RESTful APIs for data synchronization."
			]
		},
		{
			company: "Reliance Technology",
			role: "Software Engineer",
			period: "Feb 2017 - May 2018",
			location: "Sudan",
			countryCode: "sd",
			type: "Employee",
			description: "Enterprise application development for banking sectors.",
			achievements: [
				"Built Electronic Cheque Clearing (ECC) and ERP platforms.",
				"Managed full SDLC from requirements to deployment."
			]
		}
	];

	const projects = [
		{
			title: "MATP Administration System",
			client: "PennDOT - State of PA",
			icon: <Shield className="w-6 h-6 text-teal-400" />,
			tech: [".NET Core", "Angular", "Azure", "SQL"],
			details: [
				"A high-scale administration system ensuring accessibility (WCAG 2.1 AA) and secure data exchange for Medicaid transport.",
				"Streamlined development via CI/CD and Docker, delivering consistent, secure releases."
			]
		},
		{
			title: "eCIS Modernization",
			client: "DHS - State of PA",
			icon: <Server className="w-6 h-6 text-blue-400" />,
			tech: [".NET", "Oracle", "SSRS Reports", "Batches"],
			details: [
				"Complete modernization of legacy systems to a robust microservices architecture, improving maintainability.",
				"Significantly enhanced system performance and scalability for state-wide usage."
			]
		},
		{
			title: "NG911 Emergency Response",
			client: "PennDOT - State of PA",
			icon: <Zap className="w-6 h-6 text-red-400" />,
			tech: ["React", ".NET Web API", "Real-time Data", "Azure DevOps"],
			details: [
				"Real-time processing system for emergency dispatch services, ensuring critical data accuracy.",
				"Greatly improved response times for critical emergency queries."
			]
		},
		{
			title: "Compass Modernization",
			client: "DHS - State of PA",
			icon: <Globe className="w-6 h-6 text-purple-400" />,
			tech: ["Web API", "Azure DevOps", "Oracle", "SSRS Reports", "Batches"],
			details: [
				"Transitioned the Compass platform to latest .NET technology with a focus on API performance and security.",
				"Automated deployment and testing reduced release cycles and manual errors."
			]
		},
		{
			title: "WIC Nutrition Program",
			client: "State of Wisconsin",
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
			client: "State of Pennsylvania",
			icon: <Layout className="w-6 h-6 text-indigo-400" />,
			tech: [".NET Web API", "PWA", "UI Components", "Vue", "TFS"],
			details: [
				"Created reusable component libraries for commonly requested UI elements, enabling quicker future development and promoting a consistent user experience.",
				"Integrated progressive web app (PWA) features, ensuring smooth performance across multiple devices."
			]
		}
	];

	const profileStack = ['.NET', 'Angular', 'React', 'Azure'];

	return (
		<div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans`}>

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
									className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'}`}
								>
									{darkMode ? <Sun size={18} /> : <Moon size={18} />}
								</button>
							</div>
						</div>

						<div className="md:hidden flex items-center gap-4">
							<button
								onClick={toggleTheme}
								className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}
							>
								{darkMode ? <Sun size={18} /> : <Moon size={18} />}
							</button>
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
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
						Specializing in microservices, cloud solutions, and high-performance architecture.
					</p>

					<div className="flex flex-wrap gap-4 pt-4">
						<a href="mailto:ahmed5_27@hotmail.com" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/25">
							<Mail size={20} /> Contact Me
						</a>
						<a href="https://www.linkedin.com/in/ahmed527" target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all border ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-100'}`}>
							<Linkedin size={20} /> LinkedIn
						</a>
						<a
							href="https://e.pcloud.link/publink/show?code=XZWPuQZePPygjnxSESI5VDJOjBjT8Ycisik"
							target="_blank"
							rel="noreferrer"
							className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all border ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-100'}`}
						>
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

					{/* New Profile Card Visual (Not Code) */}
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
								<div className="text-2xl font-bold text-teal-400">6+</div>
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
			<section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
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
											alt="Flag"
											className="w-5 h-auto object-contain inline-block"
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
									<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
										<div className="flex items-center gap-3">
											<div className={`p-2 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
												<Briefcase size={18} className="text-blue-500" />
											</div>
											<h3 className="text-xl font-bold">{job.role}</h3>
										</div>
										<span className={`text-sm font-semibold px-2 py-0.5 rounded mt-2 sm:mt-0 ${darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-50 text-teal-700'}`}>
											{job.company}
										</span>
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
									<div className="flex justify-between items-start mb-4">
										<div className="flex items-center gap-3">
											<div className={`p-2 rounded-lg ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
												{project.icon}
											</div>
											<h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
										</div>
									</div>
									<div className="mb-6">
										<span className={`text-xs font-bold tracking-wider uppercase px-2 py-1 rounded ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
											{project.client}
										</span>
									</div>

									{/* Updated to support list of details instead of single description */}
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
								<div className="flex gap-4">
									<div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
										<Cloud className="w-6 h-6 text-blue-500" />
									</div>
									<div>
										<h3 className="font-bold text-lg">Microsoft Certified: Azure Developer Associate</h3>
										<p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Validation of proficiency in Azure development, cloud security, and integration.</p>
									</div>
								</div>

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
	);
};

export default App;