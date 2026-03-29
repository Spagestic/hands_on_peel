"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Download } from "lucide-react";
import Image from "next/image";

const slides = [
  // Slide 1 - Cover
  <div
    key="1"
    className="flex flex-col items-center justify-center h-full text-center p-12 relative"
  >
    <div className="flex-1 flex flex-col items-center justify-center space-y-8 z-10">
      <Image
        src="/logo_full_.png"
        alt="Crafts on Peel Logo"
        width={160}
        height={48}
        className="h-auto w-24 sm:w-28 lg:w-32"
        style={{ width: "auto", height: "auto" }}
        priority
      />

      <h1 className="font-serif text-7xl font-medium tracking-tight">
        HANDS OF PEEL
      </h1>
      <p className="font-serif text-3xl text-zinc-600 italic">
        A digital heritage platform for Crafts on Peel
      </p>
      <div className="w-16 h-px bg-zinc-800 my-8"></div>
      <p className="text-2xl tracking-wide">
        Preserving craft, extending stories
      </p>
    </div>

    <div className="w-full flex justify-between items-end mt-auto font-mono text-sm tracking-widest uppercase text-zinc-500 z-10">
      <span>29 Mar 2026</span>
      <span>InnoHack 2026</span>
    </div>
  </div>,

  // Slide 2 - The Challenge
  <div key="2" className="flex flex-col h-full p-16">
    <p className="font-mono text-sm tracking-widest uppercase text-zinc-500 mb-8">
      The Challenge
    </p>
    <h2 className="font-serif text-5xl mb-12 max-w-4xl leading-tight">
      Hong Kong&apos;s traditional craftsmanship is culturally rich, but
      digitally fragile.
    </h2>

    <div className="grid grid-cols-2 gap-12 flex-1">
      <div className="border border-zinc-200 p-8 rounded-sm bg-white/50">
        <h3 className="font-serif text-2xl mb-6">
          Current appreciation exists
        </h3>
        <ul className="space-y-4 text-xl text-zinc-700">
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>{" "}
            exhibitions
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>{" "}
            docent tours
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>{" "}
            brochures
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>{" "}
            videos
          </li>
        </ul>
      </div>
      <div className="border border-zinc-200 p-8 rounded-sm bg-zinc-100/50">
        <h3 className="font-serif text-2xl mb-6">
          But it remains difficult to:
        </h3>
        <ul className="space-y-4 text-xl text-zinc-700">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 mt-2.5 shrink-0"></span>{" "}
            convey urgency of preservation
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 mt-2.5 shrink-0"></span>{" "}
            celebrate artisan stories easily
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 mt-2.5 shrink-0"></span>{" "}
            show cross-generational & cross-disciplinary links
          </li>
        </ul>
      </div>
    </div>
  </div>,

  // Slide 3 - Field Insights
  <div key="3" className="flex flex-col h-full p-16">
    <p className="font-mono text-sm tracking-widest uppercase text-zinc-500 mb-8">
      What We Learned From Crafts on Peel
    </p>

    <div className="grid grid-cols-3 gap-6 mb-16">
      <div className="p-6 border-l-2 border-zinc-800">
        <p className="font-serif text-3xl mb-2">3</p>
        <p className="font-mono text-sm uppercase tracking-wider text-zinc-500">
          Staff Members
        </p>
      </div>
      <div className="p-6 border-l-2 border-zinc-800">
        <p className="font-serif text-3xl mb-2">2</p>
        <p className="font-mono text-sm uppercase tracking-wider text-zinc-500">
          Exhibitions / Year
        </p>
      </div>
      <div className="p-6 border-l-2 border-zinc-800">
        <p className="font-serif text-3xl mb-2">Annual</p>
        <p className="font-mono text-sm uppercase tracking-wider text-zinc-500">
          London Craft Week
        </p>
      </div>
    </div>

    <div className="flex-1 flex gap-16">
      <div className="flex-1">
        <h3 className="font-serif text-3xl mb-8">Key Pain Points</h3>
        <ul className="space-y-4 text-xl text-zinc-700">
          <li className="text-red-800/80 font-medium">
            • Low manpower & limited funding
          </li>
          <li>• Weak current website</li>
          <li>• Heavy dependence on vendors</li>
          <li>• Past exhibitions lose visibility quickly</li>
          <li>• Digital upkeep distracts from core research and curation</li>
        </ul>
      </div>
      <div className="flex-1 min-h-80 bg-zinc-200/50 rounded border border-dashed border-zinc-300 overflow-hidden relative">
        <Image
          src="/image.png"
          alt="Field Insights"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
          priority
        />
      </div>
    </div>
  </div>,

  // Slide 4 - Problem Statement
  <div
    key="4"
    className="flex flex-col items-center justify-center h-full p-16 text-center text-balance"
  >
    <p className="font-mono text-sm tracking-widest uppercase text-zinc-500 mb-12">
      Problem Statement
    </p>

    <h2 className="font-serif text-4xl mb-10 text-zinc-800">
      Crafts on Peel does not just need a better website.
    </h2>

    <p className="text-2xl mb-8">
      It needs a digital infrastructure that helps a very small NGO:
    </p>

    <ul className="text-xl space-y-3 mb-16 inline-block text-left text-zinc-600 bg-white/50 p-8 border border-zinc-100 rounded-sm shadow-sm">
      <li className="flex items-center gap-3">
        ✓ preserve artisan knowledge and exhibition stories
      </li>
      <li className="flex items-center gap-3">
        ✓ engage younger and broader audiences
      </li>
      <li className="flex items-center gap-3">✓ reduce maintenance burden</li>
      <li className="flex items-center gap-3">✓ support sustainable growth</li>
    </ul>

    <div className="w-24 h-px bg-zinc-300 mb-12 mx-auto"></div>

    <blockquote className="font-serif text-4xl italic text-zinc-900 leading-snug max-w-4xl">
      &quot;How can we extend each exhibition from a temporary event into a
      lasting cultural record?&quot;
    </blockquote>
  </div>,

  // Slide 5 - Solution Overview
  <div key="5" className="flex flex-col h-full p-16 items-center">
    <p className="font-mono text-sm tracking-widest uppercase text-zinc-500 mb-6 w-full">
      Our Solution
    </p>

    <h1 className="font-serif text-6xl tracking-tight mb-6">HANDS OF PEEL</h1>
    <p className="text-2xl text-zinc-600 mb-16">
      A low-maintenance digital heritage and engagement platform
    </p>

    <div className="grid grid-cols-3 gap-8 w-full max-w-5xl mb-16 flex-1">
      <div className="bg-white border border-zinc-200 p-10 flex flex-col shadow-sm">
        <h3 className="font-mono text-xl tracking-widest uppercase mb-8 pb-4 border-b border-zinc-100 text-center">
          Preserve
        </h3>
        <ul className="space-y-4 text-lg text-zinc-600 text-center flex-1 flex flex-col justify-center">
          <li>Exhibitions</li>
          <li>Artisan Stories</li>
          <li>Living Archive</li>
        </ul>
      </div>
      <div className="bg-white border border-zinc-200 p-10 flex flex-col shadow-sm">
        <h3 className="font-mono text-xl tracking-widest uppercase mb-8 pb-4 border-b border-zinc-100 text-center">
          Engage
        </h3>
        <ul className="space-y-4 text-lg text-zinc-600 text-center flex-1 flex flex-col justify-center">
          <li>Storytelling</li>
          <li>Events & Tours</li>
          <li>Daily-life Link</li>
        </ul>
      </div>
      <div className="bg-white border border-zinc-200 p-10 flex flex-col shadow-sm">
        <h3 className="font-mono text-xl tracking-widest uppercase mb-8 pb-4 border-b border-zinc-100 text-center">
          Sustain
        </h3>
        <ul className="space-y-4 text-lg text-zinc-600 text-center flex-1 flex flex-col justify-center">
          <li>Donations</li>
          <li>Shop Support</li>
          <li>Enquiries</li>
        </ul>
      </div>
    </div>
  </div>,

  // Slide 6 - Why It's Innovative
  <div key="6" className="flex flex-col h-full p-16">
    <p className="font-mono text-sm tracking-widest uppercase text-zinc-500 mb-8">
      Why This Is Innovative
    </p>

    <div className="flex gap-16 mb-12">
      <div className="flex-1">
        <h3 className="font-serif text-2xl mb-6 text-zinc-500">
          This is not just:
        </h3>
        <ul className="space-y-4 text-xl text-zinc-400">
          <li>× a simple website redesign</li>
          <li>× another online shop</li>
          <li>× a static dry archive</li>
        </ul>
      </div>
      <div className="flex-1">
        <h3 className="font-serif text-2xl mb-6 text-zinc-900">This is:</h3>
        <ul className="space-y-4 text-xl text-zinc-800 font-medium">
          <li>✓ Digital heritage preservation</li>
          <li>✓ Editorial storytelling</li>
          <li>✓ Resilient archive infrastructure</li>
          <li>✓ Public engagement platform</li>
          <li>✓ Sustainable support pathways</li>
          <li>✓ Low-maintenance NGO operations</li>
        </ul>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-8 mt-auto">
      <div className="bg-zinc-800 text-zinc-100 p-8 rounded-sm">
        <h4 className="font-mono uppercase tracking-widest text-sm mb-4 text-zinc-400">
          Craft in Everyday Life
        </h4>
        <p className="text-xl font-serif leading-relaxed">
          Connects niche heritage directly to daily Hong Kong memory and modern
          lifestyle.
        </p>
      </div>
      <div className="bg-white border border-zinc-300 p-8 rounded-sm">
        <h4 className="font-mono uppercase tracking-widest text-sm mb-4 text-zinc-500">
          Poster-Led Archive
        </h4>
        <p className="text-xl font-serif leading-relaxed">
          Extends the visual impact and visibility of exhibitions far beyond
          their physical cycles.
        </p>
      </div>
    </div>
  </div>,

  // Slide 7 - Prototype Highlights
  <div key="7" className="flex flex-col h-full p-16">
    <p className="font-mono text-sm tracking-widest uppercase text-zinc-500 mb-8">
      Prototype Highlights
    </p>

    <div className="grid grid-cols-3 gap-6 mb-12">
      <div className="aspect-4/3 bg-zinc-200 border border-zinc-300 rounded flex items-center justify-center text-sm font-mono uppercase tracking-widest text-zinc-500">
        Homepage
      </div>
      <div className="aspect-4/3 bg-zinc-200 border border-zinc-300 rounded flex items-center justify-center text-sm font-mono uppercase tracking-widest text-zinc-500">
        Exhibitions Index
      </div>
      <div className="aspect-4/3 bg-zinc-200 border border-zinc-300 rounded flex items-center justify-center text-sm font-mono uppercase tracking-widest text-zinc-500">
        Exhibition Detail
      </div>
    </div>

    <div className="flex gap-16">
      <div className="flex-1">
        <h3 className="font-serif text-2xl mb-6 border-b border-zinc-200 pb-4">
          Public-Facing
        </h3>
        <ul className="space-y-3 text-lg text-zinc-700">
          <li>• Current exhibition focus</li>
          <li>• Poster-led visual archive</li>
          <li>• Rich artisan stories & journals</li>
          <li>• Integrated support pathways</li>
        </ul>
      </div>
      <div className="flex-1">
        <h3 className="font-serif text-2xl mb-6 border-b border-zinc-200 pb-4">
          Staff-Facing
        </h3>
        <ul className="space-y-3 text-lg text-zinc-700">
          <li>• Easy content updates via CMS</li>
          <li>• Structured CRUD management</li>
          <li>• Zero-code deployment maintenance</li>
        </ul>
      </div>
    </div>
  </div>,

  // Slide 8 - User Value
  <div key="8" className="flex flex-col h-full p-16 items-center">
    <p className="font-mono text-sm tracking-widest uppercase text-zinc-500 mb-12 w-full text-left">
      Who Benefits?
    </p>

    <div className="grid grid-cols-3 gap-8 w-full flex-1">
      <div className="bg-white border border-zinc-200 p-10 flex flex-col relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800"></div>
        <h3 className="font-serif text-3xl mb-8">Visitors & Public</h3>
        <ul className="space-y-4 text-xl text-zinc-600 flex-1">
          <li>• Easier access to info</li>
          <li>• Richer cultural stories</li>
          <li>• Clearer historical context</li>
          <li>• More ways to engage & attend</li>
        </ul>
      </div>
      <div className="bg-white border border-zinc-200 p-10 flex flex-col relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-zinc-600"></div>
        <h3 className="font-serif text-3xl mb-8">Artisans & Craftsmen</h3>
        <ul className="space-y-4 text-xl text-zinc-600 flex-1">
          <li>• Stronger digital visibility</li>
          <li>• Preserved legacy & stories</li>
          <li>• Longer-lasting public reach</li>
          <li>• Permanent link to exhibitions</li>
        </ul>
      </div>
      <div className="bg-white border border-zinc-200 p-10 flex flex-col relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-zinc-400"></div>
        <h3 className="font-serif text-3xl mb-8">Staff & NGO</h3>
        <ul className="space-y-4 text-xl text-zinc-600 flex-1">
          <li>• Vastly easier updating</li>
          <li>• Less vendor dependence</li>
          <li>• More time for curation</li>
          <li>• Sustainable architecture</li>
        </ul>
      </div>
    </div>
  </div>,

  // Slide 9 - Technical
  <div key="9" className="flex flex-col h-full p-16">
    <p className="font-mono text-sm tracking-widest uppercase text-zinc-500 mb-8">
      Feasibility & Technical Approach
    </p>

    <div className="bg-zinc-900 text-white p-8 rounded-sm mb-12 flex items-center justify-around font-mono uppercase tracking-widest text-sm">
      <span>Next.js</span>
      <span className="text-zinc-600">/</span>
      <span>TypeScript</span>
      <span className="text-zinc-600">/</span>
      <span>Tailwind</span>
      <span className="text-zinc-600">/</span>
      <span>PostgreSQL</span>
      <span className="text-zinc-600">/</span>
      <span>Vercel</span>
    </div>

    <div className="flex gap-16 flex-1">
      <div className="flex-1">
        <h3 className="font-serif text-3xl mb-8">Why this is feasible</h3>
        <ul className="space-y-5 text-xl text-zinc-700">
          <li className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-sm font-mono">
              1
            </span>{" "}
            Lightweight modern stack
          </li>
          <li className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-sm font-mono">
              2
            </span>{" "}
            Web-based and highly accessible
          </li>
          <li className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-sm font-mono">
              3
            </span>{" "}
            Realistic MVP scope
          </li>
          <li className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-sm font-mono">
              4
            </span>{" "}
            CMS-style intuitive content updates
          </li>
          <li className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-sm font-mono">
              5
            </span>{" "}
            Maintainable for a 3-person NGO team
          </li>
        </ul>
      </div>
      <div className="flex-1 border-l border-zinc-200 pl-16 flex flex-col justify-center">
        <div className="p-8 border border-zinc-300 bg-white shadow-sm text-center mb-4">
          Public Front-End
        </div>
        <div className="flex justify-center my-2 text-zinc-400">⇅</div>
        <div className="p-8 border-2 border-zinc-800 bg-zinc-50 font-serif text-xl text-center mb-4">
          Database & Storage
        </div>
        <div className="flex justify-center my-2 text-zinc-400">⇅</div>
        <div className="p-8 border border-zinc-300 bg-white shadow-sm text-center">
          Admin CMS
        </div>
      </div>
    </div>
  </div>,

  // Slide 10 - Sustainability
  <div key="10" className="flex flex-col h-full p-16">
    <p className="font-mono text-sm tracking-widest uppercase text-zinc-500 mb-8">
      Long-Term Impact
    </p>

    <h2 className="font-serif text-4xl mb-12 text-center text-zinc-800">
      Hands on Peel helps Crafts on Peel do{" "}
      <span className="italic font-medium">more</span> with{" "}
      <span className="italic font-medium">less</span>.
    </h2>

    <div className="grid grid-cols-2 gap-8 mb-16 flex-1">
      <div className="bg-red-50/50 border border-red-100 p-10">
        <h3 className="font-mono uppercase tracking-widest text-red-800 mb-8 border-b border-red-200 pb-4">
          Less
        </h3>
        <ul className="space-y-4 text-xl text-red-900/80">
          <li>↓ Vendor dependence & running costs</li>
          <li>↓ Staff digital management burden</li>
          <li>↓ Post-exhibition value loss</li>
        </ul>
      </div>
      <div className="bg-green-50/50 border border-green-100 p-10">
        <h3 className="font-mono uppercase tracking-widest text-green-800 mb-8 border-b border-green-200 pb-4">
          More
        </h3>
        <ul className="space-y-4 text-xl text-green-900/80">
          <li>↑ Permanent archive visibility</li>
          <li>↑ Public engagement & storytelling</li>
          <li>↑ Clarity on support pathways</li>
        </ul>
      </div>
    </div>

    <div className="mt-auto pt-8 border-t border-zinc-200 flex items-center gap-8">
      <span className="font-mono text-sm uppercase tracking-widest text-zinc-500 whitespace-nowrap">
        Future Roadmap
      </span>
      <div className="flex text-lg text-zinc-700 gap-8 w-full justify-between">
        <span>Multilingual Archive</span>
        <span className="text-zinc-300">•</span>
        <span>Integrated Donations</span>
        <span className="text-zinc-300">•</span>
        <span>Semantic Search</span>
        <span className="text-zinc-300">•</span>
        <span>AI Content Assistance</span>
      </div>
    </div>
  </div>,

  // Slide 11 - Closing
  <div
    key="11"
    className="flex flex-col items-center justify-center h-full p-16 text-center"
  >
    <h2 className="font-serif text-5xl mb-16">Why Hands on Peel Stands Out</h2>

    <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-left text-2xl text-zinc-700 max-w-5xl mb-2">
      <div className="flex items-start gap-4">
        <span className="text-zinc-900">✓</span> Built directly from real NGO
        pain points
      </div>
      <div className="flex items-start gap-4">
        <span className="text-zinc-900">✓</span> Innovative format but highly
        realistic delivery
      </div>
      <div className="flex items-start gap-4">
        <span className="text-zinc-900">✓</span> Strong cultural and community
        impact
      </div>
      <div className="flex items-start gap-4">
        <span className="text-zinc-900">✓</span> Extends each exhibition into a
        lasting cultural archive
      </div>
      <div className="flex items-start gap-4 col-span-2 justify-center mt-4 border-t border-zinc-200 pt-8 text-zinc-900 font-medium"></div>
    </div>

    <div className="border-t border-zinc-200" />

    <blockquote className="font-serif text-3xl italic text-zinc-800 leading-snug max-w-4xl mb-12">
      &quot;Traditional craftsmanship is not only about preserving techniques,
      but also preserving memory, meaning, and intergenerational links.&quot;
    </blockquote>

    <div className="font-mono uppercase tracking-[0.2em] text-sm text-zinc-500">
      Preserving craft, extending stories
    </div>
  </div>,
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDownloadPdf = useCallback(async () => {
    const response = await fetch("/presentation.pdf");

    if (!response.ok) {
      throw new Error("Failed to download presentation PDF");
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = objectUrl;
    link.download = "Hands_on_Peel_Presentation.pdf";
    link.click();

    URL.revokeObjectURL(objectUrl);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="fixed top-6 right-6 z-50">
        <button
          type="button"
          onClick={handleDownloadPdf}
          className="inline-flex h-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 px-2.5 text-sm font-medium whitespace-nowrap text-zinc-300 transition-all outline-none select-none backdrop-blur-md hover:bg-zinc-800 hover:text-white focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </button>
      </div>

      <div className="w-full max-w-7xl aspect-video bg-[#fdfbf7] text-zinc-900 shadow-2xl relative overflow-hidden flex flex-col selection:bg-zinc-200">
        {/* Slide Content */}
        <div className="flex-1 relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {slide}
            </div>
          ))}
        </div>

        {/* Controls Overlay */}
        <div className="absolute bottom-6 left-0 w-full flex justify-between items-center px-8 z-50 pointer-events-none">
          <div className="font-mono text-zinc-400 text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
}
