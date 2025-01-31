import { useEffect, useRef, useState } from "react";
import  ic_plus  from "../../../../assets/icons/ic_plus.svg"
import  ic_minus  from "../../../../assets/icons/ic_minus.svg"

const QuestionAndAnswerCard = ({question, answer} : {question: string, answer: string}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);
    const contentRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (contentRef.current) {
            if (isExpanded) {
                setContentHeight(contentRef.current.scrollHeight); // Get the full height of the content
            } else {
                setContentHeight(0); // Collapse the content
            }
        }
    }, [isExpanded]);

    return (
        <div className="mb-2 rounded-md mt-4">
            <button
                className="flex justify-between items-center w-full p-4 bg-primary text-white text-left font-bold font-algreya text-xl"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {question}
                <img className="h-6 w-6" src={isExpanded ? ic_minus : ic_plus} />
            </button>
            
                <div 
                    ref={contentRef} 
                    className="overflow-hidden" 
                    style={{
                        height: `${contentHeight}px`,
                        transition: 'height 0.3s ease',
                    }}
                >
                    <div className="p-4 text-gray-800 font-alike">{answer}</div> 
                </div>
        </div>
    );
}

export default QuestionAndAnswerCard;