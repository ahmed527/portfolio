import { useMemo } from 'react';
import {
	Mail, Linkedin, Phone, MapPin, Download,
	CheckCircle2, Layers,
} from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { profileStack } from '../data';

const HeroSection = () => {
	const { darkMode } = useTheme();

	const experienceString = useMemo(() => {
		const startDate = new Date('2017-05-01');
		const now = new Date();

		let years = now.getFullYear() - startDate.getFullYear();
		let months = now.getMonth() - startDate.getMonth();

		if (months < 0) {
			years -= 1;
			months += 12;
		}

		return months === 0 ? `${years} y` : `${years} y, ${months} m`;
	}, []);

	return (
		<section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto flex flex-col md:flex-row items-center gap-12">
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
					<a href="mailto:ahmed5_27@hotmail.com" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-white font-medium transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/25">
						<Mail size={20} aria-hidden="true" /> Contact Me
					</a>
					<a href="https://www.linkedin.com/in/ahmed527" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-100'}`}>
						<Linkedin size={20} aria-hidden="true" /> LinkedIn
					</a>
					<a
						href="https://tinyurl.com/AhmedMaSoftwareDeveloperResume"
						target="_blank"
						rel="noopener noreferrer"
						className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-100'}`}>
						<Download size={20} aria-hidden="true" /> Resume
					</a>
				</div>

				<div className={`flex items-center gap-6 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'} pt-8`}>
					<div className="flex items-center gap-2">
						<MapPin size={16} aria-hidden="true" /> Mechanicsburg, PA
					</div>
					<div className="flex items-center gap-2">
						<Phone size={16} aria-hidden="true" /> (601) 201-1671
					</div>
				</div>
			</div>

			{/* Hero Visual/Grid */}
			<div className="flex-1 w-full max-w-lg relative group">
				<div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>

				{/* New Profile Card Visual */}
				<div className={`relative w-full aspect-square rounded-2xl border ${darkMode ? 'bg-slate-800/40 border-slate-700/50' : 'bg-slate-200/90 border-slate-400'} backdrop-blur-xl p-8 flex flex-col justify-center gap-6 shadow-2xl`}>

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
					<div className={`flex items-center gap-4 p-4 rounded-xl ${darkMode ? 'bg-slate-700/30' : 'bg-slate-300/80'}`}>
						<div className={`p-2 rounded-lg ${darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
							<CheckCircle2 size={24} aria-hidden="true" />
						</div>
						<div>
							<p className={`text-xs uppercase tracking-wider font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Professional Focus</p>
							<p className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Dedicated Impact Builder</p>
						</div>
					</div>

					{/* Stack Items */}
					<div className={`flex flex-col gap-3 p-4 rounded-xl ${darkMode ? 'bg-slate-700/30' : 'bg-slate-300/80'}`}>
						<div className="flex items-center gap-2 mb-1">
							<Layers size={16} className={darkMode ? 'text-slate-400' : 'text-slate-500'} aria-hidden="true" />
							<p className={`text-xs uppercase tracking-wider font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Core Stack</p>
						</div>
						<div className="flex flex-wrap gap-2">
							{profileStack.map((tech, i) => (
								<span key={i} className={`px-3 py-1.5 rounded-md text-sm font-semibold shadow-sm ${darkMode ? 'bg-slate-800 text-blue-300 border border-slate-600' : 'bg-slate-200 text-blue-600 border border-slate-400'}`}>
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* Stats Grid - Balanced and Proportional */}
					<div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
						{/* Experience Stat */}
						<div className={`relative group px-2 py-3 sm:px-3 sm:py-3.5 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-slate-800/80 border-blue-500/30' : 'bg-slate-300/80 border-blue-400/40'} border`}>
							<div className="relative text-center">
								<div className="text-base sm:text-lg lg:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 tracking-tight whitespace-nowrap animate-pulse">
									{experienceString}
								</div>
								<div className={`text-[9px] sm:text-[11px] uppercase tracking-wider font-bold mt-1 whitespace-nowrap ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
									Experience
								</div>
							</div>
						</div>

						{/* Projects Stat */}
						<div className={`relative group px-2 py-3 sm:px-3 sm:py-3.5 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-slate-800/80 border-teal-500/30' : 'bg-slate-300/80 border-teal-400/40'} border`}>
							<div className="relative text-center">
								<div className="text-base sm:text-lg lg:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 whitespace-nowrap">
									6
								</div>
								<div className={`text-[9px] sm:text-[11px] uppercase tracking-wider font-bold mt-1 flex items-center justify-center gap-1 whitespace-nowrap ${darkMode ? 'text-teal-300' : 'text-teal-600'}`}>
									Projects
									<img
										src="https://flagcdn.com/16x12/us.png"
										alt="United States"
										className="w-3.5 h-auto object-contain inline-block"
										loading="lazy"
										width="16"
										height="12"
									/>
								</div>
							</div>
						</div>

						{/* GPA Stat */}
						<div className={`relative group px-2 py-3 sm:px-3 sm:py-3.5 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-slate-800/80 border-purple-500/30' : 'bg-slate-300/80 border-purple-400/40'} border`}>
							<div className="relative text-center">
								<div className="text-base sm:text-lg lg:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 whitespace-nowrap">
									4.0
								</div>
								<div className={`text-[9px] sm:text-[11px] uppercase tracking-wider font-bold mt-1 flex items-center justify-center gap-1 whitespace-nowrap ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
									GPA
									<img
										src="https://flagcdn.com/16x12/us.png"
										alt="United States"
										className="w-3.5 h-auto object-contain inline-block"
										loading="lazy"
										width="16"
										height="12"
									/>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};

export default HeroSection;
