import Link from 'next/link';

const VARIANTS = {
    primary: 'bg-primary text-bg font-semibold hover:bg-primary-dark',
    secondary: 'bg-surface-2 text-text hover:bg-border',
    outline: 'border border-border text-text hover:border-primary hover:text-primary',
    ghost: 'text-muted hover:text-text',
};

const SIZES = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

const Button = ({
    href,
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const base = 'inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] transition-colors duration-200 cursor-pointer';
    const classes = `${base} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
