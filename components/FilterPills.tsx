export default function FilterPills() {
    const tabs = ['All', 'Strategy', 'Content', 'Case Studies'];

    return (
        <div className="flex flex-wrap justify-center gap-3 mt-16 mb-12">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${tab === 'All'
                            ? 'bg-[#6d4aff] text-white shadow-md' // Active state: Bright purple
                            : 'bg-[#25213b] text-[#9ca3af] hover:bg-[#2d2847] hover:text-white' // Inactive state: Muted background
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}