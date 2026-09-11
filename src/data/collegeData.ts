import { CourseIntake, PlacementSlot, DepartmentInfo, ExamResult, GalleryItem, NotificationItem } from '../types';

export const COLLEGE_CODES = [
  { programme: 'CET (Aided)', code: 'E031', description: 'KEA Karnataka CET Govt. Quota - Aided' },
  { programme: 'CET (Un-Aided)', code: 'E049', description: 'KEA Karnataka CET Govt. Quota - Un-Aided' },
  { programme: 'COMED-K', code: 'E024', description: 'Consortium of Medical, Engg & Dental Colleges of Karnataka' },
  { programme: 'MBA', code: 'B124', description: 'KEA PGCET / KMAT for Master of Business Admin' },
  { programme: 'M.Tech', code: 'T810', description: 'KEA PGCET / GATE for Post-Graduation' },
  { programme: 'MCA', code: 'C408', description: 'KEA PGCET / KMAT for Master of Computer App' },
];

export const AIDED_INTAKE: CourseIntake[] = [
  { slNo: 1, branch: 'Civil Engineering', intake: 60, code: 'CV', type: 'aided' },
  { slNo: 2, branch: 'Computer Science & Engineering', intake: 30, code: 'CS', type: 'aided' },
  { slNo: 3, branch: 'Electronics & Communication Engineering', intake: 60, code: 'EC', type: 'aided' },
  { slNo: 4, branch: 'Electrical & Electronics Engineering', intake: 30, code: 'EE', type: 'aided' },
  { slNo: 5, branch: 'Industrial & Production Engineering', intake: 30, code: 'IP', type: 'aided' },
  { slNo: 6, branch: 'Mechanical Engineering', intake: 90, code: 'ME', type: 'aided' },
];

export const UNAIDED_INTAKE: CourseIntake[] = [
  { slNo: 1, branch: 'Artificial Intelligence & Machine Learning', intake: 60, code: 'AI', type: 'unaided' },
  { slNo: 2, branch: 'Biotechnology', intake: 30, code: 'BT', type: 'unaided' },
  { slNo: 3, branch: 'Civil Engineering', intake: 60, code: 'CV', type: 'unaided' },
  { slNo: 4, branch: 'Computer Science & Engineering', intake: 150, code: 'CS', type: 'unaided' },
  { slNo: 5, branch: 'Electronics & Communication Engineering', intake: 60, code: 'EC', type: 'unaided' },
  { slNo: 6, branch: 'Electrical & Electronics Engineering', intake: 30, code: 'EE', type: 'unaided' },
  { slNo: 7, branch: 'Electronics & Computer Engineering', intake: 60, code: 'ET', type: 'unaided' },
  { slNo: 8, branch: 'Information Science & Engineering', intake: 180, code: 'IS', type: 'unaided' },
  { slNo: 9, branch: 'Mechanical Engineering', intake: 30, code: 'ME', type: 'unaided' },
];

export const PLACEMENT_STATS = {
  placedStudents: 611,
  graduatingStudents: 764,
  placementPercentage: 85,
  medianSalary: '₹4.75 LPA',
  highestPackage: '₹15 LPA',
  averagePackage: '₹3.5–4.0 LPA',
  activeRecruiters: '120+',
  offersCount: '840+',
};

