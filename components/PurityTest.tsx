import React, { useState } from 'react';
import { questions } from '../data/questions';
import { RefreshCcw, Share2, Calculator, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const PurityTest: React.FC = () => {
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(100).fill(false)
  );
  const [score, setScore] = useState<number | null>(null);

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const calculateScore = () => {
    const checkedCount = checkedState.filter((value) => value).length;
    const finalScore = 100 - checkedCount;
    setScore(finalScore);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetTest = () => {
    setCheckedState(new Array(100).fill(false));
    setScore(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12 ring-1 ring-slate-900/5" id="interactive-tool">
      <div className="bg-red-600 p-6 sm:p-10 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight">Rice Purity Test</h2>
            <p className="text-red-100 text-lg max-w-2xl mx-auto font-medium">Check every item you have done. Your score is calculated automatically.</p>
            
            {score !== null && (
                <div className="mt-8 bg-white text-slate-900 rounded-xl p-8 shadow-2xl max-w-md mx-auto transform transition-all animate-in fade-in zoom-in duration-300">
                    <p className="text-sm uppercase tracking-widest font-bold text-slate-500 mb-2">Your Purity Score</p>
                    <div className="text-7xl font-black text-red-600 mb-4 tracking-tighter">{score}</div>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                        <button onClick={resetTest} className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-slate-700 px-5 py-3 rounded-lg text-sm font-bold transition-colors">
                            <RefreshCcw size={16} /> Take Again
                        </button>
                        <Link to="/share-score" className="flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
                            <Share2 size={16} /> Share Result
                        </Link>
                    </div>
                </div>
            )}
        </div>
      </div>

      <div className="p-6 sm:p-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
          {questions.map((q, index) => (
            <label
              key={index}
              className={`flex items-start gap-4 p-3 rounded-lg transition-all cursor-pointer select-none group border-b border-gray-50 last:border-0 ${
                checkedState[index] ? 'bg-red-50/50' : 'hover:bg-gray-50'
              }`}
            >
              <div className="pt-1 flex-shrink-0">
                <input
                  type="checkbox"
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                  className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500 cursor-pointer transition-transform duration-100 ease-in-out active:scale-95"
                />
              </div>
              <span className={`text-base leading-snug transition-colors ${checkedState[index] ? 'text-slate-900 font-semibold' : 'text-slate-600 group-hover:text-slate-900'}`}>
                <span className="inline-block w-8 text-gray-400 font-mono text-sm mr-1 text-right select-none">{index + 1}.</span> {q}
              </span>
            </label>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center border-t border-gray-100 pt-8">
            {score === null ? (
                <button
                    onClick={calculateScore}
                    className="w-full sm:w-auto px-10 py-5 bg-red-600 hover:bg-red-700 text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl shadow-red-200 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
                >
                    <Calculator size={28} />
                    Calculate Score
                </button>
            ) : (
                 <div className="text-center bg-gray-50 p-6 rounded-xl border border-gray-200 w-full max-w-lg">
                    <p className="text-slate-600 mb-3 font-medium">Want to know what this implies?</p>
                    <Link to="/score-meaning" className="text-red-600 font-bold hover:text-red-800 text-lg flex items-center justify-center gap-2">
                        Read Score Analysis <CheckSquare size={18} />
                    </Link>
                 </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default PurityTest;