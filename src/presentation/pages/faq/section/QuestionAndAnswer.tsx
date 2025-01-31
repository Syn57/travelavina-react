import { useEffect, useState } from "react";
import  ic_plus  from "../../../../assets/icons/ic_plus.svg"
import  ic_minus  from "../../../../assets/icons/ic_minus.svg"
import { FaqDomain } from "../../../../domain/model/faq/FaqDomain";
import container from "../../../../di/Modules";
import { ConfigsProviderRepository } from "../../../../domain/repositories/ConfigsProviderRepository";
import { TYPES } from "../../../../di/Types";
import QuestionAndAnswerCard from "./QuestionAnswerCard";


export default function QuestionAndAnswer() {
    const [faqs, setFaq] = useState<FaqDomain[]>([]);
    useEffect(() => {
        getFaq(setFaq);
    }, []);
    return (
        <div className="md:px-36 mx-auto mt-10">
            {faqs.map((faq) => (
                <QuestionAndAnswerCard answer={faq.answer} question={faq.question}/>
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
