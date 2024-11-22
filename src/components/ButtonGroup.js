import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

export default function ButtonGroup({ buttons }) {
  return (
    <div className="flex space-x-2">
      {buttons.map((buttonProps, index) => (
        <Button key={index} {...buttonProps} />
      ))}
    </div>
  );
}

ButtonGroup.propTypes = {
  /**
   * Array of button configurations
   */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      primary: PropTypes.bool,
      size: PropTypes.oneOf(['small', 'medium', 'large']),
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      disabled: PropTypes.bool,
    })
  ).isRequired,
};