"use client";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import { SiGooglescholar, SiOrcid } from "react-icons/si";
import { profile } from "@/data/profile";
import FadeIn from "@/components/FadeIn";

const links = [
  { label: "Google Scholar", desc: "Publications & citations", href: profile.googleScholar, icon: <SiGooglescholar size={20} />, color: "#4285F4" },
  { label: "ORCID", desc: "Researcher identifier", href: profile.orcid, icon: <SiOrcid size={20} />, color: "#A6CE39" },
  { label: "Publons", desc: "Peer review record", href: profile.publons, icon: <FaExternalLinkAlt size={16} />, color: "#b85c3a" },
  { label: "NIT Profile", desc: "Official faculty page", href: profile.profileUrl, icon: <FaExternalLinkAlt size={16} />, color: "#1a2332" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1a2332]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-14 text-center">
            <p className="text-[#d4734f] text-sm font-semibold tracking-widest uppercase mb-2">Get in Touch</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white">Contact</h2>
            <div className="mt-4 w-16 h-1.5 rounded-full bg-[#b85c3a] mx-auto" />
            <p className="mt-5 text-white/50 text-lg max-w-lg mx-auto">
              Open to research collaborations, invited talks, and academic consultations.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn direction="left" delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg mb-5">Contact Information</h3>

              <a href={`mailto:${profile.email}`} className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#b85c3a]/25 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope size={16} className="text-[#d4734f]" />
                </div>
                <div>
                  <p className="text-white/45 text-sm font-medium">Email</p>
                  <p className="text-white text-base font-medium group-hover:text-[#d4734f] transition-colors">{profile.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[#b85c3a]/25 flex items-center justify-center flex-shrink-0">
                  <FaPhone size={14} className="text-[#d4734f]" />
                </div>
                <div>
                  <p className="text-white/45 text-sm font-medium">Phone</p>
                  <p className="text-white text-base font-medium">{profile.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[#b85c3a]/25 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt size={16} className="text-[#d4734f]" />
                </div>
                <div>
                  <p className="text-white/45 text-sm font-medium">Address</p>
                  <p className="text-white text-base font-medium">{profile.department}</p>
                  <p className="text-white/55 text-sm mt-0.5">{profile.institution}</p>
                  <p className="text-white/55 text-sm">Hamirpur, Himachal Pradesh — 177005</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div>
              <h3 className="text-white font-semibold text-lg mb-5">Academic Profiles</h3>
              <div className="grid grid-cols-2 gap-3">
                {links.map((l, i) => (
                  <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group card-hover"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ background: `${l.color}30`, color: l.color }}>
                      {l.icon}
                    </div>
                    <div>
                      <p className="text-white text-base font-semibold group-hover:text-[#d4734f] transition-colors">{l.label}</p>
                      <p className="text-white/40 text-sm mt-0.5">{l.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
