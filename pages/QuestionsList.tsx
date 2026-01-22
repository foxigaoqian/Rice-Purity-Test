import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQ';
import { questions } from '../data/questions';

const QuestionsList: React.FC = () => {
  const faqs = [
    {
      question: "Are these the official questions?",
      answer: "Yes, this list represents the standard set of 100 questions used in the modern online version of the Rice Purity Test."
    },
    {
      question: "Do the questions change?",
      answer: "The core list has remained largely consistent for decades, though minor variations exist across different websites. We use the most widely recognized version."
    }
  ];

  return (
    <>
      <SEO 
        title="Rice Purity Test Questions List – All 100 Questions"
        description="View the complete list of all 100 Rice Purity Test questions."
      />
      <article className="max-w-4xl mx-auto prose prose-slate prose-headings:font-bold prose-a:text-red-600 hover:prose-a:text-red-800 prose-a:no-underline hover:prose-a:underline">
        <div className="text-center mb-10">
             <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">Rice Purity Test Questions List</h1>
             <p className="text-xl text-slate-600">
                The complete checklist. Read through all 100 items before you <Link to="/">take the test</Link>.
            </p>
        </div>
        
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-red-50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-red-900 m-0">Complete List of All 100 Questions</h2>
            </div>
            <div className="p-0">
                <ol className="divide-y divide-gray-100 list-decimal list-inside m-0">
                    {questions.map((q, i) => (
                        <li key={i} className="px-6 py-3 text-slate-700 hover:bg-gray-50 transition-colors">
                            <span className="pl-2">{q}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
            <section>
                <h2 className="text-2xl font-bold text-slate-900">Why These Questions Are Included</h2>
                <p className="text-slate-700">
                    The list progresses roughly from innocent social interactions to more serious adult activities. This gradient allows the test to differentiate between someone who has merely "dated" versus someone who has engaged in risky behaviors.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-slate-900">Are the Questions Updated?</h2>
                <p className="text-slate-700">
                    While modern life evolves, the <Link to="/history">Rice Purity Test</Link> largely preserves its historical questions to maintain comparability across generations. Some questions about technology or outdated terms may be modernized in different versions.
                </p>
            </section>
        </div>

        <FAQSection items={faqs} />
      </article>
    </>
  );
};

export default QuestionsList;