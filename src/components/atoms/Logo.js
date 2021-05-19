import React from "react"
import PropTypes from "prop-types"
import "./logo.css"
import jhlogo from "../../images/jhlogo.jpg"
import jhlogoPlain from "../../images/jhlogoPlain.png"

export const Logo = ({ size, lettering, shape, ...props }) => {
    const image = lettering ? jhlogo : jhlogoPlain
    return (
        <img
            className={`jhlogo--${size}`}
            src={image}
            alt="Jarhead Leather Co Logo" 
            {...props}
            />
    )
}


Logo.propTypes = {
    lettering: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
}

Logo.defaultProps = {
    lettering: true,
    size: 'medium',
    onClick: undefined,
}