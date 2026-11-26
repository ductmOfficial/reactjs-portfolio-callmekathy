// @ts-check
// The CV in both languages. A string is confirmed; { text, toConfirm: true } prints with a
// "[to confirm]" mark until Khue confirms it. Edit here, then run `pnpm cv`.

/** @typedef {string | { text: string; toConfirm: true }} Line */

export const shared = {
  name: "Khue Nguyen",
  email: "khuenguyen.official@gmail.com",
  linkedin: "linkedin.com/in/khue-nguyen-989493308",
  website: "callmekathy.vercel.app",
};

/** @param {string} text @returns {Line} */
const unconfirmed = (text) => ({ text, toConfirm: true });

export const cv = {
  en: {
    file: "resume-en.pdf",
    lang: "en",
    name: "Khue Nguyen",
    title: "Test Consultant · Manual & API Testing",
    toConfirm: "[to confirm]",
    headings: {
      summary: "Summary",
      experience: "Experience",
      skills: "Skills",
      certifications: "Certifications & Education",
    },
    summary:
      "Test Consultant at Netcompany with over two years in software testing, ISTQB Foundation certified. I turn requirements into clear, well-structured test cases, find the gaps early, and explain issues plainly to developers and clients. Fluent English (IELTS 6.5) from eight years in international schools makes client-facing work a strength. Next goal: Senior Tester, going deeper into requirements analysis and test design.",
    experience: [
      {
        company: "Netcompany",
        role: "Test Consultant",
        period: "Jan 2025 – Present",
        place: "Vietnam, hybrid",
        bullets: [
          unconfirmed(
            "Analyse user stories and acceptance criteria with business analysts and clarify open questions before development starts",
          ),
          unconfirmed(
            "Design test scenarios and test cases using equivalence partitioning, boundary values and decision tables",
          ),
          unconfirmed("Run functional, regression and API tests (Postman) and check data with SQL"),
          unconfirmed(
            "Report and track defects in Jira, and present test status to European clients in English",
          ),
          unconfirmed("Support clients during user acceptance testing"),
        ],
      },
      {
        company: "Netcompany",
        role: "Manual Test Specialist",
        period: "Jun 2024 – Dec 2024",
        place: "Ho Chi Minh City, on-site",
        bullets: [
          unconfirmed(
            "Executed functional and regression test cases for web applications in Scrum teams",
          ),
          unconfirmed("Logged clear, reproducible defects in Jira and verified fixes"),
          unconfirmed(
            "Tested REST APIs with Postman and verified results in the database with SQL",
          ),
          unconfirmed("Took part in sprint planning, refinement and review meetings"),
        ],
      },
      {
        company: "Vietnam Australia International School · EMG Education · Freelance",
        role: "English Teaching Assistant & Tutor",
        period: "2016 – 2024",
        place: "Ho Chi Minh City",
        bullets: [
          "VAS (2018 – 2023) and EMG Education (2016 – 2018): worked alongside foreign teachers as the link between teachers, students and parents, co-taught lessons and handled class management",
          "Freelance 1:1 English tutor (2016 – 2024): tailored lessons and materials to each student",
        ],
      },
    ],
    skills: [
      {
        label: "Testing",
        items: [
          "Requirements analysis, test design techniques, functional and regression testing, API testing, defect reporting, UAT support",
          unconfirmed("Exploratory testing"),
        ],
      },
      {
        label: "Tools",
        items: [
          "Jira, Postman, SQL, Figma, ChatGPT",
          unconfirmed("Confluence, Azure DevOps, TestRail or others in use"),
        ],
      },
      { label: "Languages", items: ["English (IELTS 6.5), Vietnamese (native)"] },
    ],
    certifications: [
      {
        name: "ISTQB Certified Tester Foundation Level",
        detail: "Vietnamese Testing Board (VTB) · Oct 2023 · #vtb-fl-20231394",
      },
      { name: "IELTS 6.5", detail: "IDP Education · Dec 2023" },
      { name: "Business Analysis Foundation", detail: "BAC Vietnam · Oct 2022" },
      { name: "B.A. English Language", detail: "Can Tho University · 2012 – 2016 · GPA 3.8/4" },
    ],
  },
  vi: {
    file: "resume-vi.pdf",
    lang: "vi",
    name: "Nguyễn Khuê",
    title: "Test Consultant · Kiểm thử thủ công & API",
    toConfirm: "[cần xác nhận]",
    headings: {
      summary: "Giới thiệu",
      experience: "Kinh nghiệm",
      skills: "Kỹ năng",
      certifications: "Chứng chỉ & Học vấn",
    },
    summary:
      "Test Consultant tại Netcompany với hơn hai năm kinh nghiệm kiểm thử phần mềm, có chứng chỉ ISTQB Foundation. Tôi chuyển yêu cầu thành các test case rõ ràng, có cấu trúc, phát hiện thiếu sót từ sớm và trình bày vấn đề dễ hiểu cho lập trình viên lẫn khách hàng. Tiếng Anh lưu loát (IELTS 6.5) sau tám năm làm việc ở trường quốc tế là thế mạnh khi làm việc trực tiếp với khách hàng. Mục tiêu tiếp theo: Senior Tester, đi sâu vào phân tích yêu cầu và thiết kế kiểm thử.",
    experience: [
      {
        company: "Netcompany",
        role: "Test Consultant",
        period: "01/2025 – nay",
        place: "Việt Nam, hybrid",
        bullets: [
          unconfirmed(
            "Phân tích user story và tiêu chí chấp nhận cùng BA, làm rõ các điểm còn mở trước khi phát triển",
          ),
          unconfirmed(
            "Thiết kế kịch bản và test case bằng phân vùng tương đương, giá trị biên và bảng quyết định",
          ),
          unconfirmed("Kiểm thử chức năng, hồi quy và API (Postman), kiểm tra dữ liệu bằng SQL"),
          unconfirmed(
            "Báo cáo và theo dõi lỗi trên Jira, trình bày tình trạng kiểm thử cho khách hàng châu Âu bằng tiếng Anh",
          ),
          unconfirmed("Hỗ trợ khách hàng trong giai đoạn kiểm thử chấp nhận (UAT)"),
        ],
      },
      {
        company: "Netcompany",
        role: "Manual Test Specialist",
        period: "06/2024 – 12/2024",
        place: "TP. Hồ Chí Minh, tại văn phòng",
        bullets: [
          unconfirmed("Thực thi test case chức năng và hồi quy cho ứng dụng web trong nhóm Scrum"),
          unconfirmed("Ghi nhận lỗi rõ ràng, tái hiện được trên Jira và kiểm tra lại sau khi sửa"),
          unconfirmed("Kiểm thử REST API bằng Postman và đối chiếu dữ liệu bằng SQL"),
          unconfirmed("Tham gia sprint planning, refinement và review"),
        ],
      },
      {
        company: "Trường Quốc tế Việt Úc · EMG Education · Tự do",
        role: "Trợ giảng & Gia sư tiếng Anh",
        period: "2016 – 2024",
        place: "TP. Hồ Chí Minh",
        bullets: [
          "Trường Quốc tế Việt Úc (2018 – 2023) và EMG Education (2016 – 2018): phối hợp với giáo viên nước ngoài, làm cầu nối giữa giáo viên, học sinh và phụ huynh, đồng giảng dạy và quản lý lớp",
          "Gia sư tiếng Anh 1 kèm 1 (2016 – 2024): thiết kế bài học và tài liệu theo từng học viên",
        ],
      },
    ],
    skills: [
      {
        label: "Kiểm thử",
        items: [
          "Phân tích yêu cầu, kỹ thuật thiết kế test, kiểm thử chức năng và hồi quy, kiểm thử API, báo cáo lỗi, hỗ trợ UAT",
          unconfirmed("Kiểm thử khám phá"),
        ],
      },
      {
        label: "Công cụ",
        items: [
          "Jira, Postman, SQL, Figma, ChatGPT",
          unconfirmed("Confluence, Azure DevOps, TestRail hoặc công cụ khác"),
        ],
      },
      { label: "Ngôn ngữ", items: ["Tiếng Anh (IELTS 6.5), Tiếng Việt (bản ngữ)"] },
    ],
    certifications: [
      {
        name: "ISTQB Certified Tester Foundation Level",
        detail: "Vietnamese Testing Board (VTB) · 10/2023 · #vtb-fl-20231394",
      },
      { name: "IELTS 6.5", detail: "IDP Education · 12/2023" },
      { name: "Business Analysis Foundation", detail: "BAC Vietnam · 10/2022" },
      { name: "Cử nhân Ngôn ngữ Anh", detail: "Đại học Cần Thơ · 2012 – 2016 · GPA 3.8/4" },
    ],
  },
};
