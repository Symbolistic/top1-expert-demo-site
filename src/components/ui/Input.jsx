const Input = ({ className = '', ...props }) => {
    return (
        <input
            className={`w-full bg-surface border border-border rounded-[var(--radius-md)] px-4 py-3 text-text placeholder:text-muted text-sm outline-none focus:border-primary transition-colors duration-200 ${className}`}
            {...props}
        />
    );
};

export default Input;
