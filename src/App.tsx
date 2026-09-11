import React, { useState, useEffect } from 'react';
import { NavTab, UserRole, UserSession } from './types';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { AdmissionSection } from './components/AdmissionSection';
import { ExamSection } from './components/ExamSection';
import { PlacementSection } from './components/PlacementSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { ProgrammesSection } from './components/ProgrammesSection';
import { ResearchSection } from './components/ResearchSection';
import { CampusLifeSection } from './components/CampusLifeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { UserPortalDrawer } from './components/UserPortalDrawer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedLoginRole, setSelectedLoginRole] = useState<UserRole>('student');
  const [userSession, setUserSession] = useState<UserSession | null>(() => {
    try {
      const saved = localStorage.getItem('bec_user_session');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const handleTabChange = (tab: NavTab, _subItem?: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLogin = (role: UserRole) => {
    setSelectedLoginRole(role);
    setIsLoginModalOpen(true);
  };

  const handleLoginSuccess = (session: UserSession) => {
    setUserSession(session);
    try {
      localStorage.setItem('bec_user_session', JSON.stringify(session));
    } catch {
      // storage ignored in sandboxed iframe
    }
    setIsLoginModalOpen(false);
    setIsPortalOpen(true);
  };

  const handleLogout = () => {
    setUserSession(null);
    try {
      localStorage.removeItem('bec_user_session');
    } catch {
      // ignore
    }
    setIsPortalOpen(false);
  };

  return (
    <div id="bec-app-root" className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#0A1628] font-sans antialiased selection:bg-[#C89B3C]/20 selection:text-[#0D2440]">
      {/* Sticky Header with Navigation & Login Trigger */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleTabChange}
        onOpenLogin={handleOpenLogin}
        userSession={userSession}
        onLogout={handleLogout}
        onOpenUserPortal={() => setIsPortalOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content-view" className="flex-1 w-full">
        {currentTab === 'home' && (
          <HomeSection onNavigate={handleTabChange} />
        )}

        {currentTab === 'about' && (
          <AboutSection onNavigate={handleTabChange} />
        )}

        {currentTab === 'admission' && (
          <AdmissionSection />
        )}

        {currentTab === 'exam' && (
          <ExamSection />
        )}

        {currentTab === 'placement' && (
          <PlacementSection />
        )}

        {currentTab === 'departments' && (
          <DepartmentsSection />
        )}

        {currentTab === 'programmes' && (
          <ProgrammesSection onNavigate={handleTabChange} />
        )}

        {currentTab === 'research' && (
          <ResearchSection />
        )}

        {currentTab === 'campus-life' && (
          <CampusLifeSection />
        )}

        {currentTab === 'contact' && (
          <ContactSection />
        )}
      </main>

      {/* Comprehensive 4-Column Institutional Footer */}
      <Footer onNavigate={handleTabChange} />

      {/* Authentication Modal (Student, Faculty, Admin, Webmail) */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        initialRole={selectedLoginRole}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Active Scholar / Faculty / Admin Portal Dialog */}
      {userSession && (
        <UserPortalDrawer
          isOpen={isPortalOpen}
          onClose={() => setIsPortalOpen(false)}
          session={userSession}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}