export const TOP_RECRUITERS = [
  { name: 'Tata Consultancy Services', logoText: 'TCS', role: 'Digital & Ninja', avgCtc: '3.6 - 7.2 LPA' },
  { name: 'Wipro Technologies', logoText: 'WIPRO', role: 'Elite & Turbo', avgCtc: '3.5 - 6.5 LPA' },
  { name: 'Accenture India', logoText: 'ACCENTURE', role: 'Associate Software Eng', avgCtc: '4.5 - 6.5 LPA' },
  { name: 'Cognizant', logoText: 'COGNIZANT', role: 'GenC Next & Elevate', avgCtc: '4.0 - 6.8 LPA' },
  { name: 'HCL Technologies', logoText: 'HCL', role: 'Graduate Engineer Trainee', avgCtc: '3.8 - 5.5 LPA' },
  { name: 'Global Edge Software', logoText: 'GLOBAL EDGE', role: 'Embedded Systems Dev', avgCtc: '4.2 - 6.0 LPA' },
  { name: 'Mindtree (LTIMindtree)', logoText: 'LTIMINDTREE', role: 'Software Engineer', avgCtc: '4.0 - 6.5 LPA' },
  { name: 'Infosys Limited', logoText: 'INFOSYS', role: 'Systems Engineer & SP', avgCtc: '3.6 - 9.5 LPA' },
  { name: 'Capgemini', logoText: 'CAPGEMINI', role: 'Analyst & Senior Analyst', avgCtc: '4.0 - 7.5 LPA' },
  { name: 'Larsen & Toubro', logoText: 'L&T', role: 'Graduate Trainee Engineer', avgCtc: '6.0 - 8.0 LPA' },
  { name: 'Continental Automotive', logoText: 'CONTINENTAL', role: 'R&D Engineer', avgCtc: '7.5 - 11 LPA' },
  { name: 'Robert Bosch', logoText: 'BOSCH', role: 'Associate Engineer', avgCtc: '6.0 - 9.0 LPA' },
];

export const PLACEMENT_SLOTS: PlacementSlot[] = [
  {
    slot: 'Slot 1',
    offerType: 'Super Dream',
    ctcRange: '≥ 8 LPA',
    duration: '3–4 days',
    description: 'Companies offering high packages and specialized tech/R&D roles. Maximum placement flexibility provided.'
  },
  {
    slot: 'Slot 2',
    offerType: 'Dream',
    ctcRange: '5.5 – 7.99 LPA',
    duration: '5–6 days',
    description: 'Core product engineering and high-growth corporate brands recruiting across tech and management domains.'
  },
  {
    slot: 'Slot 3',
    offerType: 'Standard',
    ctcRange: '3.0 – 5.49 LPA',
    duration: '10–15 days',
    description: 'Mass and volume IT recruiters, infrastructure consultancies, and regular campus partners.'
  }
];

