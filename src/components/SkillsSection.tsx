import { Server, Layout, Cloud, Database } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { skills } from '../data';
import type { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
	"Back-End Architecture": <Server className="w-6 h-6" />,
	"Front-End Development": <Layout className="w-6 h-6" />,
	"Cloud & DevOps": <Cloud className="w-6 h-6" />,
	"Databases": <Database className="w-6 h-6" />,
};

const SkillsSection = () => {
	const { darkMode } = useTheme();

	return (
		<section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/30' : 'bg-slate-300/70'}`}>
			<div className="max-w-[1600px] mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
					<div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
					<p className={`mt-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Comprehensive stack proficiency from database to frontend.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{skills.map((skill, index) => (
						<div key={index} className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${darkMode ? 'bg-slate-800 border-slate-700 hover:border-blue-500/50' : 'bg-slate-200 border-slate-400 hover:border-blue-400/50'}`}>
							<div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${darkMode ? 'bg-slate-700 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
								{iconMap[skill.category]}
							</div>
							<h3 className="text-xl font-bold mb-4">{skill.category}</h3>
							<div className="flex flex-wrap gap-2">
								{skill.items.map((item, idx) => {
									const [name, version] = typeof item === 'string' && item.includes('|') ? item.split('|').map(s => s.trim()) : [item, null];
									return (
										<span key={idx} className={`px-2.5 py-1 rounded-md text-sm font-medium ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-300 text-slate-700'}`}>
											{name}
											{version && <span className={`ml-1 text-xs opacity-90 border-l pl-1 ${darkMode ? 'border-slate-500 text-blue-300' : 'border-slate-400 text-blue-700'}`}>{version}</span>}
										</span>
									);
								})}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
