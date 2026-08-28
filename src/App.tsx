import { ThemeProvider, useTheme } from './ThemeContext';
import FlagBackground from './components/FlagBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';

const AppContent = () => {
	const { darkMode } = useTheme();

	return (
		<div data-theme={darkMode ? 'dark' : 'light'} className={`min-h-screen relative transition-colors duration-300 ${darkMode ? 'dark bg-slate-900 text-slate-100' : 'light bg-slate-300 text-slate-900'} font-sans`}>

			{/* The Waving Flag Background */}
			<FlagBackground />

			<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-br-lg print:hidden">
				Skip to main content
			</a>

			{/* Navigation - hidden in print */}
			<Navbar />

			{/* Main Content Wrapper - z-10 ensures it sits above the flag */}
			<main id="main-content" className="relative z-10">
				<HeroSection />
				<SkillsSection />
				<ExperienceSection />
				<ProjectsSection />
				<EducationSection />
				<Footer />
			</main>
		</div>
	);
};

const App = () => {
	return (
		<ThemeProvider>
			<AppContent />
		</ThemeProvider>
	);
};

export default App;