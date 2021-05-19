import React from "react"
import PropTypes from "prop-types"
import "./categoryCard.css"
import press from "../../images/press.jpg"


export const CategoryCard = ({ image, text, ...props }) => {
    return (
        <div className={`categoryCard`} {...props}>
            <img className="categoryCard--image" src={image} />
            <h2>{text}</h2>
        </div>
    )
}

CategoryCard.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

CategoryCard.defaultProps = {
    image: press,
    text: "Wallets",
    onClick: undefined,
}