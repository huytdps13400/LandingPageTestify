import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Testimonial } from "../types";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      role: "Mobile App Developer",
      company: "TechStart Inc.",
      content:
        "Community Tester has revolutionized how we manage our beta testing. The daily check-in system ensures our testers stay engaged, and we've never missed a Google Play requirement again. The Google Play Console integration is a game-changer!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c0c7?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Michael Rodriguez",
      role: "QA Manager",
      company: "InnovateApp",
      content:
        "As someone who manages multiple testing projects, the progress tracking and CSV export features save me hours of work. The community aspect means we always have reliable testers available. Highly recommended!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Emily Johnson",
      role: "iOS Developer",
      company: "MobileFirst",
      content:
        "The nudge system keeps our testers active without being annoying. I love how the global streak tracking works across all our test rooms. The platform has made beta testing so much more efficient.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "David Kim",
      role: "Android Developer",
      company: "AppVenture",
      content:
        "Before Community Tester, managing testers was a nightmare. Now it's seamless. The auto mode with Google Play integration means I spend less time on admin work and more on development.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  useEffect(() => {
    if (
      sectionRef.current &&
      titleRef.current &&
      carouselRef.current &&
      !document.body.classList.contains("animations-disabled")
    ) {
      const title = titleRef.current;
      const carousel = carouselRef.current;
      const testimonialCards = carousel.querySelectorAll(".testimonial-card");

      // Title animation
      gsap.fromTo(
        title,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Carousel container animation
      gsap.fromTo(
        carousel,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.3,
          scrollTrigger: {
            trigger: carousel,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Testimonial cards animation
      gsap.fromTo(
        testimonialCards,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.5,
          scrollTrigger: {
            trigger: carousel,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  useEffect(() => {
    if (
      carouselRef.current &&
      !document.body.classList.contains("animations-disabled")
    ) {
      const cards = carouselRef.current.querySelectorAll(".testimonial-card");

      // Auto-rotate carousel
      const autoRotate = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      // Animate card transitions
      cards.forEach((card, index) => {
        const isActive = index === currentIndex;
        gsap.to(card, {
          scale: isActive ? 1 : 0.95,
          opacity: isActive ? 1 : 0.7,
          zIndex: isActive ? 10 : 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
      });

      return () => {
        clearInterval(autoRotate);
      };
    }
  }, [currentIndex, testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What Our
            <span className="gradient-text"> Community Says</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Join thousands of developers and testers who trust Community Tester
            for their app testing needs.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i: number) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary-500 flex items-center justify-center text-white font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? "bg-primary-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-on-scroll">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
              10K+
            </div>
            <div className="text-gray-600 font-medium">Active Testers</div>
          </div>
          <div className="animate-on-scroll">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
              500+
            </div>
            <div className="text-gray-600 font-medium">Apps Tested</div>
          </div>
          <div className="animate-on-scroll">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
              99%
            </div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
          <div className="animate-on-scroll">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
              24/7
            </div>
            <div className="text-gray-600 font-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
