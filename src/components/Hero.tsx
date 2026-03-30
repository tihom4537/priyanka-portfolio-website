"use client";
import Image from "next/image";
import { FaEnvelope, FaOrcid } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const ORBIT_R = 205; // px — orbit radius, slightly outside photo edge
const DURATION = 22;  // seconds per full revolution

function OrbitBadge({
  startAngle,
  children,
}: {
  startAngle: number;
  children: React.ReactNode;
}) {
  return (
    // Zero-size anchor at photo center
    <motion.div
      className="absolute pointer-events-none"
      style={{ top: "50%", left: "50%", width: 0, height: 0 }}
      animate={{ rotate: [startAngle, startAngle + 360] }}
      transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
    >
      {/* Push badge out to orbit radius, counter-rotate so it stays upright */}
      <motion.div
        className="absolute"
        style={{ left: ORBIT_R, top: 0, translateY: "-50%" }}
        animate={{ rotate: [-startAngle, -(startAngle + 360)] }}
        transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(150deg, #faf7f2 0%, #f5ede0 55%, #ede3d0 100%)" }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #b85c3a 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #e8d5be, transparent)" }} />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #d4b896, transparent)" }} />

      <div className="relative max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center w-full">

        {/* ── LEFT: Text ── */}
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-white/60 border border-[#d4b896] rounded-full px-4 py-1.5 mb-7 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#b85c3a] animate-pulse" />
            <span className="text-[#78614a] text-xs font-semibold tracking-widest uppercase">
              {profile.department}
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-[#1a2332] leading-tight mb-4">
            {profile.name}
          </h1>
          <p className="text-[#b85c3a] text-2xl font-bold mb-1">{profile.designation}</p>
          <p className="text-[#78716c] text-lg font-medium mb-7">{profile.institution}</p>

          <div className="flex flex-wrap gap-2 mb-9">
            {profile.specialization.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full text-sm font-medium border border-[#c9a882] bg-white/50 text-[#5c4a35]"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#research-publications"
              className="px-6 py-2.5 bg-[#b85c3a] hover:bg-[#8a3f28] text-white rounded-lg text-base font-semibold transition-colors shadow-sm"
            >
              View Publications
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 border border-[#b85c3a] text-[#b85c3a] hover:bg-[#b85c3a] hover:text-white rounded-lg text-base font-semibold transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#78716c] hover:text-[#b85c3a] transition-colors text-sm font-medium">
              <SiGooglescholar size={17} /> Scholar
            </a>
            <a href={profile.orcid} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#78716c] hover:text-[#b85c3a] transition-colors text-sm font-medium">
              <FaOrcid size={17} /> ORCID
            </a>
            <a href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 text-[#78716c] hover:text-[#b85c3a] transition-colors text-sm font-medium">
              <FaEnvelope size={15} />
              <span className="hidden sm:inline">{profile.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>

        {/* ── RIGHT: Photo + orbiting badges ── */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          {/*
            Orbit reference: this div is exactly the size of the photo.
            Badges orbit relative to its center.
          */}
          <div className="relative w-72 h-72 md:w-[410px] md:h-[410px] flex-shrink-0">

            {/* Dashed orbit track */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#c9a882]/40" />

            {/* The circular photo */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Dr. Priyanka Rathee"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Badge A: IETE 2025 — starts at top-right (~40°) */}
            <OrbitBadge startAngle={40}>
              <div className="bg-white rounded-xl shadow-lg border border-[#e8e3db] px-3 py-2 whitespace-nowrap">
                <p className="text-[10px] text-[#a8a29e] font-semibold uppercase tracking-wide">Fellow</p>
                <p className="text-sm font-bold text-[#1a2332] leading-tight">IETE 2025</p>
              </div>
            </OrbitBadge>

            {/* Badge B: IEEE YP — starts at bottom-left (220°, opposite) */}
            <OrbitBadge startAngle={220}>
              <div className="bg-[#b85c3a] rounded-xl shadow-lg px-3 py-2 whitespace-nowrap">
                <p className="text-[10px] text-white/70 font-semibold uppercase tracking-wide">Chairperson</p>
                <p className="text-sm font-bold text-white leading-tight">IEEE YP</p>
              </div>
            </OrbitBadge>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[#a8a29e] text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#b85c3a]/40 to-transparent" />
      </div>
    </section>
  );
}
