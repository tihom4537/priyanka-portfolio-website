"use client";
import Image from "next/image";
import { profile, education, teachingExperience } from "@/data/profile";
import FadeIn from "@/components/FadeIn";

const stats = [
  { label: "Years Teaching", value: "8+" },
  { label: "Journal Papers", value: "13" },
  { label: "M.Tech Supervised", value: "25" },
  { label: "PhD Scholars", value: "3" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Row 1: Photo + Name/Bio ── */}
        <div className="flex flex-col sm:flex-row gap-10 items-start mb-10">
          <FadeIn direction="left" className="flex-shrink-0 w-56 sm:w-64 rounded-2xl overflow-hidden border border-[#e8e3db] shadow-sm">
            <Image
              src="/profile2.jpg"
              alt="Dr. Priyanka Rathee"
              width={480}
              height={640}
              className="w-full h-auto block"
            />
          </FadeIn>

          <FadeIn delay={0.15} className="flex-1">
            <p className="text-[#b85c3a] text-xs font-semibold tracking-widest uppercase mb-3">About</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-1">Dr. Priyanka Rathee</h2>
            <p className="text-[#b85c3a] text-base font-medium mb-6">
              {profile.designation} · {profile.institutionShort}
            </p>
            <p className="text-[#44403c] text-lg leading-relaxed">{profile.bio}</p>
          </FadeIn>
        </div>

        {/* ── Row 2: Stats ── */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[#e8e3db] py-8 mb-14">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center ${i !== stats.length - 1 ? "border-r border-[#e8e3db]" : ""}`}>
                <p className="text-4xl font-bold text-[#1a2332]">{s.value}</p>
                <p className="text-sm text-[#a8a29e] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Row 3: Education + Experience ── */}
        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn direction="left" delay={0.1}>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#b85c3a] mb-6">Education</p>
            <div className="space-y-6">
              {education.map((e, i) => (
                <div key={i} className="flex gap-5">
                  <span className="flex-shrink-0 text-sm font-semibold text-[#a8a29e] w-10 pt-0.5">{e.year}</span>
                  <div className="border-l border-[#e8e3db] pl-5">
                    <p className="font-bold text-[#1a2332] text-base">{e.degree}</p>
                    <p className="text-base text-[#57534e] mt-0.5">{e.institution}</p>
                    <p className="text-sm text-[#a8a29e]">{e.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#b85c3a] mb-6">Academic Experience</p>
            <div className="space-y-6">
              {teachingExperience.map((t, i) => (
                <div key={i} className="flex gap-5">
                  <span className="flex-shrink-0 text-sm text-[#a8a29e] w-10 pt-0.5 leading-snug">
                    {t.from.split(" ")[1]}<br />
                    <span className="text-[#d4c4b8]">↓</span><br />
                    {t.to.split(" ")[1]}
                  </span>
                  <div className="border-l border-[#e8e3db] pl-5">
                    <p className="font-bold text-[#1a2332] text-base">{t.position}</p>
                    <p className="text-base text-[#57534e] mt-0.5">{t.organization}</p>
                    <p className="text-sm text-[#a8a29e]">{t.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
