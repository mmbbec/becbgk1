import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  FlaskConical, 
  Users, 
  BookOpen, 
  Award, 
  Layers, 
  ChevronRight, 
  Search,
  CheckCircle2,
  Calendar,
  GraduationCap,
  Mail,
  Phone,
  ShieldCheck,
  UserCheck,
  RefreshCw,
  ExternalLink,
  Copy,
  Check,
  Filter,
  Info,
  Sparkles,
  Download,
  School,
  Briefcase
} from 'lucide-react';
import { ProgrammeHOD, LeadershipMember } from '../types';
import { fetchDepartmentDirectory, DepartmentSummaryStats } from '../services/departmentService';
import { DEPARTMENTS } from '../data/collegeData';

export const DepartmentsSection: React.FC = () => {
  const [programmes, setProgrammes] = useState<ProgrammeHOD[]>([]);
  const [leadership, setLeadership] = useState<LeadershipMember[]>([]);
  const [stats, setStats] = useState<DepartmentSummaryStats | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Filter and View States
  const [selectedTab, setSelectedTab] = useState<'all' | 'ug' | 'pg' | 'science-humanities' | 'leadership'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStream, setSelectedStream] = useState<'all' | 'aided' | 'unaided'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [selectedProgramme, setSelectedProgramme] = useState<ProgrammeHOD | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  // Fetch data
  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchDepartmentDirectory();
      setProgrammes(data.programmes);
      setLeadership(data.leadership);
      setStats(data.stats);
      setLastUpdated(new Date());
    } catch (err) {
      setError('Unable to fetch current department records. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  // Filter programmes
  const filteredProgrammes = programmes.filter((p) => {
    // Tab filter
    if (selectedTab === 'ug' && p.level !== 'undergraduate') return false;
    if (selectedTab === 'pg' && p.level !== 'postgraduate') return false;
    if (selectedTab === 'science-humanities' || selectedTab === 'leadership') return false;

    // Stream filter
    if (selectedStream === 'aided' && !p.stream.toLowerCase().includes('aided')) return false;
    if (selectedStream === 'unaided' && !p.stream.toLowerCase().includes('un-aided')) return false;

    // Search query
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) ||
      p.hodName.toLowerCase().includes(query) ||
      p.hodDesignation.toLowerCase().includes(query) ||
      p.code.toLowerCase().includes(query) ||
      p.specializations.some((s) => s.toLowerCase().includes(query)) ||
      p.keyLabs.some((l) => l.toLowerCase().includes(query))
    );
  });

  // Science & Humanities departments from standard college data
  const scienceDepartments = DEPARTMENTS.filter(d => d.category === 'science-humanities');

  // Count tallies
  const ugCount = programmes.filter(p => p.level === 'undergraduate').length;
  const pgCount = programmes.filter(p => p.level === 'postgraduate').length;

  return (
    <div id="departments-section-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Top Academic Banner */}
      <div className="bg-[#0D2440] text-white rounded-3xl p-6 sm:p-10 border border-[#C89B3C]/30 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#C89B3C]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C89B3C] font-bold px-2.5 py-1 rounded-full bg-[#C89B3C]/15 border border-[#C89B3C]/30">
              Autonomous Academic Registry · VTU Belagavi
            </span>
            <span className="text-[11px] text-slate-300 font-mono flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C89B3C]" />
              ESTD 1963 · Bagalkote
            </span>
          </div>

          <h1 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight">
            Academic Departments & Heads of Departments (HODs)
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Official directory of all <strong className="text-[#C89B3C] font-semibold">11 Undergraduate (B.E.)</strong> and{' '}
            <strong className="text-[#C89B3C] font-semibold">6 Postgraduate (M.Tech, MBA, MCA)</strong> programmes with their respective 
            Heads of Departments, academic intakes, recognized VTU R&D centres, and laboratory infrastructure.
          </p>
        </div>

        {/* Live sync stats bar */}
        <div className="relative z-10 mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300 font-mono text-[11px]">
                Live Academic Directory · Synced {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadData}
              disabled={isLoading}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh Records</span>
            </button>
            <div className="bg-[#C89B3C]/20 text-[#C89B3C] font-mono font-semibold px-3 py-1.5 rounded-xl border border-[#C89B3C]/30">
              17 Degree Programmes
            </div>
          </div>
        </div>
      </div>

      {/* KPI Highlight Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white rounded-2xl border border-[#E6E2D8] p-4 shadow-xs">
          <div className="flex items-center justify-between text-[#0D2440] mb-1">
            <span className="text-xs font-mono uppercase text-[#5C6B7A] font-semibold">Undergraduate</span>
            <GraduationCap className="w-4 h-4 text-[#C89B3C]" />
          </div>
          <div className="text-2xl sm:text-3xl font-heading font-bold text-[#0D2440]">
            11 <span className="text-xs font-sans font-normal text-[#5C6B7A]">B.E. Branches</span>
          </div>
          <p className="text-[11px] text-[#5C6B7A] mt-1">Core & emerging tech disciplines</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E6E2D8] p-4 shadow-xs">
          <div className="flex items-center justify-between text-[#0D2440] mb-1">
            <span className="text-xs font-mono uppercase text-[#5C6B7A] font-semibold">Postgraduate</span>
            <School className="w-4 h-4 text-[#2E7D5B]" />
          </div>
          <div className="text-2xl sm:text-3xl font-heading font-bold text-[#0D2440]">
            6 <span className="text-xs font-sans font-normal text-[#5C6B7A]">PG Programmes</span>
          </div>
          <p className="text-[11px] text-[#5C6B7A] mt-1">4 M.Tech + 1 MBA + 1 MCA</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E6E2D8] p-4 shadow-xs">
          <div className="flex items-center justify-between text-[#0D2440] mb-1">
            <span className="text-xs font-mono uppercase text-[#5C6B7A] font-semibold">Research R&D</span>
            <FlaskConical className="w-4 h-4 text-[#C89B3C]" />
          </div>
          <div className="text-2xl sm:text-3xl font-heading font-bold text-[#0D2440]">
            10 <span className="text-xs font-sans font-normal text-[#5C6B7A]">VTU Centres</span>
          </div>
          <p className="text-[11px] text-[#5C6B7A] mt-1">Ph.D. & M.Sc. Engg guides</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E6E2D8] p-4 shadow-xs">
          <div className="flex items-center justify-between text-[#0D2440] mb-1">
            <span className="text-xs font-mono uppercase text-[#5C6B7A] font-semibold">Total Intake</span>
            <Users className="w-4 h-4 text-[#0D2440]" />
          </div>
          <div className="text-2xl sm:text-3xl font-heading font-bold text-[#0D2440]">
            1,014 <span className="text-xs font-sans font-normal text-[#5C6B7A]">Seats / Year</span>
          </div>
          <p className="text-[11px] text-[#5C6B7A] mt-1">KEA CET, COMEDK & PGCET</p>
        </div>
      </div>

      {/* Navigation Filter Tabs & Search Controls */}
      <div className="bg-white rounded-2xl border border-[#E6E2D8] p-3 sm:p-4 shadow-xs space-y-4">
        
        {/* Primary Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedTab === 'all'
                  ? 'bg-[#0D2440] text-white shadow-xs'
                  : 'text-[#5C6B7A] hover:bg-[#FBF9F5] hover:text-[#0D2440]'
              }`}
            >
              All Programmes (17)
            </button>

            <button
              onClick={() => setSelectedTab('ug')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedTab === 'ug'
                  ? 'bg-[#0D2440] text-white shadow-xs'
                  : 'text-[#5C6B7A] hover:bg-[#FBF9F5] hover:text-[#0D2440]'
              }`}
            >
              <span>11 Undergraduate (B.E.)</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[#C89B3C] text-[#0D2440] font-bold font-mono">11</span>
            </button>

            <button
              onClick={() => setSelectedTab('pg')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedTab === 'pg'
                  ? 'bg-[#0D2440] text-white shadow-xs'
                  : 'text-[#5C6B7A] hover:bg-[#FBF9F5] hover:text-[#0D2440]'
              }`}
            >
              <span>6 Postgraduate (PG)</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[#C89B3C] text-[#0D2440] font-bold font-mono">6</span>
            </button>

            <button
              onClick={() => setSelectedTab('science-humanities')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedTab === 'science-humanities'
                  ? 'bg-[#0D2440] text-white shadow-xs'
                  : 'text-[#5C6B7A] hover:bg-[#FBF9F5] hover:text-[#0D2440]'
              }`}
            >
              Basic Sciences & HSS (4)
            </button>

            <button
              onClick={() => setSelectedTab('leadership')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedTab === 'leadership'
                  ? 'bg-[#0D2440] text-white shadow-xs'
                  : 'text-[#5C6B7A] hover:bg-[#FBF9F5] hover:text-[#0D2440]'
              }`}
            >
              Central Deans & Leadership (7)
            </button>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-[#FBF9F5] p-1 rounded-xl border border-[#E6E2D8]">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'cards' ? 'bg-white text-[#0D2440] shadow-xs' : 'text-[#5C6B7A]'
              }`}
            >
              HOD Cards
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'table' ? 'bg-white text-[#0D2440] shadow-xs' : 'text-[#5C6B7A]'
              }`}
            >
              Registry Table
            </button>
          </div>
        </div>

        {/* Search & Stream Filter Controls (only active when viewing programmes) */}
        {selectedTab !== 'leadership' && selectedTab !== 'science-humanities' && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#E6E2D8]/60">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-[#5C6B7A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search HOD name, programme, lab, specialization..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#FBF9F5] rounded-xl border border-[#E6E2D8] focus:outline-none focus:border-[#0D2440] focus:ring-1 focus:ring-[#0D2440] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5C6B7A] hover:text-[#0D2440]"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <span className="text-xs text-[#5C6B7A] font-medium flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                Stream:
              </span>
              <select
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value as any)}
                className="text-xs bg-[#FBF9F5] border border-[#E6E2D8] rounded-xl px-3 py-1.5 text-[#0D2440] font-medium focus:outline-none"
              >
                <option value="all">All Funding Streams</option>
                <option value="aided">Govt. Aided Only</option>
                <option value="unaided">Un-Aided / Autonomous</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Areas */}
      {isLoading ? (
        /* Loading Skeleton */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#E6E2D8] p-6 space-y-4 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-200 rounded-xl" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-slate-200 rounded-md w-3/4" />
                  <div className="h-3 bg-slate-100 rounded-md w-1/2" />
                </div>
              </div>
              <div className="h-16 bg-slate-50 rounded-xl" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-2xl text-center space-y-3">
          <p className="font-semibold text-sm">{error}</p>
          <button
            onClick={loadData}
            className="px-4 py-2 bg-red-600 text-white rounded-xl text-xs font-semibold hover:bg-red-700 transition-colors"
          >
            Retry Loading
          </button>
        </div>
      ) : (
        <>
          {/* SECTION A: 11 UG & 6 PG PROGRAMMES DIRECTORY */}
          {(selectedTab === 'all' || selectedTab === 'ug' || selectedTab === 'pg') && (
            <div className="space-y-6">
              
              {/* Section Subtitle */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-heading text-xl font-bold text-[#0D2440]">
                    {selectedTab === 'all' && `All Academic Programmes (${filteredProgrammes.length})`}
                    {selectedTab === 'ug' && `11 Undergraduate B.E. Programmes (${filteredProgrammes.length})`}
                    {selectedTab === 'pg' && `6 Postgraduate Master's Programmes (${filteredProgrammes.length})`}
                  </h2>
                  <p className="text-xs text-[#5C6B7A]">
                    Showing official Head of Departments (HODs), departmental intakes, and academic specializations.
                  </p>
                </div>

                {filteredProgrammes.length > 0 && (
                  <span className="text-xs font-mono text-[#5C6B7A]">
                    Showing {filteredProgrammes.length} of {programmes.length} programmes
                  </span>
                )}
              </div>

              {filteredProgrammes.length === 0 ? (
                <div className="bg-white rounded-2xl border border-[#E6E2D8] p-10 text-center space-y-2">
                  <Info className="w-8 h-8 text-[#C89B3C] mx-auto" />
                  <h3 className="font-heading text-lg font-bold text-[#0D2440]">No departments match your filter</h3>
                  <p className="text-xs text-[#5C6B7A]">Try adjusting your search terms or clearing the stream filter.</p>
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedStream('all'); }}
                    className="px-4 py-2 bg-[#0D2440] text-white rounded-xl text-xs font-semibold mt-2"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : viewMode === 'cards' ? (
                /* Cards Grid View */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredProgrammes.map((prog) => (
                    <div
                      key={prog.id}
                      className="bg-white rounded-2xl border border-[#E6E2D8] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#C89B3C]/50 relative"
                    >
                      {/* Top Badges */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#0D2440] text-white">
                              {prog.degree}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#C89B3C]/15 text-[#0D2440] font-semibold border border-[#C89B3C]/20">
                              {prog.stream.includes('Aided') && !prog.stream.includes('Un-Aided') ? 'Aided' : prog.stream.includes('Un-Aided') && !prog.stream.includes('&') ? 'Un-Aided' : 'Aided + Un-Aided'}
                            </span>
                          </div>
                          
                          {prog.accreditation?.includes('NBA') && (
                            <span className="flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              <Award className="w-3 h-3" />
                              NBA
                            </span>
                          )}
                        </div>

                        {/* Programme Title */}
                        <div>
                          <h3 className="font-heading font-bold text-base text-[#0D2440] group-hover:text-[#C89B3C] transition-colors leading-snug">
                            {prog.name}
                          </h3>
                          <p className="text-[11px] text-[#5C6B7A] font-mono">
                            {prog.departmentName} · Estd. {prog.establishedYear}
                          </p>
                        </div>

                        {/* HOD Profile Box */}
                        <div className="bg-[#FBF9F5] rounded-xl p-3.5 border border-[#E6E2D8]/80 space-y-1.5">
                          <div className="flex items-start justify-between">
                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C89B3C] font-bold block">
                                Head of Department (HOD)
                              </span>
                              <span className="font-heading font-bold text-sm text-[#0D2440]">
                                {prog.hodName}
                              </span>
                              <p className="text-xs text-[#5C6B7A]">
                                {prog.hodDesignation}
                              </p>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-[#0D2440]/10 text-[#0D2440] flex items-center justify-center flex-shrink-0">
                              <UserCheck className="w-4 h-4" />
                            </div>
                          </div>

                          {/* Contact quick actions */}
                          <div className="pt-2 border-t border-[#E6E2D8]/60 flex items-center justify-between text-xs text-[#5C6B7A]">
                            <div className="flex items-center gap-1.5 truncate mr-2">
                              <Mail className="w-3.5 h-3.5 text-[#0D2440] flex-shrink-0" />
                              <a href={`mailto:${prog.hodEmail}`} className="hover:text-[#0D2440] hover:underline truncate font-mono text-[11px]">
                                {prog.hodEmail}
                              </a>
                            </div>
                            <button
                              onClick={() => handleCopyEmail(prog.hodEmail)}
                              title="Copy HOD email"
                              className="p-1 hover:bg-white rounded text-[#5C6B7A] hover:text-[#0D2440] transition-colors flex-shrink-0"
                            >
                              {copiedEmail === prog.hodEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>

                        {/* Intake & Specializations */}
                        <div className="space-y-2 pt-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#5C6B7A]">Intake Capacity:</span>
                            <span className="font-mono font-bold text-[#0D2440]">{prog.intake} Seats / Year</span>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {prog.specializations.slice(0, 3).map((spec, sIdx) => (
                              <span key={sIdx} className="text-[10px] bg-slate-100 text-[#0D2440] px-2 py-0.5 rounded-md">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="mt-4 pt-3 border-t border-[#E6E2D8] flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#5C6B7A]">
                          Code: {prog.code.split('/')[0]}
                        </span>
                        <button
                          onClick={() => setSelectedProgramme(prog)}
                          className="text-xs font-semibold text-[#0D2440] hover:text-[#C89B3C] flex items-center gap-1 transition-colors"
                        >
                          <span>Department Details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Tabular Registry View */
                <div className="bg-white rounded-2xl border border-[#E6E2D8] shadow-xs overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#0D2440] text-white font-mono uppercase text-[11px] tracking-wider">
                        <th className="py-3 px-4">#</th>
                        <th className="py-3 px-4">Programme & Branch</th>
                        <th className="py-3 px-4">Level</th>
                        <th className="py-3 px-4">Head of Department (HOD)</th>
                        <th className="py-3 px-4">Designation</th>
                        <th className="py-3 px-4">Intake</th>
                        <th className="py-3 px-4">Stream</th>
                        <th className="py-3 px-4">Official Email</th>
                        <th className="py-3 px-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6E2D8]">
                      {filteredProgrammes.map((p, idx) => (
                        <tr key={p.id} className="hover:bg-[#FBF9F5] transition-colors">
                          <td className="py-3 px-4 font-mono text-[#5C6B7A]">{idx + 1}</td>
                          <td className="py-3 px-4">
                            <div className="font-heading font-bold text-[#0D2440] text-sm">{p.name}</div>
                            <div className="text-[11px] text-[#5C6B7A] font-mono">Estd. {p.establishedYear}</div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded-md font-mono text-[10px] font-bold bg-[#0D2440]/10 text-[#0D2440]">
                              {p.degree}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-semibold text-[#0D2440]">
                            {p.hodName}
                          </td>
                          <td className="py-3 px-4 text-[#5C6B7A]">
                            {p.hodDesignation}
                          </td>
                          <td className="py-3 px-4 font-mono font-bold text-[#0D2440]">
                            {p.intake}
                          </td>
                          <td className="py-3 px-4 text-[11px] text-[#5C6B7A]">
                            {p.stream}
                          </td>
                          <td className="py-3 px-4 font-mono text-[11px]">
                            <a href={`mailto:${p.hodEmail}`} className="text-[#0D2440] hover:underline">
                              {p.hodEmail}
                            </a>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <button
                              onClick={() => setSelectedProgramme(p)}
                              className="px-2.5 py-1 bg-[#0D2440] text-white rounded-lg text-[11px] font-medium hover:bg-[#16365C] transition-colors"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* SECTION B: FOUNDATIONAL SCIENCES & HUMANITIES */}
          {(selectedTab === 'all' || selectedTab === 'science-humanities') && (
            <div className="space-y-4 pt-6 border-t border-[#E6E2D8]">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-[#C89B3C] tracking-wider">
                  First Year & Foundational Sciences
                </span>
                <h2 className="font-heading text-xl font-bold text-[#0D2440]">
                  Basic Sciences & Humanities Departments
                </h2>
                <p className="text-xs text-[#5C6B7A]">
                  Supporting all 11 undergraduate branches with mathematical rigor, applied physics, materials chemistry, and corporate communications.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {scienceDepartments.map((dept) => (
                  <div key={dept.id} className="bg-white rounded-2xl border border-[#E6E2D8] p-4 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0D2440]/10 text-[#0D2440] font-bold">
                        Sciences & HSS
                      </span>
                      <FlaskConical className="w-4 h-4 text-[#C89B3C]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-[#0D2440]">{dept.name}</h3>
                      <p className="text-[11px] text-[#5C6B7A]">Estd. {dept.establishedYear}</p>
                    </div>
                    <div className="bg-[#FBF9F5] p-2.5 rounded-xl border border-[#E6E2D8] space-y-1">
                      <span className="text-[10px] font-mono text-[#C89B3C] uppercase block font-semibold">HOD</span>
                      <span className="font-semibold text-xs text-[#0D2440] block">{dept.hodName}</span>
                      <span className="text-[11px] text-[#5C6B7A] block">{dept.hodDesignation}</span>
                      <a href={`mailto:${dept.hodEmail}`} className="text-[10px] font-mono text-[#0D2440] hover:underline block pt-1">
                        {dept.hodEmail}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION C: EXECUTIVE LEADERSHIP & DEANS */}
          {(selectedTab === 'all' || selectedTab === 'leadership') && (
            <div className="space-y-4 pt-6 border-t border-[#E6E2D8]">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-[#C89B3C] tracking-wider">
                  College Administration
                </span>
                <h2 className="font-heading text-xl font-bold text-[#0D2440]">
                  Principal, Deans & Administrative Leadership
                </h2>
                <p className="text-xs text-[#5C6B7A]">
                  Autonomous governance, academic administration, research oversight, and examination authorities of BEC Bagalkote.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {leadership.map((leader, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-[#E6E2D8] p-5 shadow-xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full bg-[#0D2440]/10 text-[#0D2440]">
                          {leader.role}
                        </span>
                        <ShieldCheck className="w-4 h-4 text-[#2E7D5B]" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-[#0D2440]">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#C89B3C]">
                        {leader.designation}
                      </p>
                      <p className="text-[11px] text-[#5C6B7A]">
                        {leader.department}
                      </p>
                      {leader.description && (
                        <p className="text-xs text-[#5C6B7A] pt-2 border-t border-[#E6E2D8]/60 leading-relaxed">
                          {leader.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-3 border-t border-[#E6E2D8] text-xs font-mono flex items-center justify-between">
                      <a href={`mailto:${leader.email}`} className="text-[#0D2440] hover:underline truncate">
                        {leader.email}
                      </a>
                      <button
                        onClick={() => handleCopyEmail(leader.email)}
                        className="p-1 text-[#5C6B7A] hover:text-[#0D2440]"
                        title="Copy email"
                      >
                        {copiedEmail === leader.email ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* DEPARTMENT DETAIL MODAL */}
      {selectedProgramme && (
        <div
          id="department-detail-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1628]/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProgramme(null);
          }}
        >
          <div
            id="department-detail-modal-panel"
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E6E2D8] overflow-hidden my-auto max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="bg-[#0D2440] p-6 text-white relative">
              <button
                onClick={() => setSelectedProgramme(null)}
                className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                ✕
              </button>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#C89B3C] text-[#0D2440]">
                    {selectedProgramme.degree} {selectedProgramme.level === 'undergraduate' ? 'Undergraduate' : 'Postgraduate'}
                  </span>
                  <span className="text-xs font-mono text-slate-300">
                    Estd. {selectedProgramme.establishedYear}
                  </span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold">
                  {selectedProgramme.name}
                </h2>
                <p className="text-xs text-[#C89B3C] font-mono">
                  {selectedProgramme.departmentName}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 overflow-y-auto flex-1">
              
              {/* HOD Bio Box */}
              <div className="bg-[#FBF9F5] p-4 rounded-2xl border border-[#E6E2D8] flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D2440] text-[#C89B3C] font-serif font-bold text-xl flex items-center justify-center flex-shrink-0">
                  {selectedProgramme.hodName.split(' ')[1]?.[0] || 'H'}
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C89B3C] font-bold">
                    Head of Department (HOD)
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#0D2440]">
                    {selectedProgramme.hodName}
                  </h3>
                  <p className="text-xs text-[#5C6B7A] font-medium">
                    {selectedProgramme.hodDesignation}
                  </p>
                  <div className="flex items-center gap-4 pt-2 text-xs font-mono text-[#5C6B7A]">
                    <a href={`mailto:${selectedProgramme.hodEmail}`} className="hover:text-[#0D2440] hover:underline flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#0D2440]" />
                      <span>{selectedProgramme.hodEmail}</span>
                    </a>
                    {selectedProgramme.hodPhone && (
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-[#0D2440]" />
                        <span>{selectedProgramme.hodPhone}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Programme Description */}
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-[#0D2440]">
                  Department Overview
                </h4>
                <p className="text-xs text-[#5C6B7A] leading-relaxed">
                  {selectedProgramme.description}
                </p>
              </div>

              {/* Intake & Stream Information */}
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-xl text-xs">
                <div>
                  <span className="text-[#5C6B7A] block">Annual Sanctioned Intake:</span>
                  <span className="font-mono font-bold text-[#0D2440] text-sm">
                    {selectedProgramme.intake} Seats
                  </span>
                </div>
                <div>
                  <span className="text-[#5C6B7A] block">Stream / Quota:</span>
                  <span className="font-medium text-[#0D2440]">
                    {selectedProgramme.stream}
                  </span>
                </div>
              </div>

              {/* Specializations */}
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-[#0D2440]">
                  Key Research & Curricular Specializations
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProgramme.specializations.map((spec, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 bg-[#FBF9F5] border border-[#E6E2D8] rounded-lg text-[#0D2440]">
                      • {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Laboratories */}
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-[#0D2440]">
                  Core Laboratory Facilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProgramme.keyLabs.map((lab, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <FlaskConical className="w-3.5 h-3.5 text-[#C89B3C] flex-shrink-0" />
                      <span className="text-[#0D2440] font-medium">{lab}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Highlights */}
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-[#0D2440]">
                  Accreditation & Highlights
                </h4>
                <div className="space-y-1.5">
                  {selectedProgramme.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#5C6B7A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D5B] mt-0.5 flex-shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FBF9F5] border-t border-[#E6E2D8] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5C6B7A]">
                BEC Bagalkote Academic Registry
              </span>
              <button
                onClick={() => setSelectedProgramme(null)}
                className="px-4 py-2 bg-[#0D2440] text-white rounded-xl text-xs font-semibold hover:bg-[#16365C] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
