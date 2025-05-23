// import React from 'react';

// const LetterImage = ({ src, alt, letter = 'T', size = '200px' }) => {
//   return (
//     <div 
//       className="relative flex items-center justify-center"
//       style={{
//         width: size,
//         height: size,
//         fontSize: size,
//         fontFamily: "'Georgia', serif",
//         fontWeight: 'bold',
//         color: 'transparent',
//         backgroundImage: `url(${src})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundClip: 'text',
//         WebkitBackgroundClip: 'text',
//         textFillColor: 'transparent',
//         lineHeight: 0.8
//       }}
//     >
//       {letter}
//       {/* Fallback for browsers that don't support background-clip: text */}
//       <img 
//         src={src} 
//         alt={alt} 
//         className="absolute inset-0 w-full h-full object-cover opacity-0" 
//         aria-hidden="true"
//       />
//     </div>
//   );
// };

// // Usage
// export default LetterImage;


const Parallelogram = ({ imageUrl }) => {
  return (
    <div style={{
      width: "300px",
      height: "200px",
      transform: "skewX(-20deg)",
      overflow: "hidden"
    }}>
      <img 
        src={imageUrl} 
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "skewX(20deg) scale(1.2)"
        }} 
      />
    </div>
  );
};

export default Parallelogram;