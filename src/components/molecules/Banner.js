import React from "react"
import PropTypes from "prop-types"
import Carousel from 'react-bootstrap/Carousel'
import Coffee from "../../images/coffee.jpg"
import BottleOpener from "../../images/bottleopener.jpg"
import Bag from "../../images/bag.jpg"
import Koozies from "../../images/koozies.jpg"
import Wallets from "../../images/wallets.jpg"
import "./banner.css"

export const Banner = ({ interval, ...props }) => {
    return (
        <Carousel>
            <Carousel.Item interval={interval}>
                <img
                    className="carouse--image"
                    src={Coffee}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Test Label</h3>
                    <p>This is a test</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={interval}>
                <img
                    className="carouse--image"
                    src={BottleOpener}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Test Label</h3>
                    <p>This is a test</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={interval}>
                <img
                    className="carouse--image"
                    src={Bag}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Test Label</h3>
                    <p>This is a test</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={interval}>
                <img
                    className="carouse--image"
                    src={Koozies}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Test Label</h3>
                    <p>This is a test</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={interval}>
                <img
                    className="carouse--image"
                    src={Wallets}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Test Label</h3>
                    <p>This is a test</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

Banner.propTypes = {
    interval: PropTypes.number,
}

Banner.defaultProps = {
    interval: 1000,
}
