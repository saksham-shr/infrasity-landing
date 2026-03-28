import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";
import Newsletter from "@/components/Newsletter";
import FilterPills from "@/components/FilterPills";
import HorizontalResourceCard from "@/components/HorizontalResourceCard";
import LogoCloud from "@/components/LogoCloud";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[700px] bg-[radial-gradient(circle_at_50%_0%,_rgba(109,74,255,0.12),_transparent_60%)] pointer-events-none" />

      <Header />

      <main className="flex-grow w-full max-w-[1100px] mx-auto px-6 pt-12 md:pt-20 pb-16 relative z-10">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-[44px] font-serif font-semibold tracking-tight text-white mb-12">
            Reports & Playbooks
          </h1>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <ResourceCard
              type="REPORT"
              title="State of GTM 2026"
              description="Original research on how B2B go-to-market is evolving in-market in the AI era. Based on data from 200+ GTM leaders."
              glowColor="from-orange-500/20"
            />
            <ResourceCard
              type="PLAYBOOK"
              title="The 7-Figure GTM Engine"
              description="The complete framework for building a founder-led content program that generates measurable pipeline."
              glowColor="from-emerald-500/20"
            />
          </div>
        </section>

        <Newsletter />

        <FilterPills />

        {/* More Resources Section */}
        <section className="mb-20 mt-16">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-white mb-10">
            More Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <HorizontalResourceCard
              type="REPORT"
              title="State of LinkedIn 2026"
              description="How the algorithm rewards original insight — and what that means for B2B content strategy."
              glowColor="from-blue-600/20"
            />
            <HorizontalResourceCard
              type="REPORT"
              title="Technical Content Strategy 2025"
              description="The new block in creating strategy for technical content strategy 2025."
              glowColor="from-gray-400/20"
            />
          </div>
        </section>

        <LogoCloud />
      </main>

      <Footer />
    </div>
  );
}