import Link from 'next/link';

const PageBanner = ({ eyebrow, title, subtitle, breadcrumb }) => {
    return (
        <div className="bg-navy pt-[70px]">
            <div className="mx-auto max-w-6xl px-6 py-16">
                {breadcrumb && (
                    <nav className="flex items-center gap-2 text-xs text-white/40 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-white/70 transition-colors duration-200">Home</Link>
                        {breadcrumb.map(({ label, href }) => (
                            <span key={label} className="flex items-center gap-2">
                                <span>/</span>
                                {href ? (
                                    <Link href={href} className="hover:text-white/70 transition-colors duration-200">{label}</Link>
                                ) : (
                                    <span className="text-white/60">{label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                )}
                {eyebrow && (
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">{eyebrow}</p>
                )}
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-white/65 text-lg mt-4 max-w-xl leading-relaxed">{subtitle}</p>
                )}
            </div>
        </div>
    );
};

export default PageBanner;
