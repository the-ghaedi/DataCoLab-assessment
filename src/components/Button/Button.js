import PropTypes from 'prop-types';

function Button({ children, active, ...rest }) {
    let classes = "hover:bg-secondary font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center";
    if (active) classes += " bg-secondary"
    return (
        <button {...rest} type="button" className={classes}>
            {children}
        </button>
    )
}

Button.propTypes = {
    active: PropTypes.bool,
    color: PropTypes.string
};

export default Button;