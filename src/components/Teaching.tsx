"use client";
import { FaUserGraduate, FaFlask, FaCheckCircle } from "react-icons/fa";
import { phdScholars } from "@/data/profile";

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

export default function Teaching() {
  return (
    <section id="teaching" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[#00b4d8] text-sm font-semibold tracking-widest uppercase mb-2">Academic</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a]">Teaching & Supervision</h2>
          <div className="mt-3 w-12 h-1 rounded-full bg-[#00b4d8]" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* PhD Scholars */}
          <div className="lg:col-span-2">
            <h3 className="flex items-center gap-2 font-semibold text-[#0d1b2a] text-lg mb-6">
              <FaFlask className="text-[#00b4d8]" size={18} />
              PhD Scholars (Ongoing)
            </h3>
            <div className="space-y-4">
              {phdScholars.map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-100 p-5 card-hover"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-[#0d1b2a] text-sm">{s.name}</p>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">{s.rollNo}</p>
                    </div>
                    <span className="flex-shrink-0 text-xs bg-amber-50 border border-amber-200 text-amber-700 font-medium px-2.5 py-1 rounded-full">
                      Enrolled {s.year}
                    </span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-50">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <span className="font-medium text-[#0077b6]">Research: </span>
                      {s.topic}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* M.Tech supervision stat */}
            <div className="mt-5 bg-gradient-to-r from-[#0d1b2a] to-[#0a3d62] rounded-2xl p-5 text-white flex items-center gap-5">
              <div className="text-4xl font-black text-[#00b4d8]">25</div>
              <div>
                <p className="font-semibold text-white">M.Tech Students Supervised</p>
                <p className="text-white/60 text-xs mt-0.5">All successfully completed · 2021–2025</p>
              </div>
              <FaUserGraduate size={32} className="text-white/10 ml-auto" />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Courses Taught */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <h3 className="font-semibold text-[#0d1b2a] text-base mb-4">Courses Taught</h3>
              <div className="space-y-2">
                {courses.map((c, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <FaCheckCircle size={12} className="text-[#00b4d8] flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Admin Roles */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <h3 className="font-semibold text-[#0d1b2a] text-base mb-4">Administrative Roles</h3>
              <div className="space-y-2">
                {adminRoles.map((r, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00b4d8] flex-shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
