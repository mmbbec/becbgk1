import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  GraduationCap, 
  UserCheck, 
  ShieldCheck, 
  Mail, 
  ExternalLink,
  LogOut,
  User,
  Sparkles
} from 'lucide-react';
import { NavTab, UserRole, UserSession } from '../types';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab, subItem?: string) => void;
  onOpenLogin: (role: UserRole) => void;
  userSession: UserSession | null;
  onLogout: () => void;
  onOpenUserPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenLogin,
  userSession,
  onLogout,
  onOpenUserPortal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const loginRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setLoginDropdownOpen(false);
      }
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems: {
    id: NavTab;
    label: string;
    dropdown?: { label: string; actionId: string }[];
  }[] = [
    { id: 'home', label: 'Home' },
    { 
      id: 'about', 
      label: 'About',
      dropdown: [
        { label: 'Vision & Mission', actionId: 'vision' },
        { label: 'B.V.V. Sangha Legacy', actionId: 'legacy' },
        { label: 'Principal & Leadership', actionId: 'leadership' },
        { label: 'Accreditation & Milestones', actionId: 'milestones' },
      ]
    },
    { 
      id: 'admission', 
      label: 'Admission',
      dropdown: [
        { label: 'Admissions 2025–26 Overview', actionId: 'overview' },
        { label: 'College Codes & Intake Summary', actionId: 'codes' },
        { label: '4-Step Admission Procedure', actionId: 'procedure' },
        { label: 'Fee Structure (2026–27)', actionId: 'fees' },
        { label: 'Sanctioned Intake (Aided & Un-Aided)', actionId: 'intake' },
        { label: 'Management Quota Contact', actionId: 'contact' },
      ]
    },
    { 
      id: 'programmes', 
      label: 'Programmes',
      dropdown: [
        { label: 'Undergraduate (B.E. - 10 Branches)', actionId: 'ug' },
        { label: 'Postgraduate (M.Tech - 3 Specializations)', actionId: 'mtech' },
        { label: 'MCA & MBA Departments', actionId: 'mgmt' },
        { label: 'Ph.D. & M.Sc. (Engg.) Research', actionId: 'research' },
      ]
    },
    { 
      id: 'departments', 
      label: 'Departments',
      dropdown: [
        { label: '10 UG Engineering Branches', actionId: 'ug-depts' },
        { label: 'Science & Humanities', actionId: 'sh' },
        { label: 'Postgraduate Departments', actionId: 'pg-depts' },
        { label: '10 VTU Recognized R&D Centres', actionId: 'vtu-centres' },
      ]
    },
    { 
      id: 'exam-section', 
      label: 'Exam Section',
      dropdown: [
        { label: 'Semester Results Portal', actionId: 'results' },
        { label: 'Academic Calendar', actionId: 'calendar' },
        { label: 'Examination Time Table', actionId: 'timetable' },
        { label: 'Exam Notifications', actionId: 'notifications' },
        { label: 'First Year Scheme & Syllabus', actionId: 'syllabus' },
        { label: 'UG/PG Rank Lists (2022–24)', actionId: 'ranks' },
      ]
    },
    { 
      id: 'placement', 
      label: 'Placement',
      dropdown: [
        { label: 'Placement Statistics (2025)', actionId: 'stats' },
        { label: 'Top Recruiting Companies', actionId: 'recruiters' },
        { label: 'Placement Policy & 3-Tier Slots', actionId: 'policy' },
        { label: 'Eligibility & Registration Criteria', actionId: 'eligibility' },
      ]
    },
    { id: 'research', label: 'Research' },
    { 
      id: 'campus-life', 
      label: 'Campus Life',
      dropdown: [
        { label: 'Hostel Facilities (Boys & Girls)', actionId: 'hostel' },
        { label: 'Central Library & E-Resources', actionId: 'library' },
        { label: 'Advanced Computing Labs', actionId: 'labs' },
        { label: 'Campus Dining & Canteens', actionId: 'dining' },
        { label: 'Eco-Friendly Electric Buggies', actionId: 'eco' },
        { label: 'Photo & Event Gallery', actionId: 'gallery' },
      ]
    },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#FBF9F5]/95 backdrop-blur-[18px] border-b border-[#E6E2D8] shadow-sm' 
          : 'bg-[#FBF9F5]/90 backdrop-blur-[14px] border-b border-transparent'
      }`}
      style={{ height: '80px' }}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        
        {/* Left: Logo Block */}
        <div 
          id="header-logo-block"
          onClick={() => { onSelectTab('home'); setMobileMenuOpen(false); }}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none group flex-shrink-0"
        >
          {/* Navy rounded square with gold text */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0D2440] text-[#C89B3C] flex items-center justify-center font-serif font-black text-lg sm:text-xl tracking-wider shadow-md group-hover:scale-[1.03] transition-transform border border-[#C89B3C]/30 flex-shrink-0">
            BEC
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#5C6B7A] leading-tight truncate">
              B.V.V. Sangha's
            </span>
            <span className="font-heading font-bold text-sm sm:text-base 2xl:text-lg text-[#0D2440] leading-tight group-hover:text-[#C89B3C] transition-colors whitespace-nowrap">
              Basaveshwar Engineering College
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono font-medium text-[#C89B3C] tracking-wide leading-tight whitespace-nowrap">
              Bagalkote · ESTD 1963 · Autonomous
            </span>
          </div>
        </div>

        {/* Center: Primary Navigation Tabs */}
        <nav 
          id="primary-nav-tabs"
          ref={navRef}
          className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5 min-w-0"
        >
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
            const isDropdownActive = activeDropdown === item.id;

            return (
              <div 
                key={item.id} 
                className="relative"
                onMouseEnter={() => hasDropdown && setActiveDropdown(item.id)}
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                <button
                  id={`nav-tab-${item.id}`}
                  onClick={() => {
                    onSelectTab(item.id);
                    setActiveDropdown(null);
                  }}
                  className={`flex items-center gap-1 px-2.5 2xl:px-3 py-1.5 2xl:py-2 text-xs 2xl:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap ${
                    isActive
                      ? 'text-[#0D2440] bg-[#0D2440]/10 font-semibold'
                      : 'text-[#5C6B7A] hover:text-[#0D2440] hover:bg-[#0D2440]/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {hasDropdown && (
                    <ChevronDown className={`w-3 h-3 2xl:w-3.5 2xl:h-3.5 transition-transform duration-200 opacity-70 ${isDropdownActive ? 'rotate-180 text-[#C89B3C]' : ''}`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {hasDropdown && isDropdownActive && (
                  <div 
                    id={`dropdown-menu-${item.id}`}
                    className="absolute left-0 top-full mt-1.5 w-64 bg-white rounded-xl shadow-[0_12px_32px_-8px_rgba(10,22,40,0.18)] border border-[#E6E2D8] py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-[#5C6B7A] border-b border-[#E6E2D8]/60 mb-1">
                      {item.label} Explorer
                    </div>
                    {item.dropdown?.map((sub) => (
                      <button
                        key={sub.actionId}
                        id={`subnav-${item.id}-${sub.actionId}`}
                        onClick={() => {
                          onSelectTab(item.id, sub.actionId);
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-3.5 py-2 text-xs text-[#0A1628] hover:bg-[#FBF9F5] hover:text-[#0D2440] flex items-center justify-between group transition-colors"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform font-medium">{sub.label}</span>
                        <span className="text-[#C89B3C] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right End: Login Area & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-auto xl:ml-0 relative z-30">
          
          {userSession ? (
            /* Logged in state button */
            <div className="flex items-center gap-2">
              <button
                id="user-portal-trigger-btn"
                onClick={onOpenUserPortal}
                className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#0D2440] text-white hover:bg-[#16365C] transition-all shadow-sm"
              >
                <User className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span className="hidden sm:inline font-mono">{userSession.identifier}</span>
                <span className="capitalize text-[#C89B3C]">({userSession.role})</span>
              </button>
              <button
                id="header-logout-btn"
                onClick={onLogout}
                title="Sign out"
                className="p-1.5 text-[#5C6B7A] hover:text-[#0D2440] hover:bg-[#0D2440]/10 rounded-full transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Login Dropdown trigger button */
            <div className="relative" ref={loginRef}>
              <button
                id="header-login-btn"
                onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                className="flex items-center gap-1.5 sm:gap-2 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold border-[1.5px] border-[#0D2440] text-[#0D2440] hover:bg-[#0D2440] hover:text-white transition-all duration-200 shadow-sm whitespace-nowrap"
              >
                <span>Login</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${loginDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Login Dropdown */}
              {loginDropdownOpen && (
                <div 
                  id="header-login-dropdown"
                  className="absolute right-0 top-full mt-2 w-60 max-w-[calc(100vw-24px)] bg-white rounded-2xl shadow-[0_12px_32px_-8px_rgba(10,22,40,0.18)] border border-[#E6E2D8] py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider text-[#5C6B7A] border-b border-[#E6E2D8]/60 mb-1 flex items-center justify-between">
                    <span>Account Portals</span>
                    <Sparkles className="w-3 h-3 text-[#C89B3C]" />
                  </div>
                  
                  <button
                    id="dropdown-login-student"
                    onClick={() => {
                      onOpenLogin('student');
                      setLoginDropdownOpen(false);
                    }}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-[#0A1628] hover:bg-[#FBF9F5] flex items-center gap-3 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#0D2440]/10 text-[#0D2440] flex items-center justify-center group-hover:bg-[#0D2440] group-hover:text-white transition-colors">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0D2440]">Student Login</div>
                      <div className="text-[11px] text-[#5C6B7A]">USN & Results / Attendance</div>
                    </div>
                  </button>

                  <button
                    id="dropdown-login-faculty"
                    onClick={() => {
                      onOpenLogin('faculty');
                      setLoginDropdownOpen(false);
                    }}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-[#0A1628] hover:bg-[#FBF9F5] flex items-center gap-3 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#C89B3C]/15 text-[#0D2440] flex items-center justify-center group-hover:bg-[#C89B3C] group-hover:text-[#0D2440] transition-colors">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0D2440]">Faculty Login</div>
                      <div className="text-[11px] text-[#5C6B7A]">Employee ID & Course Work</div>
                    </div>
                  </button>

                  <button
                    id="dropdown-login-admin"
                    onClick={() => {
                      onOpenLogin('admin');
                      setLoginDropdownOpen(false);
                    }}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-[#0A1628] hover:bg-[#FBF9F5] flex items-center gap-3 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#2E7D5B]/15 text-[#2E7D5B] flex items-center justify-center group-hover:bg-[#2E7D5B] group-hover:text-white transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0D2440]">Admin Login</div>
                      <div className="text-[11px] text-[#5C6B7A]">Controller of Exams & Office</div>
                    </div>
                  </button>

                  <button
                    id="dropdown-login-webmail"
                    onClick={() => {
                      onOpenLogin('webmail');
                      setLoginDropdownOpen(false);
                    }}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-[#0A1628] hover:bg-[#FBF9F5] flex items-center gap-3 transition-colors group border-t border-[#E6E2D8]/60 mt-1"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#5C6B7A]/15 text-[#5C6B7A] flex items-center justify-center group-hover:bg-[#0D2440] group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0D2440]">Webmail Login</div>
                      <div className="text-[11px] text-[#5C6B7A]">@becbgk.edu Institutional Mail</div>
                    </div>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Hamburger Button (< 1280px) */}
          <button
            id="mobile-nav-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#0D2440] hover:bg-[#0D2440]/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="xl:hidden fixed inset-x-0 top-[80px] bg-[#FBF9F5] border-b border-[#E6E2D8] shadow-2xl z-40 max-h-[calc(100vh-80px)] overflow-y-auto py-4 px-4 sm:px-6"
        >
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <div key={item.id} className="border-b border-[#E6E2D8]/40 pb-1 mb-1">
                  <div className="flex items-center justify-between">
                    <button
                      id={`mobile-nav-${item.id}`}
                      onClick={() => {
                        onSelectTab(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-[#0D2440] text-white font-semibold' 
                          : 'text-[#0A1628] hover:bg-[#0D2440]/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  </div>
                  {item.dropdown && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-4 pr-2 py-1">
                      {item.dropdown.map((sub) => (
                        <button
                          key={sub.actionId}
                          onClick={() => {
                            onSelectTab(item.id, sub.actionId);
                            setMobileMenuOpen(false);
                          }}
                          className="text-left text-xs text-[#5C6B7A] hover:text-[#0D2440] hover:underline py-1 px-2"
                        >
                          • {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Portal Logins inside drawer */}
          <div className="mt-4 pt-3 border-t border-[#E6E2D8] space-y-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-mono uppercase text-[#0D2440] font-bold tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#C89B3C]" />
                Account Portals
              </span>
              <span className="text-[10px] text-[#5C6B7A]">Direct Login</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onOpenLogin('student');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 p-2.5 bg-white border border-[#E6E2D8] rounded-xl text-xs font-semibold text-[#0D2440] hover:bg-[#FBF9F5] shadow-xs"
              >
                <div className="w-6 h-6 rounded-md bg-[#0D2440]/10 text-[#0D2440] flex items-center justify-center">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <span>Student</span>
              </button>
              <button
                onClick={() => {
                  onOpenLogin('faculty');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 p-2.5 bg-white border border-[#E6E2D8] rounded-xl text-xs font-semibold text-[#0D2440] hover:bg-[#FBF9F5] shadow-xs"
              >
                <div className="w-6 h-6 rounded-md bg-[#C89B3C]/15 text-[#0D2440] flex items-center justify-center">
                  <UserCheck className="w-3.5 h-3.5" />
                </div>
                <span>Faculty</span>
              </button>
              <button
                onClick={() => {
                  onOpenLogin('admin');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 p-2.5 bg-white border border-[#E6E2D8] rounded-xl text-xs font-semibold text-[#0D2440] hover:bg-[#FBF9F5] shadow-xs"
              >
                <div className="w-6 h-6 rounded-md bg-[#2E7D5B]/15 text-[#2E7D5B] flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Admin</span>
              </button>
              <button
                onClick={() => {
                  onOpenLogin('webmail');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 p-2.5 bg-white border border-[#E6E2D8] rounded-xl text-xs font-semibold text-[#0D2440] hover:bg-[#FBF9F5] shadow-xs"
              >
                <div className="w-6 h-6 rounded-md bg-[#5C6B7A]/15 text-[#5C6B7A] flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>Webmail</span>
              </button>
            </div>
          </div>

          {/* Quick links inside drawer */}
          <div className="mt-4 pt-3 border-t border-[#E6E2D8] flex items-center justify-between text-xs text-[#5C6B7A]">
            <span>Bagalkote · Karnataka · 587102</span>
            <span className="font-mono text-[#C89B3C]">becbgk.edu</span>
          </div>
        </div>
      )}
    </header>
  );
};
