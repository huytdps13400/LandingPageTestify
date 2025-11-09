import React, { useEffect } from "react";
import DOMPurify from "dompurify";
import { HTML_POLICY } from "../constants/html";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Policy: React.FC = () => {
  // Set page meta tags
  useEffect(() => {
    document.title = "Privacy Policy - Community Tester";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Privacy Policy for Community Tester App. Learn how we collect, use, and protect your personal information."
      );
    }
  }, []);

  // Sanitize the HTML content
  const sanitizedContent = DOMPurify.sanitize(HTML_POLICY);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="pt-20 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Policy;
