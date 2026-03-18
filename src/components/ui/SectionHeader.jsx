const ALIGN = {
    center: 'items-center text-center',
    left: 'items-start text-left',
};

const SectionHeader = ({
    eyebrow,
    title,
    subtitle,
    align = 'center',
    className = '',
}) => {
    return (
        <div className={`flex flex-col gap-4 ${ALIGN[align]} ${className}`}>
            {eyebrow && (
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                    {eyebrow}
                </span>
            )}
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted text-lg max-w-2xl">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