export const DEPARTMENTS: DepartmentInfo[] = [
  {
    id: 'aiml',
    name: 'Artificial Intelligence & Machine Learning',
    category: 'ug',
    establishedYear: 2021,
    intake: 60,
    hodName: 'Dr. Shilpa R. Patil',
    description: 'Pioneering intelligent autonomous systems, computer vision, natural language processing, and deep learning algorithms with high-performance GPU laboratories.',
    labs: ['Deep Learning & Computer Vision Lab', 'Cloud Computing & Big Data Lab', 'NVIDIA GPU Cluster Facility'],
    keyHighlights: ['AICTE IDEA Lab Integration', 'Industry MOUs with AWS & Intel', 'Hackathon winning student teams']
  },
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    category: 'ug',
    establishedYear: 1983,
    intake: 180,
    hodName: 'Dr. S. V. Saboji',
    description: 'NBA accredited centre of computing excellence offering rigorous training in algorithm design, software architecture, distributed systems, and cybersecurity.',
    labs: ['High Performance Computing Lab', 'Network Systems Lab', 'Full Stack Development Lab'],
    keyHighlights: ['NBA accredited till 2025', 'Active ACM and CSI student chapters', 'Highest number of campus placements']
  },
  {
    id: 'ise',
    name: 'Information Science & Engineering',
    category: 'ug',
    establishedYear: 2000,
    intake: 180,
    hodName: 'Dr. Ramesh K. B.',
    description: 'Focusing on enterprise information architecture, cloud services, software testing, database engineering, and modern DevOps pipelines.',
    labs: ['Database Systems Lab', 'Software Testing & Automation Lab', 'Mobile App Development Center'],
    keyHighlights: ['Exceptional placement records', 'Collaborative hackathons with MNCs', 'Modern IoT & Web3 experimentation wing']
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    category: 'ug',
    establishedYear: 1967,
    intake: 120,
    hodName: 'Dr. Jayashree D. Mallapur',
    description: 'Renowned department with cutting-edge laboratories in VLSI design, embedded systems, 5G wireless communications, and signal processing.',
    labs: ['Cadence VLSI Design Lab', 'Advanced Wireless & RF Lab', 'DSP & Microcontroller Workstation'],
    keyHighlights: ['Cadence & Synopsys EDA tools', 'Major funded research projects from ISRO & DST', 'Active IEEE Photonics and ComSoc branch']
  },
  {
    id: 'eee',
    name: 'Electrical & Electronics Engineering',
    category: 'ug',
    establishedYear: 1963,
    intake: 60,
    hodName: 'Dr. Suresh H. Jangamshetti',
    description: 'One of the founding branches of the college in 1963, recognized for pioneer work in wind and solar microgrids, power electronics, and electric mobility.',
    labs: ['Smart Grid & Renewable Energy Lab', 'Power Electronics & Drives Lab', 'High Voltage Engineering Facility'],
    keyHighlights: ['Wind Energy Resource Mapping pioneer', 'Recognized VTU R&D Centre', 'Solar rooftop microgrid installed on campus']
  },
  {
    id: 'me',
    name: 'Mechanical Engineering',
    category: 'ug',
    establishedYear: 1963,
    intake: 120,
    hodName: 'Dr. S. N. Kurbet',
    description: 'Founding department equipped with advanced CAD/CAM/CAE centres, additive manufacturing 3D printers, internal combustion engine testing rigs, and wind tunnels.',
    labs: ['AICTE IDEA 3D Prototyping Lab', 'Heat Transfer & Thermodynamics Lab', 'Mechatronics & Robotics Lab'],
    keyHighlights: ['Host of prestigious BAJA SAE team', 'Significant research publications in composite materials', 'Consultancy services for regional industries']
  },
  {
    id: 'cv',
    name: 'Civil Engineering',
    category: 'ug',
    establishedYear: 1963,
    intake: 120,
    hodName: 'Dr. B. M. Gangadhariah',
    description: 'Established with the college in 1963, serving North Karnataka with state-of-the-art testing in structural dynamics, soil mechanics, environmental engineering, and GIS mapping.',
    labs: ['Total Station & Geoinformatics Lab', 'Advanced Concrete Testing Lab', 'Soil Mechanics & Geotechnical Lab'],
    keyHighlights: ['Primary consultancy center for irrigation & public works', 'NABL accredited testing capabilities', 'Recognized VTU Research Centre']
  },
  {
    id: 'bt',
    name: 'Biotechnology',
    category: 'ug',
    establishedYear: 2002,
    intake: 30,
    hodName: 'Dr. Bharati S. Meti',
    description: 'Interdisciplinary branch driving innovation in bioprocess engineering, bioinformatics, agricultural biotechnology, and microbial genomics.',
    labs: ['Bioreactor & Fermentation Lab', 'Plant Tissue Culture Lab', 'Molecular Biology & Genetics Lab'],
    keyHighlights: ['Biofuel Research & Information Centre (BRIC)', 'Patents on bio-pesticides and natural extracts', 'DST funded research projects']
  },
  {
    id: 'et',
    name: 'Electronics & Computer Engineering',
    category: 'ug',
    establishedYear: 2022,
    intake: 60,
    hodName: 'Dr. Mallikarjun S. K.',
    description: 'Harmonious fusion of hardware and software engineering addressing the needs of Edge AI, embedded computing, IoT devices, and cyber-physical systems.',
    labs: ['Embedded Systems & Edge Computing Lab', 'IoT Sensor Network Lab', 'Digital Signal Processing Suite'],
    keyHighlights: ['Industry-aligned curriculum', 'Fast-growing branch with tech recruiters', 'Hands-on hardware accelerator modules']
  },
  {
    id: 'ipe',
    name: 'Industrial & Production Engineering',
    category: 'ug',
    establishedYear: 1984,
    intake: 30,
    hodName: 'Dr. G. V. Patil',
    description: 'Focusing on supply chain optimization, Lean Six Sigma, robotics, operational research, ergonomics, and Industry 4.0 factory automation.',
    labs: ['Flexible Manufacturing Systems (FMS) Lab', 'Quality Engineering & Metrology Lab', 'Ergonomics & Work Design Facility'],
    keyHighlights: ['Strong ties with manufacturing belts', 'Industry 4.0 demonstration setups', 'Pioneering work in operations research']
  },
  {
    id: 'au',
    name: 'Automobile Engineering',
    category: 'ug',
    establishedYear: 1980,
    intake: 30,
    hodName: 'Dr. C. M. Veerendrakumar',
    description: 'Dedicated to automotive powertrain testing, electric vehicle vehicle architecture, vehicle safety dynamics, and emissions engineering.',
    labs: ['Automotive Chassis & Transmission Lab', 'EV Battery & Powertrain Testbed', 'Engine Diagnostics & Emission Analysis Lab'],
    keyHighlights: ['Formula Student racing prototype vehicle', 'Electric buggy design for campus commute', 'Testing facilities for local transport corporations']
  },
  {
    id: 'sh',
    name: 'Science & Humanities',
    category: 'science-humanities',
    establishedYear: 1963,
    hodName: 'Dr. V. S. Puranik',
    description: 'Foundational academic departments including Physics, Chemistry, Mathematics, and Humanities fostering scientific temper and professional communication.',
    labs: ['Advanced Engineering Physics Optics Lab', 'Instrumental Chemical Analysis Lab', 'Language & Professional Communication Lab'],
    keyHighlights: ['High index research citations', 'Special bridge courses for incoming freshers', 'Interdisciplinary research support']
  },
  {
    id: 'mtech',
    name: 'Postgraduate M.Tech Programmes',
    category: 'pg',
    establishedYear: 1998,
    hodName: 'Dr. R. N. Herkal (PG Dean)',
    description: 'Advanced master programs in Environmental Engineering, Geo-Technical Engineering, Structural Engineering, and Machine Design.',
    labs: ['Environmental Quality Analysis Lab', 'Structural Dynamics & Shake Table Lab', 'Advanced CAD/CAE Finite Element Workstation'],
    keyHighlights: ['GATE stipends eligible', 'Direct involvement in TEQIP research programs', 'Corporate sponsored thesis projects']
  },
  {
    id: 'management',
    name: 'Department of MBA & MCA',
    category: 'pg',
    establishedYear: 2006,
    hodName: 'Dr. B. C. Patil',
    description: 'Premier management and computer applications department nurturing future corporate leaders, entrepreneurs, and IT managers.',
    labs: ['Business Analytics & FinTech Lab', 'Enterprise Software & Database Lab', 'Management Case Study Discussion Room'],
    keyHighlights: ['Regular CEO & alumni talk series', 'Dual specialization in Finance, HR & Marketing', '100% placement assistance']
  }
];

