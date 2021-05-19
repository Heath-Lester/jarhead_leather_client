import React from 'react';
import PropTypes from 'prop-types';
import { CategoryCard } from "../molecules/CategoryCard"
import bag from "../../images/bagangle.jpg"
import keychains from "../../images/keychains.jpg"
import notebook from "../../images/notebook.jpg"
import belt from "../../images/belts.jpg"
import earpod from "../../images/earpodcropped.jpg"

import './categories.css';


export const Categories = ({ style, ...props }) => {
    return (
        <section className="categories">
            <CategoryCard text={"Wallets"}/>
            <CategoryCard image={belt} text={"Belts"}/>
            <CategoryCard image={earpod} text={"Cases"}/>
            <CategoryCard image={bag} text={"Bags"}/>
            <CategoryCard image={notebook} text={"Notebooks"}/>
            <CategoryCard image={keychains} text={"Accessories"}/>
        </section>
    )
}

Categories.propTypes = {
};

Categories.defaultProps = {
    style: 'center'
};


