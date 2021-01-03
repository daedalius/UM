import * as React from 'react';

import '../../global.css';

import { Slider } from './Slider';

export default {
  title: 'Controls/Slider',
  component: Slider,
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: ['0', '1', '2'],
      },
    },
  },
};

const Template = (args) => <Slider {...args} />;

const options = [
  { value: '0', text: 'easy' },
  { value: '1', text: 'medium' },
  { value: '2', text: 'hard' },
];

export const Default = Template.bind({});
Default.args = {
  name: 'difficulty',
  value: '1',
  options: options,
  onChange: (value) => alert(value),
};

export const WithLowestValue = Template.bind({});
WithLowestValue.args = {
  name: 'difficulty',
  value: '0',
  options: options,
  onChange: (value) => alert(value),
};

export const WithMaxValue = Template.bind({});
WithMaxValue.args = {
  name: 'difficulty',
  value: '2',
  options: options,
  onChange: (value) => alert(value),
};
