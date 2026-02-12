export const profile = {
  name: "Jemsi Pallangyo (JAYFOUR)",
  title: "Full-Stack Software Engineer",
  tagline:
    "Building secure, scalable, and performance-driven web systems using modern technologies.",
  about: [
    "I am a Full-Stack Software Engineer passionate about building clean, scalable, and production-ready systems. My focus is on backend architecture, API design, and secure application development using PHP, Symfony, Laravel, Django and JavaScript technologies.",
    "With strong experience in Next.js, Node.js, and MongoDB, I design and implement systems that are structured, maintainable, and optimized for real-world usage. I approach every project with an engineering mindset thinking in systems, not just features.",
    "Beyond coding, I am deeply interested in system security, performance optimization, and Linux-based development environments. I continuously refine my craft to build solutions that are both efficient and resilient.",
  ],
  location: "Tanzania",
  email: "jemsifredrick4@gmail.com",
  phone: "+255683186987",
  whatsapp: "255683186987",
  social: {
    github: "https://github.com/jemsi-442",
    linkedin:
      "https://www.linkedin.com/in/jemsi-pallangyo-74202a320",
    whatsapp: "https://wa.me/255683186987",
  },
  profileImage: "/images/profile.jpg",
};

export const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "100%", label: "Production Focus" },
  { value: "Full-Stack", label: "Engineering Mindset" },
  { value: "Linux", label: "Development Environment" },
];

export const skills = {
  frontend: {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "CSS & HTML",
      "UI/UX Principles",
      "Cross-Browser Compatibility",
      "Responsive UI Design",
    ],
  },
  backend: {
    title: "Backend",
    items: [
      "Node.js",
      "PHP",
      "Symfony",
      "Laravel",
      "Django",
      "Express",
      "REST APIs",
      "Authentication & Authorization",
      "System Architecture",
      "API Security",
    ],
  },
  database: {
    title: "Database & DevOps",
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "MariaDB",
      "Git & GitHub",
      "Vercel Deployment",
      "Linux",
      "CI/CD Concepts",
    ],
  },
  soft: {
    title: "Core Strengths",
    items: [
      "Problem Solving",
      "System Thinking",
      "Clean Code Practices",
      "Performance Optimization",
      "Continuous Learning",
    ],
  },
};

export const experience = [
  {
    year: "2019 - Present",
    title: "Independent Software Engineer",
    company: "Personal Projects",
    description:
      "Designing and developing full-stack web applications using Next.js and Node.js. Focused on building scalable backend systems, structured APIs, and optimized frontend interfaces with production-ready deployment on Vercel.",
    tags: ["Next.js", "Node.js", "MongoDB", "System Design"],
  },
];

export const education = [
  {
    year: "2021 - 2024",
    title: "Diploma in Human Resource Management (HRM)",
    institution: "Tanzania Institite of Accountancy (TIA)",
    description:
      "Studied core HRM principles including recruitment, payroll, employee relations, and organizational behavior. Developed strong administrative and management foundations applicable across business environments.",
  },
  {
    year: "2024 - Present",
    title: "Bachelor of Business Administration (BBA)",
    institution: "Tanzania Institite of Accountancy (TIA)",
    description:
      "Pursuing a BBA with focus on management, strategic planning, and business operations. Gaining leadership, decision-making, and analytical skills to complement technical expertise in software engineering.",
  },
  {
    year: "Ongoing",
    title: "Software Engineering & System Architecture (Self-Driven)",
    institution: "Continuous Learning",
    description:
      "Focused on backend engineering, scalable system design, secure development practices, and performance optimization using modern JavaScript ecosystems. Building real-world projects to reinforce learning.",
  },
];


export const projects = [
  {
    title: "RGC System",
    description:
      "A structured backend-driven web system focused on authentication, role management, and scalable API architecture. Designed with clean separation of concerns and production deployment principles.",
    tags: ["Node.js", "Express", "MongoDB", "API Design"],
    liveUrl: null,
    sourceUrl: "https://github.com/jemsi-442/rgc-system",
  },
{
  title: "Pharmacy-System",
  description:
    "A full-stack Pharmacy Management System with inventory tracking, sales management, and admin dashboard. Built with Node.js backend, MySQL database, and HTML/CSS/JS frontend.",
  tags: ["Node.js", "Express", "MySQL", "HTML", "CSS", "JavaScript", "Full-Stack"],
  liveUrl: null, // Backend + static frontend; no live deployment yet
  sourceUrl: "https://github.com/jemsi-442/Pharmacy-System",
},

  {
    title: "Payroll Management System",
    description:
      "A backend-oriented payroll management application designed to handle salary calculations, deductions, and structured data workflows.",
    tags: ["Laravel", "Backend Logic", "System Design"],
    liveUrl: null,
    sourceUrl: "https://github.com/jemsi-442/payroll_management",
  },
{
  title: "Marketplace Platform",
  description:
    "An enterprise-grade service marketplace with secure escrow, AI-powered dispute resolution, and fraud detection. Built with Symfony backend, ready for scalable fintech operations.",
  tags: ["Symfony", "PHP", "Backend", "Fintech", "Escrow", "AI"],
  liveUrl: "https://github.com/jemsi-442/marketplace", // since backend only, no live frontend yet
  sourceUrl: "https://github.com/jemsi-442/marketplace",
},

];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