export const RESEARCH_FUNDING = [
  { programme: 'TEQIP Phase I', grant: '₹14.16 Crores', focus: 'Institutional development, laboratory modernization & faculty upgrades' },
  { programme: 'TEQIP Phase II', grant: '₹12.50 Crores', focus: 'Sub-component 1.2: Scaling-up postgraduate education and demand-driven R&D' },
  { programme: 'TEQIP Phase III', grant: '₹8.47 Crores', focus: 'Mentoring under-performing institutes, research twinning with NITK Surathkal' },
  { programme: 'AICTE IDEA Lab', grant: '₹1.10 Crores', focus: 'Hands-on STEM innovation, 3D printing, laser cutters, CNC & sensor labs' },
];

export const RESEARCH_AREAS = [
  { title: 'Sustainable & Green Construction Materials', desc: 'Recycled aggregate concrete, geopolymer concrete, and eco-friendly paving blocks for arid regions.' },
  { title: 'Applied Artificial Intelligence & Machine Learning', desc: 'Deep learning for crop disease detection, medical diagnostics, Kannada language processing, and smart grid prediction.' },
  { title: 'Structural Health Monitoring', desc: 'Sensor-based vibration analysis, non-destructive testing, and bridge condition assessments.' },
  { title: 'Renewable Energy & Microgrid Systems', desc: 'Hybrid wind-solar topologies, battery management systems for electric vehicles, and rural electrification.' },
  { title: 'Biomedical Signal & Image Processing', desc: 'Automated EEG/ECG anomaly identification and early screening of retinal diseases.' },
];

