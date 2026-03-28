export default function Newsletter() {
    return (
        <section className="w-full my-12 px-6">
            <div className="bg-[#2a1b54] rounded-2xl py-14 px-6 md:px-12 flex flex-col items-center text-center max-w-5xl mx-auto border border-[#4c2eb3]/20 shadow-2xl">

                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4 tracking-wide">
                    Subscribe to get new playbooks
                </h2>

                <p className="text-[#a79bc9] text-sm md:text-base mb-8 max-w-xl leading-relaxed">
                    Join 5,000+ developer marketers who get actionable insights delivered to their inbox.
                </p>

                <button
                    className="bg-gradient-to-r from-[#6d4aff] to-[#3b82f6] hover:from-[#5b3de6] hover:to-[#2563eb] text-white font-medium py-3 px-8 rounded-lg shadow-[0_4px_14px_0_rgba(109,74,255,0.39)] hover:shadow-[0_6px_20px_rgba(109,74,255,0.23)] hover:-translate-y-0.5 transition-all duration-200"
                >
                    Join the newsletter
                </button>

            </div>
        </section>
    );
}