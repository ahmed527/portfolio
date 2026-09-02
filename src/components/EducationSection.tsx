import { Award, GraduationCap, ExternalLink } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const EducationSection = () => {
	const { darkMode } = useTheme();

	return (
		<section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
			{/* Certifications - Primary */}
			<div className="flex items-center gap-3 mb-8">
				<Award className="w-8 h-8 text-purple-500" />
				<h2 className="text-3xl font-bold">Certifications</h2>
			</div>

			{/* Earned Certifications Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
				<a
					href="https://learn.microsoft.com/api/credentials/share/en-us/ahmed527/1AFCAB418BEA81F5?sharingId=46928C725D2B41FE"
					target="_blank"
					rel="noopener noreferrer"
					className={`flex gap-4 p-6 rounded-2xl border group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${darkMode ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500/50' : 'bg-gradient-to-br from-slate-200 to-slate-100 border-slate-200 hover:border-blue-400'}`}
				>
					<img src={`${import.meta.env.BASE_URL}azure-associate-badge.svg`} alt="Microsoft Certified Associate Badge" className="w-16 h-16 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
					<div className="flex-1 min-w-0">
						<div className="flex items-center gap-2">
							<h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">Microsoft Certified: Azure Developer Associate</h3>
							<ExternalLink className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
						</div>
						<p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Validation of proficiency in Azure development, cloud security, and integration.</p>
					</div>
				</a>

				<a
					href="https://learn.microsoft.com/api/credentials/share/en-us/ahmed527/100CD05B8264058F?sharingId=46928C725D2B41FE"
					target="_blank"
					rel="noopener noreferrer"
					className={`flex gap-4 p-6 rounded-2xl border group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${darkMode ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500/50' : 'bg-gradient-to-br from-slate-200 to-slate-100 border-slate-200 hover:border-blue-400'}`}
				>
					<img src={`${import.meta.env.BASE_URL}azure-expert-badge.svg`} alt="Microsoft Certified Expert Badge" className="w-16 h-16 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
					<div className="flex-1 min-w-0">
						<div className="flex items-center gap-2">
							<h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">Microsoft Certified: DevOps Engineer Expert</h3>
							<ExternalLink className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
						</div>
						<p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Expertise in DevOps practices, CI/CD pipelines, and infrastructure as code on Azure.</p>
					</div>
				</a>
			</div>

			{/* Currently Pursuing */}
			<div className={`p-5 rounded-2xl border mb-16 ${darkMode ? 'bg-slate-800/30 border-slate-700/50' : 'bg-slate-50 border-slate-200'}`}>
				<h4 className="text-sm uppercase tracking-wider font-semibold mb-3 text-slate-500">Currently Pursuing</h4>
				<ul className="space-y-2">
					<li className="flex items-center gap-2">
						<div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
						<span>Azure AI Certification</span>
					</li>
				</ul>
			</div>

			{/* Education - Subsection */}
			<div className="flex items-center gap-3 mb-8">
				<GraduationCap className="w-7 h-7 text-blue-500" aria-hidden="true" />
				<h3 className="text-2xl font-bold">Education</h3>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-200 border-slate-400'}`}>
					<h4 className="text-xl font-bold">Master's in Computer Science</h4>
					<p className="text-blue-400 font-medium flex items-center gap-2">
						Jackson State University
						<img
							src="https://flagcdn.com/24x18/us.png"
							alt=""
							className="w-5 h-auto object-contain inline-block"
							loading="lazy"
							width="24"
							height="18"
						/>
					</p>
					<div className={`flex justify-between mt-2 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
						<span>2019 - 2021</span>
						<span className="font-bold text-teal-400">GPA: 4.0 / 4</span>
					</div>
				</div>
				<div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-200 border-slate-400'}`}>
					<h4 className="text-xl font-bold">B.Sc. Electrical & Electronics Engineering</h4>
					<p className="text-blue-400 font-medium flex items-center gap-2">
						University of Khartoum
						<img
							src="https://flagcdn.com/24x18/sd.png"
							alt=""
							className="w-5 h-auto object-contain inline-block"
							loading="lazy"
							width="24"
							height="18"
						/>
					</p>
					<div className={`flex justify-between mt-2 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
						<span>2008 - 2013</span>
						<span className="font-bold text-teal-400">CGPA: 3.2 / 4</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EducationSection;
