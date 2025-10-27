import { Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const isTermsPage = location.pathname === "/terms-of-use";
  const isSupportPage = location.pathname === "/support";

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <Link
            to="/terms-of-use"
            className="flex items-center gap-4 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-[#F5AD18] rounded flex items-center justify-center transition-transform group-hover:scale-105">
              <Shield className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-slate-900 tracking-tight">Testify</h1>
            </div>
          </Link>
          <nav className="flex items-center gap-8">
            <Link
              to="/terms-of-use"
              className={`transition-colors text-sm ${
                isTermsPage
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Terms of Use
            </Link>
            <Link
              to="/support"
              className={`transition-colors text-sm ${
                isSupportPage
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Support
            </Link>
            <Link
              to="/support"
              className="px-5 py-2 bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors rounded"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
