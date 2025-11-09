import React, { useState, useEffect } from "react";
import { NavItem } from "../types";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: "Products", href: "#features" },
    { label: "Business Solutions", href: "#how-it-works" },
    { label: "Help Center", href: "#testimonials" },
    { label: "Pricing", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100/50"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="/assets/icon.png"
                  alt="Community Tester Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            <div>
              <p
                className="font-bold text-[16px] text-[#252b42] tracking-wide"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                Community Tester
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <button
                  onClick={() =>
                    item.label === "Pricing"
                      ? scrollToSection(item.href)
                      : handleDropdown(item.label)
                  }
                  className="flex items-center space-x-2 px-3 py-3 font-medium text-[16px] text-slate-900 hover:text-primary-600 transition-colors duration-200"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span>{item.label}</span>
                  {item.label !== "Pricing" && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.label !== "Pricing" && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <div className="px-4 py-3">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.label}
                      </h3>
                      <div className="space-y-2">
                        {item.label === "Products" && (
                          <>
                            <a
                              href="#features"
                              className="block py-2 text-gray-600 hover:text-primary-600"
                            >
                              Feature Overview
                            </a>
                            <a
                              href="#testimonials"
                              className="block py-2 text-gray-600 hover:text-primary-600"
                            >
                              Customer Stories
                            </a>
                            <a
                              href="#cta"
                              className="block py-2 text-gray-600 hover:text-primary-600"
                            >
                              Get Started
                            </a>
                          </>
                        )}
                        {item.label === "Business Solutions" && (
                          <>
                            <a
                              href="#how-it-works"
                              className="block py-2 text-gray-600 hover:text-primary-600"
                            >
                              How It Works
                            </a>
                            <a
                              href="#features"
                              className="block py-2 text-gray-600 hover:text-primary-600"
                            >
                              Enterprise Features
                            </a>
                            <a
                              href="#contact"
                              className="block py-2 text-gray-600 hover:text-primary-600"
                            >
                              Contact Sales
                            </a>
                          </>
                        )}
                        {item.label === "Help Center" && (
                          <>
                            <a
                              href="#contact"
                              className="block py-2 text-gray-600 hover:text-primary-600"
                            >
                              Documentation
                            </a>
                            <a
                              href="#contact"
                              className="block py-2 text-gray-600 hover:text-primary-600"
                            >
                              API Reference
                            </a>
                            <a
                              href="#contact"
                              className="block py-2 text-gray-600 hover:text-primary-600"
                            >
                              Support
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-4 py-3 font-medium text-[16px] text-primary-500 hover:text-primary-600 transition-colors duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Log In
            </button>
            <button
              onClick={() => scrollToSection("#cta")}
              className="px-4 py-3 bg-primary-500 border-2 border-primary-500 text-white font-medium text-[16px] rounded-lg hover:bg-primary-600 hover:border-primary-600 transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      item.label === "Pricing"
                        ? scrollToSection(item.href)
                        : handleDropdown(item.label)
                    }
                    className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium rounded-lg transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.label !== "Pricing" && (
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.label !== "Pricing" &&
                    activeDropdown === item.label && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.label === "Products" && (
                          <>
                            <a
                              href="#features"
                              className="block py-2 text-gray-600"
                            >
                              Feature Overview
                            </a>
                            <a
                              href="#testimonials"
                              className="block py-2 text-gray-600"
                            >
                              Customer Stories
                            </a>
                          </>
                        )}
                        {item.label === "Business Solutions" && (
                          <>
                            <a
                              href="#how-it-works"
                              className="block py-2 text-gray-600"
                            >
                              How It Works
                            </a>
                            <a
                              href="#features"
                              className="block py-2 text-gray-600"
                            >
                              Enterprise Features
                            </a>
                          </>
                        )}
                        {item.label === "Help Center" && (
                          <>
                            <a
                              href="#contact"
                              className="block py-2 text-gray-600"
                            >
                              Documentation
                            </a>
                            <a
                              href="#contact"
                              className="block py-2 text-gray-600"
                            >
                              Support
                            </a>
                          </>
                        )}
                      </div>
                    )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full px-4 py-3 text-primary-500 font-medium border border-primary-500 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={() => scrollToSection("#cta")}
                  className="w-full px-4 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
};

export default Header;
