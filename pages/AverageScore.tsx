import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQ';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const AverageScore: React.FC = () => {
  const data = [
    { name: 'Freshman', score: 94, color: '#22c55e' },
    { name: 'Sophomore', score: 85, color: '#3b82f6' },
    { name: 'Junior', score: 72, color: '#eab308' },
    { name: 'Senior', score: 65, color: '#ef4444' },
    { name: 'Grad', score: 55, color: '#a855f7' },
  ];

  const faqs = [
    {
        question: "Why does the score drop in college?",
        answer: "College offers increased freedom, access to adult activities, and a social environment that encourages experimentation, leading to lower scores."
    },
    {
        question: "Is 50 a bad score?",
        answer: "No, 50 is a very common score for older college students and young adults. It indicates a balance of innocence and experience."
    }
  ];

  return (
    <>
      <SEO 
        title="Average Rice Purity Test Score by Age and College Students"
        description="See the average Rice Purity Test score by age group and college students."
      />
      <article className="max-w-4xl mx-auto prose prose-slate prose-headings:font-bold prose-a:text-red-600 hover:prose-a:text-red-800 prose-a:no-underline hover:prose-a:underline">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8">Average Rice Purity Test Score</h1>
        
        <p className="lead text-xl text-slate-600 mb-8">
            Wondering if your score is normal? You are not alone. The <Link to="/average-score">average Rice Purity Test score</Link> serves as a benchmark for students across the country.
        </p>

        <section className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-0">What Is the Average Score?</h2>
          <p className="text-slate-700 mb-6">
            There is no single global average, as scores vary wildly by demographics. However, surveys suggest the overall average for undergraduate students hovers between <strong>65 and 70</strong>.
          </p>
          
          <div className="h-64 sm:h-80 w-full mt-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <XAxis dataKey="name" stroke="#64748b" tick={{fontSize: 12}} />
                <YAxis stroke="#64748b" tick={{fontSize: 12}} />
                <Tooltip 
                    cursor={{fill: '#f1f5f9'}}
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontFamily: 'inherit'}}
                />
                <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-sm text-slate-500 mt-2">Estimated average score by college year</p>
          </div>
        </section>

        <section className="my-10">
            <h2 className="text-2xl font-bold text-slate-900">Average Score for College Students</h2>
            <p className="text-slate-700 mt-2">
                The college environment acts as a catalyst for the experiences listed on the <Link to="/">Rice Purity Test</Link>.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mt-0">Freshmen Year</h3>
                    <p className="text-green-800">Entering college, most students score high (90+). The first year often sees the sharpest decline as students experience their first parties and relationships away from home.</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h3 className="text-xl font-bold text-red-900 mt-0">Senior Year</h3>
                    <p className="text-red-800">By graduation, the average typically settles around 60-65. This reflects a maturity and accumulation of life events over four years.</p>
                </div>
            </div>
        </section>

        <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Average Score by Age Group</h2>
            <div className="overflow-x-auto mt-4 rounded-xl border border-gray-200">
                <table className="min-w-full text-left text-sm whitespace-nowrap">
                    <thead className="uppercase tracking-wider border-b border-gray-200 bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-slate-500 font-bold">Age Range</th>
                            <th scope="col" className="px-6 py-4 text-slate-500 font-bold">Typical Score</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        <tr>
                            <td className="px-6 py-4 text-slate-700">14 - 17 (High School)</td>
                            <td className="px-6 py-4 text-slate-700 font-bold font-mono">85 - 95</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-slate-700">18 - 22 (College)</td>
                            <td className="px-6 py-4 text-slate-700 font-bold font-mono">60 - 80</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-slate-700">23 - 29 (Young Adult)</td>
                            <td className="px-6 py-4 text-slate-700 font-bold font-mono">45 - 65</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-slate-700">30+ (Adult)</td>
                            <td className="px-6 py-4 text-slate-700 font-bold font-mono">35 - 55</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-slate-900">Why Scores Vary</h2>
            <p className="text-slate-700">
                Scores are heavily influenced by cultural background, religious upbringing, and personal values. A high score is not necessarily "better" than a low score; it simply reflects a different timeline of life experiences.
            </p>
        </section>

        <FAQSection items={faqs} />
      </article>
    </>
  );
};

export default AverageScore;