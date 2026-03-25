import { Link, useParams } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Pencil,
  Trash2,
  FileText,
  Plus,
  Upload,
  Layers,
  LayoutGrid,
} from "lucide-react";

const folderData: Record<
  string,
  {
    title: string;
    files: number;
    pages: number;
    color: string;
    iconColor: string;
    pageItems: { id: number; label: string }[];
  }
> = {
  "physics-notes": {
    title: "Physics Notes",
    files: 12,
    pages: 48,
    color: "from-blue-600/30 to-indigo-700/20",
    iconColor: "text-blue-400",
    pageItems: [
      { id: 1, label: "Page 1 – Introduction" },
      { id: 2, label: "Page 2 – Theory" },
      { id: 3, label: "Page 3 – Equations" },
      { id: 4, label: "Page 4 – Diagrams" },
    ],
  },
  "math-notes": {
    title: "Math Notes",
    files: 8,
    pages: 32,
    color: "from-purple-600/30 to-violet-700/20",
    iconColor: "text-purple-400",
    pageItems: [
      { id: 1, label: "Page 1 – Algebra" },
      { id: 2, label: "Page 2 – Calculus" },
    ],
  },
};

export default function FolderDetail() {
  const { id } = useParams<{ id: string }>();
  const folder = id ? folderData[id] : null;

  if (!folder) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-white/50 text-lg">Folder not found.</p>
          <Link to="/" className="text-emerald-400 text-sm mt-2 block">
            ← Back to Library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-sm flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-navy-900/80 backdrop-blur-xl border-b border-white/8">
          {/* Status bar spacer */}
          <div className="h-3" />
          <div className="flex items-center gap-3 px-3 py-2">
            <Link
              to="/"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/8 hover:bg-white/14 border border-white/10 transition-all"
            >
              <ChevronLeft size={18} className="text-white/80" />
            </Link>
            <h1 className="flex-1 text-lg font-semibold text-white truncate">
              {folder.title}
            </h1>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/8 hover:bg-white/14 border border-white/10 transition-all">
                <Pencil size={15} className="text-white/70" />
              </button>
              <button className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/8 hover:bg-red-500/20 border border-white/10 hover:border-red-500/30 transition-all">
                <Trash2 size={15} className="text-white/70 hover:text-red-400" />
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto pb-10 pt-4">
          {/* Summary Section */}
          <section className="px-4 mb-6">
            <div className="mb-3">
              <h2 className="text-lg font-semibold text-white">Summary</h2>
              <p className="text-xs text-white/40 mt-0.5">Project Overview</p>
            </div>

            <div className="flex gap-4 items-start">
              {/* Thumbnail */}
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${folder.color} border border-white/10 flex items-center justify-center shrink-0 shadow-card`}
              >
                <div className="relative">
                  <div className="absolute -top-1 -right-1 w-6 h-8 rounded bg-white/8 border border-white/10 rotate-3" />
                  <div className="relative w-7 h-9 rounded bg-white/15 border border-white/20 flex items-center justify-center">
                    <FileText size={13} className={folder.iconColor} />
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="flex flex-col gap-1.5 flex-1 pt-1">
                <p className="text-base font-semibold text-white">Status</p>
                <p className="text-sm text-white/50">{folder.files} Files</p>
                <p className="text-sm text-white">{folder.pages} Pages total</p>
              </div>
            </div>

            <div className="mt-4 h-px bg-white/8" />
          </section>

          {/* Pages Section */}
          <section className="px-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-white">Pages</h2>
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg gradient-primary hover:opacity-90 transition-opacity text-xs font-semibold text-white shadow-primary-glow">
                Convert to ePub
                <ChevronRight size={12} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {folder.pageItems.map((page) => (
                <div
                  key={page.id}
                  className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/8 transition-all shadow-card cursor-pointer group"
                >
                  {/* Page Thumbnail */}
                  <div className="relative h-40 bg-gradient-to-b from-white/8 to-white/3 flex items-center justify-center overflow-hidden">
                    {/* Lined paper effect */}
                    <div className="absolute inset-0 px-3 py-4 flex flex-col gap-2 opacity-20">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-px bg-white/60 rounded-full"
                          style={{ width: i === 0 ? "60%" : i % 3 === 0 ? "40%" : "100%" }}
                        />
                      ))}
                    </div>
                    <div className="relative flex flex-col items-center gap-2">
                      <div className="w-10 h-12 rounded-md bg-white/10 border border-white/15 flex items-center justify-center shadow-lg group-hover:border-emerald-500/30 transition-colors">
                        <FileText size={16} className="text-white/40 group-hover:text-emerald-400/60 transition-colors" />
                      </div>
                      <span className="text-[10px] text-white/30 font-medium">
                        Page Thumbnail
                      </span>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="px-3 py-2.5">
                    <p className="text-xs text-white/60 font-medium">{page.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Add New Section */}
          <section className="px-4 mb-6">
            <h2 className="text-lg font-semibold text-white mb-3">Add New</h2>

            <button className="w-full flex flex-col rounded-2xl overflow-hidden border border-dashed border-white/20 bg-white/3 hover:bg-white/6 hover:border-emerald-500/40 transition-all duration-200 group shadow-card">
              {/* Large placeholder area */}
              <div className="relative h-56 w-full flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-600/15 border border-emerald-500/30 group-hover:border-emerald-500/50 flex items-center justify-center transition-all shadow-emerald-sm group-hover:shadow-emerald-glow">
                  <Plus size={28} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    Add Page / Upload File
                  </p>
                  <p className="text-xs text-white/30">
                    Tap to scan, photograph, or import
                  </p>
                </div>
              </div>

              {/* Footer row */}
              <div className="px-4 py-3 flex items-center gap-3 border-t border-white/8">
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <Upload size={12} />
                  <span>Upload</span>
                </div>
                <div className="w-px h-3 bg-white/20" />
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <LayoutGrid size={12} />
                  <span>Import PDF</span>
                </div>
              </div>
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
