import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../data/testimonials";

const TestimonialSection = () => {
  const testimonialRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = testimonialRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer && !isHovered) {
          scrollContainer.scrollLeft += 2;

          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.style.scrollBehavior = "auto";
            scrollContainer.scrollLeft = 0;
            setTimeout(() => {
              scrollContainer.style.scrollBehavior = "smooth";
            }, 0);
          }
        }
      }, 30);
    };

    startScrolling();

    return () => {
      clearInterval(scrollInterval);
    };
  }, [isHovered]);

  return (
    <div
      ref={testimonialRef}
      className="flex flex-row gap-5 py-2 max-w-full overflow-x-auto scrollbar-hide"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ scrollBehavior: "smooth" }}
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={`first-${index}`}
          name={testimonial.name}
          role={testimonial.role}
          description={testimonial.description}
          image={testimonial.image}
        />
      ))}
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={`second-${index}`}
          name={testimonial.name}
          role={testimonial.role}
          description={testimonial.description}
          image={testimonial.image}
        />
      ))}
    </div>
  );
};

export default TestimonialSection;
