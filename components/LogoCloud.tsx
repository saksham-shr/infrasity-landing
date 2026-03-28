export default function LogoCloud() {
    return (
        <section className="w-full py-12 mt-10 text-center">
            <h3 className="text-[22px] md:text-2xl font-serif text-white mb-10 tracking-wide">
                Trusted by 50+ SaaS startups
            </h3>

            <div className="flex items-center justify-center gap-4 md:gap-12 w-full max-w-5xl mx-auto px-4">

                {/* Left Arrow */}
                <button className="text-gray-600 hover:text-white transition-colors p-2 hidden md:block" aria-label="Previous logos">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>

                {/* Logo Container */}
                <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8 md:gap-14 flex-grow">

                    {/* Cloudflare */}
                    <div className="flex items-center gap-1.5 text-[#a1a1aa] hover:text-white transition-colors duration-300">
                        <svg width="40" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.34 10.03c-.15-2.61-2.19-4.71-4.83-4.99-1.25-.13-2.45.24-3.38.96-.94-.85-2.22-1.3-3.56-1.16-2.07.22-3.76 1.83-4.05 3.9-.06.41-.03.82.08 1.21-.08.01-.16.03-.24.06-2.09.77-3.35 2.87-3.23 5.09.11 2.05 1.77 3.76 3.82 3.9h14.8c2.65-.05 4.81-2.2 4.86-4.85.04-2.12-1.39-4.01-3.41-4.63-.28-.08-.57-.13-.86-.14z" />
                        </svg>
                        <span className="font-bold tracking-widest text-xs mt-1">CLOUDFLARE</span>
                    </div>

                    {/* Postman */}
                    <div className="flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors duration-300">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-1.51 2.82-3.1 2.94-1.63.13-3.07-.98-3.41-2.56-.37-1.68.96-3.23 2.64-3.23 1.34 0 2.47.93 2.8 2.2.14.52 1.05.34 1.07-.22.05-1.56-1.07-2.94-2.6-3.3-1.93-.45-3.89.7-4.42 2.6-.57 2.06.75 4.18 2.85 4.54 2.11.36 4.09-.98 4.46-3.04.14-.8-.92-1.12-1.29-.39-.14.26-.2.53-.19.82l.06.01-1.87 2.25c-.2.24-.54.34-.84.22-.32-.12-.51-.44-.45-.78l.41-2.45c.06-.34.34-.58.68-.61.35-.03.66.16.8.48.09.2.36.23.5.06l1.23-1.48c.2-.24.52-.35.83-.23.32.13.51.45.45.79l-.5 3.03c-.07.41-.4.71-.81.74-.43.03-.8-.21-.96-.6l-.08-.19-1.32 1.58c-.24.29-.63.42-.99.28-.38-.15-.62-.53-.55-.94l.58-3.5c.08-.49.49-.86 1-.89.52-.04.97.26 1.16.74.07.18.29.23.43.07l.95-1.14c.2-.24.51-.35.81-.23.32.13.51.46.44.81l-.39 2.36z" />
                        </svg>
                        <span className="font-semibold tracking-wider text-sm">POSTMAN</span>
                    </div>

                    {/* Stripe */}
                    <div className="flex items-center text-[#a1a1aa] hover:text-white transition-colors duration-300">
                        <span className="font-bold tracking-tighter text-2xl lowercase">stripe</span>
                    </div>

                    {/* Twilio */}
                    <div className="flex items-center gap-1.5 text-[#a1a1aa] hover:text-white transition-colors duration-300">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" fill="transparent" />
                            <circle cx="9" cy="9" r="1.5" fill="currentColor" stroke="none" />
                            <circle cx="15" cy="9" r="1.5" fill="currentColor" stroke="none" />
                            <circle cx="9" cy="15" r="1.5" fill="currentColor" stroke="none" />
                            <circle cx="15" cy="15" r="1.5" fill="currentColor" stroke="none" />
                        </svg>
                        <span className="font-medium tracking-tight text-xl lowercase">twilio</span>
                    </div>

                    {/* GitLab */}
                    <div className="flex items-center gap-1.5 text-[#a1a1aa] hover:text-white transition-colors duration-300">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.955 13.587l-2.242-6.897c-.206-.636-1.096-.636-1.302 0l-1.424 4.382H5.013L3.588 6.69c-.206-.636-1.096-.636-1.302 0l-2.242 6.897c-.183.563.036 1.183.535 1.503l11.42 8.31 11.42-8.31c.5-.32.72-.94.536-1.503z" />
                        </svg>
                        <span className="font-medium text-lg">GitLab</span>
                    </div>

                </div>

                {/* Right Arrow */}
                <button className="text-gray-600 hover:text-white transition-colors p-2 hidden md:block" aria-label="Next logos">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>

            </div>
        </section>
    );
}