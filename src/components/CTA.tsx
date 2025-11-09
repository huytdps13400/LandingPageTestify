import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      titleRef.current &&
      descriptionRef.current &&
      buttonsRef.current &&
      !document.body.classList.contains("animations-disabled")
    ) {
      const title = titleRef.current;
      const description = descriptionRef.current;
      const buttons = buttonsRef.current;

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
          delay: 0.3,
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Description animation
      gsap.fromTo(
        description,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.5,
          scrollTrigger: {
            trigger: description,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Buttons animation
      gsap.fromTo(
        buttons,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.7,
          scrollTrigger: {
            trigger: buttons,
            start: "top 80%",
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

  const handleButtonClick = (action: string) => {
    if (action === "download") {
      // Simulate app download or redirect to app store
      window.open("https://example.com/download", "_blank");
    } else if (action === "demo") {
      // Simulate demo request
      alert("Demo request feature would be implemented here!");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="bg-white flex flex-col items-center justify-center py-20 px-6 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA Content */}
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-semibold text-gray-900 mb-8 leading-tight"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Your Testing. Any Device.
        </h2>

        <p
          ref={descriptionRef}
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <span className="block mb-2">
            Community Tester is available on iPhone, Android, and Apple Watch.
          </span>
          <span className="block mb-2">
            Access your testing projects from any device and never miss a beta
            test.
          </span>
          <span className="block mb-2">
            Privacy and permissions are fully under your control.
          </span>
          <span className="block mb-2">&nbsp;</span>
          <span className="block">Export your test data any time.</span>
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* App Store Download Button */}
          <button
            onClick={() => handleButtonClick("download")}
            className="group relative overflow-hidden bg-gray-900 text-white font-medium py-4 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 flex items-center"
          >
            <div className="flex items-center">
              <svg
                className="w-8 h-8 mr-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </div>
          </button>

          {/* Google Play Download Button */}
          <button
            onClick={() => handleButtonClick("download")}
            className="group relative overflow-hidden bg-gray-900 text-white font-medium py-4 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 flex items-center"
          >
            <div className="flex items-center">
              <svg
                className="w-8 h-8 mr-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
