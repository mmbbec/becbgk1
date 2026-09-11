import React from 'react';
import { 
  Award, 
  BookOpen, 
  FlaskConical, 
  Lightbulb, 
  Star, 
  Handshake, 
  ArrowRight, 
  Building2, 
  Calendar, 
  FileText, 
  ShieldCheck, 
  CheckCircle,
  ExternalLink,
  Users,
  Compass,
  GraduationCap
} from 'lucide-react';
import { NavTab } from '../types';
import { NOTIFICATIONS, PLACEMENT_STATS } from '../data/collegeData';

interface HomeSectionProps {
  onNavigate: (tab: NavTab, subItem?: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  const highlights = [
    {
      icon: <Award className="w-7 h-7 text-[#C89B3C]" />,
      label: 'NIRF Ranking',
      value: '201–250 at All India Level',
      desc: 'Recognized consistently among premier engineering colleges in India.'
    },
    {
      icon: <BookOpen className="w-7 h-7 text-[#C89B3C]" />,
      label: 'Academic Programs',
      value: '10 UG & 3 PG Programmes',
      desc: 'Industry aligned autonomous curriculum with VTU Belagavi affiliation.'
    },
    {
      icon: <FlaskConical className="w-7 h-7 text-[#C89B3C]" />,
      label: 'R&D Centres',
      value: '10 VTU Recognized Departments',
      desc: 'Fostering cutting-edge research, doctoral studies, and industrial consultancies.'
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-[#C89B3C]" />,
      label: 'AICTE IDEA Lab',
      value: 'Worth Rs. 1.10 Crores',
      desc: 'State-of-the-art ideation, rapid prototyping, 3D printing and STEM lab.'
    },
    {
      icon: <Star className="w-7 h-7 text-[#C89B3C]" />,
      label: 'TEQIP Excellence',
      value: 'Best Performing Institute',
      desc: 'Beneficiary of TEQIP Phase I (₹14.16 Cr), II (₹12.50 Cr) and III (₹8.47 Cr).'
    },
    {
      icon: <Handshake className="w-7 h-7 text-[#C89B3C]" />,
      label: 'Mentorship',
      value: 'Under UGC Paramarsh Scheme',
      desc: 'Mentoring regional colleges towards achieving national accreditation standards.'
    },
  ];

  return (
    <div id="home-section-container" className="w-full space-y-12">
      
      {/* 3.1 Hero Section */}
      <section 
        id="hero-section"
        className="relative overflow-hidden bg-gradient-to-br from-[#07172B] via-[#0D2440] to-[#143258] text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#C89B3C]/20"
      >
        {/* Subtle architectural background texture pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
          
          {/* Hero Left Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C89B3C]/50 text-xs text-[#C89B3C] font-mono tracking-wider font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C89B3C] animate-pulse"></span>
              <span>NAAC 'A' Grade · NBA Accredited Autonomous Institute</span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] text-white tracking-tight">
              Six decades of excellence in <span className="text-[#C89B3C] italic font-serif">technical education</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-200/90 font-normal leading-relaxed max-w-2xl">
              Basaveshwar Engineering College — a crown jewel of the 120-year-old B.V.V. Sangha and a premier autonomous technical institution in North Karnataka, empowering generations of global engineering leaders since 1963.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-cta-admissions"
                onClick={() => onNavigate('admission')}
                className="px-7 py-3.5 rounded-full bg-[#C89B3C] text-[#0D2440] font-bold text-sm sm:text-base hover:bg-[#dfb255] transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px] flex items-center gap-2 group cursor-pointer"
              >
                <span>Admissions 2025–26</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-about"
                onClick={() => onNavigate('about')}
                className="px-6 py-3.5 rounded-full bg-transparent border border-white/40 text-white font-medium text-sm sm:text-base hover:bg-white/10 hover:border-white transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore the Institute</span>
              </button>
            </div>

            {/* Stat Row (4 columns) */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="border-l-2 border-[#C89B3C] pl-3">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">1963</div>
                <div className="text-xs text-slate-300 font-mono uppercase tracking-wider mt-0.5">Established</div>
              </div>
              <div className="border-l-2 border-[#C89B3C] pl-3">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">93 acres</div>
                <div className="text-xs text-slate-300 font-mono uppercase tracking-wider mt-0.5">Campus</div>
              </div>
              <div className="border-l-2 border-[#C89B3C] pl-3">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">3,500+</div>
                <div className="text-xs text-slate-300 font-mono uppercase tracking-wider mt-0.5">Students</div>
              </div>
              <div className="border-l-2 border-[#C89B3C] pl-3">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">200+</div>
                <div className="text-xs text-slate-300 font-mono uppercase tracking-wider mt-0.5">Faculty</div>
              </div>
            </div>

          </div>

          {/* Hero Right Visual: Campus building image with floating cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-white/15 group">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
                alt="Basaveshwar Engineering College Bagalkote Campus"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2440]/90 via-transparent to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-mono uppercase text-[#C89B3C] font-semibold tracking-wider">
                  Vidyagiri, Bagalkote
                </span>
                <div className="font-heading font-bold text-lg text-white">
                  Main Academic & Administrative Quadrangle
                </div>
              </div>
            </div>

            {/* Floating Card 1: NIRF Ranking */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md text-[#0D2440] p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#E6E2D8] max-w-[210px] animate-in fade-in slide-in-from-top-3 duration-500">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#2E7D5B]"></span>
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#5C6B7A]">MHRD Gov of India</span>
              </div>
              <div className="font-heading font-bold text-sm text-[#0D2440] leading-snug">
                NIRF 201–250
              </div>
              <div className="text-[11px] text-[#5C6B7A] font-medium">All India Engineering Band</div>
            </div>

            {/* Floating Card 2: Academic Spread */}
            <div className="absolute -bottom-5 -left-2 sm:-left-4 bg-[#0D2440] text-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#C89B3C]/40 max-w-[230px]">
              <div className="text-xs text-[#C89B3C] font-mono font-bold uppercase tracking-wider">
                Autonomous Degrees
              </div>
              <div className="font-heading font-bold text-sm text-white mt-0.5">
                10 UG · 3 PG · 10 Research Centres
              </div>
              <div className="text-[11px] text-slate-300">Permanent Affiliation to VTU</div>
            </div>

          </div>

        </div>
      </section>

      {/* 3.2 Accreditation Marquee (dark navy background, gold text) */}
      <section id="accreditation-marquee" className="w-full bg-[#0D2440] border-y border-[#C89B3C]/30 py-3.5 overflow-hidden select-none">
        <div className="animate-ticker text-xs sm:text-sm font-mono tracking-wider font-semibold text-[#C89B3C] uppercase flex items-center gap-8">
          <span>NBA Accredited</span>
          <span>·</span>
          <span>NAAC 'A' Grade</span>
          <span>·</span>
          <span>QS I-Gauge Certified</span>
          <span>·</span>
          <span>AICTE-CII Gold Category</span>
          <span>·</span>
          <span>E-Lead Certified</span>
          <span>·</span>
          <span>Autonomous · UGC</span>
          <span>·</span>
          <span>TEQIP I · II · III</span>
          <span>·</span>
          <span>AICTE IDEA Lab</span>
          <span>·</span>
          <span>UGC Paramarsh Mentor</span>
          <span>·</span>
          {/* Duplicate set for seamless infinite loop */}
          <span>NBA Accredited</span>
          <span>·</span>
          <span>NAAC 'A' Grade</span>
          <span>·</span>
          <span>QS I-Gauge Certified</span>
          <span>·</span>
          <span>AICTE-CII Gold Category</span>
          <span>·</span>
          <span>E-Lead Certified</span>
          <span>·</span>
          <span>Autonomous · UGC</span>
          <span>·</span>
          <span>TEQIP I · II · III</span>
          <span>·</span>
          <span>AICTE IDEA Lab</span>
          <span>·</span>
          <span>UGC Paramarsh Mentor</span>
        </div>
      </section>

      {/* Announcements & Bulletin Flash Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E6E2D8] p-4 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-[#0D2440] text-white text-xs font-mono font-bold rounded-lg uppercase tracking-wider flex-shrink-0">
              Live Notices
            </span>
            <div className="text-xs sm:text-sm font-medium text-[#0A1628]">
              {NOTIFICATIONS[0].title}
            </div>
          </div>
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => onNavigate('exam-section')}
              className="text-xs font-bold text-[#0D2440] hover:text-[#C89B3C] flex items-center gap-1 transition-colors"
            >
              <span>View All Announcements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3.3 Key Highlights Grid */}
      <section id="key-highlights-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C89B3C]">
            Institutional Benchmarks
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0D2440] mt-1">
            Why Basaveshwar Engineering College?
          </h2>
          <p className="text-sm text-[#5C6B7A] mt-2">
            A heritage of academic rigor, industry-funded research laboratories, and comprehensive holistic student development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E6E2D8] shadow-[0_4px_20px_rgba(10,22,40,0.04)] hover:shadow-[0_12px_32px_-8px_rgba(10,22,40,0.12)] hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0D2440]/5 flex items-center justify-center mb-4 group-hover:bg-[#0D2440] transition-colors">
                <div className="group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#5C6B7A]">
                {item.label}
              </div>
              <h3 className="font-heading text-lg font-bold text-[#0D2440] mt-1 group-hover:text-[#C89B3C] transition-colors">
                {item.value}
              </h3>
              <p className="text-xs text-[#5C6B7A] mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Placement Highlight Banner (Connected with Section 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0D2440] to-[#173b64] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#C89B3C]/30 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(#C89B3C_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C89B3C] font-bold">
                Career Outcomes 2025
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                85% Placements with 611+ Offers in Top Global MNCs
              </h2>
              <p className="text-sm text-slate-200 max-w-xl">
                TCS, Wipro, Accenture, Cognizant, Infosys, Capgemini, and L&T conduct regular campus recruitment drives with highest offers up to ₹15 LPA.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('placement')}
                  className="px-6 py-3 rounded-full bg-[#C89B3C] text-[#0D2440] font-bold text-xs sm:text-sm hover:bg-[#dfb255] transition-all inline-flex items-center gap-2"
                >
                  <span>Explore Placement Records & Recruiters</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
                <div className="font-heading text-3xl font-bold text-[#C89B3C]">611</div>
                <div className="text-xs text-slate-300 font-mono mt-1">Students Placed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
                <div className="font-heading text-3xl font-bold text-[#2E7D5B]">₹15 LPA</div>
                <div className="text-xs text-slate-300 font-mono mt-1">Highest Package</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
                <div className="font-heading text-3xl font-bold text-white">85%</div>
                <div className="text-xs text-slate-300 font-mono mt-1">Placement Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
                <div className="font-heading text-3xl font-bold text-white">₹4.75 LPA</div>
                <div className="text-xs text-slate-300 font-mono mt-1">Median Salary</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            onClick={() => onNavigate('admission')}
            className="p-5 rounded-2xl bg-white border border-[#E6E2D8] hover:border-[#0D2440] shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="text-xs font-mono font-semibold text-[#C89B3C] uppercase mb-1">Admissions</div>
            <h4 className="font-heading font-bold text-base text-[#0D2440] group-hover:text-[#C89B3C] transition-colors">
              Intake & Fees Structure
            </h4>
            <p className="text-xs text-[#5C6B7A] mt-1.5">
              KEA CET, COMED-K and Management quota seats for 2025–26.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('exam-section')}
            className="p-5 rounded-2xl bg-white border border-[#E6E2D8] hover:border-[#0D2440] shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="text-xs font-mono font-semibold text-[#2E7D5B] uppercase mb-1">Autonomous Portal</div>
            <h4 className="font-heading font-bold text-base text-[#0D2440] group-hover:text-[#2E7D5B] transition-colors">
              Exam Results & Timetables
            </h4>
            <p className="text-xs text-[#5C6B7A] mt-1.5">
              Live result checks by USN, academic calendars and rank lists.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('departments')}
            className="p-5 rounded-2xl bg-white border border-[#E6E2D8] hover:border-[#0D2440] shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="text-xs font-mono font-semibold text-[#0D2440] uppercase mb-1">Academics</div>
            <h4 className="font-heading font-bold text-base text-[#0D2440] group-hover:text-[#C89B3C] transition-colors">
              10 Engineering Departments
            </h4>
            <p className="text-xs text-[#5C6B7A] mt-1.5">
              Explore faculty profiles, labs, research facilities and curriculum.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('campus-life')}
            className="p-5 rounded-2xl bg-white border border-[#E6E2D8] hover:border-[#0D2440] shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="text-xs font-mono font-semibold text-[#5C6B7A] uppercase mb-1">Student Experience</div>
            <h4 className="font-heading font-bold text-base text-[#0D2440] group-hover:text-[#0D2440] transition-colors">
              Hostels, Library & Campus
            </h4>
            <p className="text-xs text-[#5C6B7A] mt-1.5">
              93-acre eco-friendly campus with electric buggies and digital library.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
