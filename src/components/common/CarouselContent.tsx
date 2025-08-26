import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Bookmark, Star, Users, Map, Building2 } from 'lucide-react';
import Image from 'next/image';

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  logo: string;
  companyName: string;
  positions: string;
  location: string;
  employees: string;
  rating: number;
  link: string;
}

const CarouselContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData: CarouselItem[] = [
    {
      id: 1,
      title: "Công ty Công nghệ thông tin VNPT",
      subtitle: "Dẫn đầu chuyển đổi số",
      description: "Công ty hàng đầu trong lĩnh vực công nghệ thông tin và chuyển đổi số tại Việt Nam, cung cấp các giải pháp toàn diện cho doanh nghiệp.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop",
      logo: "🔷",
      companyName: "VNPT-IT",
      positions: "12 vị trí",
      location: "Hà Nội, TP.HCM",
      employees: "5000+",
      rating: 4.5,
      link: "#"
    },
    {
      id: 2,
      title: "Vietcombank",
      subtitle: "Ngân hàng số 1 Việt Nam",
      description: "Ngân hàng thương mại cổ phần hàng đầu với hệ thống chi nhánh rộng khắp và dịch vụ tài chính toàn diện.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      logo: "🟢",
      companyName: "VCB",
      positions: "8 vị trí",
      location: "Toàn quốc",
      employees: "25000+",
      rating: 4.8,
      link: "#"
    },
    {
      id: 3,
      title: "FPT Software",
      subtitle: "Công nghệ thay đổi cuộc sống",
      description: "Công ty phần mềm lớn nhất Việt Nam, cung cấp dịch vụ chuyển đổi số và phát triển phần mềm cho thị trường quốc tế.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
      logo: "🟠",
      companyName: "FPT",
      positions: "25 vị trí",
      location: "Hà Nội, Đà Nẵng, TP.HCM",
      employees: "30000+",
      rating: 4.6,
      link: "#"
    },
    {
      id: 4,
      title: "Tập đoàn Vingroup",
      subtitle: "Kiến tạo tương lai",
      description: "Tập đoàn kinh tế tư nhân đa ngành lớn nhất Việt Nam với các lĩnh vực bất động sản, công nghiệp, dịch vụ.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=400&fit=crop",
      logo: "🔴",
      companyName: "Vingroup",
      positions: "15 vị trí",
      location: "Hà Nội, TP.HCM",
      employees: "50000+",
      rating: 4.7,
      link: "#"
    },
    {
      id: 5,
      title: "Shopee Việt Nam",
      subtitle: "Nền tảng thương mại điện tử",
      description: "Nền tảng thương mại điện tử hàng đầu Đông Nam Á, kết nối người bán và người mua trên toàn khu vực.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      logo: "🟡",
      companyName: "Shopee",
      positions: "20 vị trí",
      location: "TP.HCM, Hà Nội",
      employees: "8000+",
      rating: 4.4,
      link: "#"
    },
    {
      id: 6,
      title: "Grab Vietnam",
      subtitle: "Siêu ứng dụng số 1",
      description: "Nền tảng siêu ứng dụng cung cấp dịch vụ đa dạng từ giao thông, giao hàng đến thanh toán số.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
      logo: "🟣",
      companyName: "Grab",
      positions: "18 vị trí",
      location: "TP.HCM, Hà Nội",
      employees: "3000+",
      rating: 4.3,
      link: "#"
    }
  ];

  const [itemsPerView, setItemsPerView] = useState(3); // mặc định 3 cho desktop
  // cập nhật itemsPerView theo screen width
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);      // mobile
      else if (window.innerWidth < 1024) setItemsPerView(2); // tablet
      else setItemsPerView(3);                              // desktop
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxSlide = Math.ceil(carouselData.length / itemsPerView) - 1;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) > maxSlide ? 0 : prev + 1);
  }, [maxSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1) < 0 ? maxSlide : prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="w-full h-full mx-auto bg-white overflow-hidden">
      {/* Header */}
      <div className="relative p-4">
        <div className="relative flex items-center justify-between px-16">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
              <span className="text-2xl text-yellow-400"><Building2/></span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                Công Ty <span className=" text-[var(--primary-color-website)]">Nổi Bật</span>
              </h1>
              <p className="text-black text-sm mt-1">Khám phá cơ hội nghề nghiệp tại các doanh nghiệp hàng đầu</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-black">
            <div className="text-center">
              <div className="text-2xl font-bold">{carouselData.length}</div>
              <div className="text-xs">Công ty</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">150+</div>
              <div className="text-xs">Vị trí</div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white p-4 sm:p-6">
        <div 
          className="flex transition-transform duration-700 ease-out gap-4 sm:gap-6"
          style={{ transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)` }}
        >
          {carouselData.map((item) => (
            <div key={item.id} className="flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 mx-1 sm:mx-2">
                {/* Image Section */}
                <div className="relative h-36 sm:h-48 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Bookmark */}
                  <button className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all">
                    <Bookmark className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </button>

                  {/* Company Logo */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-lg sm:text-2xl">{item.logo}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-800">{item.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-800 text-[10px] sm:text-xs font-medium rounded-full">
                      {item.companyName}
                    </span>
                    <span className="text-green-600 font-semibold text-xs sm:text-sm">{item.positions}</span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-blue-600 font-medium text-xs sm:text-sm mb-2 sm:mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-3 sm:mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Company Details */}
                  <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                    <div className="flex items-center space-x-1 sm:space-x-2 text-[10px] sm:text-xs text-gray-500">
                      <Map className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                    <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-500">
                      <Users className="w-3 h-3" />
                      <span>{item.employees} nhân viên</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-[var(--primary-color-website)] text-white font-medium py-2 sm:py-3 px-4 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                    Xem chi tiết →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </button>
      </div>


      {/* Dots Indicator */}
      <div className="flex justify-center items-center space-x-3 py-6 bg-gray-50">
        {Array.from({ length: maxSlide + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselContent;