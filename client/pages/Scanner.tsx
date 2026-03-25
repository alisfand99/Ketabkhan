import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ChevronLeft,
  Camera,
  Upload,
  FileUp,
  Zap,
  ZapOff,
  ScanLine,
  FileStack,
  Circle,
  CheckCircle2,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";

type Operation = "scan" | "upload" | "import";

export default function Scanner() {
  const [activeOp, setActiveOp] = useState<Operation>("scan");
  const [flashOn, setFlashOn] = useState(false);
  const [autoCapture, setAutoCapture] = useState(false);
  const [multiPage, setMultiPage] = useState(true);

  const operations: { id: Operation; label: string; icon: typeof Camera }[] = [
    { id: "scan", label: "Scan Camera", icon: Camera },
    { id: "upload", label: "Upload Images", icon: Upload },
    { id: "import", label: "Import PDF", icon: FileUp },
  ];

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-sm flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-navy-900/80 backdrop-blur-xl border-b border-white/8">
          <div className="h-3" />
          <div className="flex items-center gap-3 px-3 py-2">
            <Link
              to="/"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/8 hover:bg-white/14 border border-white/10 transition-all"
            >
              <ChevronLeft size={18} className="text-white/80" />
            </Link>
            <h1 className="flex-1 text-lg font-semibold text-white">
              Intake / Scanner
            </h1>

            {/* OCR Active Indicator */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 pulse-glow">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-semibold text-emerald-400 tracking-wide">
                OCR Active
              </span>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto pb-28 pt-4 flex flex-col gap-4">
          {/* Choose Operation */}
          <section className="px-4">
            <p className="text-sm font-semibold text-white mb-2.5">
              Choose Operation
            </p>
            <div className="flex gap-2">
              {operations.map((op) => {
                const active = activeOp === op.id;
                return (
                  <button
                    key={op.id}
                    onClick={() => setActiveOp(op.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 flex-1 justify-center ${
                      active
                        ? "gradient-primary text-white shadow-primary-glow"
                        : "bg-white/8 border border-white/10 text-white/60 hover:bg-white/12 hover:text-white"
                    }`}
                  >
                    <op.icon size={13} strokeWidth={active ? 2.5 : 1.8} />
                    {op.label}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Camera / Preview Area */}
          <section className="px-4">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/3 shadow-card aspect-[3/4] flex items-center justify-center">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-800" />

              {/* Scanner overlay effect */}
              {activeOp === "scan" && (
                <>
                  {/* Corner brackets */}
                  <div className="absolute inset-6 pointer-events-none">
                    {/* Top-left */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-400/70 rounded-tl-lg" />
                    {/* Top-right */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-400/70 rounded-tr-lg" />
                    {/* Bottom-left */}
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-400/70 rounded-bl-lg" />
                    {/* Bottom-right */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-400/70 rounded-br-lg" />
                  </div>

                  {/* Scan line */}
                  <div className="absolute left-6 right-6 h-0.5 scan-line rounded-full" />

                  {/* Emerald glow overlay at corners */}
                  <div className="absolute inset-0 scanner-overlay pointer-events-none" />
                </>
              )}

              {/* Center content */}
              <div className="relative flex flex-col items-center gap-4 z-10">
                <div
                  className={`w-16 h-16 rounded-2xl border flex items-center justify-center transition-all ${
                    activeOp === "scan"
                      ? "bg-emerald-500/15 border-emerald-500/40 glow-emerald-sm"
                      : "bg-white/8 border-white/15"
                  }`}
                >
                  {activeOp === "scan" && (
                    <Camera size={28} className="text-emerald-400" />
                  )}
                  {activeOp === "upload" && (
                    <Upload size={28} className="text-blue-400" />
                  )}
                  {activeOp === "import" && (
                    <FileUp size={28} className="text-purple-400" />
                  )}
                </div>

                <div className="flex flex-col items-center gap-1 px-8 text-center">
                  <p className="text-sm font-semibold text-white/80">
                    {activeOp === "scan" && "Live camera view for scanning"}
                    {activeOp === "upload" && "Select images to upload"}
                    {activeOp === "import" && "Choose a PDF to import"}
                  </p>
                  <p className="text-xs text-white/30">
                    {activeOp === "scan" &&
                      "Position document within the frame"}
                    {activeOp === "upload" && "JPG, PNG, HEIC supported"}
                    {activeOp === "import" && "PDF files up to 100MB"}
                  </p>
                </div>

                {activeOp !== "scan" && (
                  <button className="mt-2 px-5 py-2.5 rounded-xl gradient-primary text-white text-sm font-semibold shadow-primary-glow hover:opacity-90 transition-opacity">
                    {activeOp === "upload" ? "Choose Images" : "Select PDF"}
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Controls — only shown for camera mode */}
          {activeOp === "scan" && (
            <section className="px-4 flex flex-col gap-3">
              {/* Flash toggle */}
              <button
                onClick={() => setFlashOn((p) => !p)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl border transition-all duration-200 ${
                  flashOn
                    ? "bg-amber-500/15 border-amber-500/40 shadow-[0_0_16px_rgba(245,158,11,0.2)]"
                    : "bg-white/5 border-white/15 hover:bg-white/8"
                }`}
              >
                <div className="flex items-center gap-3">
                  {flashOn ? (
                    <Zap size={18} className="text-amber-400" />
                  ) : (
                    <ZapOff size={18} className="text-white/50" />
                  )}
                  <span
                    className={`text-sm font-semibold ${flashOn ? "text-amber-300" : "text-white"}`}
                  >
                    Flash
                  </span>
                </div>
                <div
                  className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-all duration-300 ${
                    flashOn ? "bg-amber-500 justify-end" : "bg-white/15 justify-start"
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-white shadow-sm" />
                </div>
              </button>

              {/* Auto-Capture toggle */}
              <button
                onClick={() => setAutoCapture((p) => !p)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl border transition-all duration-200 ${
                  autoCapture
                    ? "bg-blue-500/15 border-blue-500/40 shadow-[0_0_16px_rgba(59,130,246,0.2)]"
                    : "bg-white/5 border-white/15 hover:bg-white/8"
                }`}
              >
                <div className="flex items-center gap-3">
                  <ScanLine
                    size={18}
                    className={autoCapture ? "text-blue-400" : "text-white/50"}
                  />
                  <span
                    className={`text-sm font-semibold ${autoCapture ? "text-blue-300" : "text-white"}`}
                  >
                    Auto-Capture
                  </span>
                  {autoCapture && (
                    <span className="text-[10px] font-bold text-blue-400 bg-blue-500/20 px-2 py-0.5 rounded-full">
                      ON
                    </span>
                  )}
                </div>
                <div
                  className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-all duration-300 ${
                    autoCapture ? "bg-blue-500 justify-end" : "bg-white/15 justify-start"
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-white shadow-sm" />
                </div>
              </button>

              {/* Capture Button */}
              <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl gradient-primary hover:opacity-90 active:scale-[0.98] transition-all duration-150 font-bold text-white text-base shadow-primary-glow mt-1">
                <Circle size={18} strokeWidth={3} />
                Capture
              </button>
            </section>
          )}

          {/* Settings Section */}
          <section className="px-4 mt-2">
            <h2 className="text-lg font-semibold text-white mb-3">Settings</h2>

            <div className="flex flex-col gap-2">
              {/* Multi-page Mode */}
              <button
                onClick={() => setMultiPage((p) => !p)}
                className="flex items-center gap-4 px-4 py-3.5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-600/15 border border-emerald-500/25 flex items-center justify-center shrink-0">
                  <FileStack size={18} className="text-emerald-400" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold text-white">
                    Multi-page Mode
                  </p>
                  <p className="text-xs text-white/40 mt-0.5">
                    Combine scans into a single document
                  </p>
                </div>
                {multiPage ? (
                  <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                ) : (
                  <Circle size={20} className="text-white/20 shrink-0" />
                )}
              </button>
            </div>
          </section>
        </main>

        <BottomNav />
      </div>
    </div>
  );
}
