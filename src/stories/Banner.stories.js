import React from 'react'
import { Banner } from "../components/molecules/Banner"

export default {
    title: 'Molecules/Banner',
    component: Banner,
}

const Template = (args) => <Banner {...args} />

export const Regular = Template.bind({})
