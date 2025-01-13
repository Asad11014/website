import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = ({ heading, testimonialData = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonialData.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonialData.length]);

  if (!testimonialData || testimonialData.length === 0) {
    return null;
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {heading}
        </h2>
        
        <div className="relative">
          <div className="transition-opacity duration-300">
            <TestimonialCard 
              quote={testimonialData[currentIndex].quote}
              name={testimonialData[currentIndex].name}
              title={testimonialData[currentIndex].title}
            />
          </div>

          {testimonialData.length > 1 && (
            <>
              <button 
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <span className="text-xl text-gray-600">&larr;</span>
              </button>

              <button 
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110"
                aria-label="Next testimonial"
              >
                <span className="text-xl text-gray-600">&rarr;</span>
              </button>

              <div className="flex justify-center mt-8 gap-3">
                {testimonialData.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      currentIndex === index 
                        ? 'bg-blue-500 scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;