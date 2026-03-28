import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const footerLinks = {
        Tools: [
            "Design Visibility",
            "Kackemnnary",
            "Pechiist Konsvesion",
        ],
        "Use Cases": [
            "API GTM Nombles",
            "SaaS Proman",
            "Infrastructure SaaS",
            "B2DevOps",
            "TS4S Offensive SaaS",
            "Vidte/Voice",
            "My Mov Infinity",
        ],
        Services: [
            "Services Marketing",
            "ASC Gecs",
            "Testing Services",
            "Technical Viralogy",
        ],
        Resources: [
            "Home",
            "Blog",
            "Case Studio",
            "Contact",
            "Resources",
            "Workflows",
            "Terms on Contacts",
        ],
    };

    return (
        <footer className="w-full bg-[#0a0a0e] pt-16 pb-8 px-6 md:px-12 border-t border-gray-800/50">
            <div className="max-w-[1200px] mx-auto">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-6 mb-16">

                    {/* Column 1: Brand & Badges */}
                    <div className="col-span-2 flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="Infrasity Logo"
                                width={28}
                                height={28}
                                className="object-contain"
                            />
                            <span className="text-[22px] font-semibold text-white tracking-wide">
                                Infrasity
                            </span>
                        </Link>

                        {/* Badges Container */}
                        <div className="flex gap-4 items-center mt-2">
                            <Image
                                src="/color-badge.svg"
                                alt="Award"
                                width={65}
                                height={65}
                                className="object-contain"
                            />
                            <Image
                                src="/clutch.svg"
                                alt="Clutch Review"
                                width={65}
                                height={65}
                                className="object-contain"
                            />
                        </div>

                        {/* Product Hunt Badge */}
                        <Link
                            href="https://www.producthunt.com/posts/infrasity-outline-generator-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-infrasity-outline-generator-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 block w-fit hover:opacity-90 transition-opacity"
                        >
                            <Image
                                src="/producthunt.svg"
                                alt="Featured on Product Hunt"
                                width={190}
                                height={45}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Columns 2-5: Dynamic Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="col-span-1">
                            <h4 className="text-white font-semibold text-[15px] mb-5">{category}</h4>
                            <ul className="space-y-3.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-[13px] text-[#8c8c9a] hover:text-white transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Column 6: Company Socials & Awards */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-1 lg:ml-auto">
                        <h4 className="text-white font-semibold text-[15px] mb-5">Company</h4>

                        {/* Social Icons */}
                        <div className="flex gap-4 text-[#8c8c9a] mb-8">
                            <Link href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors" aria-label="X (Twitter)">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/infrasity/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </Link>
                            <Link
                                href="https://www.youtube.com/@Infrasity"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                                aria-label="YouTube"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </Link>
                        </div>

                        <h4 className="text-white font-semibold text-[15px] mb-4">Awards</h4>
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-5 h-5 bg-[#00d04b] rounded flex items-center justify-center">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                            </div>
                            <span className="text-[#e4e4e7] font-medium text-[13px]">Infrasity Now</span>
                        </div>
                        <p className="text-[12px] text-[#8c8c9a]">Recognized Regibility</p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center py-6 border-t border-gray-800/60 text-[11px] text-[#71717a] gap-4">
                    <div className="flex flex-col gap-1 text-center md:text-left">
                        <p>© 2026 Infrasity inc.</p>
                        <p>Terms and site</p>
                    </div>
                    <div className="flex flex-col gap-1 text-center md:text-right">
                        <p>Maintained Remotely</p>
                        <p>Reserved Registry</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}