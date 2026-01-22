import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-5 text-left flex justify-between items-center focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-slate-800 group-hover:text-red-600 transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="text-red-600" /> : <ChevronDown className="text-gray-400 group-hover:text-red-600" />}
      </button>
      {isOpen && (
        <div className="pb-5 text-slate-600 leading-relaxed text-base">
          {answer}
        </div>
      )}
    </div>
  );
};

interface FAQSectionProps {
  items: FAQItemProps[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ items }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-10 my-10">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8 border-l-4 border-red-600 pl-4">Frequently Asked Questions</h2>
        <div className="divide-y divide-gray-100">
            {items.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    </div>
  );
};

export default FAQSection;