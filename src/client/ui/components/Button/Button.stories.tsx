import * as React from 'react';
import '../../global.css';
import { Button } from './Button';

export default {
  title: 'Controls/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  text: 'Accept',
  name: 'accept',
  size: 'sm',
  onClick: () => alert('Button has been clicked!'),
};

export const Large = Template.bind({});
Large.args = {
  text: 'New Game',
  name: 'new-game',
  size: 'lg',
  onClick: () => alert('Button has been clicked!'),
};
