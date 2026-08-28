import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { navLinks } from '../data';

const Navbar = () => {
	const { darkMode, toggleTheme } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
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
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`print:hidden fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-slate-900/90 shadow-lg backdrop-blur-md' : 'bg-slate-300/90 shadow-lg backdrop-blur-md') : 'bg-transparent'}`}>
			<div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
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
									className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${activeSection === link.href.substring(1)
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
								className={`p-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-300 hover:bg-slate-300'}`}
							>
								{darkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
							</button>
						</div>
					</div>

					<div className="md:hidden flex items-center gap-4">
						<button
							onClick={toggleTheme}
							aria-label="Toggle theme"
							className={`p-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${darkMode ? 'bg-slate-800' : 'bg-slate-300'}`}
						>
							{darkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
						</button>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="Toggle menu"
							className={`inline-flex items-center justify-center p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
						>
							{isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && (
				<div className={`md:hidden ${darkMode ? 'bg-slate-900' : 'bg-slate-300'} border-b ${darkMode ? 'border-slate-800' : 'border-slate-400'}`}>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								onClick={() => setIsMenuOpen(false)}
								className={`block px-3 py-2 rounded-md text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${activeSection === link.href.substring(1)
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
	);
};

export default Navbar;
