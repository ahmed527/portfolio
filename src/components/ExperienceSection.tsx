import { ChevronRight, Briefcase } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { experience } from '../data';

const ExperienceSection = () => {
	const { darkMode } = useTheme();

	return (
		<section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
										alt=""
										className="w-5 h-auto object-contain inline-block"
										loading="lazy"
										width="24"
										height="18"
									/>
								</div>
							</div>

							{/* Timeline Dot */}
							<div className={`absolute left-[-37px] md:left-[195px] top-1.5 w-3 h-3 rounded-full border-2 ${darkMode ? 'bg-slate-900 border-blue-500' : 'bg-slate-300 border-blue-500'} z-10`}></div>

							{/* Content Card */}
							<div className={`flex-1 p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800' : 'bg-slate-200 border-slate-400 hover:shadow-lg'}`}>
								<div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
									<div className="flex items-center gap-3">
										<div className={`p-2 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-slate-300'}`}>
											<Briefcase size={18} className="text-blue-500" aria-hidden="true" />
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
	);
};

export default ExperienceSection;
