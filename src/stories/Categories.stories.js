import React from 'react'
import { Categories } from "../components/organisms/Categories"

export default {
    title: 'Organisms/Categories',
    component: Categories,
}

const Template = (args) => <Categories {...args} />

export const Regular = Template.bind({})