export const FACILITIES_BENTO = [
  {
    id: 'hostel',
    title: 'Hostels',
    subtitle: 'Separate secure hostels for boys & girls',
    description: 'Accommodating over 2,200 students with modern hygienic dining halls, 24/7 RO drinking water, Wi-Fi connectivity, gym, and round-the-clock security surveillance.',
    stats: '2,200+ Capacity · 4 Boys & 3 Girls Blocks',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    tag: 'Accommodation'
  },
  {
    id: 'library',
    title: 'Central Library',
    subtitle: 'Print & comprehensive digital assets',
    description: 'Over 1,25,000 volumes, 25,000+ titles, access to IEEE, ScienceDirect, Springer, ASCE, ASME digital libraries, Web OPAC, and a 500-seat silent reading hall.',
    stats: '1,25,000+ Books · E-Consortium access',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    tag: 'Knowledge Hub'
  },
  {
    id: 'labs',
    title: 'Advanced Laboratories',
    subtitle: 'Large computer labs with latest software',
    description: 'State-of-the-art computing facilities powered by high-speed fiber-optic backbones, high-end GPU workstations, licensed CAD/CAM suites, and AICTE IDEA lab.',
    stats: '1,400+ Systems · 1 Gbps Fiber',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    tag: 'Innovation'
  },
  {
    id: 'dining',
    title: 'Dining & Cafeteria',
    subtitle: 'Multiple canteens & student cafeterias',
    description: 'Nutritious South Indian, North Indian, and continental meals served at subsidized pricing, maintaining highest food safety standards and clean dining spaces.',
    stats: '3 Food Courts · Clean Certified',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80',
    tag: 'Food & Health'
  },
  {
    id: 'wifi',
    title: 'High-Speed Wi-Fi',
    subtitle: 'Campus-wide high-speed connectivity',
    description: 'Seamless secure wireless coverage across academic blocks, administrative offices, hostel dorms, libraries, and open student congregation spaces.',
    stats: '100% Coverage · Gigabit Backbone',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    tag: 'Digital Campus'
  },
  {
    id: 'eco',
    title: 'Eco-Friendly Campus',
    subtitle: 'Electric buggies for campus commute',
    description: 'Sprawling 93-acre lush green campus with zero-emission battery-operated buggies, 150 kW solar rooftop panels, rainwater harvesting, and botanical gardens.',
    stats: '93 Acres Green · Solar Powered',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    tag: 'Sustainability'
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Main Administrative Quadrangle',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80',
    caption: 'Historic administrative facade framed by Bagalkote red soil and palm trees'
  },
  {
    id: 'g2',
    title: 'AICTE IDEA Prototyping Center',
    category: 'Labs',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    caption: 'Students fabricating robotic prototypes with laser cutters and 3D printers'
  },
  {
    id: 'g3',
    title: 'Annual Cultural Festival — Samveekshana',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
    caption: 'Electrifying cultural performances by engineering scholars at open auditorium'
  },
  {
    id: 'g4',
    title: 'Central Digital Reading Lounge',
    category: 'Library',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80',
    caption: 'Digital access terminal for IEEE Xplore and ScienceDirect journals'
  },
  {
    id: 'g5',
    title: 'Boys & Girls Residential Hostels',
    category: 'Hostel',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80',
    caption: 'Modern hostel blocks situated within serene, secure landscaped perimeter'
  },
  {
    id: 'g6',
    title: 'Renewable Smart Grid Microgrid Station',
    category: 'Labs',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=900&q=80',
    caption: 'Solar and wind hybrid energy monitoring station managed by EEE Department'
  },
  {
    id: 'g7',
    title: 'Graduation Day Ceremony',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
    caption: 'Gold medallists and degree recipients of Autonomous Batches'
  },
  {
    id: 'g8',
    title: 'Students Sports Complex & Cricket Ground',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    caption: 'Full-fledged sports pavilion with indoor badminton and multi-gym'
  },
  {
    id: 'g9',
    title: 'Hostel Dining Courtyard',
    category: 'Hostel',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=900&q=80',
    caption: 'Spacious dining facility serving balanced and nutritious meals'
  }
];

