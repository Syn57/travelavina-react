import React, { useEffect, useState } from 'react';
import { FaqDomain } from '../../../../domain/model/faq/FaqDomain';
import container from '../../../../di/Modules';
import { ConfigsProviderRepository } from '../../../../domain/repositories/ConfigsProviderRepository';
import { TYPES } from '../../../../di/Types';


const QuestionAndAnswerItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleExpansion}>
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-xl">{isExpanded ? '-' : '+'}</span>
      </div>
      {isExpanded && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const QuestionAndAnswer: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [faqs, setFaq] = useState<FaqDomain[]>([]);
    useEffect(() => {
        getFaq(setFaq);
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        {faqs.map((item, index) => (
            <QuestionAndAnswerItem key={index} question={item.question} answer={item.answer} />
        ))}
        </div>
    );
};

const getFaq = async (
    onFinishFetchAction: (arg0: FaqDomain[]) => void
) => {
    const repository = container.get<ConfigsProviderRepository>(TYPES.ConfigsProviderRepository);
    const data = await repository.getFaq();
    onFinishFetchAction(data);
};

export default QuestionAndAnswer;