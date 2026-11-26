import type { Content } from "./types";

export const vi: Content = {
  lang: "vi",
  name: "Nguyễn Khuê",
  role: "Test Consultant",
  nav: [
    { id: "experience", title: "Kinh nghiệm" },
    { id: "how-i-work", title: "Cách mình làm" },
    { id: "skills", title: "Kỹ năng" },
    { id: "certifications", title: "Chứng chỉ" },
    { id: "contact", title: "Liên hệ" },
  ],
  resumeUrl: "/resume-vi.pdf",
  labels: {
    downloadCv: "Tải CV",
    getInTouch: "Liên hệ",
    linkedin: "LinkedIn",
    email: "Email",
    language: "Ngôn ngữ",
    toConfirm: "[cần xác nhận]",
    builtBy: "Xây dựng bởi",
    passed: "passed",
    running: "running",
    grade: "Điểm",
    cv: "CV",
    darkTheme: "Giao diện tối",
    menu: "Các mục",
  },
  hero: {
    status: "Test Consultant · Netcompany · TP. Hồ Chí Minh",
    tagline: "Mình kiểm thử để phần mềm đáng tin cậy.",
    intro:
      "Mình chuyển yêu cầu thành test case rõ ràng, bắt lỗi trước khi người dùng gặp phải và giải thích vấn đề bằng lời dễ hiểu cho lập trình viên lẫn khách hàng. Có chứng chỉ ISTQB, tiếng Anh lưu loát.",
  },
  stats: [
    { value: "2+ năm", label: "Kiểm thử phần mềm" },
    { value: "34/40", label: "ISTQB Foundation" },
    { value: "6.5", label: "IELTS" },
    { value: "8 năm", label: "Giáo dục tiếng Anh" },
  ],
  career: {
    kicker: "Kinh nghiệm",
    title: "Hành trình",
    aside: "Từ lớp học tiếng Anh đến kiểm thử phần mềm.",
    items: [
      {
        period: "10/2016 – 08/2018",
        org: "EMG Education",
        role: "Trợ giảng tiếng Anh tiểu học",
        place: "TP. Hồ Chí Minh",
        status: "passed",
        summary:
          "Hỗ trợ giáo viên nước ngoài tại trường công lập, phiên dịch giữa giáo viên, học sinh và phụ huynh, quản lý hồ sơ lớp.",
      },
      {
        period: "08/2018 – 06/2023",
        org: "Trường Quốc tế Việt Úc",
        role: "Trợ giảng tiếng Anh tiểu học",
        place: "TP. Hồ Chí Minh",
        status: "passed",
        summary:
          "Cầu nối giữa giáo viên nước ngoài, học sinh và phụ huynh; đồng giảng dạy và quản lý lớp.",
      },
      {
        period: "06/2024 – 12/2024",
        org: "Netcompany",
        role: "Manual Test Specialist",
        place: "TP. Hồ Chí Minh, tại văn phòng",
        status: "passed",
        summary: {
          text: "Kiểm thử chức năng và hồi quy ứng dụng web trong nhóm Scrum; quản lý lỗi trên Jira; kiểm tra API bằng Postman.",
          toConfirm: true,
        },
      },
      {
        period: "01/2025 – nay",
        org: "Netcompany",
        role: "Test Consultant",
        place: "Việt Nam, hybrid",
        status: "running",
        summary: {
          text: "Phân tích yêu cầu, thiết kế test, kiểm thử chức năng, hồi quy và API cho khách hàng châu Âu.",
          toConfirm: true,
        },
      },
    ],
    note: "Song song, dạy kèm tiếng Anh 1 kèm 1 từ 2016 đến 2024.",
  },
  howIWork: {
    kicker: "Cách mình làm",
    title: "Hiểu, thiết kế, báo cáo",
    aside: "Mục tiêu tiếp theo: Senior Tester, đi sâu vào phân tích yêu cầu và thiết kế kiểm thử.",
    steps: [
      {
        title: "Hiểu",
        text: {
          text: "Đọc yêu cầu và user story, đặt các câu hỏi còn mở trước khi bắt đầu phát triển.",
          toConfirm: true,
        },
      },
      {
        title: "Thiết kế",
        text: {
          text: "Chuyển thành test case bằng các kỹ thuật như giá trị biên và bảng quyết định, bao phủ những trường hợp quan trọng.",
          toConfirm: true,
        },
      },
      {
        title: "Báo cáo",
        text: {
          text: "Ghi nhận lỗi rõ ràng, tái hiện được và trình bày tình trạng kiểm thử cho lập trình viên lẫn khách hàng bằng tiếng Anh.",
          toConfirm: true,
        },
      },
    ],
  },
  skills: {
    kicker: "Kỹ năng",
    title: "Hộp công cụ",
    groups: [
      {
        label: "Kiểm thử",
        items: [
          "Phân tích yêu cầu",
          "Thiết kế test",
          "Kiểm thử chức năng",
          "Kiểm thử hồi quy",
          "Kiểm thử API",
          "Báo cáo lỗi",
          "Hỗ trợ UAT",
        ],
      },
      { label: "Công cụ", items: ["Jira", "Postman", "SQL", "Figma", "ChatGPT"] },
      {
        label: "Ngôn ngữ",
        items: ["Tiếng Anh · IELTS 6.5", "Tiếng Việt · bản ngữ", "Giao tiếp với khách hàng"],
      },
    ],
  },
  certifications: {
    kicker: "Chứng chỉ",
    title: "Chứng chỉ & học vấn",
    items: [
      {
        name: "ISTQB Certified Tester Foundation Level",
        issuer: "Vietnamese Testing Board",
        date: "10/2023",
        grade: "34/40",
      },
      { name: "IELTS 6.5", issuer: "IDP Education", date: { text: "12/2023", toConfirm: true } },
      { name: "Business Analysis Foundation", issuer: "BAC Vietnam", date: "10/2022" },
      {
        name: "Cử nhân Ngôn ngữ Anh",
        issuer: "Đại học Cần Thơ",
        date: "2012 – 2016",
        grade: "3.8/4",
      },
    ],
  },
  contact: {
    kicker: "Liên hệ",
    title: "Cùng trò chuyện nhé.",
    text: "Bạn có dự án cần kiểm thử kỹ lưỡng, hay chỉ muốn chào hỏi? Hộp thư của mình luôn mở.",
    interest: "Ngoài giờ làm, mình thích khám phá những nơi mới và hát karaoke cùng bạn bè.",
  },
};
