import React from 'react';
import { Link } from 'react-router-dom';
import PurityTest from '../components/PurityTest';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQ';

const Home: React.FC = () => {
  const faqs = [
    {
      question: "What is the Rice Purity Test?",
      answer: "The Rice Purity Test is a 100-question survey that assesses a person's level of innocence in worldly matters. Originally created by Rice University students, it covers topics ranging from romantic relationships and habits to legal trouble. It serves as a bonding activity and a way to compare experiences."
    },
    {
      question: "What does my score mean?",
      answer: "Your score represents your percentage of 'purity' remaining. A score of 100 means you have done none of the activities on the list, while a score of 0 means you have done all of them. Generally, higher scores indicate more innocence, while lower scores indicate more life experience."
    },
    {
      question: "Is the Rice Purity Test anonymous?",
      answer: "Yes, this online version of the test is completely anonymous. Your responses are not stored on our servers, and your score is calculated locally in your browser. You can share your score manually if you choose to."
    },
    {
      question: "How accurate is the Rice Purity Test?",
      answer: "The test is a fun self-assessment tool rather than a scientifically accurate psychological evaluation. It reflects a specific set of experiences commonly associated with college life and young adulthood. Accuracy depends entirely on how honestly you answer the questions."
    },
    {
      question: "Can I take the test multiple times?",
      answer: "Absolutely. Many people take the Rice Purity Test annually to track how their score changes as they gain new experiences throughout college and early adulthood. Use the 'Reset' button to clear your answers and start over."
    },
    {
      question: "Is there a safe version for younger users?",
      answer: "The original test contains mature themes. For younger audiences or those avoiding sensitive topics, we recommend checking out the Safe Version page which discusses cleaner alternatives suitable for different age groups."
    }
  ];

  return (
    <>
      <SEO 
        title="Rice Purity Test – 100 Question Official Online Version"
        description="Take the original Rice Purity Test online. Answer 100 questions and instantly calculate your purity score. Free, anonymous, and mobile-friendly."
      />
      
      <div className="space-y-12">
        {/* Interactive Tool Section */}
        <section>
          <div className="mb-10 text-center">
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-4 tracking-tight">
              Rice Purity Test
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-2xl mx-auto font-light">
              The official 100-question checklist. Calculate your score instantly.
            </p>
          </div>
          <PurityTest />
        </section>

        {/* Content Sections */}
        <article className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-red-600 hover:prose-a:text-red-800 prose-a:no-underline hover:prose-a:underline prose-lg">
          
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">What Is the Rice Purity Test?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              The <strong>Rice Purity Test</strong> is a famous 100-question survey that originated at Rice University. It was designed to help students bond by comparing their life experiences across various domains, including relationships, rule-breaking, and general mischief. Over time, it has evolved from a campus tradition into a global internet phenomenon.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The test works as a checklist. For every item you have "done," you check the box. Your final score is calculated by subtracting the number of checked items from 100. A score of 100 implies absolute purity (you have done nothing on the list), while a lower score indicates a broader range of life experiences.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How It Works</h2>
              <ul className="list-disc pl-5 space-y-3 text-slate-700 marker:text-red-600">
                <li>Read through the <Link to="/questions-list">Rice Purity Test questions list</Link>.</li>
                <li>Check the box for every experience you have had.</li>
                <li>The tool automatically subtracts your checked boxes from 100.</li>
                <li>Your final number is your "Purity Score."</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Calculation</h2>
              <p className="text-slate-700 mb-4">
                The formula is simple:
              </p>
              <div className="bg-slate-50 border-l-4 border-red-600 p-4 rounded-r-lg text-center font-mono text-lg font-bold text-slate-800 mb-4">
                Score = 100 - (Total Checked Items)
              </div>
              <p className="text-slate-700">
                This means every experience "costs" you one point of purity. There is no weighting; holding hands counts the same as getting arrested.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">What Is a Good Rice Purity Test Score?</h2>
            <p className="text-slate-700 leading-relaxed mb-8">
              There is no objectively "good" or "bad" score on the <Link to="/">Rice Purity Test</Link>. The score is merely a reflection of your life experiences at a specific point in time. However, scores are often categorized to help users understand where they stand compared to peers.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="p-6 bg-green-50 rounded-xl border border-green-100 transition-transform hover:-translate-y-1">
                <div className="text-3xl font-black text-green-700 mb-2">90–100</div>
                <div className="text-xs font-bold text-green-800 uppercase tracking-wider">Very Pure</div>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 transition-transform hover:-translate-y-1">
                <div className="text-3xl font-black text-blue-700 mb-2">60–89</div>
                <div className="text-xs font-bold text-blue-800 uppercase tracking-wider">Average</div>
              </div>
              <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 transition-transform hover:-translate-y-1">
                <div className="text-3xl font-black text-orange-700 mb-2">30–59</div>
                <div className="text-xs font-bold text-orange-800 uppercase tracking-wider">Rebellious</div>
              </div>
              <div className="p-6 bg-red-50 rounded-xl border border-red-100 transition-transform hover:-translate-y-1">
                <div className="text-3xl font-black text-red-700 mb-2">0–29</div>
                <div className="text-xs font-bold text-red-800 uppercase tracking-wider">Wild</div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link to="/score-meaning" className="inline-flex items-center text-red-600 font-bold hover:text-red-800 transition-colors">
                Read the full score meaning guide &rarr;
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Average Rice Purity Test Scores (2025–2026)</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Curious how you stack up? The <Link to="/average-score">average Rice Purity Score</Link> tends to decrease with age as people gain more life experience.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="min-w-full bg-white">
                <thead className="bg-slate-50 border-b border-gray-200">
                  <tr>
                    <th className="py-4 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Group</th>
                    <th className="py-4 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Estimated Average</th>
                    <th className="py-4 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-5 px-6 text-sm font-bold text-slate-900">Incoming Freshmen</td>
                    <td className="py-5 px-6 text-sm text-slate-600 font-mono font-medium">90 - 97</td>
                    <td className="py-5 px-6 text-sm text-slate-600">Mostly new to independent life.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-5 px-6 text-sm font-bold text-slate-900">College Seniors</td>
                    <td className="py-5 px-6 text-sm text-slate-600 font-mono font-medium">60 - 70</td>
                    <td className="py-5 px-6 text-sm text-slate-600">Significant social experimentation.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-5 px-6 text-sm font-bold text-slate-900">Post-Graduates</td>
                    <td className="py-5 px-6 text-sm text-slate-600 font-mono font-medium">40 - 60</td>
                    <td className="py-5 px-6 text-sm text-slate-600">Full adulthood experiences.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Is the Rice Purity Test Accurate?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              While the <strong>Rice Purity Test</strong> is accurate in calculating a mathematical score based on your inputs, it is not a scientific measure of character or morality. It is a social checklist designed for entertainment.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Factors affecting accuracy include honesty, interpretation of questions, and the changing definition of social norms. The test should be viewed as a time capsule of college culture rather than a definitive judgment of one's life.
            </p>
          </section>

          <section className="mb-12">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Is the Rice Purity Test Anonymous and Safe?</h2>
             <p className="text-slate-700 leading-relaxed mb-4">
               Privacy is a top priority. This <Link to="/">Rice Purity Test score</Link> calculator runs entirely in your browser.
             </p>
             <ul className="list-disc pl-5 space-y-2 text-slate-700 marker:text-red-600">
                <li><strong>No Data Collection:</strong> We do not store your answers on any server.</li>
                <li><strong>Instant Reset:</strong> You can clear your data instantly with one click.</li>
                <li><strong>Safe Sharing:</strong> When you <Link to="/share-score">share your score</Link>, only the number is shared, not the specific questions you answered.</li>
             </ul>
          </section>

          <FAQSection items={faqs} />
        </article>
      </div>
    </>
  );
};

export default Home;