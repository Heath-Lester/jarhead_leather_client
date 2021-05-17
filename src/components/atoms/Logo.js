import React from "react"
import PropTypes from "prop-types"
import "./logo.css"
import jhlogo from "../../images/jhlogo.jpg"

export const Logo = ({ size, shape, ...props }) => {
    return (
        <img
            className={`jhlogo--${size}`}
            src={jhlogo}
            alt="Jarhead Leather Co Logo" 
            {...props}
            />
    )
}

Logo.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
}

Logo.defaultProps = {
    size: 'medium',
    onClick: undefined,
}