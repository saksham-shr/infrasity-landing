import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-5 px-6 md:px-8 z-40 relative">
      {/* Left side: Logo and Brand Name */}
      <Link href="/" className="flex items-center gap-2.5">
        <Image 
          src="/logo.png" // Make sure your file in the public folder matches this name
          alt="Infrasity Logo" 
          width={32} 
          height={32} 
          className="object-contain"
          priority
        />
        {/* Exact typography matching */}
        <span className="text-[22px] font-semibold text-white tracking-wide">
          Infrasity
        </span>
      </Link>

      {/* Right side: Precision Hamburger Menu */}
      <button 
        className="text-[#8c8c9a] hover:text-white transition-colors p-1"
        aria-label="Open menu"
      >
        <svg 
          width="26" 
          height="26" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Adjusted stroke width and spacing to perfectly match the screenshot */}
          <path 
            d="M3 12H21M3 6H21M3 18H21" 
            stroke="currentColor" 
            strokeWidth="1.25" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </header>
  );
}