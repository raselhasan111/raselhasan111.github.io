export const siteConfig = {
  name: "Rasel Hasan",
  title: "Software Engineer",
  description:
    "Portfolio website of Rasel Hasan",
  accentColor: "#1d4ed8",
  social: {
    email: "raselhasan.cse11@gmail.com",
    linkedin: "https://linkedin.com/in/raselhasan11",
    github: "https://github.com/raselhasan111",
  },
  aboutMe:
    "I'm a Software Engineer with strong focus on front-end development, experienced in building scalable and maintainable web applications. I've proven track record of delivering high-quality software products using modern technologies like React, Next.js, and TypeScript. I'm passionate about solving complex real-world problems.",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "CSS",
    "TailwindCSS",
    "Micro Front-ends",
    "AWS",
    "Git",
  ],
  projects: [
    {
      name: "Xsolla",
      description:
        "Built a dynamic PDF generation module for real-time, country-specific gaming data, featuring custom visualizations and rich content rendering.",
      link: "https://xsolla.com",
      skills: ["TypeScript", "React", "React-PDF", "CSS"],
    },
    {
      name: "Pi-HR",
      description:
        "Developed features that are used by over 500 companies within a micro front-end architecture, including searchable tables and complex forms.",
      link: "https://mypihr.com",
      skills: ["React", "Javascript", "Typescript", "TailwindCSS", "Micro Front-ends"],
    },
    {
      name: "Poptrigg",
      description:
        "Built a Shopify app from scratch to handle popups and discount flows, featuring a popup editor, analytics dashboards, and Shopify API integration.",
      link: "https://app.poptrigg.com",
      skills: ["TypeScript", "React", "Redux Toolkit", "TailwindCSS", "Next.js"],
    },
  ],
  experience: [
    {
      company: "Vivasoft Limited",
      title: "Software Engineer L-II",
      dateRange: "Jan 2025 - Present",
      bullets: [
        "Built dynamic PDF generation module for Xsolla.",
        "Developed custom visualizations and rich content rendering with HTML tags and Unicode font support.",
        "Optimized rendering using caching, reusable hooks, and web-workers.",
      ],
    },
    {
      company: "Vivasoft Limited",
      title: "Software Engineer L-I",
      dateRange: "Jul 2023 - Dec 2024",
      bullets: [
        "Built HRM SaaS used by 500+ companies in micro front-end architecture (Pi-HR).",
        "Boosted PDF rendering by 60% using web workers with React-PDF for Resume Builder.",
        "Built Poptrigg app from scratch with TypeScript, React, Tailwind and Shadcn.",
        "Managed state with Redux Toolkit and integrated Shopify APIs.",
      ],
    },
    {
      company: "Samsung R&D Institute Bangladesh",
      title: "Software Engineering Intern",
      dateRange: "Oct 2022 - Feb 2023",
      bullets: [
        "Worked on Samsung Notes app to enhance performance.",
        "Contributed to Samsung Smart Ring research.",
      ],
    },
  ],
  education: [
    {
      school: "Sylhet Engineering College",
      degree: "BSc (Engg) in Computer Science & Engineering",
      dateRange: "2018 - 2022",
      achievements: [
        "CGPA: 3.56/4.00",
        "Champion at NSU Inter-University Hackathon 2020",
        "ICPC Asia Dhaka Regional Contestant (2020, 2021)",
      ],
    },
  ],
};
