'use client';
import React, {useState, useEffect} from 'react'
import { Briefcase, Menu, X} from 'lucide-react';
import { Menu as MenuComponent } from '@/components/common/Menu';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const Header = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        router.prefetch('/login');
        router.prefetch('/register');
    },[router]);
    return (
        <div className='w-full h-full bg-white shadow-md'>
            {/* Header */}
            <header className="relative z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4 w-full">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-[var(--primary-color-website)] rounded-xl flex items-center justify-center">
                                <Briefcase className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex items-center justify-center p-2">
                                <Link href='/' className="text-2xl font-bold">
                                    <span className="text-black">Mee</span>
                                    <span style={{ color: 'var(--primary-color-website)' }}>Job</span>
                                </Link>
                            </div>
                        </div>

                        <MenuComponent/>

                        {/* Auth Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Link className="px-4 py-2 bg-white text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl" href='/login'>Đăng nhập</Link>
                            <Link className="px-6 py-2 bg-[var(--primary-color-website)] text-white rounded-lg hover:bg-green-600 font-medium shadow-lg hover:shadow-xl" href='/register'>Đăng ký</Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-200">
                            <div className="flex flex-col space-y-4">
                                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Tìm việc làm</a>
                                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Công ty</a>
                                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Cẩm nang nghề nghiệp</a>
                                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Liên hệ</a>
                                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                                <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium text-left">
                                    Đăng nhập
                                </button>
                                <button className="px-4 py-2 bg-[var(--primary-color-website)] text-white rounded-lg font-medium">
                                    Đăng ký
                                </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}

export default Header