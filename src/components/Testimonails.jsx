import React, { useState } from "react";
import { motion } from "framer-motion";
// Sample data for testimonials
const testimonials = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with your image URL
    name: "Abdullah Iqbal",
    rating: "★★★★★",
    review:
      "I had a fantastic experience working with this team. They understood my needs and delivered a website that exceeded my expectations!",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with your image URL
    name: "Ali Khan",
    rating: "★★★★☆",
    review:
      "The service was excellent, and the team was very responsive. I highly recommend them for any web development project.",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/3.jpg", // Replace with your image URL
    name: "John Doe",
    rating: "★★★★★",
    review:
      "I am extremely happy with the results. They took my ideas and transformed them into a stunning website. Five stars!",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/men/4.jpg", // Replace with your image URL
    name: "Iqbal",
    rating: "★★★★☆",
    review:
      "Professional and skilled. The project was completed on time and within budget. I would definitely work with them again!",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/men/5.jpg", // Replace with your image URL
    name: "Sara Lee",
    rating: "★★★★★",
    review:
      "A wonderful experience from start to finish. The team's attention to detail and commitment to quality is outstanding.",
  },
  // Add more testimonials if needed
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white mt-10 rounded-2xl shadow-lg p-6 w-80 mx-4 my-4 relative">
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-yellow-200 overflow-hidden">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pt-12 text-center">
        <div className="text-yellow-500 text-lg mb-2">{testimonial.rating}</div>
        <p className="text-gray-700 text-sm">{testimonial.review}</p>
        <p className="mt-4 text-lg font-semibold">{testimonial.name}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to get the next 3 testimonials
  const getDisplayedTestimonials = () => {
    const nextTwo =
      current + 3 <= testimonials.length
        ? testimonials.slice(current, current + 3)
        : [
            ...testimonials.slice(current),
            ...testimonials.slice(0, 3 - (testimonials.length - current)),
          ];
    return nextTwo;
  };

  return (
    <div className="bg-[#854CDA] py-12 relative">
      {/* Motion Heading for Testimonials */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -50 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Animate to this state
        transition={{ duration: 0.5 }} // Transition duration
      >
        <p className="text-white text-md mb-3">What clients say</p>
        <h2 className="text-white text-3xl font-bold">Testimonials</h2>
      </motion.div>
      {/* Buttons in the top right corner */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          onClick={handlePrev}
          className="text-2xl px-4 py-2 bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center"
        >
          {"<"}
        </button>
        <button
          onClick={handleNext}
          className="text-2xl px-4 py-2 bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center"
        >
          {">"}
        </button>
      </div>

      <div className="container mx-auto flex items-center justify-center">
        {/* Displaying three testimonials at once */}
        <div className="flex space-x-4">
          {getDisplayedTestimonials().map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
