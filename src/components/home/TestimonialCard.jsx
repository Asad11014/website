import React from 'react';

const TestimonialCard = ({ quote, name, title }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg transition-all duration-300 transform hover:shadow-xl">
      <div className="p-8">
        <div className="flex justify-center mb-6">
          <span className="text-5xl text-blue-500 font-serif">&ldquo;</span>
        </div>
        
        <div className="min-h-[200px] flex flex-col items-center justify-center">
          <p className="text-xl text-center mb-8 italic text-gray-700 leading-relaxed">
            {quote}
          </p>
          <div className="text-center">
            <p className="font-semibold text-lg text-gray-800">
              {name}
            </p>
            <p className="text-gray-600 mt-1">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;