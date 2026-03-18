const Card = ({ className = '', children }) => {
    return (
        <div
            className={`bg-surface-2 border border-border rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-card)] ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
