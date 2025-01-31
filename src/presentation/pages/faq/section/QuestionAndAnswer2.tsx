import { useEffect, useState } from "react";
import  ic_plus  from "../../../../assets/icons/ic_plus.svg"
import  ic_minus  from "../../../../assets/icons/ic_minus.svg"
import { FaqDomain } from "../../../../domain/model/faq/FaqDomain";
import container from "../../../../di/Modules";
import { ConfigsProviderRepository } from "../../../../domain/repositories/ConfigsProviderRepository";
import { TYPES } from "../../../../di/Types";
import { motion } from "framer-motion";
import QuestionAndAnswerCard from "./QuestionAnswerCard";


export default function QuestionAndAnswer2() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
        const [faqs, setFaq] = useState<FaqDomain[]>([]);
        useEffect(() => {
            getFaq(setFaq);
        }, []);


    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // ... previous code remains the same
    return (
        <div className="max-w-2xl mx-auto">
            {faqs.map((faq) => (
                <QuestionAndAnswerCard answer={faq.answer} question={faq.question}/>
            ))}
        </div>
    );

}

const getFaq = async (
    onFinishFetchAction: (arg0: FaqDomain[]) => void
) => {
    const repository = container.get<ConfigsProviderRepository>(TYPES.ConfigsProviderRepository);
    const data = await repository.getFaq();
    onFinishFetchAction(data);
};
