import { useEffect, useState } from "react";
import { FaqDomain } from "../../../../domain/model/faq/FaqDomain";
import container from "../../../../di/Modules";
import { ConfigsProviderRepository } from "../../../../domain/repositories/ConfigsProviderRepository";
import { TYPES } from "../../../../di/Types";
import QuestionAndAnswerCard from "./QuestionAnswerCard";
import { PAGE_WIDTH_CONFIG } from "../../../../utils/Constants";


export default function QuestionAndAnswer() {
    const [faqs, setFaq] = useState<FaqDomain[]>([]);
    useEffect(() => {
        getFaq(setFaq);
    }, []);
    return (
        <div className="flex items-center justify-center">
            <div className={`${PAGE_WIDTH_CONFIG} mt-10`}>
                {faqs.map((faq) => (
                    <QuestionAndAnswerCard answer={faq.answer} question={faq.question}/>
                ))}
            </div>
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
