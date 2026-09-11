import React, { useState } from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Award, 
  Building2, 
  CheckCircle2, 
  AlertTriangle, 
  FileCheck, 
  Layers, 
  Clock,
  Sparkles,
  Search,
  Mail,
  Phone
} from 'lucide-react';
import { PLACEMENT_STATS, TOP_RECRUITERS, PLACEMENT_SLOTS } from '../data/collegeData';

export const PlacementSection: React.FC = () => {
  const [recruiterSearch, setRecruiterSearch] = useState('');

  const filteredRecruiters = TOP_RECRUITERS.filter(r => 
    r.name.toLowerCase().includes(recruiterSearch.toLowerCase()) ||
    r.logoText.toLowerCase().includes(recruiterSearch.toLowerCase()) ||
    r.role.toLowerCase().includes(recruiterSearch.toLowerCase())
  );

  return (
    <div id="placement-section-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* 6.1 Placement Overview Header */}
      <div className="bg-gradient-to-r from-[#0D2440] via-[#123156] to-[#07172B] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#C89B3C]/30 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C] text-xs font-mono font-bold text-[#C89B3C] uppercase tracking-wider">
            Industry Interaction & Career Development
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Training & Placement Office (TPO)
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            The TPO acts as an interface between the campus and the corporate world, creating an active liaison between academia and industry to ensure lucrative career trajectories for every graduate.
          </p>
        </div>
      </div>

      {/* 6.2 Placement Statistics (2025) */}
      <section id="placement-stats-section" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
              Placement Statistics (Batch 2025)
            </h2>
            <p className="text-xs text-[#5C6B7A]">
              Audited campus recruitment numbers showcasing consistent hiring across tier-1 technology multinationals.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-[#2E7D5B] bg-[#2E7D5B]/10 px-3 py-1 rounded-full">
            Placement Rate: 85%
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E6E2D8] shadow-sm text-center">
            <span className="text-[11px] font-mono text-[#5C6B7A] uppercase">Total Placed</span>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#0D2440] mt-1">
              {PLACEMENT_STATS.placedStudents}
            </div>
            <span className="text-[10px] text-[#5C6B7A]">Students Selected</span>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E6E2D8] shadow-sm text-center">
            <span className="text-[11px] font-mono text-[#5C6B7A] uppercase">Graduating Batch</span>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#0D2440] mt-1">
              {PLACEMENT_STATS.graduatingStudents}
            </div>
            <span className="text-[10px] text-[#5C6B7A]">Eligible Students</span>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E6E2D8] shadow-sm text-center bg-emerald-50/40">
            <span className="text-[11px] font-mono text-[#2E7D5B] uppercase font-bold">Success Rate</span>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#2E7D5B] mt-1">
              {PLACEMENT_STATS.placementPercentage}%
            </div>
            <span className="text-[10px] text-[#2E7D5B]">Total Conversion</span>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E6E2D8] shadow-sm text-center">
            <span className="text-[11px] font-mono text-[#5C6B7A] uppercase">Highest Package</span>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#C89B3C] mt-1">
              {PLACEMENT_STATS.highestPackage}
            </div>
            <span className="text-[10px] text-[#5C6B7A]">Super Dream Offer</span>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E6E2D8] shadow-sm text-center">
            <span className="text-[11px] font-mono text-[#5C6B7A] uppercase">Median Salary</span>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#0D2440] mt-1">
              {PLACEMENT_STATS.medianSalary}
            </div>
            <span className="text-[10px] text-[#5C6B7A]">Across All Streams</span>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E6E2D8] shadow-sm text-center">
            <span className="text-[11px] font-mono text-[#5C6B7A] uppercase">Average Package</span>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#0D2440] mt-1">
              {PLACEMENT_STATS.averagePackage}
            </div>
            <span className="text-[10px] text-[#5C6B7A]">Annual Compensation</span>
          </div>
        </div>
      </section>

      {/* 6.3 Top Recruiters Showcase */}
      <section id="top-recruiters-section" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
              Top Recruiting Partners
            </h2>
            <p className="text-xs text-[#5C6B7A]">
              TCS · Wipro · Accenture · Cognizant · HCL · Global Edge · Mindtree · Infosys · Capgemini · L&T
            </p>
          </div>

          <div className="relative">
            <input
              type="text"
              value={recruiterSearch}
              onChange={(e) => setRecruiterSearch(e.target.value)}
              placeholder="Search companies..."
              className="pl-8 pr-3 py-1.5 text-xs rounded-xl border border-[#E6E2D8] bg-white focus:outline-none focus:ring-2 focus:ring-[#0D2440] w-52"
            />
            <Search className="w-3.5 h-3.5 text-[#5C6B7A] absolute left-2.5 top-2.5" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredRecruiters.map((r, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-[#E6E2D8] shadow-sm hover:shadow-md hover:border-[#0D2440] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[#0D2440] text-white font-mono font-bold text-xs tracking-wider">
                    {r.logoText}
                  </span>
                  <span className="text-[11px] font-mono text-[#2E7D5B] font-semibold">{r.avgCtc}</span>
                </div>
                <h4 className="font-heading font-bold text-sm text-[#0D2440] group-hover:text-[#C89B3C] transition-colors line-clamp-1">
                  {r.name}
                </h4>
                <div className="text-[11px] text-[#5C6B7A] mt-0.5">{r.role}</div>
              </div>
              <div className="mt-3 pt-2 border-t border-[#E6E2D8]/60 flex items-center justify-between text-[10px] text-[#5C6B7A] font-mono">
                <span>Active Campus Partner</span>
                <span className="text-[#C89B3C]">Annual Drive</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6.4 Placement Policy — Slots */}
      <section id="placement-slots-section" className="space-y-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
            Placement Policy — Slotting Architecture
          </h2>
          <p className="text-xs text-[#5C6B7A]">
            Structured institutional slotting protocol ensuring equitable placement opportunities across salary brackets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLACEMENT_SLOTS.map((slot, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E6E2D8] shadow-sm hover:shadow-md transition-all relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-[#0D2440] text-white font-mono font-bold text-xs">
                  {slot.slot}
                </span>
                <span className="text-xs font-bold font-mono text-[#C89B3C] bg-[#C89B3C]/10 px-2.5 py-0.5 rounded-full">
                  {slot.duration}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-[#0D2440]">
                {slot.offerType} Offer
              </h3>
              
              <div className="mt-2 mb-3 inline-block px-3 py-1 rounded-xl bg-[#FBF9F5] border border-[#E6E2D8] font-mono font-bold text-sm text-[#2E7D5B]">
                CTC: {slot.ctcRange}
              </div>

              <p className="text-xs text-[#5C6B7A] leading-relaxed">
                {slot.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6.5 Eligibility & Registration Guidelines */}
      <section id="placement-eligibility-section" className="bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 border border-[#E6E2D8] space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0D2440] text-[#C89B3C] flex items-center justify-center">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-[#0D2440]">
              Eligibility & Registration Guidelines
            </h3>
            <p className="text-xs text-[#5C6B7A]">
              Mandatory rules governing all campus recruitment candidates.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-white p-4 rounded-2xl border border-[#E6E2D8] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#2E7D5B] flex-shrink-0 mt-0.5" />
            <div className="text-xs text-[#0A1628]">
              <strong className="block text-[#0D2440] font-semibold mb-0.5">Registration Validity</strong>
              All graduating final-year students seeking corporate placement must register with TPO. Registration is valid for <strong>one academic year only</strong> (commencing in June / October cycle).
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#E6E2D8] flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-[#0A1628]">
              <strong className="block text-[#0D2440] font-semibold mb-0.5">Backlog Constraint</strong>
              Students with <strong>4 or more active backlogs</strong> are not permitted to register or appear in placement drives until clearances are updated in COE records.
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#E6E2D8] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#2E7D5B] flex-shrink-0 mt-0.5" />
            <div className="text-xs text-[#0A1628]">
              <strong className="block text-[#0D2440] font-semibold mb-0.5">Postgraduate & Research Scholars</strong>
              M.Tech and Ph.D. scholars in relevant engineering disciplines may register year-round with an approved No Objection Certificate (NOC) from the respective Head of Department.
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#E6E2D8] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#2E7D5B] flex-shrink-0 mt-0.5" />
            <div className="text-xs text-[#0A1628]">
              <strong className="block text-[#0D2440] font-semibold mb-0.5">Professional Conduct & Dress Code</strong>
              Formal college attire, valid student identity card, and mandatory attendance once registered for a company's aptitude test or technical assessment round.
            </div>
          </div>
        </div>

        {/* TPO Contact Footer */}
        <div className="pt-4 border-t border-[#E6E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#5C6B7A]">
          <div>
            <strong className="text-[#0D2440]">TPO Directorate:</strong> Training & Placement Officer, BEC Bagalkote
          </div>
          <div className="flex items-center gap-4 font-mono">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#0D2440]" /> 08354-220702 (Ext. 240)</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#0D2440]" /> tpo@becbgk.edu</span>
          </div>
        </div>
      </section>

    </div>
  );
};
