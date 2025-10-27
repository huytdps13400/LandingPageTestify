import { Shield } from "lucide-react";

interface HeaderProps {
  currentRoute: "privacy" | "support";
  onNavigate: (route: "privacy" | "support") => void;
}

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => onNavigate("privacy")}
          >
            <div className="w-10 h-10 bg-[#F5AD18] rounded flex items-center justify-center transition-transform group-hover:scale-105">
              <Shield className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-slate-900 tracking-tight">Testify</h1>
            </div>
          </div>
          <nav className="flex items-center gap-8">
            <button
              onClick={() => onNavigate("privacy")}
              className={`transition-colors text-sm ${
                currentRoute === "privacy"
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Terms of Use
            </button>
            <button
              onClick={() => onNavigate("support")}
              className={`transition-colors text-sm ${
                currentRoute === "support"
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Support
            </button>
            <button
              onClick={() => onNavigate("support")}
              className="px-5 py-2 bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors rounded"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
