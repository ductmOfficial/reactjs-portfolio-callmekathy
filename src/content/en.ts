import type { Content } from "./types";

export const en: Content = {
  lang: "en",
  nav: [
    { id: "about-me", title: "About me" },
    { id: "experience", title: "Experience" },
    { id: "skills", title: "Skills" },
    { id: "education", title: "Education & Certifications" },
    { id: "get-in-touch", title: "Contact" },
  ],
  resumeUrl: "/resume.pdf",
  labels: {
    downloadCv: "Download CV",
    email: "Email",
    followMe: "You can follow me also here:",
    grade: "Grade",
    toConfirm: "[to confirm]",
    builtBy: "Designed & Built by",
  },
  hero: {
    greeting: "Hi, my name is",
    tagline: "I test software so people can trust it.",
    intro:
      "I’m a Test Consultant at Netcompany. I turn requirements into clear test cases, catch problems before users do, and explain them in plain words to developers and clients. ISTQB certified, fluent in English.",
    action: "Get in touch",
  },
  about: {
    title: "About me",
    paragraphs: [
      "Hello! I’m Khue, a Test Consultant at Netcompany. I joined in 2024 as a Manual Test Specialist after eight years in English education, and testing quickly became the work I want to grow in.",
      {
        text: "Most of my day is about understanding what a feature should do: reading requirements, asking the questions nobody has asked yet, and designing tests that cover the cases that matter. I test web applications and APIs, report defects clearly, and work directly with clients in English.",
        toConfirm: true,
      },
      "I’m working towards becoming a Senior Tester, with deeper skills in requirements analysis and test design.",
    ],
    interest: "Outside work, I enjoy exploring new places and singing karaoke with friends.",
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Test Consultant",
        company: "Netcompany",
        period: "Jan 2025 – Present",
        place: "Vietnam, hybrid",
        summary: {
          text: "Requirements analysis, test design, functional, regression and API testing for European clients.",
          toConfirm: true,
        },
      },
      {
        role: "Manual Test Specialist",
        company: "Netcompany",
        period: "Jun 2024 – Dec 2024",
        place: "Ho Chi Minh City",
        summary: {
          text: "Functional and regression testing of web applications in Scrum teams; defects in Jira; API checks with Postman.",
          toConfirm: true,
        },
      },
      {
        role: "English Teaching Assistant & Tutor",
        company: "International schools & private tutoring",
        period: "2016 – 2024",
        place: "Ho Chi Minh City",
        summary:
          "Vietnam Australia International School (2018 – 2023) and EMG Education (2016 – 2018): worked alongside foreign teachers as the link between teachers, students and parents. Private one-to-one English tutoring throughout.",
      },
    ],
  },
  skills: {
    title: "Skills",
    intro:
      "What I bring to a team: careful analysis, structured test design and clear communication in English.",
    items: [
      "Requirements analysis",
      "Test design",
      "Functional & regression testing",
      "API testing (Postman)",
      "SQL",
      "Jira",
      "Defect reporting",
      "Client communication in English",
      "Attention to detail",
    ],
  },
  education: {
    title: "Education & Certifications",
    intro:
      "ISTQB Foundation certified, with a Business Analysis Foundation course and a B.A. in English Language (GPA 3.8/4) from Can Tho University.",
    items: [
      {
        degree: "ISTQB Foundation Level",
        provider: "Vietnamese Testing Board (VTB)",
        date: "Oct 2023",
        grade: "34/40",
      },
      {
        degree: "IELTS 6.5",
        provider: "IDP Education",
        date: { text: "Dec 2023", toConfirm: true },
      },
      {
        degree: "Business Analysis Foundation",
        provider: "BAC Vietnam",
        date: "Oct 2022",
      },
      {
        degree: "Bachelor’s English Language",
        provider: "Can Tho University",
        date: "2012 – 2016",
        grade: "3.8/4",
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    text: "Have a project that needs careful testing, or just want to say hi? My inbox is always open, and I’ll get back to you.",
    action: "Say hello",
  },
};
