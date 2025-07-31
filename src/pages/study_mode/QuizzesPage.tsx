import { useEffect, useState } from "react";
import { School, CheckCircle } from "lucide-react"; // 🔄 switched to Lucide
import { getStudyDataFromStorage } from "../../utils/mini_functions";

// type Quiz = {
//   id: number;
//   subject: string;
//   grade: number;
//   question: string;
//   options: string[];
//   answer: string;
//   explanation: string;
// };

export default function QuizzesPage() {
  const quizzesData = [
    {
      id: 1,
      subject: "Mathematics",
      grade: 6,
      question: "What is 5 + 3?",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "5 plus 3 equals 8.",
    },
    {
      id: 2,
      subject: "Science",
      grade: 6,
      question: "Which part of the plant makes food?",
      options: ["Roots", "Stem", "Leaves", "Flowers"],
      answer: "Leaves",
      explanation: "Photosynthesis happens in the leaves.",
    },
    {
      id: 3,
      subject: "English",
      grade: 6,
      question: "Choose the correct past tense: 'He ___ the ball.'",
      options: ["throw", "throws", "threw", "throwed"],
      answer: "threw",
      explanation: "'Threw' is the correct past tense of 'throw'.",
    },
  ];

  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const quiz = quizzesData[currentQuiz];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNext = () => {
    setCurrentQuiz((prev) => (prev + 1) % quizzesData.length);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  useEffect(() => {
    loadDataFromStorage();
  }, []);

  const loadDataFromStorage = async () => {
    const loadedData = await getStudyDataFromStorage();
        if (loadedData) {
      const data = await import(
        `../../assets/jsons/grade_${loadedData.grade}/quiz.json`
      );
      console.log(data.default)
    }
  };
  return (
    <div className="p-6 max-w-3xl  mx-auto text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <School size={28} /> Quick Quiz
      </h2>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <div className="text-sm text-gray-500 mb-2">
          Subject: {quiz.subject} · Grade: {quiz.grade}
        </div>
        <h3 className="text-xl font-semibold mb-4">{quiz.question}</h3>

        <ul className="space-y-3">
          {quiz.options.map((option, index) => {
            const isCorrect = option === quiz.answer;
            const isSelected = selectedOption === option;

            return (
              <li
                key={index}
                onClick={() => !showAnswer && handleOptionClick(option)}
                className={`p-3 rounded-xl cursor-pointer transition 
                  ${
                    isSelected && showAnswer
                      ? isCorrect
                        ? "bg-green-100 dark:bg-green-700"
                        : "bg-red-100 dark:bg-red-700"
                      : "bg-white dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-800"
                  }`}
              >
                {option}
              </li>
            );
          })}
        </ul>

        {showAnswer && (
          <div className="mt-5 bg-yellow-100 dark:bg-yellow-800 p-4 rounded-lg">
            <CheckCircle className="inline mr-2 text-green-600" size={20} />
            Correct Answer: <strong>{quiz.answer}</strong>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
              {quiz.explanation}
            </p>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
