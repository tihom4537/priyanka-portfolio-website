"use client";
import { useState } from "react";
import { FaExternalLinkAlt, FaBook, FaFileAlt, FaChalkboard } from "react-icons/fa";
import { journalPublications, conferencePublications, books } from "@/data/profile";

type Tab = "journal" | "conference" | "books";

function IndexBadge({ index }: { index: string }) {
  const lower = index.toLowerCase();
  if (lower.includes("sci q1")) return <span className="badge-q1 text-[10px] font-bold px-2 py-0.5 rounded-full">SCI Q1</span>;
  if (lower.includes("sci"))    return <span className="badge-sci text-[10px] font-bold px-2 py-0.5 rounded-full">SCI</span>;
  if (lower.includes("scopus")) return <span className="badge-scopus text-[10px] font-bold px-2 py-0.5 rounded-full">Scopus</span>;
  if (lower.includes("ugc"))    return <span className="badge-ugc text-[10px] font-bold px-2 py-0.5 rounded-full">UGC</span>;
  if (lower.includes("esci"))   return <span className="badge-esci text-[10px] font-bold px-2 py-0.5 rounded-full">ESCI</span>;
  return null;
}

export default function Publications() {
  const [tab, setTab] = useState<Tab>("journal");

  const tabs: { key: Tab; label: string; count: number; icon: React.ReactNode }[] = [
    { key: "journal", label: "Journal Papers", count: journalPublications.length, icon: <FaFileAlt size={13} /> },
    { key: "conference", label: "Conference Papers", count: conferencePublications.length, icon: <FaChalkboard size={13} /> },
    { key: "books", label: "Books & Chapters", count: books.length, icon: <FaBook size={13} /> },
  ];

  return (
    <section id="publications" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#00b4d8] text-sm font-semibold tracking-widest uppercase mb-2">Publications</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a]">Research Output</h2>
          <div className="mt-3 w-12 h-1 rounded-full bg-[#00b4d8]" />
          <p className="mt-4 text-slate-500 text-sm max-w-2xl">
            Published in IEEE, Elsevier, Springer, IOP, Taylor & Francis, and other reputed international venues.
          </p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {tabs.map((t) => (
            <div key={t.key} className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#0d1b2a]">{t.count}</p>
              <p className="text-xs text-slate-500 font-medium mt-1">{t.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-slate-100 pb-0">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-colors -mb-px ${
                tab === t.key
                  ? "border-[#00b4d8] text-[#00b4d8] bg-blue-50/50"
                  : "border-transparent text-slate-500 hover:text-[#0d1b2a]"
              }`}
            >
              {t.icon}
              <span className="hidden sm:inline">{t.label}</span>
              <span className="sm:hidden">{t.label.split(" ")[0]}</span>
              <span className="bg-slate-200 text-slate-600 text-[10px] font-bold rounded-full px-1.5 py-0.5">
                {t.count}
              </span>
            </button>
          ))}
        </div>

        {/* Journal list */}
        {tab === "journal" && (
          <div className="space-y-3">
            {journalPublications.map((p, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/40 card-hover"
              >
                <div className="min-w-[50px] text-center pt-1">
                  <span className="text-[#00b4d8] font-bold text-sm">{p.year}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#0d1b2a] text-sm leading-snug mb-1">{p.title}</p>
                  <p className="text-slate-500 text-xs italic">{p.journal}</p>
                </div>
                <div className="flex-shrink-0 pt-1">
                  <IndexBadge index={p.index} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Conference list */}
        {tab === "conference" && (
          <div className="space-y-3">
            {conferencePublications.map((p, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/40 card-hover"
              >
                <div className="min-w-[50px] text-center pt-1">
                  <span className="text-[#00b4d8] font-bold text-sm">{p.year}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#0d1b2a] text-sm leading-snug mb-1">{p.title}</p>
                  <p className="text-slate-500 text-xs italic">{p.venue}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Books list */}
        {tab === "books" && (
          <div className="grid sm:grid-cols-2 gap-4">
            {books.map((b, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50/40 card-hover"
              >
                <div className="flex items-start gap-3">
                  <div className="min-w-[38px] h-12 bg-[#0d1b2a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaBook size={14} className="text-[#00b4d8]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0d1b2a] text-sm leading-snug mb-1">{b.title}</p>
                    <p className="text-xs text-[#00b4d8] font-medium">{b.publisher}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-400">{b.year}</span>
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{b.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Google Scholar link */}
        <div className="mt-10 text-center">
          <a
            href="https://scholar.google.com/citations?hl=en&user=78gb3g8AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#00b4d8] hover:text-[#0077b6] font-medium transition-colors"
          >
            View full publication list on Google Scholar
            <FaExternalLinkAlt size={11} />
          </a>
        </div>
      </div>
    </section>
  );
}
