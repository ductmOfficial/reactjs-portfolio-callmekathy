// Facts that read the same in every language.

export const profile = {
  firstName: "Khue",
  lastName: "Nguyen",
  siteName: "callmekathy",
  email: "khuenguyen.official@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/khue-nguyen-989493308",
  },
} as const;

export const contactMailto = `mailto:${profile.email}?subject=An amazing job opportunity inside!`;

export const credit = { name: "Duc Tran", url: "https://ductran.vercel.app/" };
