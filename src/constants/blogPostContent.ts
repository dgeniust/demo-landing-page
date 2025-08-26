import { Code, Database, Brain, Shield, FileText} from 'lucide-react';
import { BlogPost } from '@/types/blogPost';
export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "7 kinh nghiệm hữu ích khi làm việc với GIT trong dự án",
      excerpt: "Bài viết được sự cho phép của tác giả Sơn Dương. Git là một công cụ không thể thiếu trong việc quản lý mã nguồn cho các dự án phát triển phần mềm. Tuy nhiên, không phải ai cũng biết cách sử dụng Git một cách hiệu quả...",
      author: "Sơn Dương",
      date: "2024-06-01",
      readTime: "8 phút đọc",
      category: "Git",
      icon: Code,
      featured: true,
      color: "white"
    },
    {
      id: 2,
      title: "Bài tập Python từ cơ bản đến nâng cao (có lời giải)",
      excerpt: "Python là một ngôn ngữ lập trình bậc cao, mã nguồn mở được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau như phát triển web, khoa học dữ liệu, trí tuệ nhân tạo...",
      author: "Minh Hoàng",
      date: "2024-05-28",
      readTime: "12 phút đọc",
      category: "Python",
      icon: Brain,
      featured: false,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Những thực phẩm lập trình viên nên và không nên ăn",
      excerpt: "Dinh dưỡng đóng vai trò rất quan trọng đối với sức khỏe và hiệu suất làm việc của lập trình viên. Khi phải ngồi nhiều giờ trước máy tính, việc duy trì chế độ ăn uống lành mạnh...",
      author: "Dr. Phương",
      date: "2024-05-25",
      readTime: "6 phút đọc",
      category: "Sức khỏe",
      icon: Shield,
      featured: false,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "KICC HCMC x TOPDEV - Bước đệm nâng tầm sự nghiệp cho nhân tài IT Việt Nam",
      excerpt: "Năm 2024, chương trình hợp tác giữa KICC HCMC x TOPDEV sẽ quay trở lại với thông điệp 'Advance your Tech Career in Korean IT Companies' nhằm mang đến cơ hội việc làm tại các công ty công nghệ hàng đầu...",
      author: "TOPDEV Team",
      date: "2024-05-20",
      readTime: "10 phút đọc",
      category: "Sự kiện",
      icon: Database,
      featured: false,
      color: "from-purple-500 to-pink-600"
    }
  ];

export const quickFiles = [
    { name: "git-guide.md", desc: "Hướng dẫn Git chi tiết", icon: Code },
    { name: "python-basics.py", desc: "Cơ bản Python", icon: Brain },
    { name: "health-tips.txt", desc: "Mẹo sức khỏe", icon: Shield },
    { name: "career-path.pdf", desc: "Lộ trình nghề nghiệp", icon: Database },
    { name: "react-components.jsx", desc: "React Components", icon: FileText },
];  