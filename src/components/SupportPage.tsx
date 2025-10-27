import { Mail, MessageCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { Toaster } from "./ui/sonner";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Your support request has been submitted successfully! We will get back to you within 5 business days."
    );
    setFormData({
      name: "",
      email: "",
      userType: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Header />

      {/* Hero Section */}
      <section className="border-b border-slate-100 py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-12 h-12 bg-slate-900 rounded mx-auto mb-6 flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <h2 className="mb-6 text-slate-900">How Can We Help?</h2>
          <p className="text-slate-600 leading-relaxed">
            Our support team is here to assist you. We aim to respond within 5
            business days.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* Support Form */}
        <div className="mb-20">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-slate-900 mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="border-slate-200 focus:border-slate-900 focus:ring-slate-900"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-slate-900 mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="border-slate-200 focus:border-slate-900 focus:ring-slate-900"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="userType" className="text-slate-900 mb-2 block">
                I am a
              </Label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-200 rounded focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
              >
                <option value="">Select your role</option>
                <option value="developer">Developer</option>
                <option value="tester">Tester</option>
                <option value="both">Both Developer & Tester</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <Label htmlFor="subject" className="text-slate-900 mb-2 block">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Brief description of your issue"
                required
                className="border-slate-200 focus:border-slate-900 focus:ring-slate-900"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-slate-900 mb-2 block">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please provide detailed information about your question or issue..."
                required
                rows={8}
                className="border-slate-200 focus:border-slate-900 focus:ring-slate-900"
              />
              <p className="text-xs text-slate-500 mt-2">
                Please include any relevant details such as error messages or
                steps to reproduce the issue.
              </p>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 transition-colors rounded"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="border-t border-slate-100 pt-20">
          <h3 className="text-slate-900 mb-8">Frequently Asked Questions</h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-slate-900 mb-2">
                How long does it take to get a response?
              </h4>
              <p className="text-slate-600 leading-relaxed">
                We aim to respond to all support requests within 5 business
                days. For urgent issues, please mention "URGENT" in your subject
                line.
              </p>
            </div>

            <div>
              <h4 className="text-slate-900 mb-2">
                Can I delete my account data?
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Yes, you can request account deletion by contacting us at
                kingonwork@gmail.com. We will remove your personal data as
                outlined in our Terms of Use.
              </p>
            </div>

            <div>
              <h4 className="text-slate-900 mb-2">
                How do I report a bug or technical issue?
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Please use this support form and select "Developer" or "Tester"
                as your role. Include detailed steps to reproduce the issue,
                error messages, and device information.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-100 mt-20 pt-12">
          <div className="bg-slate-50 p-8 rounded border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-slate-900 mb-2">Email Support</h4>
                <p className="text-slate-600 mb-1">kingonwork@gmail.com</p>
                <p className="text-sm text-slate-500">
                  Response within 5 business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
