import React from "react"
import PropTypes from "prop-types"
import "./navigation.css"

export const Navigation = ({ split, size, ...props }) => {
    if (split === 'full') {
        return (
            <div className={`navigation--${size}--${split}`} {...props}>
                <a className="navigation__aTag" href="">Jarhead Leather Co.</a>
                <a className="navigation__aTag" href="">Catalog</a>
                <a className="navigation__aTag" href="">Custom Order</a>
                <a className="navigation__aTag" href="">Cart</a>
            </div>
        )
    } else if (split === 'left') {
        return (
            <div className={`navigation--${size}--${split}`} {...props}>
                <a className="navigation__aTag" href="">Jarhead Leather Co.</a>
                <a className="navigation__aTag" href="">Catalog</a>
            </div>
        )
    } else if (split === 'right') {
        return (
            <div className={`navigation--${size}--${split}`} {...props}>
                <a className="navigation__aTag" href="">Custom Order</a>
                <a className="navigation__aTag" href="">Cart</a>
            </div>
        )
    }
}

Navigation.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
}

Navigation.defaultProps = {
    split: 'full',
    size: 'medium',
    onClick: undefined,
}