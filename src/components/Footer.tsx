import { Mail, Linkedin } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Footer = () => {
	const { darkMode } = useTheme();

	return (
		<footer className={`py-12 px-4 border-t ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-300 border-slate-400'}`}>
			<div className="max-w-[1600px] mx-auto text-center">
				<h2 className="text-2xl font-bold mb-6">Ready to Drive Enterprise Success</h2>
				<div className="flex justify-center gap-8 mb-8">
					<a href="mailto:ahmed5_27@hotmail.com" aria-label="Contact Me" className={`hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md p-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
						<Mail size={24} aria-hidden="true" />
					</a>
					<a href="https://www.linkedin.com/in/ahmed527" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className={`hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md p-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
						<Linkedin size={24} aria-hidden="true" />
					</a>
				</div>
				<p className={`text-sm ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
					© {new Date().getFullYear()} Ahmed Mohammedali. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
