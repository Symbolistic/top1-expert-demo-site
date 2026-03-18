const Label = ({ htmlFor, className = '', children }) => {
    return (
        <label
            htmlFor={htmlFor}
            className={`block text-sm font-medium text-text mb-1.5 ${className}`}
        >
            {children}
        </label>
    );
};

export default Label;
