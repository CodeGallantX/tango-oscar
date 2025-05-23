import Header from "./Header";

const Banner = ({ page, backgroundImage, subtitle }) => {
  // Define page titles or use the prop directly
  const pageTitles = {
    home: "Welcome to Our Luxury Services",
    about: "About Our Company",
    services: "Our Exclusive Services",
    contact: "Contact Us",
    booking: "Book Now",
    // Add more pages as needed
  };

  // Get the title based on the page prop or use a default
  const title = pageTitles[page] || "Page Title";

  return (
    <section 
      className="relative bg-black/90 pb-14 pt-24 md:pb-20 md:pt-28 min-h-[300px] flex items-center"
      style={backgroundImage ? { 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {/* Background overlay - darker when there's a background image */}
      <div className={`absolute inset-0 ${backgroundImage ? 'bg-black/60' : 'bg-black/50'} z-0`} />
      
      {/* Header positioned absolutely at the top */}
      <Header moreStyles="absolute top-0 left-0 right-0 z-20" />
      
      {/* Content container with proper z-index */}
      <div className="w-full relative z-20 mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main title with responsive sizing */}
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-4">
            {title}
          </h1>
          
          {/* Subtitle if provided */}
          {subtitle && (
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-4 md:mb-6">
              {subtitle}
            </p>
          )}
          
          {/* Optional breadcrumb navigation */}
          <div className="flex items-center space-x-2 text-sm text-gray-300 md:text-base">
            <span className="hover:text-bronze cursor-pointer transition">Home</span>
            <span>/</span>
            <span className="text-bronze capitalize">{page}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;