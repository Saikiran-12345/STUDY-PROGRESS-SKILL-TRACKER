import React, { useState } from 'react';

const quizDatabase = [
  {
    category: 'STEM',
    title: 'Vite & Frontend Tooling',
    questions: [
      {
        question: 'Which plugin is used to support React in Vite by default?',
        options: ['@vitejs/plugin-react', '@vue/plugin-react', 'vite-plugin-node', 'esbuild-react-plugin'],
        answer: 0
      },
      {
        question: 'Which tool does Vite use for fast production bundling under the hood?',
        options: ['Webpack', 'Rollup', 'Turbopack', 'Parcel'],
        answer: 1
      }
    ]
  },
  {
    category: 'STEM',
    title: 'Linear Algebra Matrices',
    questions: [
      {
        question: 'What is the determinant of a 2x2 identity matrix?',
        options: ['0', '-1', '1', 'Undefined'],
        answer: 2
      },
      {
        question: 'If det(A) = 0, what is true about matrix A?',
        options: ['It is invertible', 'It is non-singular', 'It is a square matrix', 'It has no inverse (singular)'],
        answer: 3
      }
    ]
  }
];

export const QuizzesPage: React.FC = () => {
  const [activeQuiz, setActiveQuiz] = useState<any>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const startQuiz = (quiz: any) => {
    setActiveQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowResults(false);
  };

  const handleNext = () => {
    if (selectedOption === activeQuiz.questions[currentQuestionIndex].answer) {
      setScore(s => s + 1);
    }
    
    if (currentQuestionIndex + 1 < activeQuiz.questions.length) {
      setCurrentQuestionIndex(i => i + 1);
      setSelectedOption(null);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Practice Quizzes</h1>
        <p className="text-slate-400 text-sm">Challenge yourself with questions derived from your subjects.</p>
      </div>

      {!activeQuiz && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizDatabase.map((quiz, idx) => (
            <div key={idx} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">{quiz.category}</span>
                <h2 className="text-xl font-bold text-white mt-1">{quiz.title}</h2>
                <p className="text-slate-400 text-sm mt-2">{quiz.questions.length} multiple choice questions.</p>
              </div>
              <button 
                onClick={() => startQuiz(quiz)}
                className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all"
              >
                START PRACTICE RUN
              </button>
            </div>
          ))}
        </div>
      )}

      {activeQuiz && !showResults && (
        <div className="max-w-2xl mx-auto p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-6">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <span className="text-xs text-slate-500 font-bold uppercase">{activeQuiz.title}</span>
            <span className="text-xs text-slate-500">Question {currentQuestionIndex + 1} of {activeQuiz.questions.length}</span>
          </div>

          <h2 className="text-lg font-bold text-white">{activeQuiz.questions[currentQuestionIndex].question}</h2>

          <div className="space-y-3">
            {activeQuiz.questions[currentQuestionIndex].options.map((opt: string, i: number) => (
              <div 
                key={i}
                onClick={() => setSelectedOption(i)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${selectedOption === i ? 'bg-blue-600/10 border-blue-500 text-blue-400' : 'bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-300'}`}
              >
                {opt}
              </div>
            ))}
          </div>

          <button 
            onClick={handleNext}
            disabled={selectedOption === null}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all disabled:opacity-50"
          >
            {currentQuestionIndex + 1 < activeQuiz.questions.length ? 'NEXT QUESTION' : 'SUBMIT ANSWERS'}
          </button>
        </div>
      )}

      {activeQuiz && showResults && (
        <div className="max-w-md mx-auto p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center space-y-6">
          <h2 className="text-3xl font-black text-white">Quiz Finished!</h2>
          <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800">
            <p className="text-slate-500 text-xs uppercase font-black mb-2">Final Score</p>
            <p className="text-5xl font-black text-blue-400">{score} / {activeQuiz.questions.length}</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => startQuiz(activeQuiz)}
              className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all"
            >
              Retry
            </button>
            <button 
              onClick={() => setActiveQuiz(null)}
              className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all"
            >
              Back to List
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizzesPage;
