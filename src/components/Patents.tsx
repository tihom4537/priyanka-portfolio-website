"use client";
import { FaLightbulb, FaTrophy, FaCopyright, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";
import { patents, awards } from "@/data/profile";

export default function Patents() {
  return (
    <section id="patents" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[#00b4d8] text-sm font-semibold tracking-widest uppercase mb-2">IP & Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a]">Patents & Honors</h2>
          <div className="mt-3 w-12 h-1 rounded-full bg-[#00b4d8]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Patents */}
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-[#0d1b2a] text-lg mb-6">
              <FaLightbulb className="text-[#e9c46a]" size={18} />
              Patents & Copyrights
            </h3>
            <div className="space-y-4">
              {patents.map((p, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-5 card-hover"
                >
                  {/* Type + status row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {p.type === "Copyright" ? (
                        <FaCopyright size={13} className="text-slate-400" />
                      ) : (
                        <FaLightbulb size={13} className="text-slate-400" />
                      )}
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{p.type}</span>
                    </div>
                    <span
                      className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        p.status === "Granted"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {p.status === "Granted" ? <FaCheckCircle size={9} /> : <FaHourglassHalf size={9} />}
                      {p.status}
                    </span>
                  </div>

                  <p className="font-medium text-[#0d1b2a] text-sm leading-snug mb-2">{p.title}</p>

                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="font-mono">{p.number}</span>
                    <span>·</span>
                    <span>{p.date}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{p.authority}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-[#0d1b2a] text-lg mb-6">
              <FaTrophy className="text-[#e9c46a]" size={18} />
              Honors & Recognitions
            </h3>
            <div className="space-y-4">
              {awards.map((a, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#0d1b2a] to-[#142232] rounded-2xl p-6 card-hover"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FaTrophy className="text-[#e9c46a]" size={16} />
                    <span className="text-[#e9c46a] text-xs font-bold tracking-widest uppercase">{a.year}</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">{a.title}</h4>
                  <p className="text-[#00b4d8] text-sm font-medium mb-2">{a.organization}</p>
                  <p className="text-white/60 text-xs leading-relaxed">{a.description}</p>
                </div>
              ))}

              {/* IEEE Chairperson highlight */}
              <div className="border-2 border-[#00b4d8]/30 rounded-2xl p-5 bg-blue-50/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0077b6] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xs">IEEE</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0d1b2a] text-sm">Chairperson — IEEE Young Professionals</p>
                    <p className="text-[#00b4d8] text-xs font-medium mt-0.5">Delhi Section</p>
                    <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                      Elected chairperson of one of India's most active IEEE professional sections, leading initiatives for early-career engineers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
