import { Shield } from "lucide-react";

interface FooterProps {
  onNavigate: (route: "privacy" | "support") => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-100 mt-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-slate-900">Testify</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Connecting developers and testers.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("privacy")}
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("support")}
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Support
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 mb-4 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Developer Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Tester Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 mb-4 text-sm">Contact</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              kingonwork@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 mt-16 pt-8">
          <p className="text-center text-sm text-slate-400">
            &copy; 2025 Testify App
          </p>
        </div>
      </div>
    </footer>
  );
}
