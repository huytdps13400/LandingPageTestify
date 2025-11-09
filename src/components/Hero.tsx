import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhoneMockup from "./PhoneMockup";
import { HeroStats } from "../types";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const phoneLeftRef = useRef<HTMLDivElement>(null);
  const phoneRightRef = useRef<HTMLDivElement>(null);
  const decorativeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const heroStats: HeroStats[] = [
    { label: "Active Testers", value: "10K+", suffix: "" },
    { label: "Apps Tested", value: "500+", suffix: "" },
    { label: "Success Rate", value: "99", suffix: "%" },
  ];

  useEffect(() => {
    if (
      heroRef.current &&
      contentRef.current &&
      !document.body.classList.contains("animations-disabled")
    ) {
      const hero = heroRef.current;
      const content = contentRef.current;
      const decorative = decorativeRef.current;
      const phoneLeft = phoneLeftRef.current;
      const phoneRight = phoneRightRef.current;

      // Hero background animation
      gsap.fromTo(
        hero,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      );

      // Decorative elements animation
      if (decorative) {
        gsap.fromTo(
          decorative.children,
          { scale: 0, rotation: -180, opacity: 0 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            delay: 0.8,
            ease: "back.out(1.7)",
          }
        );
      }

      // Phone mockups entrance animation
      if (phoneLeft && phoneRight) {
        // Left phone
        gsap.fromTo(
          phoneLeft,
          {
            x: -200,
            y: 100,
            rotation: -30,
            scale: 0.8,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            rotation: -8,
            scale: 1,
            opacity: 1,
            duration: 1.2,
            delay: 1,
            ease: "power3.out",
          }
        );

        // Right phone
        gsap.fromTo(
          phoneRight,
          {
            x: 200,
            y: -100,
            rotation: 30,
            scale: 0.8,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            rotation: 8,
            scale: 1,
            opacity: 1,
            duration: 1.2,
            delay: 1.2,
            ease: "power3.out",
          }
        );

        // Continuous floating animation for phones
        gsap.to(phoneLeft, {
          y: -10,
          rotation: -6,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: 2.5,
        });

        gsap.to(phoneRight, {
          y: 10,
          rotation: 6,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: 2.7,
        });
      }

      // Content animation
      gsap.fromTo(
        content.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          delay: 1.5,
          ease: "power2.out",
        }
      );

      // Stats animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            delay: 2.5,
            ease: "back.out(1.7)",
          }
        );
      }

      // Parallax effect on scroll
      const parallaxTL = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      // Background gradient animation
      parallaxTL.to(
        hero,
        {
          backgroundPosition: "50% 100%",
          ease: "none",
        },
        0
      );

      // Content parallax
      parallaxTL.to(
        content,
        {
          y: -100,
          opacity: 0.5,
          ease: "none",
        },
        0
      );

      // Phone parallax
      if (phoneLeft && phoneRight) {
        parallaxTL.to(
          phoneLeft,
          {
            y: -150,
            rotation: -12,
            ease: "none",
          },
          0
        );

        parallaxTL.to(
          phoneRight,
          {
            y: -100,
            rotation: 12,
            ease: "none",
          },
          0
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === heroRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div
        ref={decorativeRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-400/10 rounded-full blur-3xl"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 opacity-20">
          <div className="w-16 h-16 border-2 border-primary-300 rounded-lg rotate-45"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/5 opacity-20">
          <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="text-center lg:text-left lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-primary-700 font-medium text-sm">
                Community-Driven Testing
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block mb-2">A collaborative</span>
              <span className="block gradient-text mb-2">App Testing</span>
              <span className="block text-gray-600">that you Need</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Connect with reliable testers, manage daily check-ins, and
              streamline test cycles. Meet Google Play requirements effortlessly
              with our community-driven platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => scrollToSection("#cta")}
                className="group bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="flex items-center justify-center">
                  Start 14 Days Trial
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
              <button
                onClick={() => scrollToSection("#features")}
                className="border-2 border-gray-300 text-gray-700 font-semibold py-4 px-8 rounded-xl hover:border-primary-500 hover:text-primary-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    {stat.value}
                    <span className="text-primary-500">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockups */}
          <div className="relative lg:order-2">
            <div className="relative flex justify-center items-center">
              {/* Left Phone */}
              <div ref={phoneLeftRef} className="relative">
                <PhoneMockup
                  src="/assets/en-1-Introduction.png"
                  alt="Community Tester App - Introduction Screen"
                  className="w-64 md:w-72 lg:w-80"
                  delay={0}
                  rotation={-8}
                />
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                  Active Now
                </div>
              </div>

              {/* Right Phone */}
              <div ref={phoneRightRef} className="relative -ml-8 lg:-ml-12">
                <PhoneMockup
                  src="/assets/en-2-Feature A.png"
                  alt="Community Tester App - Feature A"
                  className="w-64 md:w-72 lg:w-80"
                  delay={0}
                  rotation={8}
                />
                {/* Notification badge */}
                <div className="absolute top-8 -left-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-pulse">
                  3
                </div>
              </div>

              {/* Connection line between phones */}
              <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 opacity-30 -z-10"></div>
            </div>

            {/* Floating elements around phones */}
            <div className="absolute -top-8 left-1/4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce animation-delay-200">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <div className="absolute -bottom-4 right-1/4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce animation-delay-400">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>

            <div className="absolute top-1/3 -right-8 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#features")}
          className="text-gray-400 hover:text-primary-500 transition-colors"
          aria-label="Scroll to features"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
