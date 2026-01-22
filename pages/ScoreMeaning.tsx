import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQ';

const ScoreMeaning: React.FC = () => {
  const faqs = [
    {
      question: "Is a low score bad?",
      answer: "Not necessarily. A low score simply indicates that you have had a wide variety of life experiences included on the test list. It is common for scores to drop significantly during college years."
    },
    {
      question: "What is the most common score?",
      answer: "For college students, scores typically range between 50 and 80. The distribution varies heavily by age and institution."
    }
  ];

  return (
    <>
      <SEO 
        title="Rice Purity Test Score Meaning (0–100 Explained)"
        description="Understand what your Rice Purity Test score means. Full explanation for scores from 0 to 100."
      />
      <article className="max-w-4xl mx-auto prose prose-slate prose-headings:font-bold prose-a:text-red-600 hover:prose-a:text-red-800 prose-a:no-underline hover:prose-a:underline">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8">Rice Purity Test Score Meaning</h1>
        
        <p className="lead text-xl text-slate-600 mb-8">
          You've taken the test and got a number. But what does your <Link to="/">Rice Purity Test score</Link> actually say about you? Here is the comprehensive breakdown of score ranges from 0 to 100.
        </p>

        <section className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-0">What Does Your Score Mean?</h2>
          <p className="text-slate-700">
            The score is a percentage of innocence. <strong>100</strong> represents maximum purity (zero items checked), while <strong>0</strong> represents maximum experience (all items checked). Most people fall somewhere in the middle, transitioning from high scores to lower scores as they navigate early adulthood.
          </p>
        </section>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full border border-green-200">81–100</span>
              The Innocents
            </h2>
            <p className="text-slate-700 mt-2">
              Scores in this range typically belong to younger students, incoming freshmen, or those who choose a disciplined lifestyle. You have likely experienced the basics of dating or minor rule-breaking but have avoided major vices.
            </p>
            <ul className="list-disc pl-5 mt-2 text-slate-600 marker:text-green-600">
                <li><strong>98-100:</strong> The Gold Standard. Likely never held hands or been on a date.</li>
                <li><strong>90-97:</strong> Mild experimentation, perhaps a first kiss or staying out late.</li>
                <li><strong>81-89:</strong> A typical high school graduate score entering college.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full border border-blue-200">61–80</span>
              The Explorers
            </h2>
            <p className="text-slate-700 mt-2">
              This is the most common range for university students. You are branching out, trying new things, and stepping out of your comfort zone socially and romantically.
            </p>
            <ul className="list-disc pl-5 mt-2 text-slate-600 marker:text-blue-600">
                <li>Generally implies active dating life.</li>
                <li>Likely exposure to party culture.</li>
                <li>Common among sophomores and juniors in college.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full border border-yellow-200">41–60</span>
              The Experienced
            </h2>
            <p className="text-slate-700 mt-2">
              Entering the territory of "well-lived." Scores in this range suggest a person who has said "yes" to many of life's adventures, including some that might be considered risky or rebellious.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full border border-orange-200">21–40</span>
              The Wild Cards
            </h2>
            <p className="text-slate-700 mt-2">
              You have stories to tell. This score range indicates significant involvement in adult activities, party culture, and perhaps some brushes with authority.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full border border-red-200">0–20</span>
              The Rebels
            </h2>
            <p className="text-slate-700 mt-2">
              A score below 20 is rare and suggests a lifestyle that has checked off nearly every box on the list. You are likely the friend with the wildest anecdotes.
            </p>
          </section>
        </div>

        <section className="bg-gray-50 p-8 rounded-xl border border-gray-200 mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Is a Higher Rice Purity Score Better?</h2>
          <p className="text-slate-700 mb-4">
             Society often equates "purity" with virtue, implying a higher score is better. However, the <strong>Rice Purity Test</strong> is not a moral judgment.
          </p>
          <p className="text-slate-700">
             A high score may mean you are disciplined or cautious. A low score may mean you are adventurous or uninhibited. Neither is inherently superior; they simply reflect different life paths and choices.
          </p>
        </section>

        <FAQSection items={faqs} />

        <div className="mt-8 text-center">
            <Link to="/" className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-100">
                Check Your Score Now
            </Link>
        </div>
      </article>
    </>
  );
};

export default ScoreMeaning;