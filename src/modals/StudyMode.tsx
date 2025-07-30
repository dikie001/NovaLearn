import { BookOpen, Brain, Sparkles, X } from "lucide-react";

const StudyMode = ({ setShowStudyMode }:any) => {

   type ModeTypes = "short_stories" | "quiz";



    //handle mode selection for both btns
    const handleModeSelection=(mode:ModeTypes)=>{
          setShowStudyMode(false)
          console.log(mode)
    }
  return (
    <div>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
        <div className="relative w-full max-w-lg bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-cyan-500/20 px-8 py-10 rounded-3xl shadow-2xl shadow-cyan-900/50 animate-in zoom-in-95 duration-300">
          {/* Close button */}
          <button
            onClick={() => setShowStudyMode(false)}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-full transition-all duration-200"
          >
            <X size={20} />
          </button>

          {/* Header with icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 shadow-lg shadow-cyan-500/30">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Choose Your Study Mode
            </h2>
            <p className="text-slate-400 text-sm">
              Select the learning experience that works best for you
            </p>
          </div>

          {/* Study mode options */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleModeSelection('short_stories')}
              className="group relative flex-1 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:from-cyan-900/40 hover:to-blue-900/40 border border-slate-700/50 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-orange-400 group-hover:text-orange-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Short Stories
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Learn through engaging narratives and examples
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
            </button>

            <button className="group relative flex-1 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:from-cyan-900/40 hover:to-blue-900/40 border border-slate-700/50 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <Brain className="w-8 h-8 text-purple-400 group-hover:text-purple-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Quiz
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Test your knowledge with interactive questions
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-1 -left-1 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-xl" />
          <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-xl" />
        </div>
      </div>
    </div>
  );
};

export default StudyMode;
