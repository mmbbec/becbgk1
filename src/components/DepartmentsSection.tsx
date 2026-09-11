import React, { useState } from 'react';
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
  GraduationCap
} from 'lucide-react';
import { DEPARTMENTS } from '../data/collegeData';
import { DepartmentInfo } from '../types';

export const DepartmentsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ug' | 'science-humanities' | 'pg' | 'research'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState<DepartmentInfo>(DEPARTMENTS[0]);

  const filteredDepartments = DEPARTMENTS.filter(d => {
    const matchesCategory = 
      activeCategory === 'all' ? true :
      activeCategory === 'research' ? true : // All 10 engineering/basic sciences have recognized VTU R&D centres
      d.category === activeCategory;

    const matchesSearch = 
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.hodName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div id="departments-section-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-[#0D2440] text-white rounded-3xl p-8 sm:p-10 border border-[#C89B3C]/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#C89B3C] font-bold">
            Academic Departments & Centers of Excellence
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold">
            Departments of BEC Bagalkote
          </h1>
          <p className="text-xs sm:text-sm text-slate-200">
            Fostering research, engineering creativity, and industrial competency across 11 undergraduate branches, foundational sciences, post-graduate institutes, and VTU-recognized R&D centres.
          </p>
        </div>
      </div>

      {/* Category Tabs & Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
              activeCategory === 'all' 
                ? 'bg-[#0D2440] text-white shadow-sm' 
                : 'bg-white border border-[#E6E2D8] text-[#5C6B7A] hover:text-[#0D2440]'
            }`}
          >
            All Departments
          </button>
          <button
            onClick={() => setActiveCategory('ug')}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
              activeCategory === 'ug' 
                ? 'bg-[#0D2440] text-white shadow-sm' 
                : 'bg-white border border-[#E6E2D8] text-[#5C6B7A] hover:text-[#0D2440]'
            }`}
          >
            Undergraduate (11 Branches)
          </button>
          <button
            onClick={() => setActiveCategory('science-humanities')}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
              activeCategory === 'science-humanities' 
                ? 'bg-[#0D2440] text-white shadow-sm' 
                : 'bg-white border border-[#E6E2D8] text-[#5C6B7A] hover:text-[#0D2440]'
            }`}
          >
            Science & Humanities
          </button>
          <button
            onClick={() => setActiveCategory('pg')}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
              activeCategory === 'pg' 
                ? 'bg-[#0D2440] text-white shadow-sm' 
                : 'bg-white border border-[#E6E2D8] text-[#5C6B7A] hover:text-[#0D2440]'
            }`}
          >
            Postgraduate (M.Tech, MBA, MCA)
          </button>
          <button
            onClick={() => setActiveCategory('research')}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
              activeCategory === 'research' 
                ? 'bg-[#0D2440] text-white shadow-sm' 
                : 'bg-white border border-[#E6E2D8] text-[#5C6B7A] hover:text-[#0D2440]'
            }`}
          >
            VTU Recognized R&D (10 Centres)
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search department or lab..."
            className="pl-8 pr-3 py-2 text-xs rounded-xl border border-[#E6E2D8] bg-white focus:outline-none focus:ring-2 focus:ring-[#0D2440] w-64"
          />
          <Search className="w-3.5 h-3.5 text-[#5C6B7A] absolute left-2.5 top-3" />
        </div>
      </div>

      {/* Main Grid + Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Department List (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-3 max-h-[700px] overflow-y-auto pr-1">
          {filteredDepartments.map((dept) => {
            const isSelected = selectedDept.id === dept.id;
            return (
              <div
                key={dept.id}
                onClick={() => setSelectedDept(dept)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0D2440] text-white border-[#0D2440] shadow-md'
                    : 'bg-white text-[#0A1628] border-[#E6E2D8] hover:border-[#0D2440]/60'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/15 text-[#C89B3C]' : 'bg-[#FBF9F5] text-[#5C6B7A]'
                    }`}>
                      Estd. {dept.establishedYear}
                    </span>
                    <h3 className={`font-heading font-bold text-base mt-1 ${isSelected ? 'text-white' : 'text-[#0D2440]'}`}>
                      {dept.name}
                    </h3>
                  </div>
                  {dept.intake && (
                    <span className={`text-xs font-mono font-bold px-2 py-1 rounded-lg ${
                      isSelected ? 'bg-[#C89B3C] text-[#0D2440]' : 'bg-[#0D2440]/10 text-[#0D2440]'
                    }`}>
                      {dept.intake} Seats
                    </span>
                  )}
                </div>

                <div className={`mt-2 text-xs ${isSelected ? 'text-slate-300' : 'text-[#5C6B7A]'}`}>
                  HOD: <strong className={isSelected ? 'text-white' : 'text-[#0A1628]'}>{dept.hodName}</strong>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Department Showcase (7 cols on lg) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E6E2D8] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E2D8] pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#C89B3C] uppercase tracking-wider">
                Department Overview
              </span>
              <h2 className="font-heading text-2xl font-bold text-[#0D2440] mt-0.5">
                {selectedDept.name}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-mono text-[#5C6B7A] block">Department Head</span>
              <span className="font-semibold text-xs text-[#0D2440]">{selectedDept.hodName}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2440] mb-2 font-mono">
              Academic Mission & Scope
            </h4>
            <p className="text-xs sm:text-sm text-[#5C6B7A] leading-relaxed">
              {selectedDept.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2440] mb-2 font-mono flex items-center gap-1.5">
              <FlaskConical className="w-4 h-4 text-[#C89B3C]" />
              <span>Specialized Laboratories & Facilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedDept.labs.map((lab, idx) => (
                <div key={idx} className="p-3 bg-[#FBF9F5] border border-[#E6E2D8] rounded-xl text-xs text-[#0A1628] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C] flex-shrink-0"></span>
                  <span className="font-medium">{lab}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2440] mb-2 font-mono flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#2E7D5B]" />
              <span>Key Highlights & Credentials</span>
            </h4>
            <div className="space-y-2">
              {selectedDept.keyHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#0A1628]">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D5B] flex-shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Department Meta bar */}
          <div className="pt-4 border-t border-[#E6E2D8] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#5C6B7A]">
            <span>VTU Recognized R&D Centre</span>
            <span>Autonomous Curriculum 2026</span>
            <span className="text-[#0D2440] font-bold">Vidyagiri, Bagalkote</span>
          </div>

        </div>

      </div>

    </div>
  );
};
