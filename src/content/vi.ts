import type { Content } from "./types";

export const vi: Content = {
  lang: "vi",
  name: "Nguyễn Khuê",
  nav: [
    { id: "about-me", title: "Về mình" },
    { id: "experience", title: "Kinh nghiệm" },
    { id: "skills", title: "Kỹ năng" },
    { id: "education", title: "Học vấn & Chứng chỉ" },
    { id: "get-in-touch", title: "Liên hệ" },
  ],
  resumeUrl: "/resume-vi.pdf",
  labels: {
    downloadCv: "Tải CV",
    email: "Email",
    followMe: "Bạn có thể theo dõi mình tại:",
    grade: "Điểm",
    toConfirm: "[cần xác nhận]",
    builtBy: "Thiết kế & xây dựng bởi",
    language: "Ngôn ngữ",
  },
  hero: {
    greeting: "Xin chào, mình là",
    tagline: "Mình kiểm thử để phần mềm đáng tin cậy.",
    intro:
      "Mình là Test Consultant tại Netcompany. Mình chuyển yêu cầu thành test case rõ ràng, bắt lỗi trước khi người dùng gặp phải và giải thích vấn đề bằng lời dễ hiểu cho lập trình viên lẫn khách hàng. Có chứng chỉ ISTQB, tiếng Anh lưu loát.",
    action: "Liên hệ",
  },
  about: {
    title: "Về mình",
    paragraphs: [
      "Xin chào! Mình là Khuê, Test Consultant tại Netcompany. Mình vào công ty năm 2024 với vị trí Manual Test Specialist, sau tám năm làm trong ngành giáo dục tiếng Anh, và kiểm thử nhanh chóng trở thành công việc mình muốn theo lâu dài.",
      {
        text: "Phần lớn công việc của mình là hiểu một tính năng cần làm gì: đọc yêu cầu, đặt những câu hỏi chưa ai hỏi và thiết kế test bao phủ những trường hợp quan trọng. Mình kiểm thử ứng dụng web và API, báo lỗi rõ ràng và làm việc trực tiếp với khách hàng bằng tiếng Anh.",
        toConfirm: true,
      },
      "Mục tiêu của mình là trở thành Senior Tester, giỏi hơn về phân tích yêu cầu và thiết kế kiểm thử.",
    ],
    interest: "Ngoài giờ làm, mình thích khám phá những nơi mới và hát karaoke cùng bạn bè.",
  },
  experience: {
    title: "Kinh nghiệm",
    items: [
      {
        role: "Test Consultant",
        company: "Netcompany",
        period: "01/2025 – nay",
        place: "Việt Nam, hybrid",
        summary: {
          text: "Phân tích yêu cầu, thiết kế test, kiểm thử chức năng, hồi quy và API cho khách hàng châu Âu.",
          toConfirm: true,
        },
      },
      {
        role: "Manual Test Specialist",
        company: "Netcompany",
        period: "06/2024 – 12/2024",
        place: "TP. Hồ Chí Minh",
        summary: {
          text: "Kiểm thử chức năng và hồi quy ứng dụng web trong nhóm Scrum; quản lý lỗi trên Jira; kiểm tra API bằng Postman.",
          toConfirm: true,
        },
      },
      {
        role: "Trợ giảng & Gia sư tiếng Anh",
        company: "Trường quốc tế & dạy kèm",
        period: "2016 – 2024",
        place: "TP. Hồ Chí Minh",
        summary:
          "Trường Quốc tế Việt Úc (2018 – 2023) và EMG Education (2016 – 2018): phối hợp với giáo viên nước ngoài, làm cầu nối giữa giáo viên, học sinh và phụ huynh. Dạy kèm tiếng Anh 1 kèm 1 trong suốt thời gian này.",
      },
    ],
  },
  skills: {
    title: "Kỹ năng",
    intro:
      "Những gì mình mang đến cho đội: phân tích cẩn thận, thiết kế test có cấu trúc và giao tiếp rõ ràng bằng tiếng Anh.",
    items: [
      "Phân tích yêu cầu",
      "Thiết kế test",
      "Kiểm thử chức năng & hồi quy",
      "Kiểm thử API (Postman)",
      "SQL",
      "Jira",
      "Báo cáo lỗi",
      "Giao tiếp với khách hàng bằng tiếng Anh",
      "Tỉ mỉ, chú ý chi tiết",
    ],
  },
  education: {
    title: "Học vấn & Chứng chỉ",
    intro:
      "Có chứng chỉ ISTQB Foundation, đã học khoá Business Analysis Foundation và tốt nghiệp Cử nhân Ngôn ngữ Anh (GPA 3.8/4) tại Đại học Cần Thơ.",
    items: [
      {
        degree: "ISTQB Foundation Level",
        provider: "Vietnamese Testing Board (VTB)",
        date: "10/2023",
        grade: "34/40",
      },
      {
        degree: "IELTS 6.5",
        provider: "IDP Education",
        date: { text: "12/2023", toConfirm: true },
      },
      {
        degree: "Business Analysis Foundation",
        provider: "BAC Vietnam",
        date: "10/2022",
      },
      {
        degree: "Cử nhân Ngôn ngữ Anh",
        provider: "Đại học Cần Thơ",
        date: "2012 – 2016",
        grade: "3.8/4",
      },
    ],
  },
  contact: {
    title: "Liên hệ",
    text: "Bạn có dự án cần kiểm thử kỹ lưỡng, hay chỉ muốn chào hỏi? Hộp thư của mình luôn mở, mình sẽ phản hồi sớm.",
    action: "Gửi lời chào",
  },
};
