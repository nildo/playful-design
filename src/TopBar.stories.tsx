import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TopBar, { TopBarProps } from './TopBar';

export default {
  title: 'Components/TopBar',
  component: TopBar,
} as Meta;

const Template: Story<TopBarProps> = (args) => (
  <TopBar {...args} >TopBar Title</TopBar>
);

export const Default = Template.bind({});
Default.args = {};

