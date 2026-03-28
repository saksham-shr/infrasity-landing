interface HorizontalResourceCardProps {
    type: string;
    title: string;
    description: string;
    glowColor: string;
}

export default function HorizontalResourceCard({
    type,
    title,
    description,
    glowColor,
}: HorizontalResourceCardProps) {
    return (
        <article className="bg-[#14141c] border border-[#2a2a35] rounded-2xl p-4 md:p-5 flex flex-row items-center group hover:border-[#3a3a45] transition-colors h-full">

            {/* Left Side: Image Container with Glow & Placeholder */}
            <div className="relative w-[35%] md:w-[40%] h-32 md:h-40 rounded-xl bg-[#0d0d12] flex items-center justify-center overflow-hidden border border-gray-800/50 shrink-0">
                <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${glowColor} to-transparent opacity-60`} />

                {/* Placeholder Icon */}
                <div className="relative z-10 text-gray-500 group-hover:text-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="flex flex-col ml-5 md:ml-6 flex-grow text-left">
                {/* Notice the tag color is slightly bluer here than the top cards */}
                <span className="text-[10px] font-semibold tracking-wider text-[#82a5ff] bg-[#222b45] px-2.5 py-1 rounded w-fit mb-3 uppercase">
                    {type}
                </span>

                <h3 className="text-base md:text-lg font-semibold text-white mb-2 leading-snug">
                    {title}
                </h3>

                <p className="text-[#8c8c9a] text-[13px] leading-relaxed line-clamp-3">
                    {description}
                </p>
            </div>
        </article>
    );
}