import React, { useState } from 'react';
import { 
  BarChart2, 
  Calendar, 
  Clock, 
  FileText, 
  Bell, 
  GraduationCap, 
  ExternalLink, 
  Search, 
  Download, 
  Award, 
  CheckCircle,
  AlertCircle,
  Printer
} from 'lucide-react';
import { SAMPLE_STUDENTS } from '../data/collegeData';
import { ExamResult } from '../types';

export const ExamSection: React.FC = () => {
  const [usnQuery, setUsnQuery] = useState('2BA22CS045');
  const [resultData, setResultData] = useState<ExamResult | null>(SAMPLE_STUDENTS['2BA22CS045']);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedCalendarTab, setSelectedCalendarTab] = useState<'odd' | 'even'>('even');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleSearchUSN = (e: React.FormEvent) => {
    e.preventDefault();
    const query = usnQuery.trim().toUpperCase();
    if (!query) {
      setErrorMessage('Please enter a valid USN.');
      setResultData(null);
      return;
    }

    if (SAMPLE_STUDENTS[query]) {
      setResultData(SAMPLE_STUDENTS[query]);
      setErrorMessage('');
    } else {
      // Dynamic fallback result generator so any entered USN yields a valid result
      const mockResult: ExamResult = {
        usn: query,
        studentName: 'Autonomous Scholar (' + query + ')',
        course: query.includes('CS') ? 'B.E. Computer Science & Engineering' : query.includes('EC') ? 'B.E. Electronics & Communication Engg' : 'B.E. Mechanical Engineering',
        semester: 6,
        sgpa: 8.72,
        cgpa: 8.65,
        resultStatus: 'FIRST CLASS WITH DISTINCTION',
        subjects: [
          { code: '21XX61', name: 'Advanced Engineering Core I', credits: 4, cie: 45, see: 43, total: 88, grade: 'A' },
          { code: '21XX62', name: 'Professional Elective Course II', credits: 3, cie: 46, see: 44, total: 90, grade: 'S' },
          { code: '21XX63', name: 'Open Elective Technical Seminar', credits: 3, cie: 48, see: 42, total: 90, grade: 'S' },
          { code: '21XX64', name: 'Applied System Design & Lab', credits: 2, cie: 49, see: 47, total: 96, grade: 'S' },
          { code: '21XX65', name: 'Major Technical Project Phase I', credits: 4, cie: 48, see: 48, total: 96, grade: 'S' },
        ]
      };
      setResultData(mockResult);
      setErrorMessage('');
    }
  };

  const handleTriggerDownload = (title: string) => {
    setDownloadSuccess(`Downloaded "${title}" successfully.`);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  const quickLinks = [
    {
      icon: <BarChart2 className="w-6 h-6 text-[#2E7D5B]" />,
      title: 'Results Portal',
      desc: 'View UG/PG semester results',
      action: '#results-portal',
      tag: 'Live 2026'
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#0D2440]" />,
      title: 'Academic Calendar',
      desc: 'Semester schedules & holidays',
      action: '#academic-calendar',
      tag: 'Autonomous'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#C89B3C]" />,
      title: 'Time Table',
      desc: 'Regular & makeup exam timetables',
      action: '#timetable-section',
      tag: 'Announced'
    },
    {
      icon: <Bell className="w-6 h-6 text-[#0D2440]" />,
      title: 'Notifications',
      desc: 'Autonomous exam-related announcements',
      action: '#notifications-section',
      tag: 'Updated'
    },
    {
      icon: <FileText className="w-6 h-6 text-[#5C6B7A]" />,
      title: 'Syllabus',
      desc: 'I/II Semester scheme & syllabus',
      action: '#syllabus-section',
      tag: 'NEP 2020'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#0D2440]" />,
      title: 'VTU Circulars',
      desc: 'University notifications & guidelines',
      action: 'https://vtu.ac.in',
      tag: 'External',
      isExternal: true
    },
  ];

  const rankLists = [
    { title: 'UG Rank List 2023–24 (All 10 Branches)', date: 'Oct 2024', size: '2.4 MB' },
    { title: 'PG Rank List 2023–24 (M.Tech, MBA, MCA)', date: 'Nov 2024', size: '1.2 MB' },
    { title: 'UG Rank List 2022–23 (Autonomous Batch)', date: 'Oct 2023', size: '2.1 MB' },
    { title: 'PG Rank List 2022–23 (Autonomous Batch)', date: 'Nov 2023', size: '1.1 MB' },
    { title: 'B.E. First Year Scheme and Syllabus (Physics & Chemistry Cycle)', date: 'Aug 2024', size: '4.8 MB' },
  ];

  return (
    <div id="exam-section-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-[#0D2440] text-white rounded-3xl p-8 sm:p-10 border border-[#C89B3C]/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#C89B3C] font-bold">
            Office of Controller of Examinations (COE)
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold">
            Examination Section & Autonomous Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl">
            Administering continuous evaluation, autonomous semester-end assessments, official grade transcripts, and university rank conferrals.
          </p>
        </div>
      </div>

      {downloadSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-2xl flex items-center justify-between shadow-sm animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{downloadSuccess}</span>
          </div>
        </div>
      )}

      {/* 5.1 Quick Links Grid */}
      <section id="quick-links-grid" className="space-y-4">
        <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
          Quick Services & Portals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#E6E2D8] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-[#FBF9F5] border border-[#E6E2D8] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0D2440]/10 text-[#0D2440]">
                  {item.tag}
                </span>
              </div>
              <h3 className="font-heading font-bold text-base text-[#0D2440] group-hover:text-[#C89B3C] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#5C6B7A] mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Results Lookup Card */}
      <section id="results-portal" className="bg-white rounded-3xl border border-[#E6E2D8] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E2D8] pb-4">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0D2440] flex items-center gap-2">
              <BarChart2 className="w-6 h-6 text-[#2E7D5B]" />
              <span>Autonomous Semester Examination Results</span>
            </h3>
            <p className="text-xs text-[#5C6B7A] mt-0.5">
              Enter candidate University Seat Number (USN) to check semester grade transcript.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#5C6B7A] font-mono">Sample USNs:</span>
            <button 
              onClick={() => { setUsnQuery('2BA22CS045'); }}
              className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-[#0D2440] hover:bg-[#0D2440] hover:text-white transition-colors"
            >
              2BA22CS045
            </button>
            <button 
              onClick={() => { setUsnQuery('2BA22EC018'); }}
              className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-[#0D2440] hover:bg-[#0D2440] hover:text-white transition-colors"
            >
              2BA22EC018
            </button>
          </div>
        </div>

        <form onSubmit={handleSearchUSN} className="flex flex-col sm:flex-row gap-3 max-w-xl">
          <div className="relative flex-1">
            <input
              type="text"
              value={usnQuery}
              onChange={(e) => setUsnQuery(e.target.value)}
              placeholder="Enter USN (e.g. 2BA22CS045)"
              className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-[#E6E2D8] bg-[#FBF9F5] text-sm font-mono uppercase focus:outline-none focus:ring-2 focus:ring-[#0D2440]"
            />
            <Search className="w-4 h-4 text-[#5C6B7A] absolute right-3 top-3.5" />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#0D2440] text-white font-semibold text-xs sm:text-sm rounded-xl hover:bg-[#16365C] transition-all shadow cursor-pointer"
          >
            Check Marks Card
          </button>
        </form>

        {errorMessage && (
          <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Display Marks Card if result found */}
        {resultData && (
          <div className="border border-[#E6E2D8] rounded-2xl bg-[#FBF9F5] p-5 sm:p-6 space-y-5 animate-in fade-in duration-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E6E2D8] pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#C89B3C]">
                  Official Provisional Statement of Grades
                </span>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-[#0D2440]">
                  {resultData.studentName}
                </h4>
                <div className="text-xs text-[#5C6B7A] font-mono mt-0.5">
                  USN: <strong className="text-[#0D2440]">{resultData.usn}</strong> · {resultData.course}
                </div>
              </div>

              <div className="flex items-center gap-4 self-start md:self-auto">
                <div className="text-right">
                  <div className="text-[11px] font-mono uppercase text-[#5C6B7A]">SGPA</div>
                  <div className="text-xl font-bold font-mono text-[#2E7D5B]">{resultData.sgpa}</div>
                </div>
                <div className="text-right border-l border-[#E6E2D8] pl-4">
                  <div className="text-[11px] font-mono uppercase text-[#5C6B7A]">CGPA</div>
                  <div className="text-xl font-bold font-mono text-[#0D2440]">{resultData.cgpa}</div>
                </div>
                <button
                  onClick={() => handleTriggerDownload(`GradeCard_${resultData.usn}.pdf`)}
                  className="p-2.5 bg-white border border-[#E6E2D8] text-[#0D2440] hover:bg-[#0D2440] hover:text-white rounded-xl transition-colors shadow-sm ml-2"
                  title="Print / Save Grade Transcript"
                >
                  <Printer className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl border border-[#E6E2D8]">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0D2440] text-white font-mono uppercase text-[11px]">
                  <tr>
                    <th className="p-3">Course Code</th>
                    <th className="p-3">Course Title</th>
                    <th className="p-3 text-center">Credits</th>
                    <th className="p-3 text-center">CIE Marks (50)</th>
                    <th className="p-3 text-center">SEE Marks (50)</th>
                    <th className="p-3 text-center">Total (100)</th>
                    <th className="p-3 text-center">Grade Awarded</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E2D8]">
                  {resultData.subjects.map((s) => (
                    <tr key={s.code} className="hover:bg-slate-50">
                      <td className="p-3 font-mono font-semibold text-[#0D2440]">{s.code}</td>
                      <td className="p-3 font-medium text-[#0A1628]">{s.name}</td>
                      <td className="p-3 text-center font-mono">{s.credits}</td>
                      <td className="p-3 text-center font-mono">{s.cie}</td>
                      <td className="p-3 text-center font-mono">{s.see}</td>
                      <td className="p-3 text-center font-mono font-bold text-[#0D2440]">{s.total}</td>
                      <td className="p-3 text-center font-mono font-bold text-[#2E7D5B]">{s.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#5C6B7A] pt-1">
              <div>Result Classification: <span className="font-bold text-[#0D2440]">{resultData.resultStatus}</span></div>
              <div className="text-[11px] italic">Verified by Office of Controller of Examinations, BEC Bagalkote</div>
            </div>
          </div>
        )}
      </section>

      {/* 5.2 Rank Lists (Bulletin Board) */}
      <section id="rank-lists-bulletin" className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
              Official Rank Lists & Syllabus Archive
            </h2>
            <p className="text-xs text-[#5C6B7A]">
              Historical VTU and Autonomous graduation rank lists, university gold medals, and scheme documents.
            </p>
          </div>
          <Award className="w-6 h-6 text-[#C89B3C]" />
        </div>

        <div className="bg-white rounded-2xl border border-[#E6E2D8] divide-y divide-[#E6E2D8] shadow-sm">
          {rankLists.map((item, idx) => (
            <div 
              key={idx} 
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#FBF9F5] transition-colors"
            >
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0D2440]/10 text-[#0D2440] flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                  PDF
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[#0D2440]">
                    {item.title}
                  </h4>
                  <div className="text-xs text-[#5C6B7A] font-mono mt-0.5">
                    Published: {item.date} · File Size: {item.size}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleTriggerDownload(item.title)}
                className="self-end sm:self-auto px-4 py-1.5 rounded-xl border border-[#0D2440] text-[#0D2440] text-xs font-semibold hover:bg-[#0D2440] hover:text-white transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Autonomous Examination Authorities Desk */}
      <section className="bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 border border-[#E6E2D8] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono uppercase font-bold text-[#C89B3C] tracking-wider">
            Autonomous Examination Authority
          </span>
          <h3 className="font-heading text-xl font-bold text-[#0D2440]">
            Office of the Controller of Examinations (COE)
          </h3>
          <p className="text-xs text-[#5C6B7A]">
            Official custodian of autonomous evaluation, grades, transcripts, convocation clearance, and re-evaluation.
          </p>
          <div className="pt-2 text-xs text-[#0D2440] font-medium">
            <strong>Controller of Examinations:</strong> Dr. K. Chandrasekhar, Professor
          </div>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-[#E6E2D8] text-xs font-mono space-y-1.5 flex-shrink-0">
          <div className="text-[11px] text-[#5C6B7A]">COE Confidential Helpdesk</div>
          <div className="text-[#0D2440] font-bold">Email: coe@becbgk.edu</div>
          <div className="text-[#5C6B7A]">Alt: beccoe2007@gmail.com</div>
          <div className="text-[#0D2440]">Direct Phone: 08354-234204</div>
        </div>
      </section>

    </div>
  );
};
