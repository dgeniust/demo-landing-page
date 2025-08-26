import React from 'react';
import { Calendar, Clock, User, ArrowRight, Code, Bell, Share2 } from 'lucide-react';
import { blogPosts } from '@/constants/blogPostContent';
import Image from 'next/image';
// Type definitions
interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoCardProps {
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
  description: string;
  href: string;
  cta: string;
  background?: React.ReactNode;
  className?: string;
  author?: string;
  date?: string;
  readTime?: string;
  category: string;
  featured?: boolean;
}



// Bento Grid Components
const BentoGrid: React.FC<BentoGridProps> = ({ children, className = "" }) => {
  return (
    <div className={`grid w-full auto-rows-[minmax(0,1fr)] grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  );
};

const BentoCard: React.FC<BentoCardProps> = ({ 
  Icon, 
  name, 
  description, 
  cta, 
  background, 
  className = "",
  author,
  date,
  readTime,
  category,
  featured = false 
}) => (
  <div className={`group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-300 ${className}`}>
    <div className="absolute inset-0 transition-all duration-300 group-hover:scale-105">
      {background}
    </div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 group-hover:-translate-y-1">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-6 w-6 text-blue-600" />
        {featured && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
            ⭐ Nổi bật
          </span>
        )}
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
      <p className="max-w-lg text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
      
      {(author || date || readTime) && (
        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500 dark:text-gray-400">
          {author && (
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {author}
            </span>
          )}
          {date && (
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(date).toLocaleDateString('vi-VN')}
            </span>
          )}
          {readTime && (
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime}
            </span>
          )}
        </div>
      )}
    </div>

    <div className="pointer-events-none z-10 flex transform-gpu transition-all duration-300 group-hover:-translate-y-1">
      <button className="pointer-events-auto inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);


const BlogBentoGrid: React.FC = () => {

  const features = [
    // Featured post - takes up more space
    {
      Icon: blogPosts[0].icon,
      name: blogPosts[0].title,
      description: blogPosts[0].excerpt,
      href: "#",
      cta: "Đọc bài viết",
      className: "col-span-3 lg:col-span-2 row-span-2 flex items-start justify-end w-full h-full",
      author: blogPosts[0].author,
      date: blogPosts[0].date,
      readTime: blogPosts[0].readTime,
      category: blogPosts[0].category,
      featured: true,
      background: (
        <div className={`absolute top-[-60] ${blogPosts[0].color} dark:opacity-20`}>
          <Image src="https://media.datacamp.com/cms/google/ad_4nxfwc-c_s-7te80ftxbdcdntu0wizs1zybc_dmbiwxup-kmy4xhlrh4oxdks62yro-qtk0qcu7aipvzvhgn69rob3f-hjycrazhyuynshzyqqngjs_gckkjgeoecgir411cykc7lnol7wtuhk_-ethdyyamq.png" alt='' width={1080} height={1080}/>
        </div>
      ),
    },

    // Regular blog posts
    ...blogPosts.slice(1).map(post => ({
      Icon: post.icon,
      name: post.title,
      description: post.excerpt,
      href: "#",
      cta: "Đọc thêm",
      className: "col-span-3 lg:col-span-1",
      author: post.author,
      date: post.date,
      readTime: post.readTime,
      category: post.category,
      background: (
        <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-5 dark:opacity-10`}>
          <div className="absolute bottom-0 right-0 opacity-20">
            <post.icon className="h-24 w-24 text-current" />
          </div>
        </div>
      ),
    })),

    // Additional features
    {
      Icon: Bell,
      name: "Thông báo mới",
      description: "Nhận thông báo về các bài viết mới và cập nhật từ cộng đồng",
      href: "#",
      cta: "Đăng ký",
      className: "col-span-3 lg:col-span-1",
      category: "Tiện ích",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600 opacity-5 dark:opacity-10">
          <div className="absolute top-4 right-4">
            <div className="relative">
              <Bell className="h-8 w-8 text-yellow-500 opacity-30" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      ),
    },

    {
      Icon: Share2,
      name: "Chia sẻ & Tương tác",
      description: "Kết nối với cộng đồng lập trình viên, chia sẻ kinh nghiệm và học hỏi",
      href: "#",
      cta: "Tham gia",
      className: "col-span-3 lg:col-span-1",
      category: "Cộng đồng",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="h-4 w-4 bg-current rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                <span className="text-2xl text-yellow-400"><Code/></span>
                </div>
                <div>
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                    Blog Mee<span className="text-[var(--primary-color-website)]">Job</span>
                </h1>
                <p className="text-black text-sm mt-1">Cập nhật các tin tức mới nhất về thị trường việc làm quanh thế giới</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BentoGrid className="auto-rows-[minmax(300px,auto)]">
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%) }
          100% { transform: translateX(-100%) }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .hover:pause:hover .animate-marquee {
          animation-play-state: paused;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogBentoGrid;