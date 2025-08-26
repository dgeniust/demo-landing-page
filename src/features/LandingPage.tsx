'use client';
import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Users, TrendingUp, ArrowRight, Star, ScrollText, NotebookPen, Smile, GraduationCap, MessagesSquare, Play } from 'lucide-react';
import { MarqueeScrolling } from "@/components/common/MarqueeScrolling"
import { BlurFade } from "@/components/magicui/blur-fade";
import {ROUTES} from '@/constants/routes';
import Link from 'next/link';
import CarouselContent from '@/components/common/CarouselContent';
import PopularCompany from '@/components/common/PopularCompany';
import BlogContent from '@/components/common/BlogContent';
import { reviews } from '@/constants/marqueeReview';
import { Button } from '@/components/ui/button';
// import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
const LandingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState('');

    const popularSearches = [
        'IT Developer', 'Marketing Manager', 'Data Analyst', 'UI/UX Designer', 'Business Analyst',
    ];
    const actionPreview = [
        {
            title: 'Tạo CV',
            icon: <ScrollText className="w-6 h-6 text-red-500" />,
            description: 'Tạo CV ấn tượng chỉ với thao tác dễ dàng',
            action: 'Tạo ngay',
            href: ROUTES.CREATE_CV
        },
        {
            title: 'Chuẩn hóa CV',
            icon: <NotebookPen className="w-6 h-6 text-red-500" />,
            description: 'Chuẩn CV hiện có thành định dạng chuyên nghiệp',
            action: 'Chuẩn hóa ngay',
            href: ROUTES.FORMAT_CV
        },
        {
            title: 'Trắc nghiệm tính cách',
            icon: <Smile className="w-6 h-6 text-red-500" />,
            description: 'Khám phá điểm mạnh và điểm yếu của bạn thông qua trắc nghiệm tính cách.',
            action: 'Kiểm tra',
            href: ROUTES.TEST_CHARACTER
        },
        {
            title: 'Việc làm Fresher',
            icon: <GraduationCap className="w-6 h-6 text-red-500" />,
            description: 'Đa dạng cơ hội việc làm dành cho Fresher và sinh viên mới ra trường.',
            action: 'Khám phá',
            href: ROUTES.FRESHER_JOBS
        },
        {
            title: 'Câu hỏi phỏng vấn',
            icon: <MessagesSquare className="w-6 h-6 text-red-500" />,
            description: 'Sẵn sàng cho buổi phỏng vấn với bộ câu hỏi thường gặp.',
            action: 'Xem thêm',
            href: ROUTES.MOCK_INTERVIEW
        },
    ]

    const functionReview = [
        {
            title: 'Tìm kiếm thông minh',
            description: 'AI matching công việc phù hợp.',
            icon: <Search className="w-6 h-6 text-[#47C269]" />,
        },
        {
            title: 'Cộng đồng lớn',
            description: '100K+ ứng viên và NTD.',
            icon: <Users className="w-6 h-6 text-[#47C269]" />,
        },
        {
            title: 'Tỷ lệ thành công cao',
            description: '95% ứng viên tìm được việc.',
            icon: <Smile className="w-6 h-6 text-[#47C269]" />,
        },
        {
            title: 'Việc làm chất lượng',
            description: 'Từ các công ty uy tín.',
            icon: <Briefcase className="w-6 h-6 text-[#47C269]" />,
        }
    ]
    const [open, setOpen] = useState(false)
    
    return (
        <div className="min-h-fit w-full">
        {/* Hero Section */}
            <main className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
                    <div className="text-center">
                        {/* Badge */}
                        <BlurFade delay={0.25} inView>
                            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8">
                                <Star className="w-4 h-4 mr-2" />
                                #1 Nền tảng tìm kiếm việc làm tại Việt Nam
                            </div>
                        </BlurFade>

                        {/* Main Heading */}
                        <BlurFade delay={0.25} inView>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                Tìm kiếm công việc
                                <br />
                                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                    mơ ước của bạn
                                </span>
                            </h1>
                        </BlurFade>
                        {/* Subtitle */}
                        <BlurFade delay={0.25} inView>
                            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Kết nối với hàng nghìn cơ hội việc làm từ các công ty hàng đầu. 
                            Bắt đầu hành trình sự nghiệp của bạn ngay hôm nay.
                            </p>         
                        </BlurFade>

                        {/* Search Box */}
                        <BlurFade delay={0.5} inView>
                            <div className="max-w-4xl mx-auto mb-12">
                                <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200/50">
                                    <div className="flex flex-col md:flex-row gap-4">
                                    {/* Job Search Input */}
                                    <div className="flex-1 flex items-center space-x-3 bg-gray-50 rounded-xl px-4 py-3">
                                        <Search className="w-5 h-5 text-gray-400" />
                                        <input
                                        type="text"
                                        placeholder="Tìm kiếm công việc, vị trí..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                                        />
                                    </div>

                                    {/* Location Input */}
                                    <div className="flex-1 flex items-center space-x-3 bg-gray-50 rounded-xl px-4 py-3">
                                        <MapPin className="w-5 h-5 text-gray-400" />
                                        <input
                                        type="text"
                                        placeholder="Thành phố, khu vực..."
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                                        />
                                    </div>

                                    {/* Search Button */}
                                    <button 
                                        className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center space-x-2"
                                        style={{
                                            background: 'linear-gradient(135deg, var(--primary-color-website), #059669)'
                                        }}
                                    >
                                        <span>Tìm kiếm</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </BlurFade>

                            {/* Popular Searches */}
                            <div className="mb-16">
                                <p className="text-gray-600 mb-4">Tìm kiếm phổ biến:</p>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {popularSearches.map((search, index) => (
                                    <button
                                        key={index}
                                        className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:border-green-300 hover:text-green-600 transition-all duration-300"
                                    >
                                        {search}
                                    </button>
                                    ))}
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                <div className="text-center">
                                    <div 
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                                        style={{
                                            background: 'linear-gradient(135deg, var(--primary-color-website), #10b981)'
                                        }}
                                    >
                                    <Briefcase className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
                                    <div className="text-gray-600">Việc làm mới mỗi tháng</div>
                                </div>
                                <div className="text-center">
                                    <div 
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                                        style={{
                                            background: 'linear-gradient(135deg, var(--primary-color-website), #059669)'
                                        }}
                                    >
                                    <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">100,000+</div>
                                    <div className="text-gray-600">Ứng viên tin tương</div>
                                </div>
                                <div className="text-center">
                                    <div 
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                                        style={{
                                            background: 'linear-gradient(135deg, var(--primary-color-website), #0d9488)'
                                        }}
                                    >
                                    <TrendingUp className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                                    <div className="text-gray-600">Tỷ lệ thành công</div>
                                </div>
                            </div>
                    </div>
                </div>
            </main>
            <div className='w-full h-full mt-8'>
                <MarqueeScrolling reviews={reviews}/>
            </div>
            <div className="w-full bg-gray-50 mt-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border border-gray-200/50 p-4">
                    {actionPreview.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl shadow-sm bg-white hover:shadow-md transition"
                    >
                        <div className="mb-3 text-primary">
                        {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--primary-color-wesite)] mb-2">
                        {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {item.description}
                        </p>
                        <Link
                        className="text-red-500 font-medium hover:underline hover:italic flex items-center"
                        href={item.href}
                        >
                        <span>{item.action}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                    ))}
                </div>
                </div>


            <div className='w-full h-fit bg-gray-50 mt-8'>
                <CarouselContent />
            </div>
            <div className='w-full h-fit bg-gray-50 mt-8'>
                <PopularCompany />
            </div>
            {/* Why Choose Us Section - Responsive + Polished */}
            <div className="w-full bg-white py-16 sm:py-20">
            <div className="h-full mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
                <BlurFade delay={0.5} inView>
                {/* Label */}
                <div className="flex items-center justify-center">
                    <div className="inline-flex items-center px-4 py-2 bg-[#47C269]/10 text-[#47C269] rounded-full text-sm font-medium mb-8">
                    <Star className="w-4 h-4 mr-2" />
                    Tại sao chọn MeeJob?
                    </div>
                </div>

                {/* Grid 2 cột trên desktop, 1 cột trên mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full h-full">
                    {/* Left side - Features */}
                    <div className="relative order-2 lg:order-1">
                    <div className="relative z-10 w-full sm:w-[80%] mx-auto animate-fadeIn">
                        <div className="bg-gradient-to-br from-[#47C269]/10 to-[#47C269]/5 rounded-3xl p-6 sm:p-8 border border-[#47C269]/20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {functionReview.map((item, index) => (
                            <div
                                className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
                                key={index}
                            >
                                <div className="w-12 h-12 bg-[#47C269]/10 rounded-xl flex items-center justify-center mb-4">
                                {item.icon}
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                                {item.title}
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                {item.description}
                                </p>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>

                    {/* Decorative */}
                    <div className="absolute -top-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 bg-[#47C269]/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-[#47C269]/15 rounded-full blur-xl"></div>
                    </div>

                    {/* Right side - Content */}
                    <div className="order-1 lg:order-2 space-y-8">
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Nền tảng tuyển dụng
                        <span className="block text-[#47C269]">hàng đầu Việt Nam</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        MeeJob kết nối ứng viên tài năng với các cơ hội nghề nghiệp tuyệt vời từ hàng nghìn doanh nghiệp uy tín. Chúng tôi cam kết mang đến trải nghiệm tìm kiếm việc làm hiệu quả và chuyên nghiệp nhất.
                        </p>
                    </div>

                    {/* Feature list */}
                    <div className="space-y-5">
                        {[
                        {
                            title: "Công nghệ AI tiên tiến",
                            desc: "Hệ thống gợi ý việc làm thông minh dựa trên kỹ năng và kinh nghiệm của bạn",
                        },
                        {
                            title: "Mạng lưới doanh nghiệp rộng lớn",
                            desc: "Hợp tác với hơn 10,000+ công ty từ startup đến tập đoàn đa quốc gia",
                        },
                        {
                            title: "Hỗ trợ toàn diện",
                            desc: "Từ tạo CV, luyện phỏng vấn đến tư vấn định hướng nghề nghiệp",
                        },
                        ].map((f, i) => (
                        <div className="flex items-start space-x-4" key={i}>
                            <div className="flex-shrink-0 w-8 h-8 bg-[#47C269]/10 rounded-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#47C269] rounded-full"></div>
                            </div>
                            <div>
                            <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">
                                {f.title}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base">
                                {f.desc}
                            </p>
                            </div>
                        </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#47C269] text-white rounded-xl hover:bg-[#47C269]/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base">
                        <span>Tìm việc ngay</span>
                        <ArrowRight className="w-5 h-5" />
                        </button>

                        <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#47C269] text-[#47C269] rounded-xl hover:bg-[#47C269] hover:text-white transition-all duration-300 font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base">
                        <span>Tìm hiểu thêm</span>
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-gray-200">
                        <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-[#47C269] mb-1">50K+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Việc làm mới</div>
                        </div>
                        <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-[#47C269] mb-1">100K+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Ứng viên</div>
                        </div>
                        <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-[#47C269] mb-1">95%</div>
                        <div className="text-xs sm:text-sm text-gray-600">Tỷ lệ thành công</div>
                        </div>
                    </div>
                    </div>
                </div>
                </BlurFade>
            </div>
            </div>

            <div className='w-full h-fit bg-gray-50 mt-8'>
                <BlogContent />
            </div>
            {/* CTA Section */}
            <section className="py-15 bg-green-600 mt-4">
                <div className="w-full mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Sẵn sàng tìm công việc mới?
                    </h2>
                    <p className="text-xl text-green-100 mb-8">
                        Tạo hồ sơ của bạn ngay hôm nay và khám phá hàng ngàn cơ hội việc làm
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-white text-green-600 px-8 py-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                            <span>Tạo hồ sơ miễn phí</span>
                        </Button>
                        <Dialog>
                            <form>
                                <DialogTrigger asChild>
                                    <Button  onClick={()=> setOpen(true)} className="border text-white bg-transparent px-8 py-6 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center space-x-2 cursor-pointer">
                                        <Play />
                                        <span>Xem video giới thiệu</span>
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[800px]">
                                <DialogHeader >
                                    <DialogTitle className='text-center text-2xl font-bold'>Chào mừng bạn đến với Mee<span className='text-green-600'>Job</span></DialogTitle>
                                    <DialogDescription className='text-center'>
                                    Please follow the instructions below to understand what is Mee<span className='text-green-600'>Job</span> and how to use it effectively.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4">
                                    <HeroVideoDialog
                                        className="block dark:hidden"
                                        animationStyle="from-center"
                                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                                        thumbnailAlt="Hero Video"
                                    />
                                    <HeroVideoDialog
                                        className="hidden dark:block"
                                        animationStyle="from-center"
                                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                                        thumbnailAlt="Hero Video"
                                    />
                                </div>
                                </DialogContent>
                            </form>
                        </Dialog>
                    </div>
                </div>
            </section>      
            
            <style jsx>{`
            @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
            }
            
            .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
            }
            `}</style>
        </div>
    );
};

export default LandingPage;