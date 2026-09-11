export type NavTab = 
  | 'home'
  | 'about'
  | 'admission'
  | 'programmes'
  | 'departments'
  | 'exam-section'
  | 'placement'
  | 'research'
  | 'campus-life'
  | 'contact';

export type UserRole = 'student' | 'faculty' | 'admin' | 'webmail';

export interface UserSession {
  role: UserRole;
  identifier: string;
  name: string;
  department?: string;
  semester?: number;
  usn?: string;
  email?: string;
}

export interface CollegeCode {
  programme: string;
  cetAided?: string;
  cetUnAided?: string;
  comedk?: string;
  mba?: string;
  mtech?: string;
  mca?: string;
}

export interface CourseIntake {
  slNo: number;
  branch: string;
  intake: number;
  code?: string;
  type: 'aided' | 'unaided';
}

export interface HighlightStat {
  icon: string;
  label: string;
  value: string;
  sublabel?: string;
}

export interface Recruiter {
  name: string;
  logoText: string;
  tier: 'tier1' | 'tier2';
  industry: string;
}

export interface PlacementSlot {
  slot: string;
  offerType: string;
  ctcRange: string;
  duration: string;
  description: string;
}

export interface DepartmentInfo {
  id: string;
  name: string;
  category: 'ug' | 'pg' | 'science-humanities' | 'research';
  establishedYear: number;
  intake?: number;
  hodName: string;
  description: string;
  labs: string[];
  keyHighlights: string[];
}

export interface ExamResult {
  usn: string;
  studentName: string;
  course: string;
  semester: number;
  sgpa: number;
  cgpa: number;
  resultStatus: 'PASS' | 'FIRST CLASS WITH DISTINCTION' | 'FIRST CLASS';
  subjects: {
    code: string;
    name: string;
    credits: number;
    cie: number;
    see: number;
    total: number;
    grade: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Labs' | 'Events' | 'Hostel' | 'Library';
  image: string;
  caption: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  date: string;
  category: 'Admissions' | 'Exams' | 'Circular' | 'TPO' | 'Research';
  isNew?: boolean;
  fileLink?: string;
}
