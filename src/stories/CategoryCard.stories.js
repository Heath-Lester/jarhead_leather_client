import React from 'react'
import { CategoryCard } from "../components/molecules/CategoryCard"

export default {
    title: 'Molecules/CategoryCard',
    component: CategoryCard,
}

const Template = (args) => <CategoryCard {...args} />

export const Regular = Template.bind({})
