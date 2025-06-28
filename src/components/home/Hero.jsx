import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Header from "../shared/Header";

// Carousel data
const carouselItems = [
  {
    id: 1,
    image: "/hero1.jpg",
    title: "Private Jet Charter",
    text: "Experience unparalleled luxury with our exclusive private jet services.",
  },
  {
    id: 2,
    image: "/hero2.jpg",
    title: "Global Coverage",
    text: "Access to over 5,000 airports worldwide, far beyond commercial routes.",
  },
  {
    id: 3,
    image: "/hero3.jpg",
    title: "VVIP Treatment",
    text: "Discreet, secure, and personalized service for high-profile clients.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  // Custom arrow components
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="rounded-full bg-white/30 p-2 backdrop-blur-sm transition-all hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label="Next slide"
    >
      <FiChevronRight className="h-5 w-5 text-white" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="rounded-full bg-white/30 p-2 backdrop-blur-sm transition-all hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label="Previous slide"
    >
      <FiChevronLeft className="h-5 w-5 text-white" />
    </button>
  );

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: false,
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <Slider 
        {...settings} 
        ref={sliderRef}
        className="absolute inset-0 h-full w-full z-0"
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="relative h-screen w-full">
            <img 
              src={item.image} 
              alt={item.title}
              className="h-full w-full object-cover brightness-50"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "/hero2.jpg"
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Header */}
      <Header className="relative z-40" />

      {/* Fixed content on the left */}
      <div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col justify-center px-4 text-white sm:px-8 md:max-w-2xl lg:max-w-3xl lg:px-16 xl:px-24">
        <div className="mt-16 md:mt-20 lg:mt-24">
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block">Seamless Luxury,</span>
            <span className="block">Ultimate Security,</span>
            <span className="block">Exclusive Travel</span>
          </h1>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button 
              onClick={() => navigate('/get-started')} 
              className="w-full rounded-lg bg-bronze px-6 py-3 text-sm font-medium text-black transition-all hover:bg-bronze/90 focus:outline-none focus:ring-2 focus:ring-bronze/50 sm:w-auto sm:text-base md:px-8 md:py-4"
            >
              Book Now
            </button>
            <button className="w-full rounded-lg border-2 border-bronze px-6 py-3 text-sm font-medium text-white transition-all hover:bg-bronze hover:text-black focus:outline-none focus:ring-2 focus:ring-bronze/50 sm:w-auto sm:text-base md:px-8 md:py-4">
              Request Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Slide-specific content on the right with navigation controls */}
      <div className="absolute bottom-4 right-0 z-20 w-full px-4 sm:bottom-12 sm:px-8 md:bottom-16 md:max-w-md lg:bottom-20 lg:max-w-xl lg:px-16 xl:px-24">
        <div className="max-w-xl bg-black/30 p-6 backdrop-blur-sm rounded-lg text-white"> {/* Reduced opacity from /40 to /30 */}
          <h2 className="mb-2 text-xl font-bold sm:text-2xl md:text-3xl text-bronze">
            {carouselItems[currentSlide].title}
          </h2>
          <p className="mb-6 text-sm sm:text-base md:text-lg">
            {carouselItems[currentSlide].text}
          </p>

          {/* Combined navigation controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
              <NextArrow onClick={() => sliderRef.current.slickNext()} />
            </div>
            
            {/* Pagination dots */}
            <div className="flex gap-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => sliderRef.current.slickGoTo(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentSlide === index ? "bg-bronze w-6" : "bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;