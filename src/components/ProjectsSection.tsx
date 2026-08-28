import { Server, Layout, Globe, Shield, Zap, Layers } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { projects } from '../data';
import type { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
	"MATP Mileage Reimbursement": <Shield className="w-6 h-6 text-teal-400" />,
	"eCIS Modernization": <Server className="w-6 h-6 text-blue-400" />,
	"NG911 Emergency Response": <Zap className="w-6 h-6 text-red-400" />,
	"Compass": <Globe className="w-6 h-6 text-purple-400" />,
	"WIC Nutrition Program": <Layers className="w-6 h-6 text-orange-400" />,
	"WCAIS": <Layout className="w-6 h-6 text-indigo-400" />,
};

const ProjectsSection = () => {
	const { darkMode } = useTheme();

	return (
		<section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/30' : 'bg-slate-300/70'}`}>
			<div className="max-w-[1600px] mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
					<div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
					<p className={`mt-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>High-impact solutions delivered for state governments.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<div key={index} className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-200 border-slate-400'}`}>
							<div className={`h-2 w-full bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-500 to-teal-500' : 'from-purple-500 to-pink-500'}`}></div>
							<div className="p-8 flex flex-col h-full">
								<div className="flex justify-between items-start mb-2">
									<div className="flex items-center gap-3">
										<div className={`p-2 rounded-lg ${darkMode ? 'bg-slate-900' : 'bg-slate-300'}`}>
											{iconMap[project.title]}
										</div>
										<h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
									</div>
								</div>

								{/* Full Name Display */}
								<div className={`text-sm font-medium mb-4 leading-snug ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
									{project.fullName}
								</div>

								<div className="mb-6">
									<span className={`text-xs font-bold tracking-wider uppercase px-2 py-1 rounded ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-300 text-slate-600'}`}>
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
	);
};

export default ProjectsSection;
