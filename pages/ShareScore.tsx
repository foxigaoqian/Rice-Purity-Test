import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQ';
import { Share2, Instagram, Twitter, Facebook } from 'lucide-react';

const ShareScore: React.FC = () => {
     const faqs = [
        {
            question: "Does the website post for me?",
            answer: "No. For privacy reasons, we do not automate posting. You must copy your score or take a screenshot to share it."
        },
        {
            question: "Can people see my answers?",
            answer: "No. When you share your score, you are only sharing the final number (e.g., '72'). Your checklist remains private."
        }
    ];

  return (
    <>
      <SEO 
        title="Share Your Rice Purity Test Score Online"
        description="Learn how to share your Rice Purity Test score on social media safely."
      />
      <article className="max-w-4xl mx-auto prose prose-slate prose-headings:font-bold prose-a:text-red-600 hover:prose-a:text-red-800 prose-a:no-underline hover:prose-a:underline">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8">Share Your Rice Purity Test Score</h1>
        
        <section className="bg-red-600 text-white p-10 rounded-2xl shadow-xl shadow-red-200 mb-10 text-center">
            <Share2 size={56} className="mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-extrabold text-white mt-0 mb-3">Ready to Share?</h2>
            <p className="text-red-50 text-lg mb-8 max-w-lg mx-auto">
                Most users share their score on Instagram Stories, TikTok, or Twitter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-red-50 transition-colors shadow-lg">
                    <Instagram size={20} /> Instagram
                </button>
                <button className="flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-red-50 transition-colors shadow-lg">
                    <Twitter size={20} /> Twitter
                </button>
                <button className="flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-red-50 transition-colors shadow-lg">
                    <Facebook size={20} /> Facebook
                </button>
            </div>
        </section>

        <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900">How to Share Your Score</h2>
            <ol className="list-decimal pl-5 space-y-4 text-slate-700 mt-4 font-medium marker:text-red-600">
                <li>
                    <strong>Take the Test:</strong> Complete the <Link to="/">Rice Purity Test</Link> on the homepage.
                </li>
                <li>
                    <strong>Screenshot:</strong> The easiest way to share is to screenshot your result box (the big number).
                </li>
                <li>
                    <strong>Add Context:</strong> Post the image with a caption like <em>"I got a 45... don't ask."</em> or <em>"Still holding strong at 98!"</em>.
                </li>
            </ol>
        </section>

        <section className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mt-0">Privacy and Safety Tips</h2>
            <p className="text-slate-700 mb-4">
                Before posting your score, remember:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 marker:text-red-600">
                <li>Your score can imply involvement in illegal activities (underage drinking, etc.).</li>
                <li>Future employers may check social media.</li>
                <li>Consider sharing only with close friends or on private stories rather than public feeds.</li>
            </ul>
        </section>

        <FAQSection items={faqs} />
      </article>
    </>
  );
};

export default ShareScore;