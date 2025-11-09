import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
