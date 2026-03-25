import { Link, useLocation } from "react-router-dom";
import { BookOpen, Inbox, Sparkles } from "lucide-react";

const tabs = [
  { icon: BookOpen, label: "Library", path: "/" },
  { icon: Inbox, label: "Collect", path: "/scanner" },
  { icon: Sparkles, label: "AI Insights", path: "/insights" },
];

export default function BottomNav() {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav className="w-full max-w-sm pointer-events-auto border-t border-white/10 bg-navy-900/90 backdrop-blur-xl">
        <div className="flex items-stretch">
          {tabs.map((tab) => {
            const active = isActive(tab.path);
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className="flex flex-col items-center justify-center flex-1 py-2 gap-0.5 transition-all duration-200"
              >
                <div
                  className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 ${
                    active ? "bg-emerald-500/15" : ""
                  }`}
                >
                  <tab.icon
                    size={18}
                    className={`transition-colors duration-200 ${
                      active ? "text-emerald-400" : "text-white/40"
                    }`}
                    strokeWidth={active ? 2.5 : 1.8}
                  />
                </div>
                <span
                  className={`text-[10px] font-medium tracking-wide transition-colors duration-200 ${
                    active ? "text-emerald-400" : "text-white/40"
                  }`}
                >
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
        {/* Safe area spacer */}
        <div className="h-safe-bottom" />
      </nav>
    </div>
  );
}
