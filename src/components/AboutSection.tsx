import React from 'react';
import { 
  Building2, 
  Award, 
  History, 
  Compass, 
  Target, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { NavTab } from '../types';

interface AboutSectionProps {
  onNavigate: (tab: NavTab) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const milestones = [
    { year: '1906', title: 'Founding of Shri B.V.V. Sangha', desc: 'His Holiness Shri Biluru Gurubasava Mahaswamiji founded Shri Basaveshwar Veerashaiva Vidyavardhaka Sangha with a noble vision of rural educational emancipation.' },
    { year: '1963', title: 'Establishment of BEC Bagalkote', desc: 'Basaveshwar Engineering College was established as a premier technical institution with founding branches in Civil, Electrical, and Mechanical Engineering.' },
    { year: '2004', title: 'TEQIP Phase I Inception', desc: 'Conferred ₹14.16 Crores grant as a top-performing institution across Karnataka for infrastructure and laboratory modernization.' },
    { year: '2007', title: 'Autonomous Status Conferred', desc: 'UGC and Visvesvaraya Technological University granted Autonomous status, enabling an agile, industry-driven curriculum.' },
    { year: '2017', title: 'NAAC "A" Grade Accreditation', desc: 'Re-accredited by NAAC with prestigious "A" Grade, validating academic rigor, governance, and placement outcomes.' },
    { year: '2021', title: 'AICTE IDEA Lab Sanctioned', desc: 'Sanctioned ₹1.10 Crores to establish state-of-the-art 3D additive manufacturing and ideation labs for student inventors.' },
  ];

  return (
    <div id="about-section-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-[#0D2440] text-white rounded-3xl p-8 sm:p-12 border border-[#C89B3C]/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C] text-xs font-mono font-bold text-[#C89B3C] uppercase tracking-wider">
            Heritage & Leadership
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            About Basaveshwar Engineering College
          </h1>
          <p className="text-base text-slate-200 leading-relaxed font-normal">
            A crown jewel of the 120-year-old B.V.V. Sangha, shaping ethical engineers, researchers, and entrepreneurial pioneers who build the nation.
          </p>
        </div>
      </div>

      {/* Vision & Mission Two-Column Block */}
      <section id="vision-mission-section" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-[#E6E2D8] p-6 sm:p-8 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0D2440] text-[#C89B3C] flex items-center justify-center">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-[#0D2440]">
            Our Institutional Vision
          </h3>
          <p className="text-xs sm:text-sm text-[#5C6B7A] leading-relaxed">
            To be a globally recognized technical institution delivering quality education, research, and technical services for the sustainable growth and prosperity of society.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#E6E2D8] p-6 sm:p-8 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#C89B3C] text-[#0D2440] flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-[#0D2440]">
            Our Institutional Mission
          </h3>
          <ul className="text-xs sm:text-sm text-[#5C6B7A] space-y-2 leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D5B] flex-shrink-0 mt-0.5" />
              <span>Provide experiential, student-centric outcome-based engineering education.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D5B] flex-shrink-0 mt-0.5" />
              <span>Promote research, innovation, and technological entrepreneurship addressing societal challenges.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D5B] flex-shrink-0 mt-0.5" />
              <span>Inculcate professional ethics, lifelong learning, and human values in every scholar.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Legacy of B.V.V. Sangha */}
      <section className="bg-gradient-to-br from-[#FBF9F5] to-white rounded-3xl border border-[#E6E2D8] p-8 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C89B3C] font-bold">
              120 Years of Educational Service (Estd. 1906)
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0D2440]">
              The Glorious Legacy of Shri B.V.V. Sangha
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6B7A] leading-relaxed">
              Basaveshwar Veerashaiva Vidyavardhaka Sangha (BVVS), established in 1906 by Gurubasava Mahaswamiji, has spearheaded educational revolutions across northern Karnataka. Today, the Sangha runs more than 150 educational institutions ranging from primary schools to medical, engineering, dental, pharmacy, law, and polytechnic colleges serving over 50,000 learners.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono font-semibold text-[#0D2440]">
              <span>150+ Institutions</span>
              <span>·</span>
              <span>50,000+ Students</span>
              <span>·</span>
              <span>Headquartered at Bagalkote</span>
            </div>
          </div>

          <div className="w-full md:w-80 p-5 rounded-2xl bg-[#0D2440] text-white space-y-2 text-center flex-shrink-0">
            <span className="text-xs font-mono text-[#C89B3C] uppercase font-bold">Principal's Desk</span>
            <h4 className="font-heading text-lg font-bold">Dr. B. R. Hiremath</h4>
            <p className="text-xs text-slate-300">
              Principal, Basaveshwar Engineering College (Autonomous), Bagalkote
            </p>
            <div className="pt-3 border-t border-white/20 text-[11px] text-slate-300 italic">
              "We nurture engineers who combine technical mastery with ethical conscience, ready to lead in the age of intelligent automation."
            </div>
          </div>
        </div>
      </section>

      {/* Historical Milestones Timeline */}
      <section id="milestones-section" className="space-y-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
            Six Decades of Institutional Milestones
          </h2>
          <p className="text-xs text-[#5C6B7A]">
            Chronicle of transformative advancements since 1963.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E6E2D8] shadow-xs hover:shadow-md transition-all">
              <span className="font-mono text-xl font-bold text-[#C89B3C]">{m.year}</span>
              <h3 className="font-heading font-bold text-base text-[#0D2440] mt-1 mb-2">
                {m.title}
              </h3>
              <p className="text-xs text-[#5C6B7A] leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
