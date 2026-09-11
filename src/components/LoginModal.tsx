import React, { useState, useEffect } from 'react';
import { X, GraduationCap, UserCheck, ShieldCheck, Mail, Lock, KeyRound, AlertCircle, CheckCircle2 } from 'lucide-react';
import { UserRole, UserSession } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: UserRole;
  onLoginSuccess: (session: UserSession) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'student',
  onLoginSuccess,
}) => {
  const [activeRole, setActiveRole] = useState<UserRole>(initialRole);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPasswordNotice, setForgotPasswordNotice] = useState(false);

  useEffect(() => {
    setActiveRole(initialRole);
    setErrorMessage('');
    setForgotPasswordNotice(false);
    // Auto fill sample credentials based on role for convenience
    if (initialRole === 'student') {
      setIdentifier('2BA22CS045');
      setPassword('bec@1963');
    } else if (initialRole === 'faculty') {
      setIdentifier('BEC-FAC-104');
      setPassword('bec@1963');
    } else if (initialRole === 'admin') {
      setIdentifier('ADMIN-COE');
      setPassword('bec@admin');
    } else {
      setIdentifier('principal@becbgk.edu');
      setPassword('webmail@1963');
    }
  }, [initialRole, isOpen]);

  if (!isOpen) return null;

  const handleRoleChange = (role: UserRole) => {
    setActiveRole(role);
    setErrorMessage('');
    setForgotPasswordNotice(false);
    if (role === 'student') {
      setIdentifier('2BA22CS045');
      setPassword('bec@1963');
    } else if (role === 'faculty') {
      setIdentifier('BEC-FAC-104');
      setPassword('bec@1963');
    } else if (role === 'admin') {
      setIdentifier('ADMIN-COE');
      setPassword('bec@admin');
    } else {
      setIdentifier('principal@becbgk.edu');
      setPassword('webmail@1963');
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      setErrorMessage('Please provide both credentials to continue.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsLoading(false);
      let session: UserSession;
      if (activeRole === 'student') {
        session = {
          role: 'student',
          identifier: identifier.toUpperCase(),
          name: 'Praveen K. Kulkarni',
          department: 'Computer Science & Engineering',
          semester: 6,
          usn: identifier.toUpperCase(),
          email: `${identifier.toLowerCase()}@becbgk.edu`
        };
      } else if (activeRole === 'faculty') {
        session = {
          role: 'faculty',
          identifier: identifier.toUpperCase(),
          name: 'Dr. Jayashree D. Mallapur',
          department: 'Electronics & Communication Engg.',
          email: 'jayashree.m@becbgk.edu'
        };
      } else if (activeRole === 'admin') {
        session = {
          role: 'admin',
          identifier: identifier.toUpperCase(),
          name: 'Office of Controller of Examinations',
          department: 'Autonomous Exam Section',
          email: 'coe@becbgk.edu'
        };
      } else {
        session = {
          role: 'webmail',
          identifier: identifier,
          name: 'B. R. Hiremath (Principal Office)',
          department: 'Executive Administration',
          email: identifier
        };
      }

      onLoginSuccess(session);
      onClose();
    }, 450);
  };

  return (
    <div 
      id="login-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1628]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="login-modal-panel"
        className="w-full max-w-md bg-white rounded-3xl shadow-[0_12px_32px_-8px_rgba(10,22,40,.25)] border border-[#E6E2D8] overflow-hidden"
      >
        {/* Header Bar */}
        <div className="bg-[#0D2440] px-6 py-5 text-white relative">
          <button 
            id="login-modal-close-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C89B3C] text-[#0D2440] font-serif font-bold text-lg flex items-center justify-center">
              BEC
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold leading-tight">Basaveshwar Engineering College</h2>
              <p className="text-xs text-[#C89B3C] font-mono">Bagalkote · Unified Single Sign-On</p>
            </div>
          </div>
        </div>

        {/* Role Switcher Tabs */}
        <div className="grid grid-cols-4 bg-[#FBF9F5] border-b border-[#E6E2D8] p-1.5 gap-1 text-xs">
          <button
            id="role-tab-student"
            type="button"
            onClick={() => handleRoleChange('student')}
            className={`py-2 px-1 rounded-xl flex flex-col items-center gap-1 font-medium transition-all ${
              activeRole === 'student'
                ? 'bg-white text-[#0D2440] shadow-sm font-semibold border border-[#E6E2D8]'
                : 'text-[#5C6B7A] hover:text-[#0D2440]'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-[#0D2440]" />
            <span>Student</span>
          </button>

          <button
            id="role-tab-faculty"
            type="button"
            onClick={() => handleRoleChange('faculty')}
            className={`py-2 px-1 rounded-xl flex flex-col items-center gap-1 font-medium transition-all ${
              activeRole === 'faculty'
                ? 'bg-white text-[#0D2440] shadow-sm font-semibold border border-[#E6E2D8]'
                : 'text-[#5C6B7A] hover:text-[#0D2440]'
            }`}
          >
            <UserCheck className="w-4 h-4 text-[#C89B3C]" />
            <span>Faculty</span>
          </button>

          <button
            id="role-tab-admin"
            type="button"
            onClick={() => handleRoleChange('admin')}
            className={`py-2 px-1 rounded-xl flex flex-col items-center gap-1 font-medium transition-all ${
              activeRole === 'admin'
                ? 'bg-white text-[#0D2440] shadow-sm font-semibold border border-[#E6E2D8]'
                : 'text-[#5C6B7A] hover:text-[#0D2440]'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#2E7D5B]" />
            <span>Admin</span>
          </button>

          <button
            id="role-tab-webmail"
            type="button"
            onClick={() => handleRoleChange('webmail')}
            className={`py-2 px-1 rounded-xl flex flex-col items-center gap-1 font-medium transition-all ${
              activeRole === 'webmail'
                ? 'bg-white text-[#0D2440] shadow-sm font-semibold border border-[#E6E2D8]'
                : 'text-[#5C6B7A] hover:text-[#0D2440]'
            }`}
          >
            <Mail className="w-4 h-4 text-[#5C6B7A]" />
            <span>Webmail</span>
          </button>
        </div>

        {/* Content & Form */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="font-heading text-xl font-bold text-[#0D2440]">
              {activeRole === 'student' && 'Student Portal Login'}
              {activeRole === 'faculty' && 'Faculty & Staff Login'}
              {activeRole === 'admin' && 'Administrative & Examination Login'}
              {activeRole === 'webmail' && 'BEC Webmail Portal'}
            </h3>
            <p className="text-xs text-[#5C6B7A] mt-0.5">
              {activeRole === 'student' && 'Access grades, attendance, hall tickets, and fee receipts.'}
              {activeRole === 'faculty' && 'Manage continuous internal evaluation (CIE), courses & leaves.'}
              {activeRole === 'admin' && 'COE administrative controls, question paper bank & circulars.'}
              {activeRole === 'webmail' && 'Official institutional communication service (@becbgk.edu).'}
            </p>
          </div>

          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {forgotPasswordNotice && (
            <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
              <KeyRound className="w-4 h-4 flex-shrink-0 text-[#C89B3C] mt-0.5" />
              <div>
                <div className="font-semibold">Password Recovery Help</div>
                <div>Please contact the Computer Support Centre at Vidyagiri campus or write to <strong>admin@becbgk.edu</strong> with your college ID card.</div>
              </div>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#0A1628] mb-1.5 uppercase tracking-wide">
                {activeRole === 'student' && 'University Seat Number (USN)'}
                {activeRole === 'faculty' && 'Employee Identification Code'}
                {activeRole === 'admin' && 'Administrator Username'}
                {activeRole === 'webmail' && 'Official College Email'}
              </label>
              <div className="relative">
                <input
                  id="login-identifier-input"
                  type={activeRole === 'webmail' ? 'email' : 'text'}
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder={
                    activeRole === 'student' 
                      ? 'e.g., 2BA22CS045' 
                      : activeRole === 'faculty' 
                      ? 'e.g., BEC-FAC-104' 
                      : activeRole === 'admin' 
                      ? 'e.g., ADMIN-COE' 
                      : 'username@becbgk.edu'
                  }
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E6E2D8] bg-[#FBF9F5]/40 text-[#0A1628] placeholder-[#5C6B7A]/60 focus:outline-none focus:ring-2 focus:ring-[#0D2440] font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0A1628] mb-1.5 uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <input
                  id="login-password-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your security password"
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E6E2D8] bg-[#FBF9F5]/40 text-[#0A1628] placeholder-[#5C6B7A]/60 focus:outline-none focus:ring-2 focus:ring-[#0D2440]"
                />
                <Lock className="w-4 h-4 text-[#5C6B7A] absolute right-3 top-3 opacity-60 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none text-[#5C6B7A]">
                <input
                  id="login-remember-checkbox"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-[#E6E2D8] text-[#0D2440] focus:ring-[#0D2440]"
                />
                <span>Remember me</span>
              </label>
              <button
                id="login-forgot-pwd-btn"
                type="button"
                onClick={() => setForgotPasswordNotice(!forgotPasswordNotice)}
                className="text-[#0D2440] hover:text-[#C89B3C] font-medium transition-colors underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              id="login-submit-btn"
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl bg-[#0D2440] text-white font-semibold text-sm hover:bg-[#16365C] transition-all shadow-md flex items-center justify-center gap-2 mt-2 cursor-pointer"
            >
              {isLoading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>LOGIN</span>
                  <span className="font-mono text-xs text-[#C89B3C]">→</span>
                </>
              )}
            </button>
          </form>

          {/* Bottom Footer Note */}
          <div className="mt-6 pt-4 border-t border-[#E6E2D8] text-center">
            <p className="text-xs text-[#5C6B7A]">
              Don't have an active login account?{' '}
              <span className="font-medium text-[#0D2440]">Contact BEC IT Cell / Admission Section</span>
            </p>
            <div className="mt-2 text-[11px] text-[#5C6B7A]/80 font-mono">
              Helpdesk: +91 76187 81963 · support@becbgk.edu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
