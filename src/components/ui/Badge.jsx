const VARIANTS = {
    default: 'bg-surface-2 text-muted border border-border',
    accent: 'bg-primary/10 text-primary border border-primary/20',
};

const Badge = ({ variant = 'default', className = '', children }) => {
    const base = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide';
    return (
        <span className={`${base} ${VARIANTS[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
