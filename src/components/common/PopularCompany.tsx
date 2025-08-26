import React, {useEffect, useState} from 'react'
import { popularCompany } from '@/constants/popularCompany';
import { Badge } from "@/components/ui/badge"
import { paginationData } from '@/helper/pagination';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

interface Company {
  company: string;
  position: string;
  organization: string;
  location: string;
  skills: string[];
  image: string;
}

const PopularCompany = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const perPage = 8;

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    }
    
    useEffect(() => {
        function paginationCompanies() {
            const { data, total } = paginationData(currentPage, perPage, popularCompany);
            setCompanies(data);
            setTotalPages(Math.ceil(total / perPage));
        }
        paginationCompanies()
    },[currentPage]);

    return (
        <div className='w-full min-h-screen bg-white border border-gray-100 py-4 sm:py-6 px-4 sm:px-6 lg:px-8'>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6 lg:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl text-yellow-400"><Sparkles/></span>
                </div>
                <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--primary-color-website)]">
                        Công Việc <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Phổ Biến</span>
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">Hàng ngàn cơ hội việc làm đang chờ đợi bạn apply</p>
                </div>
            </div>
            
            {/* Jobs Grid - Responsive */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8'>
                {companies.map((job, index) => (
                    <div 
                        key={index}
                        className='flex flex-col bg-white border border-gray-200 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group min-h-[320px] sm:min-h-[350px]'
                    >
                        {/* Company Info Header */}
                        <div className='flex items-center space-x-3 mb-4'>
                            <Image 
                                src={job.image} 
                                alt={`${job.company} Logo`} 
                                width={48}
                                height={48}
                                className='w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-100 flex-shrink-0' 
                            />
                            <div className='min-w-0 flex-1'>
                                <h3 className='font-semibold text-gray-800 group-hover:text-blue-600 transition-colors truncate text-sm sm:text-base'>
                                    {job.company}
                                </h3>
                                <p className='text-xs sm:text-sm text-gray-500 truncate'>{job.organization}</p>
                            </div>
                        </div>

                        {/* Position */}
                        <h2 className='text-base sm:text-lg font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors flex-shrink-0'>
                            {job.position}
                        </h2>

                        {/* Location */}
                        <div className='flex items-center text-gray-600 mb-3 flex-shrink-0'>
                            <svg className='w-4 h-4 mr-2 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                            </svg>
                            <span className='text-xs sm:text-sm truncate'>{job.location}</span>
                        </div>

                        {/* Skills - Takes remaining space */}
                        <div className='flex-1 mb-4'>
                            <p className='text-xs sm:text-sm text-gray-500 mb-2'>Kỹ năng yêu cầu:</p>
                            <div className='flex flex-wrap gap-1 sm:gap-2'>
                                {job.skills.slice(0, 3).map((skill, skillIndex) => (
                                    <Badge
                                        key={skillIndex}
                                        className='px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-base border border-blue-200'
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                                {job.skills.length > 3 && (
                                    <span className='px-2 sm:px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200'>
                                        +{job.skills.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Apply Button - Always at bottom */}
                        <div className='mt-auto'>
                            <Button className='w-full bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base py-2 sm:py-2.5 cursor-pointer'>
                                Apply ngay
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className='flex justify-center'>
                <Pagination>
                    <PaginationContent className='flex-wrap gap-1'>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(currentPage - 1)
                                }}
                                className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : ''} text-sm sm:text-base`}
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    isActive={page === currentPage}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(page)
                                    }}
                                    className='text-sm sm:text-base'
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(currentPage + 1)
                                }}
                                className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} text-sm sm:text-base`}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}

export default PopularCompany