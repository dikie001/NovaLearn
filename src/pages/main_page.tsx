import { BookOpen, Star, Users, Zap } from "lucide-react";
import { useState } from "react";
import StudyMode from "../modals/StudyMode";

const MainPage = () => {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [showStudyMode, setShowStudyMode] = useState<boolean>(false);

  const grades = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleGradeSelect = (grade: number) => {
    setSelectedGrade(grade);
    setShowStudyMode(true)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-violet-950 text-white overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl shadow-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-4">
            StudyMate
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Master every subject with interactive revision for grades 1-8
          </p>
        </header>

        {/* Grade Selection */}
        <div className="max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl font-semibold text-center mb-4 text-gray-100">
            Choose Your Grade
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {grades.map((grade) => (
              <button
                key={grade}
                onClick={() => handleGradeSelect(grade)}
                className={`
                  relative group bg-gradient-to-br from-black/60 to-black/20
                  hover:from-black/20 hover:to-black/60 hover:ring ring-cyan-600 shadow-lg shadow-cyan-900/40
                 
                  rounded-2xl p-8 transition-all duration-300 
                  transform 
                  ${selectedGrade === grade ? "ring-2 ring-purple-400" : ""}
                `}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {grade}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    Grade {grade}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Interactive Learning</h3>
            <p className="text-gray-400">
              Engaging exercises and quizzes that make learning fun and
              memorable.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
            <p className="text-gray-400">
              Monitor your improvement with detailed analytics and achievement
              badges.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Personalized</h3>
            <p className="text-gray-400">
              Adaptive content that adjusts to your learning pace and style.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Excel?</h3>
            <p className="text-purple-100 mb-6">
              Join thousands of students already improving their grades
            </p>
            <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Start Learning Now
            </button>
          </div>
        </div>
      </div>
      {/* MODALS */}
      {showStudyMode && <StudyMode setShowStudyMode={setShowStudyMode} />}
    </div>
  );
};

export default MainPage;
