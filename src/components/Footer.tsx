import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  ExternalLink,
  ShieldCheck,
  Award
} from 'lucide-react';
import { NavTab } from '../types';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="college-main-footer" className="bg-[#07172B] text-slate-300 border-t border-[#C89B3C]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 12.1 Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: About BEC + BVVS Logo + Accreditations (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1.5 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Building2 className="w-8 h-8 text-[#0D2440]" />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#C89B3C] font-semibold block">
                  B.V.V. Sangha's
                </span>
                <span className="font-heading text-lg font-bold text-white leading-none block">
                  Basaveshwar Engg. College
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Autonomous · Bagalkote, Karnataka
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Established in 1963 under the visionary patronage of Shri B.V.V. Sangha. A UGC Autonomous institute permanently affiliated to VTU Belagavi and accredited by NAAC with 'A' Grade & NBA.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-[#C89B3C]">
                NAAC Grade 'A'
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-[#2E7D5B]">
                NBA Accredited
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-200">
                AICTE Approved
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-200">
                TEQIP I, II, III
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-[#C89B3C] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-[#C89B3C] transition-colors cursor-pointer"
                >
                  About BEC
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('admission')} 
                  className="hover:text-[#C89B3C] transition-colors cursor-pointer"
                >
                  Admission & Intake
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('exam')} 
                  className="hover:text-[#C89B3C] transition-colors cursor-pointer"
                >
                  Exam Section (Results)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('placement')} 
                  className="hover:text-[#C89B3C] transition-colors cursor-pointer"
                >
                  Placement Statistics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('research')} 
                  className="hover:text-[#C89B3C] transition-colors cursor-pointer"
                >
                  Research & Grants
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('campus-life')} 
                  className="hover:text-[#C89B3C] transition-colors cursor-pointer"
                >
                  Campus Life & Hostels
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Programmes (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider font-mono">
              Academic Programmes
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button 
                  onClick={() => onNavigate('programmes')} 
                  className="hover:text-[#C89B3C] text-left transition-colors"
                >
                  B.E. Programmes (10 Disciplines · 960 Seats)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('programmes')} 
                  className="hover:text-[#C89B3C] text-left transition-colors"
                >
                  M.Tech (Structures, Geotech, Environmental)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('programmes')} 
                  className="hover:text-[#C89B3C] text-left transition-colors"
                >
                  Master of Business Administration (MBA)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('programmes')} 
                  className="hover:text-[#C89B3C] text-left transition-colors"
                >
                  Master of Computer Applications (MCA)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('departments')} 
                  className="hover:text-[#C89B3C] text-left transition-colors"
                >
                  Ph.D. / M.Sc. (Engg) by Research
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('research')} 
                  className="hover:text-[#C89B3C] text-left transition-colors"
                >
                  AICTE IDEA Lab Innovations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider font-mono">
              Campus Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <span>S. Nijalingappa Vidyanagar, Bagalkote – 587 102, Karnataka</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
                <span className="font-mono">+91 76187 81963</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
                <span className="font-mono">principal@becbgk.edu</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] uppercase font-mono text-[#5C6B7A] block mb-2">Connect with BEC</span>
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#C89B3C] hover:text-[#0D2440] transition-colors">
                  <span className="text-xs font-bold font-mono">in</span>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#C89B3C] hover:text-[#0D2440] transition-colors">
                  <span className="text-xs font-bold font-mono">YT</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#C89B3C] hover:text-[#0D2440] transition-colors">
                  <span className="text-xs font-bold font-mono">fb</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#C89B3C] hover:text-[#0D2440] transition-colors">
                  <span className="text-xs font-bold font-mono">X</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 12.2 Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <div>
              © 2026 Basaveshwar Engineering College, Bagalkote. All rights reserved.
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              An autonomous institution under Visvesvaraya Technological University (VTU) Belagavi. Managed by Shri B.V.V. Sangha.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <a href="#rti" className="hover:text-white transition-colors">RTI</a>
            <span>·</span>
            <a href="#mandatory-disclosure" className="hover:text-white transition-colors">AICTE Mandatory Disclosure</a>
            <span>·</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-[#C89B3C] hover:text-[#0D2440] transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
