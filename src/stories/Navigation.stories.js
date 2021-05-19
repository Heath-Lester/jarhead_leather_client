import React from 'react'
import { Navigation } from "../components/molecules/Navigation"

export default {
    title: 'Molecules/Navigation',
    component: Navigation,
}

const Template = (args) => <Navigation {...args} />

export const Full = Template.bind({})
Full.args = {
    split: 'full',
    size: 'medium',
    onClick: undefined,
}

export const Left = Template.bind({})
Left.args = {
    split: 'left',
    size: 'medium',
    onClick: undefined,
}

export const Right = Template.bind({})
Right.args = {
    split: 'right',
    size: 'medium',
    onClick: undefined,
}