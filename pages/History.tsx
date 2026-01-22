import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQ';

const History: React.FC = () => {
    const faqs = [
        {
            question: "When was the Rice Purity Test created?",
            answer: "The first iteration appeared in 1924 at Rice University."
        },
        {
            question: "Is it still used at Rice University?",
            answer: "Yes, taking the test is a longstanding tradition for incoming students during Orientation Week (O-Week)."
        }
    ];

  return (
    <>
      <SEO 
        title="History of the Rice Purity Test – Origin and Meaning"
        description="Learn the origin, history, and cultural meaning of the Rice Purity Test."
      />
      <article className="max-w-4xl mx-auto prose prose-slate prose-headings:font-bold prose-a:text-red-600 hover:prose-a:text-red-800 prose-a:no-underline hover:prose-a:underline">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8">History of the Rice Purity Test</h1>
        
        <p className="lead text-xl text-slate-600 mb-8">
            Before it was a viral internet sensation, the <strong>Rice Purity Test</strong> was a simple student newspaper survey. Here is the story of how a 1924 questionnaire became a digital rite of passage.
        </p>

        <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mt-0">Origin at Rice University</h2>
            <p className="text-slate-700">
                The test traces its roots back to <strong>1924</strong> at Rice University in Houston, Texas. It was first published in the student newspaper, <em>The Thresher</em>, under the guise of a "Purity Questionnaire."
            </p>
            <p className="text-slate-700">
                Originally, it was intended to gauge the moral character of the student body during a more conservative era. The questions focused heavily on social etiquette, courtship, and mild rebellious acts of the time.
            </p>
        </section>

        <section className="bg-red-50 p-8 rounded-xl border-l-4 border-red-600 mb-10 shadow-sm">
            <h2 className="text-2xl font-bold text-red-900 mt-0">How the Test Became Popular</h2>
            <p className="text-red-800">
                For decades, the test was a local tradition. However, with the advent of the internet in the 1990s and early 2000s, the list was digitized. Its quantifiable nature—giving a single number to represent one's life experience—made it perfect for the emerging social web. It allowed strangers to instantly compare "scores" in chat rooms and forums.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Rice Purity Test and College Culture</h2>
            <p className="text-slate-700">
                Today, the test is synonymous with Orientation Week (O-Week) at many universities, not just Rice. It acts as an icebreaker.
            </p>
            <ul className="list-disc pl-5 mt-2 text-slate-700 marker:text-red-600">
                <li><strong>Bonding:</strong> New students compare scores to find peers with similar backgrounds.</li>
                <li><strong>Tracking:</strong> Students take the test annually to see their score "drop" as they engage in college life.</li>
                <li><strong>Mythology:</strong> High scores are jokingly revered as "pure," while low scores are worn as badges of honor (or shame).</li>
            </ul>
        </section>

        <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Modern Online Versions</h2>
            <p className="text-slate-700">
                While the <Link to="/questions-list">official questions</Link> have stabilized, countless variations exist. The version hosted here reflects the standard "100 question" format recognized by most US college students today.
            </p>
        </section>

        <FAQSection items={faqs} />
      </article>
    </>
  );
};

export default History;