export const NOTIFICATIONS: NotificationItem[] = [
  { id: 'n1', title: 'Admissions Open for B.E. / M.Tech / MBA / MCA 2025–26 under Management Quota', date: 'March 10, 2026', category: 'Admissions', isNew: true },
  { id: 'n2', title: 'Autonomous Even Semester Regular & Makeup Examinations Time Table Announced', date: 'March 08, 2026', category: 'Exams', isNew: true },
  { id: 'n3', title: 'UG Rank List 2023–24 & Gold Medals Final Notification Published', date: 'March 04, 2026', category: 'Exams' },
  { id: 'n4', title: 'TPO Mega Campus Drive: 24 MNCs visiting for 2026 graduating batch', date: 'February 28, 2026', category: 'TPO', isNew: true },
  { id: 'n5', title: 'Call for Proposals: Research Mini-Grants under AICTE IDEA Lab Scheme', date: 'February 22, 2026', category: 'Research' },
  { id: 'n6', title: 'VTU Circular: Guidelines for Submission of Ph.D Coursework Examination forms', date: 'February 15, 2026', category: 'Circular' },
];

export const SAMPLE_STUDENTS: Record<string, ExamResult> = {
  '2BA22CS045': {
    usn: '2BA22CS045',
    studentName: 'Praveen K. Kulkarni',
    course: 'B.E. Computer Science & Engineering',
    semester: 6,
    sgpa: 9.15,
    cgpa: 8.92,
    resultStatus: 'FIRST CLASS WITH DISTINCTION',
    subjects: [
      { code: '21CS61', name: 'Software Architecture & Cloud Computing', credits: 4, cie: 48, see: 45, total: 93, grade: 'S' },
      { code: '21CS62', name: 'Artificial Intelligence & Machine Learning', credits: 4, cie: 45, see: 44, total: 89, grade: 'A' },
      { code: '21CS63', name: 'Network Security & Cryptography', credits: 3, cie: 46, see: 42, total: 88, grade: 'A' },
      { code: '21CS64', name: 'Full Stack Web Development', credits: 3, cie: 49, see: 47, total: 96, grade: 'S' },
      { code: '21CSL66', name: 'AI & Machine Learning Laboratory', credits: 2, cie: 50, see: 48, total: 98, grade: 'S' },
      { code: '21CSL67', name: 'Cloud Computing Practice Laboratory', credits: 2, cie: 48, see: 46, total: 94, grade: 'S' },
      { code: '21CSP68', name: 'Mini-Project Phase II', credits: 2, cie: 49, see: 49, total: 98, grade: 'S' },
    ]
  },
  '2BA22EC018': {
    usn: '2BA22EC018',
    studentName: 'Ananya S. Patil',
    course: 'B.E. Electronics & Communication Engineering',
    semester: 6,
    sgpa: 8.85,
    cgpa: 8.70,
    resultStatus: 'FIRST CLASS WITH DISTINCTION',
    subjects: [
      { code: '21EC61', name: 'VLSI Design & Technology', credits: 4, cie: 46, see: 43, total: 89, grade: 'A' },
      { code: '21EC62', name: 'Digital Communication Systems', credits: 4, cie: 44, see: 41, total: 85, grade: 'A' },
      { code: '21EC63', name: 'ARM Microcontroller & Embedded Systems', credits: 3, cie: 47, see: 44, total: 91, grade: 'S' },
      { code: '21EC64', name: 'Microwave & Optical Engineering', credits: 3, cie: 42, see: 40, total: 82, grade: 'B' },
      { code: '21ECL66', name: 'VLSI & Embedded Systems Lab', credits: 2, cie: 49, see: 48, total: 97, grade: 'S' },
      { code: '21ECL67', name: 'Digital Communication Lab', credits: 2, cie: 47, see: 45, total: 92, grade: 'S' },
    ]
  }
};
