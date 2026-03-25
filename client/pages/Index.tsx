import { Link } from "react-router-dom";
import {
  Search,
  ChevronRight,
  BookOpen,
  FolderOpen,
  FileText,
  Camera,
  Plus,
  Layers,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";

const collectionProjects = [
  {
    id: "physics-notes",
    title: "Physics Notes",
    sources: 12,
    lastUpdated: "12/10/22",
    color: "from-blue-600/30 to-indigo-700/20",
    iconColor: "text-blue-400",
  },
  {
    id: "math-notes",
    title: "Math Notes",
    sources: 8,
    lastUpdated: "02/14/23",
    color: "from-purple-600/30 to-violet-700/20",
    iconColor: "text-purple-400",
  },
];

const finalizedEpubs = [
  {
    id: "quantum-mechanics",
    title: "Understanding Quantum Mechanics",
    format: "PDF format",
    publishedDate: "01/05/23",
    color: "from-emerald-600/20 to-teal-700/10",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-sm flex flex-col min-h-screen">
        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto pb-32 pt-3">
          {/* Search */}
          <section className="px-4 mb-2">
            <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">
              Search
            </p>
            <div className="flex items-center gap-3 glass-card rounded-2xl px-4 py-3">
              <Search size={16} className="text-white/30 shrink-0" />
              <span className="text-sm text-white/30 font-normal">
                Search in my library...
              </span>
            </div>
          </section>

          {/* Collection Projects */}
          <section className="px-4 mt-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-white">
                Collection Projects
              </h2>
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors text-xs font-medium">
                Generate ePub
                <ChevronRight size={12} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {collectionProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/folder/${project.id}`}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-all duration-200 shadow-card hover:shadow-card-hover"
                >
                  {/* Image / Thumbnail Area */}
                  <div
                    className={`relative h-40 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-2 left-2 w-full h-full grid grid-cols-4 gap-1 p-2">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className="rounded-sm bg-white/50 h-3"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Icon stack */}
                    <div className="relative flex flex-col items-center gap-1">
                      <div className="relative">
                        <div
                          className={`absolute -top-1 -right-1 w-8 h-10 rounded-md bg-white/8 border border-white/10 rotate-3`}
                        />
                        <div
                          className={`absolute -top-0.5 -right-0.5 w-8 h-10 rounded-md bg-white/10 border border-white/15 rotate-1.5`}
                        />
                        <div
                          className={`relative w-9 h-11 rounded-md bg-white/15 border border-white/20 flex items-center justify-center`}
                        >
                          <FileText
                            size={16}
                            className={`${project.iconColor}`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Tag */}
                    <div className="absolute top-0 left-0 px-2.5 py-1 rounded-br-xl bg-black/30 backdrop-blur-sm">
                      <span className="text-[10px] font-medium text-white/70">
                        Last Updated: {project.lastUpdated}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="px-3 py-2.5 flex flex-col gap-0.5">
                    <p className="text-xs text-white/50 font-normal">
                      {project.title}
                    </p>
                    <p className="text-base font-semibold text-white">
                      {project.sources} Sources
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Finalized ePubs */}
          <section className="px-4 mt-7">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-white">
                Finalized ePubs
              </h2>
            </div>

            {finalizedEpubs.map((epub) => (
              <div
                key={epub.id}
                className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-card"
              >
                {/* Book Cover Area */}
                <div
                  className={`relative h-64 bg-gradient-to-br ${epub.color} flex flex-col items-center justify-center`}
                >
                  {/* Decorative book spine lines */}
                  <div className="absolute inset-0 flex">
                    <div className="w-6 h-full bg-black/20 border-r border-white/5" />
                    <div className="flex-1" />
                  </div>

                  {/* Book icon */}
                  <div className="relative flex flex-col items-center gap-3">
                    <div className="w-24 h-32 rounded-r-lg bg-white/8 border border-white/15 shadow-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-3 bg-white/5 border-r border-white/10" />
                      <BookOpen size={28} className="text-emerald-400/70 ml-2" />
                    </div>
                    <span className="text-sm font-medium text-white/50">
                      Book Cover
                    </span>
                  </div>

                  {/* Published tag */}
                  <div className="absolute top-0 left-0 px-2.5 py-1 rounded-br-xl bg-black/30 backdrop-blur-sm">
                    <span className="text-[10px] font-medium text-emerald-400">
                      Published: {epub.publishedDate}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-4 py-3 flex flex-col gap-0.5">
                  <p className="text-xs text-white/50">{epub.title}</p>
                  <p className="text-base font-semibold text-white">
                    {epub.format}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* Action Buttons */}
          <section className="px-4 mt-6 flex gap-3">
            <Link
              to="/scanner"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border border-white/25 bg-white/5 hover:bg-white/10 transition-all duration-200 font-semibold text-white text-sm"
            >
              <Camera size={16} className="text-white/70" />
              Direct Scan
            </Link>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl gradient-primary hover:opacity-90 transition-opacity font-semibold text-white text-sm shadow-primary-glow">
              <FolderOpen size={16} />
              New Book Folder
            </button>
          </section>
        </main>

        <BottomNav />
      </div>
    </div>
  );
}
