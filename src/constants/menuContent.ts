import { ROUTES } from "./routes";
export const aboutItems = [
  { href: "/docs", title: "Giới thiệu", description: "Tổng quan về MeeJob, sứ mệnh và tầm nhìn của chúng tôi." },
  { href: "/docs/installation", title: "Ứng viên", description: "Hướng dẫn sử dụng MeeJob để tìm kiếm việc làm hiệu quả." },
  { href: "/docs/primitives/typography", title: "Nhà tuyển dụng", description: "Cách đăng tin tuyển dụng và quản lý hồ sơ ứng viên." },
]

export const itJobs = [
  { title: "Software Developer", href: "/jobs/software-developer" },
  { title: "Machine Learning / AI Engineer", href: "/jobs/ml-ai-engineer" },
  { title: "Augmented Reality (AR) Developer", href: "/jobs/ar-developer" },
  { title: "Internet of Things (IoT) Developer", href: "/jobs/iot-developer" },
  { title: "Blockchain Developer", href: "/jobs/blockchain-developer" },
  { title: "DevOps Engineer", href: "/jobs/devops-engineer" },
  { title: "Data Engineer / Scientist / Analyst", href: "/jobs/data-engineer" },
  { title: "Network Engineer / Cyber Security Expert", href: "/jobs/network-engineer" },
  { title: "Cloud Architect", href: "/jobs/cloud-architect" },
  { title: "Mobile App Developer", href: "/jobs/mobile-app-developer" },
  { title: "Game Developer", href: "/jobs/game-developer" },
  { title: "UI/UX Designer", href: "/jobs/ui-ux-designer" },
  { title: "Full Stack Developer", href: "/jobs/full-stack-developer" },
  { title: "Embedded Systems Engineer", href: "/jobs/embedded-systems-engineer" },
  { title: "Robotics Engineer", href: "/jobs/robotics-engineer" },
  { title: "Quantum Computing Specialist", href: "/jobs/quantum-computing-specialist" },
]

export const otherCategories = [
  { title: "Business, Finance", href: "/jobs/business-finance" },
  { title: "Management", href: "/jobs/management" },
  { title: "Manufacturing & Engineering", href: "/jobs/manufacturing-engineering" },
  { title: "Service", href: "/jobs/service" },
  { title: "Design, Creativity", href: "/jobs/design-creativity" },
  { title: "Healthcare", href: "/jobs/healthcare" },
  { title: "Education", href: "/jobs/education" },
  { title: "Retail & E-Commerce", href: "/jobs/retail-ecommerce" },
  { title: "Marketing & Advertising", href: "/jobs/marketing-advertising" },
  { title: "Human Resources", href: "/jobs/human-resources" },
  { title: "Logistics & Supply Chain", href: "/jobs/logistics-supply-chain" },
  { title: "Real Estate", href: "/jobs/real-estate" },
  { title: "Media & Entertainment", href: "/jobs/media-entertainment" },
  { title: "Energy & Utilities", href: "/jobs/energy-utilities" },
  { title: "Legal & Compliance", href: "/jobs/legal-compliance" },
]

export const tools = [
  {
        title: 'Tạo CV',
        icon: '<ScrollText className="w-6 h-6 text-red-500" />',
        description: 'Tạo CV ấn tượng chỉ với thao tác dễ dàng',
        action: 'Tạo ngay',
        href: ROUTES.CREATE_CV
    },
    {
        title: 'Chuẩn hóa CV',
        icon: '<NotebookPen className="w-6 h-6 text-red-500" />',
        description: 'Chuẩn CV hiện có thành định dạng chuyên nghiệp',
        action: 'Chuẩn hóa ngay',
        href: ROUTES.FORMAT_CV
    },
    {
        title: 'Trắc nghiệm tính cách',
        icon: '<Smile className="w-6 h-6 text-red-500" />',
        description: 'Khám phá điểm mạnh và điểm yếu của bạn thông qua trắc nghiệm tính cách.',
        action: 'Kiểm tra',
        href: ROUTES.TEST_CHARACTER
    },
    {
        title: 'Việc làm Fresher',
        icon: '<GraduationCap className="w-6 h-6 text-red-500" />',
        description: 'Đa dạng cơ hội việc làm dành cho Fresher và sinh viên mới ra trường.',
        action: 'Khám phá',
        href: ROUTES.FRESHER_JOBS
    },
    {
        title: 'Câu hỏi phỏng vấn',
        icon: '<MessagesSquare className="w-6 h-6 text-red-500" />',
        description: 'Sẵn sàng cho buổi phỏng vấn với bộ câu hỏi thường gặp.',
        action: 'Xem thêm',
        href: ROUTES.MOCK_INTERVIEW
    },
]

export const hotJobs = [
  { title: "Senior Software Engineer", href: "/jobs/senior-software-engineer" },
  { title: "AI Research Scientist", href: "/jobs/ai-research-scientist" },
  { title: "Cloud Solutions Architect", href: "/jobs/cloud-solutions-architect" },
  { title: "Cybersecurity Specialist", href: "/jobs/cybersecurity-specialist" },
  { title: "Data Science Lead", href: "/jobs/data-science-lead" },
];

export const fresherJobs = [
  { title: "Junior Web Developer", href: "/jobs/junior-web-developer" },
  { title: "Data Analyst Intern", href: "/jobs/data-analyst-intern" },
  { title: "Mobile App Developer Trainee", href: "/jobs/mobile-app-developer-trainee" },
  { title: "UI/UX Design Assistant", href: "/jobs/ui-ux-design-assistant" },
  { title: "DevOps Engineer Intern", href: "/jobs/devops-engineer-intern" },
];