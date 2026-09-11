import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Building, 
  Clock,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    departmentQuery: 'Admission Guidance (B.E. / M.Tech)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        departmentQuery: 'Admission Guidance (B.E. / M.Tech)',
        message: ''
      });
    }, 4000);
  };

  const keyContacts = [
    { role: 'Principal', name: 'Dr. B. R. Hiremath', contact: 'principal@becbgk.edu · +91 76187 81963' },
    { role: 'Admission Section', name: 'Directorate of Admissions', contact: '9902684833 · admissions@becbgk.edu' },
    { role: 'Hostel Office (Boys & Girls)', name: 'Chief Hostel Warden', contact: '9481351234 · hostel@becbgk.edu' },
    { role: 'Central Office (BVVS)', name: 'B.V.V. Sangha Central HQ', contact: '08354-220689, 220702' },
  ];

  const importantLinks = [
    { name: 'NPTEL Local Chapter', desc: 'SWAYAM & NPTEL online course certifications' },
    { name: 'Right to Information (RTI)', desc: 'Official institutional RTI declaration' },
    { name: 'Mandatory Disclosure', desc: 'AICTE mandated annual institutional disclosure' },
    { name: 'AICTE Feedback Portal', desc: 'Central stakeholder feedback portal' },
    { name: 'National Scholarship Portal', desc: 'Central sector post-matric scholarship schemes' },
    { name: 'State Scholarship Portal (SSP)', desc: 'Government of Karnataka student scholarship' },
    { name: 'Web OPAC (Library Catalog)', desc: 'Online public access catalog for book search' },
    { name: 'Faculty Profiles (IRINS)', desc: 'Indian Research Information Network System' },
    { name: 'Student Grievance Portal', desc: 'Internal redressal committee for scholars' },
  ];

  return (
    <div id="contact-section-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-[#0D2440] text-white rounded-3xl p-8 sm:p-12 border border-[#C89B3C]/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C] text-xs font-mono font-bold text-[#C89B3C] uppercase tracking-wider">
            Campus Communication & Enquiries
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Contact & Directory
          </h1>
          <p className="text-base text-slate-200 leading-relaxed font-normal">
            Reach out to our academic offices, admission coordinators, hostel authorities, and leadership at Vidyagiri campus, Bagalkote.
          </p>
        </div>
      </div>

      {/* 11.1 Address, Phone & Contact Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 5 cols: Official Institutional Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-[#E6E2D8] p-6 sm:p-8 shadow-sm space-y-5">
            <h2 className="font-heading text-xl font-bold text-[#0D2440]">
              Official Address
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#0A1628]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C89B3C] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0D2440]">Basaveshwar Engineering College</div>
                  <div className="text-[#5C6B7A]">S. Nijalingappa Vidyanagar</div>
                  <div className="text-[#5C6B7A]">Bagalkote – 587 102, Karnataka, India</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C89B3C] flex-shrink-0" />
                <div>
                  <span className="text-[#5C6B7A]">Phone: </span>
                  <strong className="font-mono text-[#0D2440]">+91 76187 81963</strong>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C89B3C] flex-shrink-0" />
                <div>
                  <span className="text-[#5C6B7A]">Email: </span>
                  <a href="mailto:principal@becbgk.edu" className="font-mono text-[#0D2440] hover:text-[#C89B3C] underline">
                    principal@becbgk.edu
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#C89B3C] flex-shrink-0" />
                <div>
                  <span className="text-[#5C6B7A]">Official Website: </span>
                  <a href="https://www.becbgk.edu" target="_blank" rel="noopener noreferrer" className="font-mono text-[#0D2440] hover:text-[#C89B3C]">
                    www.becbgk.edu
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E2D8] flex items-center justify-between text-xs text-[#5C6B7A] font-mono">
              <span>Office Hours: 09:30 AM – 05:30 PM</span>
              <span className="text-[#2E7D5B] font-bold">Mon – Sat</span>
            </div>
          </div>

          {/* 11.2 Key Contacts Card */}
          <div className="bg-[#FBF9F5] rounded-3xl border border-[#E6E2D8] p-6 space-y-4">
            <h3 className="font-heading text-lg font-bold text-[#0D2440]">
              Key Institutional Contacts
            </h3>
            <div className="space-y-3">
              {keyContacts.map((contact, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-2xl border border-[#E6E2D8] space-y-0.5">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#C89B3C]">
                    {contact.role}
                  </span>
                  <div className="font-semibold text-xs text-[#0D2440]">{contact.name}</div>
                  <div className="text-[11px] font-mono text-[#5C6B7A]">{contact.contact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 7 cols: Interactive Enquiry Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E6E2D8] p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
              Send an Official Enquiry
            </h2>
            <p className="text-xs text-[#5C6B7A] mt-1">
              Have questions regarding seat intake, fee clearance, hostel room allotments, or transcripts? Fill out this enquiry form to receive official correspondence.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-2 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-heading font-bold text-lg">Enquiry Successfully Dispatched!</h3>
              <p className="text-xs max-w-md mx-auto">
                Thank you for contacting Basaveshwar Engineering College. Our administration team will review your query and reply within 1 working day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Patil"
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#FBF9F5]/40 focus:outline-none focus:ring-2 focus:ring-[#0D2440]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. candidate@example.com"
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#FBF9F5]/40 focus:outline-none focus:ring-2 focus:ring-[#0D2440]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                    Mobile Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 9876543210"
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#FBF9F5]/40 focus:outline-none focus:ring-2 focus:ring-[#0D2440]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                    Enquiry Category
                  </label>
                  <select
                    value={formData.departmentQuery}
                    onChange={(e) => setFormData({ ...formData, departmentQuery: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#FBF9F5]/40 focus:outline-none focus:ring-2 focus:ring-[#0D2440]"
                  >
                    <option>Admission Guidance (B.E. / M.Tech)</option>
                    <option>Management Quota Seat Query</option>
                    <option>Hostel Accommodation & Dining</option>
                    <option>Exam Section & Grade Transcripts</option>
                    <option>Placement & Campus Recruitment</option>
                    <option>Alumni Association Network</option>
                    <option>Other Institutional Enquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0A1628] mb-1.5">
                  Detailed Message / Question *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide your query, rank details, or specific branch requirement..."
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#FBF9F5]/40 focus:outline-none focus:ring-2 focus:ring-[#0D2440]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-[#0D2440] text-white font-semibold text-xs sm:text-sm rounded-xl hover:bg-[#16365C] transition-all flex items-center gap-2 shadow cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Institutional Query</span>
              </button>
            </form>
          )}

          {/* Location Landmark note */}
          <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#E6E2D8] flex items-start gap-3 text-xs text-[#5C6B7A]">
            <Building className="w-4 h-4 text-[#0D2440] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0D2440]">Campus Location:</strong> Situated on the scenic Vidyagiri hilltops of Bagalkote, conveniently connected to Bagalkote Railway Junction (3 km) and NH 218.
            </div>
          </div>
        </div>

      </div>

      {/* 11.3 Important Links Directory */}
      <section id="important-links-section" className="space-y-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-[#0D2440]">
            Statutory Portals & Important Links
          </h2>
          <p className="text-xs text-[#5C6B7A]">
            Quick access to state and national educational frameworks, scholarship databases, and library catalogs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {importantLinks.map((link, idx) => (
            <div 
              key={idx}
              className="bg-white p-4 rounded-2xl border border-[#E6E2D8] shadow-xs hover:border-[#0D2440] transition-colors group flex items-start justify-between"
            >
              <div>
                <h4 className="font-heading font-semibold text-sm text-[#0D2440] group-hover:text-[#C89B3C] transition-colors">
                  {link.name}
                </h4>
                <p className="text-[11px] text-[#5C6B7A] mt-0.5">
                  {link.desc}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-[#5C6B7A] group-hover:text-[#0D2440] flex-shrink-0 ml-2 mt-1" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
