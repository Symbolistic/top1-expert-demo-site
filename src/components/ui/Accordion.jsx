const AccordionItem = ({ question, answer }) => {
    return (
        <details className="group border border-border rounded-[var(--radius-md)] bg-surface-2 overflow-hidden">
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none text-text font-medium select-none hover:text-primary transition-colors duration-200">
                {question}
                <span className="ml-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45">
                    +
                </span>
            </summary>
            <div className="px-6 pb-5 text-muted text-sm leading-relaxed">
                {answer}
            </div>
        </details>
    );
};

const Accordion = ({ items, className = '' }) => {
    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            {items.map((item, index) => (
                <AccordionItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
};

export default Accordion;
