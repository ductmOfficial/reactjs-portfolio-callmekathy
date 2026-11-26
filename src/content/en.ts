import type { Content } from "./types";

export const en: Content = {
  lang: "en",
  name: "Khue Nguyen",
  role: "Test Consultant",
  nav: [
    { id: "experience", title: "Experience" },
    { id: "how-i-work", title: "How I work" },
    { id: "skills", title: "Skills" },
    { id: "certifications", title: "Certifications" },
    { id: "contact", title: "Contact" },
  ],
  resumeUrl: "/resume-en.pdf",
  labels: {
    downloadCv: "Download CV",
    getInTouch: "Get in touch",
    linkedin: "LinkedIn",
    email: "Email",
    language: "Language",
    toConfirm: "[to confirm]",
    builtBy: "Built by",
    passed: "passed",
    running: "running",
    grade: "Grade",
    cv: "CV",
    darkTheme: "Dark theme",
    menu: "Sections",
  },
  hero: {
    status: "Test Consultant · Netcompany · Ho Chi Minh City",
    tagline: "I test software so people can trust it.",
    intro:
      "I turn requirements into clear test cases, catch problems before users do, and explain them in plain words to developers and clients. ISTQB certified, fluent in English.",
  },
  stats: [
    { value: "2+ yrs", label: "Software testing" },
    { value: "34/40", label: "ISTQB Foundation" },
    { value: "6.5", label: "IELTS" },
    { value: "8 yrs", label: "English education" },
  ],
  career: {
    kicker: "Experience",
    title: "Career path",
    aside: "From English classrooms to software testing.",
    items: [
      {
        period: "Oct 2016 – Aug 2018",
        org: "EMG Education",
        role: "Primary English Teaching Assistant",
        place: "Ho Chi Minh City",
        status: "passed",
        summary:
          "Supported foreign teachers in public schools, translated between teachers, students and parents, and kept class records.",
      },
      {
        period: "Aug 2018 – Jun 2023",
        org: "Vietnam Australia International School",
        role: "Primary English Teaching Assistant",
        place: "Ho Chi Minh City",
        status: "passed",
        summary:
          "The link between foreign teachers, students and parents; co-taught lessons and handled class management.",
      },
      {
        period: "Jun 2024 – Dec 2024",
        org: "Netcompany",
        role: "Manual Test Specialist",
        place: "Ho Chi Minh City, on-site",
        status: "passed",
        summary: {
          text: "Functional and regression testing of web applications in Scrum teams; defects in Jira; API checks with Postman.",
          toConfirm: true,
        },
      },
      {
        period: "Jan 2025 – Present",
        org: "Netcompany",
        role: "Test Consultant",
        place: "Vietnam, hybrid",
        status: "running",
        summary: {
          text: "Requirements analysis, test design, functional, regression and API testing for European clients.",
          toConfirm: true,
        },
      },
    ],
    note: "Alongside, private one-to-one English tutoring from 2016 to 2024.",
  },
  howIWork: {
    kicker: "How I work",
    title: "Understand, design, report",
    aside: "Working towards Senior Tester, with deeper requirements analysis and test design.",
    steps: [
      {
        title: "Understand",
        text: {
          text: "Read the requirements and user stories, and ask the open questions before development starts.",
          toConfirm: true,
        },
      },
      {
        title: "Design",
        text: {
          text: "Turn them into test cases with techniques such as boundary values and decision tables, covering the cases that matter.",
          toConfirm: true,
        },
      },
      {
        title: "Report",
        text: {
          text: "Log clear, reproducible defects and explain the test status to developers and clients in English.",
          toConfirm: true,
        },
      },
    ],
  },
  skills: {
    kicker: "Skills",
    title: "Toolbox",
    groups: [
      {
        label: "Testing",
        items: [
          "Requirements analysis",
          "Test design",
          "Functional testing",
          "Regression testing",
          "API testing",
          "Defect reporting",
          "UAT support",
        ],
      },
      { label: "Tools", items: ["Jira", "Postman", "SQL", "Figma", "ChatGPT"] },
      {
        label: "Languages",
        items: ["English · IELTS 6.5", "Vietnamese · native", "Client communication"],
      },
    ],
  },
  certifications: {
    kicker: "Certifications",
    title: "Certifications & education",
    items: [
      {
        name: "ISTQB Certified Tester Foundation Level",
        issuer: "Vietnamese Testing Board",
        date: "Oct 2023",
        grade: "34/40",
      },
      { name: "IELTS 6.5", issuer: "IDP Education", date: { text: "Dec 2023", toConfirm: true } },
      { name: "Business Analysis Foundation", issuer: "BAC Vietnam", date: "Oct 2022" },
      {
        name: "B.A. English Language",
        issuer: "Can Tho University",
        date: "2012 – 2016",
        grade: "3.8/4",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Let’s talk.",
    text: "Have a project that needs careful testing, or just want to say hi? My inbox is always open.",
    interest: "Outside work, I enjoy exploring new places and singing karaoke with friends.",
  },
};
