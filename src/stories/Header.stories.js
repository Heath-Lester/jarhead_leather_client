import React from 'react';
import { Logo } from "../components/atoms/Logo"
import { Navigation } from "../components/molecules/Navigation"

import { Header } from '../components/organisms/Header';

export default {
  title: 'Organisms/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Center = Template.bind({});
Center.args = {
  style: 'center'
};

export const Left = Template.bind({});
Left.args = {
  style: 'left'
};
