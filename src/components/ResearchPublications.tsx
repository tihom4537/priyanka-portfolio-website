"use client";
import { useState } from "react";
import {
  FaNetworkWired, FaWifi, FaCar, FaMicrochip, FaBrain,
  FaRobot, FaSatelliteDish, FaChevronDown, FaChevronUp,
  FaBook, FaFileAlt, FaChalkboard, FaExternalLinkAlt,
} from "react-icons/fa";
import { journalPublications, conferencePublications, books } from "@/data/profile";
import FadeIn from "@/components/FadeIn";

const researchAreas = [
  { icon: <FaNetworkWired size={22} />, title: "Ad hoc Networks", desc: "Self-organizing wireless networks, routing protocols, and performance optimization for dynamic topologies.", color: "#b85c3a" },
  { icon: <FaWifi size={22} />, title: "Wireless Sensor Networks", desc: "Energy-efficient routing, WBAN relay placement, and threshold-guided communication for sensor networks.", color: "#8a3f28" },
  { icon: <FaCar size={22} />, title: "Vehicular Networks (VANETs/IoV)", desc: "IEEE 802.11p performance analysis, hidden terminal problems, and MAC protocol design for vehicular networks.", color: "#b85c3a" },
  { icon: <FaMicrochip size={22} />, title: "Internet of Things (IoT)", desc: "Lightweight security models, trust-aware routing, and privacy-preserving solutions for IoT ecosystems.", color: "#8a3f28" },
  { icon: <FaBrain size={22} />, title: "AIoT & Generative AI", desc: "Integrating AI with IoT architectures; generative models for data augmentation and intelligent sensing.", color: "#b85c3a" },
  { icon: <FaRobot size={22} />, title: "Deep Learning Applications", desc: "CNN-based arrhythmia classification, fetal plane detection, stroke prediction, and fake news detection.", color: "#8a3f28" },
  { icon: <FaSatelliteDish size={22} />, title: "Cloud & Edge Computing", desc: "Hybrid workflow scheduling algorithms for cloud environments, optimizing resource allocation.", color: "#b85c3a" },
];

type Tab = "journal" | "conference" | "books";

function IndexBadge({ index }: { index: string }) {
  const lower = index.toLowerCase();
  if (lower.includes("sci q1")) return <span className="badge-q1 text-xs font-bold px-2.5 py-0.5 rounded-full">SCI Q1</span>;
  if (lower.includes("sci"))    return <span className="badge-sci text-xs font-bold px-2.5 py-0.5 rounded-full">SCI</span>;
  if (lower.includes("scopus")) return <span className="badge-scopus text-xs font-bold px-2.5 py-0.5 rounded-full">Scopus</span>;
  if (lower.includes("ugc"))    return <span className="badge-ugc text-xs font-bold px-2.5 py-0.5 rounded-full">UGC</span>;
  if (lower.includes("esci"))   return <span className="badge-esci text-xs font-bold px-2.5 py-0.5 rounded-full">ESCI</span>;
  return null;
}

const RESEARCH_PREVIEW = 4;
const PUB_PREVIEW = 4;

