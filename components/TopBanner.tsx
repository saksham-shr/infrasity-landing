"use client";

import { useState } from "react";
import Link from "next/link";

export default function TopBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-[#3b66f5] text-white text-sm py-2.5 px-4 flex items-center relative z-50">
            {/* Centered Text Container */}
            <div className="w-full text-center">
                <p>
                    State of GTM 2026 is dropping soon — be the first to get it.{" "}
                    <Link
                        href="#"
                        className="underline underline-offset-2 font-medium hover:text-white/80 transition-colors"
                    >
                        Join the waitlist
                    </Link>
                </p>
            </div>

            {/* Close Button positioned absolutely to the right */}
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 p-1 text-white/80 hover:text-white transition-colors"
                aria-label="Close banner"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                </svg>
            </button>
        </div>
    );
}