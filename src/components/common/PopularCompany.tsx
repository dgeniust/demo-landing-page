"use client";

import React, { useEffect, useState } from "react";
import { popularCompany } from "@/constants/popularCompany";
import { Badge } from "@/components/ui/badge";
import { paginationData } from "@/helper/pagination";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

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
  };

  useEffect(() => {
    function paginationCompanies() {
      const { data, total } = paginationData(
        currentPage,
        perPage,
        popularCompany
      );
      setCompanies(data);
      setTotalPages(Math.ceil(total / perPage));
    }
    paginationCompanies();
  }, [currentPage]);

  return (
    <section className="w-full min-h-screen bg-white border-t border-gray-100 py-8 sm:py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8 lg:mb-12">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-50">
            <Sparkles className="text-yellow-500 w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--primary-color-website)]">
              Công Việc{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                Phổ Biến
              </span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-1">
              Hàng ngàn cơ hội việc làm đang chờ đợi bạn apply
            </p>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {companies.map((job, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer group min-h-[340px]"
            >
              {/* Company Info */}
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={job.image}
                  alt={`${job.company} Logo`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border border-gray-200"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 truncate">
                    {job.company}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">
                    {job.organization}
                  </p>
                </div>
              </div>

              {/* Position */}
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {job.position}
              </h2>

              {/* Location */}
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <svg
                  className="w-4 h-4 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="truncate">{job.location}</span>
              </div>

              {/* Skills */}
              <div className="flex-1 mb-4">
                <p className="text-xs text-gray-500 mb-2">Kỹ năng yêu cầu:</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.slice(0, 3).map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs border border-blue-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {job.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">
                      +{job.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Apply Button */}
              <div className="mt-auto">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base py-2">
                  Apply ngay
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <Pagination>
            <PaginationContent className="flex-wrap gap-2">
              <PaginationItem>
                <PaginationPrevious
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }}
                  className={`${
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }`}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={page === currentPage}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page);
                      }}
                      className="text-sm sm:text-base"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }}
                  className={`${
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default PopularCompany;
