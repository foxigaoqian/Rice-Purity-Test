import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQ';

const SafeVersion: React.FC = () => {
    const faqs = [
        {
            question: "Where can I find a clean version?",
            answer: "There are many 'Innocence Tests' online designed specifically for teenagers that exclude the adult themes found in the Rice Purity Test."
        },
        {
            question: "Is the original test 18+?",
            answer: "The original test covers adult topics including substance use and intimacy, making it generally unsuitable for minors."
        }
    ];

  return (
    <>
      <SEO 
        title="Clean Rice Purity Test – Safe and PG Version"
        description="Take the clean and safe Rice Purity Test version suitable for younger users."
      />
      <article className="max-w-4xl mx-auto prose prose-slate prose-headings:font-bold prose-a:text-red-600 hover:prose-a:text-red-800 prose-a:no-underline hover:prose-a:underline">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8">Clean Rice Purity Test</h1>
        
        <p className="lead text-xl text-slate-600 mb-8">
            The standard <Link to="/">Rice Purity Test</Link> contains mature themes. For younger users or those seeking a family-friendly alternative, a "Clean" or "PG" version is often preferred.
        </p>

        <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mt-0">What Is the Clean Version?</h2>
            <p className="text-slate-700">
                A Clean Rice Purity Test removes questions related to drugs, alcohol, legal trouble, and sexual intimacy. Instead, it focuses on:
            </p>
            <ul className="list-disc pl-5 mt-2 text-slate-700 marker:text-red-600">
                <li>Social awkwardness</li>
                <li>School behavior (e.g., "Cheated on a test")</li>
                <li>Childhood mischief</li>
                <li>Relationship milestones restricted to holding hands or crushes</li>
            </ul>
        </section>

        <section className="bg-green-50 p-8 rounded-xl border border-green-100 mb-10 shadow-sm">
            <h2 className="text-2xl font-bold text-green-900 mt-0">Differences From the Original Test</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                    <h3 className="font-bold text-green-800 text-lg">Original</h3>
                    <p className="text-green-800">Contains questions about arrests, hard drugs, and explicit encounters. Designed for college-aged adults.</p>
                </div>
                <div>
                    <h3 className="font-bold text-green-800 text-lg">Clean Version</h3>
                    <p className="text-green-800">Focuses on "Have you ever stayed up all night?" or "Lied to parents?" Suitable for middle and high schoolers.</p>
                </div>
            </div>
        </section>

        <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Recommended Age Groups</h2>
            <p className="text-slate-700">
                We recommend the standard test only for users <strong>18 and older</strong>. The clean version is appropriate for ages <strong>13-17</strong>.
            </p>
        </section>

        <section>
             <h2 className="text-2xl font-bold text-slate-900">When to Use the Clean Version</h2>
             <p className="text-slate-700">
                If you are taking the test with family members, younger siblings, or in a professional school setting, the clean version avoids awkward conversations and maintains the fun of the scoring system without the mature content.
             </p>
        </section>

        <FAQSection items={faqs} />
      </article>
    </>
  );
};

export default SafeVersion;