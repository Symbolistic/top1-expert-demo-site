const Textarea = ({ className = '', rows = 5, ...props }) => {
    return (
        <textarea
            rows={rows}
            className={`w-full bg-surface border border-border rounded-[var(--radius-md)] px-4 py-3 text-text placeholder:text-muted text-sm outline-none focus:border-primary transition-colors duration-200 resize-none ${className}`}
            {...props}
        />
    );
};

export default Textarea;
