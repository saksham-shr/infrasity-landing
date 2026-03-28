interface ResourceCardProps {
    type: string;
    title: string;
    description: string;
    glowColor: string; // e.g., 'from-orange-500/20' or 'from-emerald-500/20'
}

export default function ResourceCard({
    type,
    title,
    description,
    glowColor,
}: ResourceCardProps) {
    return (
        <article className="bg-surface border border-gray-800 rounded-2xl p-5 md:p-6 flex flex-col group hover:border-gray-600 transition-all duration-300 h-full">

            {/* Image Container with Glow Effect & Placeholder */}
            <div className="relative w-full h-48 md:h-56 mb-6 md:mb-8 rounded-xl bg-background flex items-center justify-center overflow-hidden border border-gray-800/50">

                {/* Subtle radial glow background matching the design */}
                <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${glowColor} to-transparent opacity-60`} />

                {/* Polished Wireframe Placeholder */}
                <div className="relative z-10 w-28 h-36 border-2 border-dashed border-gray-600 rounded-lg bg-gray-800/30 flex flex-col items-center justify-center text-gray-400 group-hover:scale-105 group-hover:border-gray-400 group-hover:text-gray-300 transition-all duration-300 shadow-xl backdrop-blur-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mb-2"
                    >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                    <span className="text-[10px] uppercase tracking-widest font-semibold">Asset</span>
                </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col flex-grow text-left">
                <span className="text-[10px] font-bold tracking-wider text-text-muted bg-gray-800 px-2.5 py-1 rounded w-fit mb-4 uppercase">
                    {type}
                </span>

                <h3 className="text-lg md:text-xl font-semibold text-text-main mb-2">
                    {title}
                </h3>

                <p className="text-text-muted text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </article>
    );
}