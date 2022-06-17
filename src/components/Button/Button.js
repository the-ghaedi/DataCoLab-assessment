import PropTypes from 'prop-types';

function Button({ children, active, className, ...rest }) {
    let classes = "hover:bg-secondary font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center shadow-md dark:text-white";
    if (active) classes += " bg-secondary"
    return (
        <button {...rest} type="button" className={`${classes} ${className ?? ""}`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    className: PropTypes.string,
};

export default Button;