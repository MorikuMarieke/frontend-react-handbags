import './Button.css'

const Button= ({buttonText, type, onClick, onDisabled, className}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={onDisabled}
            className={className}
        >
            {buttonText}
        </button>
    );
}

export default Button;