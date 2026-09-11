import React, { useState } from 'react';
import { X, User, BookOpen, Calendar, Award, FileText, CheckCircle, LogOut, Download, AlertCircle } from 'lucide-react';
import { UserSession } from '../types';
import { SAMPLE_STUDENTS } from '../data/collegeData';

interface UserPortalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  session: UserSession;
  onLogout: () => void;
}

export const UserPortalDrawer: React.FC<UserPortalDrawerProps> = ({
  isOpen,
  onClose,
  session,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'academics' | 'attendance' | 'fees'>('academics');
  const [downloadedNotice, setDownloadedNotice] = useState(false);

  if (!isOpen) return null;

  const studentData = session.usn && SAMPLE_STUDENTS[session.usn] ? SAMPLE_STUDENTS[session.usn] : SAMPLE_STUDENTS['2BA22CS045'];

  const handleDownloadHallTicket = () => {
    setDownloadedNotice(true);
    setTimeout(() => setDownloadedNotice(false), 3000);
  };

  return (
    <div 
      id="user-portal-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1628]/60 backdrop-blur-sm animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="user-portal-card"
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E6E2D8] overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="bg-[#0D2440] p-5 text-white flex items-center justify-between border-b border-[#C89B3C]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C89B3C] text-[#0D2440] flex items-center justify-center font-bold text-lg">
              {session.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-lg leading-tight">{session.name}</h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#C89B3C] text-[#0D2440] font-bold">
                  {session.role}
                </span>
              </div>
              <p className="text-xs text-[#E6E2D8] font-mono">
                {session.identifier} · {session.department || 'Basaveshwar Engineering College'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors text-xs flex items-center gap-1.5"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-[#E6E2D8] bg-[#FBF9F5] px-4 pt-2 gap-2 text-xs">
          <button
            onClick={() => setActiveTab('academics')}
            className={`pb-2.5 px-3 font-semibold transition-all border-b-2 ${
              activeTab === 'academics' 
                ? 'border-[#0D2440] text-[#0D2440]' 
                : 'border-transparent text-[#5C6B7A] hover:text-[#0D2440]'
            }`}
          >
            Academic Performance
          </button>
          <button
            onClick={() => setActiveTab('attendance')}
            className={`pb-2.5 px-3 font-semibold transition-all border-b-2 ${
              activeTab === 'attendance' 
                ? 'border-[#0D2440] text-[#0D2440]' 
                : 'border-transparent text-[#5C6B7A] hover:text-[#0D2440]'
            }`}
          >
            Attendance & CIE
          </button>
          <button
            onClick={() => setActiveTab('fees')}
            className={`pb-2.5 px-3 font-semibold transition-all border-b-2 ${
              activeTab === 'fees' 
                ? 'border-[#0D2440] text-[#0D2440]' 
                : 'border-transparent text-[#5C6B7A] hover:text-[#0D2440]'
            }`}
          >
            Hall Ticket & Clearance
          </button>
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {downloadedNotice && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Official Examination Hall Ticket generated for Semester VI Autonomous Examinations.</span>
            </div>
          )}

          {activeTab === 'academics' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-[#FBF9F5] border border-[#E6E2D8] text-center">
                  <span className="text-[11px] text-[#5C6B7A] uppercase font-mono">Current Semester</span>
                  <div className="text-xl font-bold font-mono text-[#0D2440]">Semester VI</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#FBF9F5] border border-[#E6E2D8] text-center">
                  <span className="text-[11px] text-[#5C6B7A] uppercase font-mono">SGPA (Last Sem)</span>
                  <div className="text-xl font-bold font-mono text-[#2E7D5B]">{studentData.sgpa}</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#FBF9F5] border border-[#E6E2D8] text-center">
                  <span className="text-[11px] text-[#5C6B7A] uppercase font-mono">Cumulative CGPA</span>
                  <div className="text-xl font-bold font-mono text-[#0D2440]">{studentData.cgpa}</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#FBF9F5] border border-[#E6E2D8] text-center">
                  <span className="text-[11px] text-[#5C6B7A] uppercase font-mono">Status</span>
                  <div className="text-xs font-bold text-[#C89B3C] mt-1">{studentData.resultStatus}</div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D2440] mb-2">
                  Course Registrations & Grades
                </h4>
                <div className="overflow-x-auto border border-[#E6E2D8] rounded-xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#FBF9F5] text-[#5C6B7A] font-mono border-b border-[#E6E2D8]">
                      <tr>
                        <th className="p-2.5">Code</th>
                        <th className="p-2.5">Course Title</th>
                        <th className="p-2.5 text-center">Credits</th>
                        <th className="p-2.5 text-center">CIE</th>
                        <th className="p-2.5 text-center">SEE</th>
                        <th className="p-2.5 text-center">Total</th>
                        <th className="p-2.5 text-center">Grade</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6E2D8]">
                      {studentData.subjects.map((sub) => (
                        <tr key={sub.code} className="hover:bg-slate-50">
                          <td className="p-2.5 font-mono text-[#0D2440] font-medium">{sub.code}</td>
                          <td className="p-2.5 font-medium">{sub.name}</td>
                          <td className="p-2.5 text-center font-mono">{sub.credits}</td>
                          <td className="p-2.5 text-center font-mono">{sub.cie}</td>
                          <td className="p-2.5 text-center font-mono">{sub.see}</td>
                          <td className="p-2.5 text-center font-mono font-bold text-[#0D2440]">{sub.total}</td>
                          <td className="p-2.5 text-center font-bold font-mono text-[#2E7D5B]">{sub.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm">Overall Attendance: 89.4%</div>
                  <div>Complies with VTU & Autonomous min attendance requirement (75%).</div>
                </div>
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              </div>

              <div className="space-y-2">
                {[
                  { name: 'Software Architecture & Cloud Computing', pct: 92, status: 'Eligible' },
                  { name: 'Artificial Intelligence & Machine Learning', pct: 88, status: 'Eligible' },
                  { name: 'Network Security & Cryptography', pct: 85, status: 'Eligible' },
                  { name: 'Full Stack Web Development', pct: 94, status: 'Eligible' },
                  { name: 'AI & Machine Learning Laboratory', pct: 95, status: 'Eligible' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-[#FBF9F5] border border-[#E6E2D8] rounded-xl flex items-center justify-between text-xs">
                    <span className="font-medium text-[#0A1628]">{item.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-[#0D2440]">{item.pct}%</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'fees' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#0D2440] text-white space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#C89B3C] uppercase font-mono">Autonomous Examination Section</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px]">Fee Cleared</span>
                </div>
                <h4 className="text-base font-bold font-heading">Semester VI Autonomous Regular Exams</h4>
                <p className="text-xs text-slate-300">
                  Hall Ticket generated for candidate {studentData.studentName} ({studentData.usn}).
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleDownloadHallTicket}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#C89B3C] text-[#0D2440] font-bold rounded-xl hover:bg-[#dfb255] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Official Hall Ticket (PDF)
                  </button>
                </div>
              </div>

              <div className="border border-[#E6E2D8] rounded-2xl p-4 bg-[#FBF9F5] space-y-2">
                <div className="font-bold text-[#0D2440]">College Annual Fee Receipts (2025–26)</div>
                <div className="flex justify-between py-1 border-b border-[#E6E2D8]">
                  <span>College Tuition & Dev Fee:</span>
                  <span className="font-mono font-bold text-[#2E7D5B]">Paid ₹48,500 (Receipt #BEC-2025-9942)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E6E2D8]">
                  <span>Autonomous Examination Fee:</span>
                  <span className="font-mono font-bold text-[#2E7D5B]">Paid ₹2,800 (Receipt #EX-8831)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Hostel & Mess Clearance:</span>
                  <span className="font-mono font-bold text-[#2E7D5B]">Cleared up to March 2026</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
