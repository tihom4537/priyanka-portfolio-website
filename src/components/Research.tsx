"use client";
import { FaNetworkWired, FaWifi, FaCar, FaMicrochip, FaBrain, FaRobot, FaSatelliteDish } from "react-icons/fa";
import { profile } from "@/data/profile";

const areas = [
  {
    icon: <FaNetworkWired size={24} />,
    title: "Ad hoc Networks",
    desc: "Research on self-organizing wireless networks, routing protocols, and performance optimization for dynamic topologies.",
    color: "#0077b6",
  },
  {
    icon: <FaWifi size={24} />,
    title: "Wireless Sensor Networks",
    desc: "Energy-efficient routing, WBAN relay placement, and threshold-guided communication protocols for sensor networks.",
    color: "#00b4d8",
  },
  {
    icon: <FaCar size={24} />,
    title: "Vehicular Networks (VANETs/IoV)",
    desc: "IEEE 802.11p performance analysis, hidden terminal problems, and MAC protocol design for vehicular ad hoc networks.",
    color: "#0096c7",
  },
  {
    icon: <FaMicrochip size={24} />,
    title: "Internet of Things (IoT)",
    desc: "Lightweight security models, trust-aware routing, and privacy-preserving solutions for IoT ecosystems.",
    color: "#023e8a",
  },
  {
    icon: <FaBrain size={24} />,
    title: "AIoT & Generative AI",
    desc: "Integrating AI and machine learning with IoT architectures; exploring generative models for data augmentation and analysis.",
    color: "#0077b6",
  },
  {
    icon: <FaRobot size={24} />,
    title: "Deep Learning Applications",
    desc: "CNN-based arrhythmia classification, fetal plane detection, stroke prediction, and fake news detection using deep ensemble models.",
    color: "#00b4d8",
  },
  {
    icon: <FaSatelliteDish size={24} />,
    title: "Cloud & Edge Computing",
    desc: "Hybrid workflow scheduling algorithms for cloud environments, optimizing resource allocation and task performance.",
    color: "#023e8a",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-[#00b4d8] text-sm font-semibold tracking-widest uppercase mb-2">
            Research
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a]">
            Research Interests
          </h2>
          <div className="mt-3 w-12 h-1 rounded-full bg-[#00b4d8]" />
          <p className="mt-4 text-slate-500 max-w-2xl text-sm leading-relaxed">
            My research lies at the intersection of networking, security, and artificial intelligence — with a focus on building intelligent, secure, and efficient systems for next-generation communication networks.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-slate-100 card-hover group cursor-default"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-colors group-hover:opacity-90"
                style={{ background: `${a.color}18`, color: a.color }}
              >
                {a.icon}
              </div>
              <h3 className="font-semibold text-[#0d1b2a] text-base mb-2">{a.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
