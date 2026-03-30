"use client";
import { useState } from "react";
import { FaCalendarAlt, FaMicrophoneAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { events, talks } from "@/data/profile";
import FadeIn from "@/components/FadeIn";

const EVENTS_PREVIEW = 4;

export default function Events() {
  const [showAllEvents, setShowAllEvents] = useState(false);
  const visibleEvents = showAllEvents ? events : events.slice(0, EVENTS_PREVIEW);

  return (
    <section id="events" className="py-24 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-14">
            <p className="text-[#b85c3a] text-sm font-semibold tracking-widest uppercase mb-2">Outreach</p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1a2332]">Events & Talks</h2>
            <div className="mt-4 w-16 h-1.5 rounded-full bg-[#b85c3a]" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Events organized */}
          <FadeIn direction="left" delay={0.1}>
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-[#1a2332] text-xl mb-6">
                <FaCalendarAlt className="text-[#b85c3a]" size={18} />
                Organized Events
              </h3>
              <div className="relative border-l-2 border-[#e8e3db] ml-2">
                {visibleEvents.map((e, i) => (
                  <div key={i} className="relative pl-8 pb-5">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-[#b85c3a] bg-white" />
                    <div className="bg-white border border-[#e8e3db] rounded-xl p-4 card-hover">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-[#b85c3a]">{e.year}</span>
                        <span className="text-xs bg-[#f5f0e8] text-[#78716c] px-2 py-0.5 rounded-full font-medium border border-[#e8e3db]">{e.role}</span>
                      </div>
                      <p className="font-medium text-[#1a2332] text-base leading-snug">{e.title}</p>
                      <p className="text-sm text-[#a8a29e] mt-1">{e.venue}</p>
                    </div>
                  </div>
                ))}
              </div>

              {events.length > EVENTS_PREVIEW && (
                <button
                  onClick={() => setShowAllEvents(!showAllEvents)}
                  className="ml-8 inline-flex items-center gap-2 px-5 py-2.5 border border-[#b85c3a] text-[#b85c3a] hover:bg-[#b85c3a] hover:text-white rounded-lg text-base font-semibold transition-all"
                >
                  {showAllEvents
                    ? <><FaChevronUp size={13} /> Show fewer events</>
                    : <><FaChevronDown size={13} /> Show all {events.length} events</>}
                </button>
              )}
            </div>
          </FadeIn>

          {/* Expert Talks */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-[#1a2332] text-xl mb-6">
                <FaMicrophoneAlt className="text-[#b85c3a]" size={18} />
                Invited Talks & Sessions
              </h3>
              <div className="space-y-3">
                {talks.map((t, i) => (
                  <div key={i} className="flex gap-4 bg-white border border-[#e8e3db] rounded-xl p-4 card-hover">
                    <div className="flex-shrink-0 w-12 text-center">
                      <span className="text-[#b85c3a] font-bold text-base">{t.year}</span>
                    </div>
                    <div>
                      <p className="font-medium text-[#1a2332] text-base leading-snug">{t.title}</p>
                      <p className="text-sm text-[#a8a29e] mt-0.5">{t.venue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
