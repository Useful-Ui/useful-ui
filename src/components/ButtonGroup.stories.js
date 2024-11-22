import React from 'react';
import ButtonGroup from './ButtonGroup';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
};

// Create a template to reuse
const Template = args => <ButtonGroup {...args} />;

// Default state with multiple buttons
export const Default = Template.bind({});
Default.args = {
  buttons: [
    { primary: true, label: 'Primary Button', onClick: () => alert('Primary clicked') },
    { label: 'Secondary Button', onClick: () => alert('Secondary clicked') },
    { size: 'large', label: 'Large Button', onClick: () => alert('Large clicked') },
    { size: 'small', label: 'Small Button', onClick: () => alert('Small clicked') },
    { disabled: true, label: 'Disabled Button' },
  ],
};