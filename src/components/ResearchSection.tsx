import React from 'react';
import { 
  FlaskConical, 
  Lightbulb, 
  Cpu, 
  Leaf, 
  Activity, 
  FileText, 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  Layers
} from 'lucide-react';
import { RESEARCH_FUNDING, RESEARCH_AREAS } from '../data/collegeData';

export const ResearchSection: React.FC = () => {
  return (
    <div id="research-section-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-[#0D2440] text-white rounded-3xl p-8 sm:p-12 border border-[#C89B3C]/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C] text-xs font-mono font-bold text-[#C89B3C] uppercase tracking-wider">
            R&D Directorate & Innovation Hub
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Research & Development
          </h1>
          <p className="text-base text-slate-200 leading-relaxed font-normal">
            Advancing frontier discoveries through world-class laboratory infrastructure, funded projects exceeding ₹36+ Crores, and interdisciplinary collaboration between academia, industry, and government agencies.
          </p>
        </div>
      </div>

      {/* 9.1 Research Funding & Institutional Grants */}
      <section id="research-funding-section" className="space-y-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
            Flagship Research Funding & TEQIP Grants
          </h2>
          <p className="text-xs text-[#5C6B7A]">
            Selected as the Lead Performing Institute across Karnataka under the World Bank & MHRD Government of India Technical Education Quality Improvement Programme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {RESEARCH_FUNDING.map((f, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E6E2D8] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#5C6B7A] tracking-wider">
                  MHRD / World Bank
                </span>
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mt-1">
                  {f.programme}
                </h3>
                <div className="my-3 inline-block px-3 py-1.5 rounded-xl bg-[#0D2440] text-[#C89B3C] font-mono font-bold text-xl">
                  {f.grant}
                </div>
                <p className="text-xs text-[#5C6B7A] leading-relaxed">
                  {f.focus}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E6E2D8]/60 text-[11px] font-mono text-[#2E7D5B] font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2E7D5B]"></span>
                <span>Successfully Implemented</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AICTE IDEA Lab Special Feature Box */}
      <section className="bg-gradient-to-br from-[#102a4a] to-[#07172B] text-white rounded-3xl p-8 sm:p-10 border border-[#C89B3C]/30 relative overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89B3C]/20 text-[#C89B3C] text-xs font-mono font-bold">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>AICTE IDEA Lab Scheme · ₹1.10 Crores</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold">
              AICTE IDEA Lab (Idea Development, Evaluation & Application)
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              BEC is one of the premier institutes in Karnataka to be awarded the prestigious AICTE IDEA Lab grant worth ₹1.10 Crores. The lab serves as a 24/7 maker hub equipped with industrial 3D printers, laser cutters, CNC milling, electronic prototyping boards, and sensor arrays to foster STEM thinking, patents, and hardware startups.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Additive 3D Printing', 'CNC Milling & Routing', 'Laser Micro-Fabrication', 'IoT Sensor Prototyping', 'Hardware Incubator'].map((t, idx) => (
                <span key={idx} className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white/10 text-[#C89B3C] border border-white/15">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center space-y-3">
            <div className="text-xs font-mono uppercase text-[#C89B3C] tracking-wider font-semibold">
              Research Productivity
            </div>
            <div className="font-heading text-4xl font-bold text-white">450+</div>
            <div className="text-xs text-slate-300">Peer-reviewed publications in Scopus & Web of Science</div>
            <div className="font-heading text-3xl font-bold text-[#2E7D5B] pt-2">24+</div>
            <div className="text-xs text-slate-300">Patents published and filed across engineering domains</div>
          </div>
        </div>
      </section>

      {/* 9.2 Research Areas Grid */}
      <section id="research-areas-section" className="space-y-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
            Core Thrust Research Areas
          </h2>
          <p className="text-xs text-[#5C6B7A]">
            Interdisciplinary problem-solving focused on regional and national developmental challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_AREAS.map((area, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E6E2D8] shadow-sm hover:shadow-md hover:border-[#0D2440] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0D2440]/5 text-[#0D2440] flex items-center justify-center font-mono font-bold text-sm mb-3">
                0{idx + 1}
              </div>
              <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2">
                {area.title}
              </h3>
              <p className="text-xs text-[#5C6B7A] leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10 VTU Recognized R&D Centres */}
      <section className="bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 border border-[#E6E2D8] space-y-4">
        <h3 className="font-heading text-xl font-bold text-[#0D2440]">
          10 VTU Recognized Research Centres
        </h3>
        <p className="text-xs text-[#5C6B7A]">
          Affiliated with Visvesvaraya Technological University (VTU) Belagavi for Ph.D. and M.Sc. (Engg.) by Research scholars:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
          {[
            'Civil Engineering',
            'Mechanical Engineering',
            'Electrical & Electronics',
            'Electronics & Comm.',
            'Computer Science',
            'Biotechnology',
            'Physics',
            'Chemistry',
            'Mathematics',
            'Management Studies'
          ].map((c, idx) => (
            <div key={idx} className="bg-white p-3.5 rounded-xl border border-[#E6E2D8] text-center shadow-xs">
              <span className="text-xs font-semibold text-[#0D2440] block">{c}</span>
              <span className="text-[10px] font-mono text-[#C89B3C]">VTU R&D Approved</span>
            </div>
          ))}
        </div>

        {/* Dean R&D Note */}
        <div className="mt-6 pt-4 border-t border-[#E6E2D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-mono text-[11px] text-[#5C6B7A] uppercase font-bold block">Dean, Research & Development and ICT:</span>
            <span className="font-heading font-bold text-[#0D2440] text-sm">Dr. Mahabaleshwar S. K.</span>
            <span className="text-[#5C6B7A] text-xs block">Professor & Head, Electronics & Communication Engg.</span>
          </div>
          <div className="font-mono text-xs text-[#0D2440]">
            Official Query: <a href="mailto:ece_hod@becbgk.edu" className="font-bold underline text-[#C89B3C]">ece_hod@becbgk.edu</a>
          </div>
        </div>
      </section>

    </div>
  );
};
