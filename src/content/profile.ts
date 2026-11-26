// Everything the page says lives here, so a content update never touches a component.

export const profile = {
  firstName: "Khue",
  lastName: "Nguyen",
  siteName: "callmekathy",
  tagline: "I guarantee the quality of web.",
  email: "khuenguyen.official@gmail.com",
  resumeUrl: "/resume.pdf",
  social: {
    facebook: "https://www.facebook.com/khue.nguyen.986227",
    linkedin: "https://www.linkedin.com/in/khue-nguyen-989493308",
  },
} as const;

export const hireMeMailto = `mailto:${profile.email}?subject=An amazing job opportunity inside!`;

export const hero = {
  intro:
    "I am an English teacher’s assistant based in HCM city. I am keeping it close to heart to look for a chance in the IT industry and to be able to work as a Manual Tester. I just got an ISTQB Foundation Level certificate recently, and more... All in all, I’m ready.",
};

export const aboutMe = {
  paragraphs: [
    "Hello there! I’m Khue, and I work as an English teacher. Undoubtedly, I am proficient in English. Recently, I have a keen interest in technology environment and the software development process. I am particularly drawn to opportunities for learning, communication, and collaboration within teams. Quality assurance is my passion, and I have found my niche in the Software Testing field.",
    "Currently, I am actively seeking opportunities as a Manual Tester, preferably starting with website testing. I am eager for a chance to prove myself and take on new challenges in this domain.",
    "I have acquired fundamental knowledge in Software testing, including ISTQB Foundation Level certification, API Testing using Postman, SQL Foundation, and more. I believe that my proficiency in English can also be a valuable asset in this role.",
  ],
};

export const skills = {
  intro:
    "I have been an English teacher’s assistant at International Schools since 2016. I support foreign teachers, be a connection between teachers and students/parents, and work as a teacher sometimes.",
  items: [
    "Proficient English",
    "ISTQB Foundation",
    "API Testing",
    "SQL Foundation",
    "Jira management",
    "Postman",
    "Figma",
    "Self-learning",
    "Attention to details",
  ],
};

export interface EducationItem {
  degree: string;
  provider: string;
  grade: string;
  date: string;
}

export const education: { intro: string; items: EducationItem[] } = {
  intro:
    "I’m an English Bachelor. I graduated with a 3.8 in GPA (out of 4) from Can Tho University. Recently, I have just obtained an ISTQB Foundation Level Certificate also.",
  items: [
    {
      degree: "IELTS Certification 6.5",
      provider: "IDP Education",
      grade: "6.5",
      date: "Oct 2023 - Dec 2023",
    },
    {
      degree: "ISTQB Foundation Level",
      provider: "Vietnamese Testing Board (VTB)",
      grade: "34/40",
      date: "Jul 2023 - Oct 2023",
    },
    {
      degree: "Bachelor’s English Language",
      provider: "Can Tho University",
      grade: "3.8/4",
      date: "Sep 2012 - Sep 2016",
    },
  ],
};

export const getInTouch = {
  text: "I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you! Thank you and I hope to be a part of your team.",
};

export const sections = [
  { id: "about-me", title: "About me" },
  { id: "experiences-skills", title: "Valuable Skills" },
  { id: "education", title: "Education & Certifications" },
  { id: "get-in-touch", title: "Contact" },
] as const;

export const credit = { name: "Duc Tran", url: "https://ductran.vercel.app/" };
