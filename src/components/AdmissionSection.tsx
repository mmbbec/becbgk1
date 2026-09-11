import React, { useState } from 'react';
import { 
  Building, 
  Phone, 
  Mail, 
  FileCheck, 
  CreditCard, 
  FileText, 
  CheckCircle2, 
  Search, 
  Filter, 
  Info,
  Download,
  Clock,
  MapPin
} from 'lucide-react';
import { AIDED_INTAKE, UNAIDED_INTAKE, COLLEGE_CODES } from '../data/collegeData';

export const AdmissionSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeQuotaFilter, setActiveQuotaFilter] = useState<'all' | 'aided' | 'unaided'>('all');
  const [inquirySent, setInquirySent] = useState(false);

  const filteredAided = AIDED_INTAKE.filter(item => 
    item.branch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUnaided = UNAIDED_INTAKE.filter(item => 
    item.branch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalFilteredIntake = 
    (activeQuotaFilter === 'all' || activeQuotaFilter === 'aided' ? filteredAided.reduce((a, b) => a + b.intake, 0) : 0) +
    (activeQuotaFilter === 'all' || activeQuotaFilter === 'unaided' ? filteredUnaided.reduce((a, b) => a + b.intake, 0) : 0);

  const admissionSteps = [
    {
      step: '01',
      title: 'Appear for Entrance Exam',
      desc: 'CET / COMED-K / JEE for B.E.; PGCET / GATE for M.Tech; PGCET / KMAT for MBA & MCA programmes.',
      badge: 'Step 1'
    },
    {
      step: '02',
      title: 'Apply & Attend Counselling',
      desc: 'Register through KEA / COMED-K portal or contact Admission Section directly for Management Quota counselling.',
      badge: 'Step 2'
    },
    {
      step: '03',
      title: 'Document Verification',
      desc: 'Report at BEC Admission Office with original certificates, rank card, identity proofs, and 3 sets of attested copies.',
      badge: 'Step 3'
    },
    {
      step: '04',
      title: 'Fee Payment & Confirmation',
      desc: 'Pay sanctioned KEA / COMED-K / Management quota fees, VTU University fees, and College fees to secure admission.',
      badge: 'Step 4'
    }
  ];

  return (
    <div id="admissions-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* 4.1 Header Block */}
      <div className="bg-gradient-to-r from-[#0D2440] to-[#173b64] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#C89B3C]/30 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C] text-xs font-mono font-bold text-[#C89B3C] uppercase tracking-wider">
            Admissions Academic Year 2025–26 & 2026–27
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Admissions at BEC Bagalkote
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Join a NAAC 'A'-graded, NBA-accredited autonomous institute with a rich 60-year tradition of technical scholarship and global campus placements.
          </p>
        </div>
      </div>

      {/* 4.2 College Codes Table */}
      <section id="college-codes-section" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
              Official College Counselling Codes
            </h2>
            <p className="text-xs text-[#5C6B7A]">
              Use these authorized examination codes while exercising branch options in KEA CET & COMED-K counseling.
            </p>
          </div>
          <span className="text-xs font-mono text-[#C89B3C] font-semibold bg-[#C89B3C]/10 px-3 py-1 rounded-full border border-[#C89B3C]/30">
            VTU Affiliation: Permanent
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {COLLEGE_CODES.map((c, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-4 border border-[#E6E2D8] shadow-sm hover:border-[#0D2440] transition-colors text-center"
            >
              <div className="text-xs font-semibold text-[#5C6B7A] mb-1">{c.programme}</div>
              <div className="font-mono text-2xl font-bold text-[#0D2440]">{c.code}</div>
              <div className="text-[10px] text-[#5C6B7A] mt-1 line-clamp-1">{c.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4.3 Intake Summary Cards */}
      <section id="intake-summary-section" className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#E6E2D8] shadow-sm text-center">
          <div className="text-xs font-mono text-[#5C6B7A] uppercase tracking-wider">B.E. Disciplines</div>
          <div className="font-heading text-3xl font-bold text-[#0D2440] mt-1">10</div>
          <div className="text-[11px] text-[#5C6B7A] mt-1">Undergraduate Engineering</div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-[#E6E2D8] shadow-sm text-center">
          <div className="text-xs font-mono text-[#5C6B7A] uppercase tracking-wider">Sanctioned Seats (UG)</div>
          <div className="font-heading text-3xl font-bold text-[#2E7D5B] mt-1">960</div>
          <div className="text-[11px] text-[#5C6B7A] mt-1">300 Aided + 660 Un-Aided</div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-[#E6E2D8] shadow-sm text-center">
          <div className="text-xs font-mono text-[#5C6B7A] uppercase tracking-wider">M.Tech Specializations</div>
          <div className="font-heading text-3xl font-bold text-[#0D2440] mt-1">3</div>
          <div className="text-[11px] text-[#5C6B7A] mt-1">Environmental, Geotech, Structures</div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-[#E6E2D8] shadow-sm text-center">
          <div className="text-xs font-mono text-[#5C6B7A] uppercase tracking-wider">Research Centres</div>
          <div className="font-heading text-3xl font-bold text-[#C89B3C] mt-1">10</div>
          <div className="text-[11px] text-[#5C6B7A] mt-1">VTU Recognized R&D</div>
        </div>
      </section>

      {/* 4.4 Admission Steps (4-column stepper) */}
      <section id="admission-steps-section" className="space-y-4">
        <div className="text-center max-w-xl mx-auto mb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C89B3C]">
            Application Roadmap
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0D2440] mt-1">
            4-Step Admission Procedure
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {admissionSteps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E6E2D8] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-9 h-9 rounded-full bg-[#0D2440] text-white flex items-center justify-center font-mono font-bold text-xs">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#C89B3C] uppercase bg-[#C89B3C]/10 px-2.5 py-0.5 rounded-full">
                    {step.badge}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#5C6B7A] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4.5 Fee Structure — 2026–27 */}
      <section id="fee-structure-section" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
              Fee Structure — 2026–27
            </h2>
            <p className="text-xs text-[#5C6B7A]">
              Standardized statutory fee layout approved by Government of Karnataka & VTU Belagavi.
            </p>
          </div>
          <span className="text-xs text-[#5C6B7A] font-mono">
            *Hostel and transportation extra as applicable
          </span>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl border border-[#E6E2D8] shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#0D2440] text-white font-mono uppercase tracking-wider text-xs">
              <tr>
                <th className="p-3.5 sm:p-4">Quota Type</th>
                <th className="p-3.5 sm:p-4">Payable Fee Components</th>
                <th className="p-3.5 sm:p-4 text-right">Payment Mechanism</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E6E2D8]">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-3.5 sm:p-4 font-semibold text-[#0D2440]">
                  Government Quota (Aided)
                </td>
                <td className="p-3.5 sm:p-4 text-[#5C6B7A]">
                  KEA Sanctioned Govt Fee + VTU Statutory Fees + College Other Fees
                </td>
                <td className="p-3.5 sm:p-4 text-right font-mono font-medium text-[#2E7D5B]">
                  KEA Challan / Online + BEC Portal
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-3.5 sm:p-4 font-semibold text-[#0D2440]">
                  Government Quota (Un-Aided)
                </td>
                <td className="p-3.5 sm:p-4 text-[#5C6B7A]">
                  KEA Sanctioned Un-Aided Fee + VTU Statutory Fees + College Other Fees
                </td>
                <td className="p-3.5 sm:p-4 text-right font-mono font-medium text-[#2E7D5B]">
                  KEA Challan / Online + BEC Portal
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-3.5 sm:p-4 font-semibold text-[#0D2440]">
                  COMED-K Quota
                </td>
                <td className="p-3.5 sm:p-4 text-[#5C6B7A]">
                  COMED-K Prescribed Fees + VTU Statutory Fees + College Other Fees
                </td>
                <td className="p-3.5 sm:p-4 text-right font-mono font-medium text-[#2E7D5B]">
                  COMED-K Allotment + BEC Portal
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-3.5 sm:p-4 font-semibold text-[#0D2440]">
                  Management Quota
                </td>
                <td className="p-3.5 sm:p-4 text-[#5C6B7A]">
                  Management Prescribed Fees + VTU Statutory Fees + College Other Fees
                </td>
                <td className="p-3.5 sm:p-4 text-right font-mono font-medium text-[#2E7D5B]">
                  BVV Sangha Central Office DD / RTGS
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4.6 & 4.7 Sanctioned Intake Tables with Interactive Filter */}
      <section id="sanctioned-intake-section" className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
              Sanctioned Seat Intake Details (960 Seats)
            </h2>
            <p className="text-xs text-[#5C6B7A]">
              Comprehensive seat breakdown across Aided (Code: E031) and Un-Aided (KEA Code: E049 · COMED-K: E024).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search branch (e.g., Computer, Civil)"
                className="pl-8 pr-3 py-1.5 text-xs rounded-xl border border-[#E6E2D8] bg-white focus:outline-none focus:ring-2 focus:ring-[#0D2440] w-56"
              />
              <Search className="w-3.5 h-3.5 text-[#5C6B7A] absolute left-2.5 top-2.5" />
            </div>

            <div className="inline-flex rounded-xl bg-white border border-[#E6E2D8] p-1 text-xs">
              <button
                onClick={() => setActiveQuotaFilter('all')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  activeQuotaFilter === 'all' ? 'bg-[#0D2440] text-white' : 'text-[#5C6B7A]'
                }`}
              >
                All (960)
              </button>
              <button
                onClick={() => setActiveQuotaFilter('aided')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  activeQuotaFilter === 'aided' ? 'bg-[#0D2440] text-white' : 'text-[#5C6B7A]'
                }`}
              >
                Aided (300)
              </button>
              <button
                onClick={() => setActiveQuotaFilter('unaided')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  activeQuotaFilter === 'unaided' ? 'bg-[#0D2440] text-white' : 'text-[#5C6B7A]'
                }`}
              >
                Un-Aided (660)
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* 4.6 Sanctioned Intake — Aided Courses (College Code: E031) */}
          {(activeQuotaFilter === 'all' || activeQuotaFilter === 'aided') && (
            <div className="bg-white rounded-2xl border border-[#E6E2D8] shadow-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div className="bg-[#0D2440] p-4 text-white flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base">Sanctioned Intake — Aided Courses</h3>
                    <p className="text-xs text-[#C89B3C] font-mono">College Code: E031</p>
                  </div>
                  <span className="text-xs font-mono bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                    Total: 300 Seats
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#FBF9F5] text-[#5C6B7A] font-mono border-b border-[#E6E2D8]">
                      <tr>
                        <th className="p-3 text-center w-12">#</th>
                        <th className="p-3">Branch Name</th>
                        <th className="p-3 text-right font-bold">Sanctioned Intake</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6E2D8]">
                      {filteredAided.length > 0 ? (
                        filteredAided.map((item) => (
                          <tr key={item.slNo} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3 text-center font-mono text-[#5C6B7A]">{item.slNo}</td>
                            <td className="p-3 font-medium text-[#0A1628]">{item.branch}</td>
                            <td className="p-3 text-right font-mono font-bold text-[#0D2440]">{item.intake}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3} className="p-4 text-center text-[#5C6B7A] italic">No matching aided branches found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-3 bg-[#FBF9F5] border-t border-[#E6E2D8] flex items-center justify-between text-xs font-bold text-[#0D2440]">
                <span>Aided Subtotal</span>
                <span className="font-mono text-sm">{filteredAided.reduce((a, b) => a + b.intake, 0)} Seats</span>
              </div>
            </div>
          )}

          {/* 4.7 Sanctioned Intake — Un-Aided Courses (KEA Code: E049 · COMED-K Code: E024) */}
          {(activeQuotaFilter === 'all' || activeQuotaFilter === 'unaided') && (
            <div className="bg-white rounded-2xl border border-[#E6E2D8] shadow-sm overflow-hidden flex flex-col justify-between">
              <div>
                <div className="bg-[#143258] p-4 text-white flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base">Sanctioned Intake — Un-Aided Courses</h3>
                    <p className="text-xs text-[#C89B3C] font-mono">KEA: E049 · COMED-K: E024</p>
                  </div>
                  <span className="text-xs font-mono bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                    Total: 660 Seats
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#FBF9F5] text-[#5C6B7A] font-mono border-b border-[#E6E2D8]">
                      <tr>
                        <th className="p-3 text-center w-12">#</th>
                        <th className="p-3">Branch Name</th>
                        <th className="p-3 text-right font-bold">Sanctioned Intake</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6E2D8]">
                      {filteredUnaided.length > 0 ? (
                        filteredUnaided.map((item) => (
                          <tr key={item.slNo} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3 text-center font-mono text-[#5C6B7A]">{item.slNo}</td>
                            <td className="p-3 font-medium text-[#0A1628]">{item.branch}</td>
                            <td className="p-3 text-right font-mono font-bold text-[#0D2440]">{item.intake}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3} className="p-4 text-center text-[#5C6B7A] italic">No matching unaided branches found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-3 bg-[#FBF9F5] border-t border-[#E6E2D8] flex items-center justify-between text-xs font-bold text-[#0D2440]">
                <span>Un-Aided Subtotal</span>
                <span className="font-mono text-sm">{filteredUnaided.reduce((a, b) => a + b.intake, 0)} Seats</span>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4.8 Contact for Management Quota */}
      <section id="management-quota-contact" className="bg-[#0D2440] text-white rounded-3xl p-6 sm:p-8 border border-[#C89B3C]/40 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C89B3C] font-bold">
              Central Administration Office
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold">
              B.V.V. Sangha Central Office
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <span>B.V.V. Sangha, Bagalkote – 587 101, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
                <span className="font-mono">08354-220689, 08354-220702</span>
              </div>
            </div>
            <p className="text-xs text-slate-300">
              For institutional management quota seat counselling, approvals, and fee deposit instructions.
            </p>
          </div>

          <div className="space-y-4 border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C89B3C] font-bold">
              Campus Admission Directorate
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold">
              BEC Admission Section
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <span>Basaveshwar Engineering College (A), Vidyagiri, Bagalkote – 587 102</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
                <span className="font-mono text-[#C89B3C] font-bold text-base">9902684833</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
                <span className="font-mono">admissions@becbgk.edu</span>
              </div>
            </div>
            <p className="text-xs text-slate-300">
              Direct helpdesk for document verification, eligibility check, hostel room reservations, and transport enrollment.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
