const FlagBackground = () => {
	return (
		<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flag-background" aria-hidden="true">
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
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
        `}
			</style>

			{/* Base Container - Opacity control for subtlety */}
			<div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] flag-container transition-opacity duration-500">

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

export default FlagBackground;
