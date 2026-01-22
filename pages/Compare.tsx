import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQ';

const Compare: React.FC = () => {
    const faqs = [
        {
            question: "How do I compare scores?",
            answer: "Simply ask your friend for their number (0-100) after they take the test. There is no automatic multiplayer mode."
        },
        {
            question: "What is a normal score gap?",
            answer: "A gap of 10-20 points is common between friends. Larger gaps may indicate different lifestyles or upbringing."
        }
    ];

  return (
    <>
      <SEO 
        title="Compare Rice Purity Test Scores With Friends"
        description="Compare Rice Purity Test scores with friends and understand what the differences mean."
      />
      <article className="max-w-4xl mx-auto prose prose-slate prose-headings:font-bold prose-a:text-red-600 hover:prose-a:text-red-800 prose-a:no-underline hover:prose-a:underline">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8">Compare Rice Purity Test Scores</h1>
        
        <p className="lead text-xl text-slate-600 mb-8">
            The <Link to="/">Rice Purity Test</Link> is social by nature. Comparing scores with friends, roommates, and partners is a classic way to break the ice and learn about each other.
        </p>

        <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mt-0">How to Compare Scores</h2>
            <ol className="list-decimal pl-5 space-y-2 text-slate-700 marker:text-red-600 font-medium">
                <li>Take the test individually on your own devices.</li>
                <li>Share your final number (0-100).</li>
                <li>Discuss specific "Yes" or "No" answers if you are comfortable doing so.</li>
            </ol>
            <p className="text-sm text-gray-500 mt-4 italic">Note: Never pressure anyone to reveal which specific questions they checked.</p>
        </section>

        <section className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mt-0">What Score Differences Mean</h2>
            <div className="space-y-6 mt-6">
                <div className="flex gap-4 items-start">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center font-bold text-blue-600 shrink-0 text-xs uppercase tracking-wide border border-blue-100">Similar</div>
                    <div>
                        <h3 className="font-bold text-slate-900 m-0">Within 10 Points</h3>
                        <p className="text-slate-600 m-0">You likely have similar lifestyles and risk tolerances. This is common among close friend groups.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center font-bold text-red-600 shrink-0 text-xs uppercase tracking-wide border border-red-100">Gap</div>
                    <div>
                        <h3 className="font-bold text-slate-900 m-0">20+ Point Difference</h3>
                        <p className="text-slate-600 m-0">One person is significantly more experienced or adventurous. This often leads to interesting "how did you do that?" stories.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Group and College Comparisons</h2>
            <p className="text-slate-700">
                Many student organizations calculate a "Group Average" to see which cohort is the "wildest" or most "innocent."
            </p>
            <p className="text-slate-700">
                <strong>Tip:</strong> If you are comparing with a partner, remember that a higher or lower score does not define relationship compatibility.
            </p>
        </section>

        <FAQSection items={faqs} />
      </article>
    </>
  );
};

export default Compare;