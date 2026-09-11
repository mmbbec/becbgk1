import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Layers, 
  FileText,
  Building
} from 'lucide-react';
import { NavTab } from '../types';

interface ProgrammesSectionProps {
  onNavigate: (tab: NavTab) => void;
}

export const ProgrammesSection: React.FC<ProgrammesSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'ug' | 'pg' | 'mgmt' | 'phd'>('ug');

  return (
    <div id="programmes-section-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-[#0D2440] text-white rounded-3xl p-8 sm:p-10 border border-[#C89B3C]/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#C89B3C] font-bold">
            Degree Offerings & Autonomous Curricula
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold">
            Academic Programmes
          </h1>
          <p className="text-xs sm:text-sm text-slate-200">
            Approved by AICTE New Delhi, permanently affiliated to VTU Belagavi, and accredited by NBA and NAAC with 'A' Grade.
          </p>
        </div>
      </div>

      {/* Programme Level Selector Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#E6E2D8] pb-3">
        <button
          onClick={() => setActiveTab('ug')}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'ug'
              ? 'bg-[#0D2440] text-white shadow-sm'
              : 'bg-white border border-[#E6E2D8] text-[#5C6B7A] hover:text-[#0D2440]'
          }`}
        >
          Undergraduate (B.E.)
        </button>
        <button
          onClick={() => setActiveTab('pg')}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'pg'
              ? 'bg-[#0D2440] text-white shadow-sm'
              : 'bg-white border border-[#E6E2D8] text-[#5C6B7A] hover:text-[#0D2440]'
          }`}
        >
          Postgraduate (M.Tech)
        </button>
        <button
          onClick={() => setActiveTab('mgmt')}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'mgmt'
              ? 'bg-[#0D2440] text-white shadow-sm'
              : 'bg-white border border-[#E6E2D8] text-[#5C6B7A] hover:text-[#0D2440]'
          }`}
        >
          MCA & MBA
        </button>
        <button
          onClick={() => setActiveTab('phd')}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'phd'
              ? 'bg-[#0D2440] text-white shadow-sm'
              : 'bg-white border border-[#E6E2D8] text-[#5C6B7A] hover:text-[#0D2440]'
          }`}
        >
          Ph.D. / M.Sc. (Engg.)
        </button>
      </div>

      {/* 8.1 Undergraduate (B.E.) */}
      {activeTab === 'ug' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl border border-[#E6E2D8] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6E2D8] pb-5">
              <div>
                <span className="text-xs font-mono font-bold text-[#C89B3C] uppercase">Bachelor of Engineering</span>
                <h3 className="font-heading text-2xl font-bold text-[#0D2440]">
                  B.E. Degree Programmes (10 Disciplines)
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#0D2440]/10 text-[#0D2440] font-mono text-xs font-bold rounded-lg">
                  Duration: 4 Years (8 Semesters)
                </span>
                <span className="px-3 py-1 bg-[#2E7D5B]/15 text-[#2E7D5B] font-mono text-xs font-bold rounded-lg">
                  960 Seats
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-heading font-bold text-base text-[#0D2440]">
                  Eligibility Criteria
                </h4>
                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#E6E2D8] text-xs text-[#0A1628] space-y-2">
                  <p>
                    <strong>General Merit (GM):</strong> Minimum <strong>45% aggregate</strong> marks in Physics & Mathematics as compulsory subjects, along with Chemistry / Biotechnology / Computer Science / Electronics / Biology.
                  </p>
                  <p>
                    <strong>SC / ST / Category-I / OBC (Karnataka Candidates):</strong> Minimum <strong>40% aggregate</strong> marks in optional subjects.
                  </p>
                  <p>
                    <strong>Entrance Qualification:</strong> Valid rank in KEA Karnataka CET, COMED-K, or JEE Main examination.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('admission')}
                    className="px-6 py-2.5 bg-[#0D2440] text-white font-semibold text-xs rounded-xl hover:bg-[#16365C] transition-colors flex items-center gap-2"
                  >
                    <span>View Sanctioned Seats & Fees</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-heading font-bold text-base text-[#0D2440]">
                  Undergraduate Branches Offered
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Artificial Intelligence & Machine Learning',
                    'Computer Science & Engineering',
                    'Information Science & Engineering',
                    'Electronics & Communication Engineering',
                    'Electrical & Electronics Engineering',
                    'Electronics & Computer Engineering',
                    'Mechanical Engineering',
                    'Civil Engineering',
                    'Biotechnology',
                    'Industrial & Production Engineering',
                    'Automobile Engineering'
                  ].map((branch, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-[#FBF9F5] border border-[#E6E2D8] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D5B] flex-shrink-0" />
                      <span className="font-medium text-[#0A1628]">{branch}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8.2 Postgraduate (M.Tech) */}
      {activeTab === 'pg' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl border border-[#E6E2D8] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6E2D8] pb-5">
              <div>
                <span className="text-xs font-mono font-bold text-[#C89B3C] uppercase">Master of Technology</span>
                <h3 className="font-heading text-2xl font-bold text-[#0D2440]">
                  M.Tech Programmes (3 Specialized Tracks)
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#0D2440]/10 text-[#0D2440] font-mono text-xs font-bold rounded-lg">
                  Duration: 2 Years (4 Semesters)
                </span>
                <span className="px-3 py-1 bg-[#2E7D5B]/15 text-[#2E7D5B] font-mono text-xs font-bold rounded-lg">
                  Code: T810
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#FBF9F5] border border-[#E6E2D8] space-y-2">
                <span className="text-[10px] font-mono uppercase font-bold text-[#0D2440]">Civil Engg</span>
                <h4 className="font-heading font-bold text-base text-[#0D2440]">
                  Environmental Engineering
                </h4>
                <p className="text-xs text-[#5C6B7A]">
                  Advanced effluent treatment, hazardous waste management, environmental impact assessment, and air dispersion modeling.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FBF9F5] border border-[#E6E2D8] space-y-2">
                <span className="text-[10px] font-mono uppercase font-bold text-[#0D2440]">Civil Engg</span>
                <h4 className="font-heading font-bold text-base text-[#0D2440]">
                  Geo-Technical & Structural Engg.
                </h4>
                <p className="text-xs text-[#5C6B7A]">
                  Sub-surface exploration, foundation engineering on swelling soils, high-rise structural dynamics, and earthquake-resistant design.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FBF9F5] border border-[#E6E2D8] space-y-2">
                <span className="text-[10px] font-mono uppercase font-bold text-[#0D2440]">Mechanical Engg</span>
                <h4 className="font-heading font-bold text-base text-[#0D2440]">
                  Machine Design
                </h4>
                <p className="text-xs text-[#5C6B7A]">
                  Finite element modeling (FEM), fracture mechanics, tribology, fatigue analysis, and multi-body dynamic simulation.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Admission & Stipend:</strong> Admissions strictly through <strong>Karnataka PGCET or valid GATE score</strong>. GATE qualified candidates receive monthly AICTE fellowship stipends as per Government norms.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8.3 MCA & MBA */}
      {activeTab === 'mgmt' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl border border-[#E6E2D8] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#E6E2D8] pb-5">
              <span className="text-xs font-mono font-bold text-[#C89B3C] uppercase">Professional Masters</span>
              <h3 className="font-heading text-2xl font-bold text-[#0D2440]">
                Master of Computer Applications (MCA) & Master of Business Administration (MBA)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E6E2D8] space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-lg text-[#0D2440]">Master of Computer Applications</h4>
                  <span className="text-xs font-mono font-bold bg-[#0D2440] text-white px-2.5 py-0.5 rounded-full">3 Years</span>
                </div>
                <p className="text-xs text-[#5C6B7A]">
                  Equipping graduates in enterprise application development, cloud computing architectures, full-stack frameworks, database administration, and mobile computing.
                </p>
                <div className="text-xs text-[#0A1628] font-mono border-t border-[#E6E2D8] pt-2">
                  Entrance: <strong>KEA PGCET / KMAT</strong> (College Code: C408)
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E6E2D8] space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-lg text-[#0D2440]">Master of Business Administration</h4>
                  <span className="text-xs font-mono font-bold bg-[#0D2440] text-white px-2.5 py-0.5 rounded-full">2 Years</span>
                </div>
                <p className="text-xs text-[#5C6B7A]">
                  Dual specializations across Financial Management, Marketing Strategy, Human Resource Development, and Business Analytics with industry internships.
                </p>
                <div className="text-xs text-[#0A1628] font-mono border-t border-[#E6E2D8] pt-2">
                  Entrance: <strong>KEA PGCET / KMAT</strong> (College Code: B124)
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8.4 Ph.D. / M.Sc. (Engg.) */}
      {activeTab === 'phd' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl border border-[#E6E2D8] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6E2D8] pb-5">
              <div>
                <span className="text-xs font-mono font-bold text-[#C89B3C] uppercase">Doctoral Research</span>
                <h3 className="font-heading text-2xl font-bold text-[#0D2440]">
                  Doctor of Philosophy (Ph.D.) & M.Sc. (Engg.) by Research
                </h3>
              </div>
              <span className="px-3 py-1 bg-[#C89B3C]/15 text-[#0D2440] font-mono text-xs font-bold rounded-lg border border-[#C89B3C]/30">
                10 VTU Recognized Centres
              </span>
            </div>

            <div className="space-y-4 text-xs text-[#5C6B7A]">
              <p>
                The college conducts full-time and part-time doctoral research programs under Visvesvaraya Technological University (VTU), Belagavi. Over 70 faculty members are registered doctoral guides guiding research scholars in funded projects.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Civil Engineering R&D',
                  'Mechanical Engineering R&D',
                  'Electrical & Electronics R&D',
                  'Electronics & Communication R&D',
                  'Computer Science & Engg R&D',
                  'Biotechnology R&D',
                  'Physics Research Centre',
                  'Chemistry Research Centre',
                  'Mathematics Research Centre'
                ].map((centre, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#FBF9F5] border border-[#E6E2D8] font-semibold text-[#0D2440] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D5B] flex-shrink-0" />
                    <span>{centre}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#0D2440] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-sm">Doctoral Admission Procedure</div>
                  <div className="text-slate-300 text-xs">Conducted through VTU Research Eligibility Test (VRAT) followed by Departmental Presentation & Interview.</div>
                </div>
                <button
                  onClick={() => onNavigate('research')}
                  className="px-4 py-2 bg-[#C89B3C] text-[#0D2440] font-bold rounded-xl text-xs flex-shrink-0 hover:bg-[#dfb255] transition-colors"
                >
                  Explore Research Grants & Patents
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
