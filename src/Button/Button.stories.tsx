import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <div style={{ padding: 10 }}><Button {...args} >Default</Button></div>
);

export const Default = Template.bind({});
Default.args = {};

export const Colors = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ padding: 10 }}><Button color="black">Black</Button></div>
    <div style={{ padding: 10 }}><Button color="blue">Blue</Button></div>
    <div style={{ padding: 10 }}><Button color="green">Green</Button></div>
    <div style={{ padding: 10 }}><Button color="orange">Orange</Button></div>
  </div>
);