export default function ResearchPublications() {
  const [showAllResearch, setShowAllResearch] = useState(false);
  const [tab, setTab] = useState<Tab>("journal");
  const [showAllPubs, setShowAllPubs] = useState(false);

  const visibleResearch = showAllResearch ? researchAreas : researchAreas.slice(0, RESEARCH_PREVIEW);
  const pubData = { journal: journalPublications, conference: conferencePublications, books };
  const currentList = pubData[tab];
  const visiblePubs = showAllPubs ? currentList : currentList.slice(0, PUB_PREVIEW);

  const tabs: { key: Tab; label: string; short: string; count: number; icon: React.ReactNode }[] = [
    { key: "journal",    label: "Journal Papers",    short: "Journals",     count: journalPublications.length,    icon: <FaFileAlt size={14} /> },
    { key: "conference", label: "Conference Papers", short: "Conferences",  count: conferencePublications.length, icon: <FaChalkboard size={14} /> },
    { key: "books",      label: "Books & Chapters",  short: "Books",        count: books.length,                  icon: <FaBook size={14} /> },
  ];

  return (
    <section id="research-publications" className="py-24 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <FadeIn>
          <div className="mb-14">
            <p className="text-[#b85c3a] text-sm font-semibold tracking-widest uppercase mb-2">Work</p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1a2332]">Research & Publications</h2>
            <div className="mt-4 w-16 h-1.5 rounded-full bg-[#b85c3a]" />
            <p className="mt-4 text-[#78716c] text-lg max-w-2xl">
              Research spanning networking, IoT security, and AI — published across IEEE, Elsevier, Springer, IOP, and Taylor & Francis.
            </p>
          </div>
        </FadeIn>

        {/* Research areas */}
        <FadeIn delay={0.1}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1a2332] mb-6">Research Areas</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {visibleResearch.map((a, i) => (
                <div key={i} className="flex gap-4 bg-white border border-[#e8e3db] rounded-2xl p-5 card-hover group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${a.color}14`, color: a.color }}>
                    {a.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a2332] text-base mb-1">{a.title}</h4>
                    <p className="text-[#78716c] text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {researchAreas.length > RESEARCH_PREVIEW && (
              <div className="mt-5 text-center">
                <button
                  onClick={() => setShowAllResearch(!showAllResearch)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#b85c3a] text-[#b85c3a] hover:bg-[#b85c3a] hover:text-white rounded-lg text-base font-semibold transition-all"
                >
                  {showAllResearch ? <><FaChevronUp size={13} /> Show fewer areas</> : <><FaChevronDown size={13} /> Show all {researchAreas.length} research areas</>}
                </button>
              </div>
            )}
          </div>
        </FadeIn>

        <div className="border-t border-[#e8e3db] mb-12" />

        {/* Publications */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <h3 className="text-2xl font-bold text-[#1a2332]">Publications</h3>
            <div className="flex gap-3">
              {tabs.map((t) => (
                <div key={t.key} className="text-center bg-[#f5f0e8] border border-[#e8e3db] rounded-xl px-4 py-2">
                  <p className="text-xl font-bold text-[#1a2332]">{t.count}</p>
                  <p className="text-xs text-[#78716c] font-medium">{t.short}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-1 mb-6 border-b border-[#e8e3db]">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => { setTab(t.key); setShowAllPubs(false); }}
                className={`flex items-center gap-2 px-4 py-2.5 text-base font-medium rounded-t-lg border-b-2 transition-colors -mb-px ${
                  tab === t.key ? "border-[#b85c3a] text-[#b85c3a] bg-[#f5f0e8]/60" : "border-transparent text-[#78716c] hover:text-[#1a2332]"
                }`}
              >
                {t.icon}
                <span className="hidden sm:inline">{t.label}</span>
                <span className="sm:hidden">{t.short}</span>
                <span className="bg-[#e8e3db] text-[#78716c] text-xs font-bold rounded-full px-1.5 py-0.5">{t.count}</span>
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {tab === "journal" && (visiblePubs as typeof journalPublications).map((p, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl border border-[#e8e3db] bg-white card-hover">
                <div className="min-w-[52px] text-center pt-0.5 flex-shrink-0">
                  <span className="text-[#b85c3a] font-bold text-base">{p.year}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#1a2332] text-base leading-snug mb-1">{p.title}</p>
                  <p className="text-[#78716c] text-sm italic">{p.journal}</p>
                </div>
                <div className="flex-shrink-0 pt-0.5"><IndexBadge index={p.index} /></div>
              </div>
            ))}
            {tab === "conference" && (visiblePubs as typeof conferencePublications).map((p, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl border border-[#e8e3db] bg-white card-hover">
                <div className="min-w-[52px] text-center pt-0.5 flex-shrink-0">
                  <span className="text-[#b85c3a] font-bold text-base">{p.year}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#1a2332] text-base leading-snug mb-1">{p.title}</p>
                  <p className="text-[#78716c] text-sm italic">{p.venue}</p>
                </div>
              </div>
            ))}
            {tab === "books" && (visiblePubs as typeof books).map((b, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl border border-[#e8e3db] bg-white card-hover">
                <div className="flex-shrink-0 w-10 h-14 bg-[#1a2332] rounded-lg flex items-center justify-center">
                  <FaBook size={14} className="text-[#d4734f]" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[#1a2332] text-base leading-snug mb-1">{b.title}</p>
                  <p className="text-[#b85c3a] text-sm font-medium">{b.publisher}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-[#a8a29e]">{b.year}</span>
                    <span className="text-xs bg-[#f5f0e8] text-[#78716c] px-2 py-0.5 rounded-full border border-[#e8e3db]">{b.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {currentList.length > PUB_PREVIEW && (
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setShowAllPubs(!showAllPubs)}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#b85c3a] text-[#b85c3a] hover:bg-[#b85c3a] hover:text-white rounded-lg text-base font-semibold transition-all"
              >
                {showAllPubs ? <><FaChevronUp size={13} /> Show fewer</> : <><FaChevronDown size={13} /> Show all {currentList.length} papers</>}
              </button>
              <a href="https://scholar.google.com/citations?hl=en&user=78gb3g8AAAAJ" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-base text-[#b85c3a] hover:text-[#8a3f28] font-medium transition-colors">
                Google Scholar <FaExternalLinkAlt size={12} />
              </a>
            </div>
          )}
        </FadeIn>

      </div>
    </section>
  );
}
