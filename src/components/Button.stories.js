import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  // Parameters for our component
  parameters: {
    layout: 'centered',
  },
  // Define control types for arguments
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
};

// Create a template to reuse
const Template = args => <Button {...args} />;

// Default state
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

// Secondary state
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

// Large button
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

// Small button
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

// Disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Button',
};