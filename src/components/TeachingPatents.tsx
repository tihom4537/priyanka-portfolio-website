"use client";
import { useState } from "react";
import {
  FaUserGraduate, FaFlask, FaCheckCircle, FaLightbulb,
  FaTrophy, FaCopyright, FaChevronDown, FaChevronUp,
  FaCheckCircle as FaGranted, FaHourglassHalf,
} from "react-icons/fa";
import { phdScholars, patents, awards } from "@/data/profile";
import FadeIn from "@/components/FadeIn";

const adminRoles = [
  "AFI — Institute Time Table",
  "ANO — Media Cell",
  "Member, NAAC Committee",
  "Member, Admission Committee",
  "Assistant Warden",
  "OIC — OOPS Lab",
  "Member, Doctoral Student Selection Committee",
  "Faculty In-charge — Yoga Activities",
  "Faculty In-charge — Horticulture",
  "ANO — NAD",
  "OIC — Research Lab",
];

const courses = [
  "Computer Networks",
  "Operating Systems",
  "Machine Learning",
  "Data Structures & Algorithms",
  "Internet of Things",
  "Wireless Networks",
];

const ADMIN_PREVIEW = 5;
const PATENTS_PREVIEW = 2;

export default function TeachingPatents() {
  const [showAllAdmin, setShowAllAdmin] = useState(false);
  const [showAllPatents, setShowAllPatents] = useState(false);

  const visibleAdmin = showAllAdmin ? adminRoles : adminRoles.slice(0, ADMIN_PREVIEW);
  const visiblePatents = showAllPatents ? patents : patents.slice(0, PATENTS_PREVIEW);

  return (
    <section id="teaching-patents" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="mb-14">
            <p className="text-[#b85c3a] text-sm font-semibold tracking-widest uppercase mb-2">Academic & IP</p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1a2332]">Teaching & Patents</h2>
            <div className="mt-4 w-16 h-1.5 rounded-full bg-[#b85c3a]" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── LEFT: TEACHING ── */}
          <FadeIn direction="left" delay={0.1}>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#1a2332] border-b border-[#e8e3db] pb-3">Teaching</h3>

            {/* PhD Scholars */}
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-[#1a2332] text-lg mb-4">
                <FaFlask className="text-[#b85c3a]" size={18} />
                PhD Scholars (Ongoing)
              </h4>
              <div className="space-y-3">
                {phdScholars.map((s, i) => (
                  <div key={i} className="bg-[#faf8f5] border border-[#e8e3db] rounded-2xl p-4 card-hover">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <p className="font-semibold text-[#1a2332] text-base">{s.name}</p>
                        <p className="text-sm text-[#a8a29e] font-mono">{s.rollNo}</p>
                      </div>
                      <span className="flex-shrink-0 text-sm bg-amber-50 border border-amber-200 text-amber-700 font-medium px-2.5 py-1 rounded-full">
                        {s.year}
                      </span>
                    </div>
                    <p className="text-base text-[#44403c]">
                      <span className="font-medium text-[#b85c3a]">Topic: </span>{s.topic}
                    </p>
                  </div>
                ))}
              </div>

              {/* M.Tech stat */}
              <div className="mt-4 bg-[#1a2332] rounded-2xl p-5 flex items-center gap-5">
                <div className="text-4xl font-black text-[#d4734f]">25</div>
                <div>
                  <p className="font-semibold text-white text-base">M.Tech Students Supervised</p>
                  <p className="text-white/55 text-sm mt-0.5">All completed · 2021–2025</p>
                </div>
                <FaUserGraduate size={32} className="text-white/10 ml-auto" />
              </div>
            </div>

            {/* Courses */}
            <div>
              <h4 className="font-semibold text-[#1a2332] text-lg mb-3">Courses Taught</h4>
              <div className="grid grid-cols-2 gap-2">
                {courses.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-base text-[#44403c]">
                    <FaCheckCircle size={13} className="text-[#b85c3a] flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Admin roles */}
            <div>
              <h4 className="font-semibold text-[#1a2332] text-lg mb-3">Administrative Roles</h4>
              <div className="space-y-2">
                {visibleAdmin.map((r, i) => (
                  <div key={i} className="flex items-start gap-2 text-base text-[#57534e]">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#b85c3a] flex-shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
              {adminRoles.length > ADMIN_PREVIEW && (
                <button
                  onClick={() => setShowAllAdmin(!showAllAdmin)}
                  className="mt-3 inline-flex items-center gap-2 text-base text-[#b85c3a] hover:text-[#8a3f28] font-medium transition-colors"
                >
                  {showAllAdmin ? <><FaChevronUp size={12} /> Show fewer</> : <><FaChevronDown size={12} /> Show all {adminRoles.length} roles</>}
                </button>
              )}
            </div>
          </div>
          </FadeIn>

          {/* ── RIGHT: PATENTS & HONORS ── */}
          <FadeIn direction="right" delay={0.2}>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#1a2332] border-b border-[#e8e3db] pb-3">Patents & Honors</h3>

            {/* Patents */}
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-[#1a2332] text-lg mb-4">
                <FaLightbulb className="text-amber-500" size={18} />
                Patents & Copyrights
              </h4>
              <div className="space-y-3">
                {visiblePatents.map((p, i) => (
                  <div key={i} className="bg-[#faf8f5] border border-[#e8e3db] rounded-2xl p-5 card-hover">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 text-sm text-[#78716c] font-medium">
                        {p.type === "Copyright" ? <FaCopyright size={13} /> : <FaLightbulb size={13} />}
                        {p.type}
                      </div>
                      <span className={`flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        p.status === "Granted"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}>
                        {p.status === "Granted" ? <FaGranted size={10} /> : <FaHourglassHalf size={10} />}
                        {p.status}
                      </span>
                    </div>
                    <p className="font-medium text-[#1a2332] text-base leading-snug mb-2">{p.title}</p>
                    <p className="text-sm font-mono text-[#a8a29e]">{p.number} · {p.date}</p>
                    <p className="text-sm text-[#a8a29e]">{p.authority}</p>
                  </div>
                ))}
              </div>
              {patents.length > PATENTS_PREVIEW && (
                <button
                  onClick={() => setShowAllPatents(!showAllPatents)}
                  className="mt-3 inline-flex items-center gap-2 text-base text-[#b85c3a] hover:text-[#8a3f28] font-medium transition-colors"
                >
                  {showAllPatents
                    ? <><FaChevronUp size={12} /> Show fewer</>
                    : <><FaChevronDown size={12} /> Show all {patents.length} patents</>}
                </button>
              )}
            </div>

            {/* Honors */}
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-[#1a2332] text-lg mb-4">
                <FaTrophy className="text-amber-500" size={18} />
                Honors & Recognitions
              </h4>
              <div className="space-y-3">
                {awards.map((a, i) => (
                  <div key={i} className="bg-[#1a2332] rounded-2xl p-5 card-hover">
                    <div className="flex items-center gap-2 mb-2">
                      <FaTrophy className="text-amber-400" size={14} />
                      <span className="text-amber-400 text-sm font-bold tracking-widest uppercase">{a.year}</span>
                    </div>
                    <h5 className="text-white font-bold text-lg mb-1">{a.title}</h5>
                    <p className="text-[#d4734f] text-base font-medium mb-2">{a.organization}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{a.description}</p>
                  </div>
                ))}

                {/* IEEE card */}
                <div className="border-2 border-[#b85c3a]/25 rounded-2xl p-5 bg-[#f5f0e8]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0e4a7a] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-xs">IEEE</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a2332] text-base">Chairperson — IEEE Young Professionals</p>
                      <p className="text-[#b85c3a] text-sm font-medium mt-0.5">Delhi Section</p>
                      <p className="text-[#57534e] text-sm mt-2 leading-relaxed">
                        Leading initiatives for early-career engineers in one of India's most active IEEE sections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
