import React from 'react'
import { Banner } from "../components/molecules/Banner"
import Carousel from "react-bootstrap/Carousel"

export default {
    title: 'Molecules/Banner',
    component: Banner,
}

const Template = (args) => <Banner {...args} />

export const Regular = Template.bind({})
