import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ 
  primary = false,
  size = 'medium',
  label,
  onClick,
  disabled = false
}) {
  const baseButton = 'rounded-lg font-semibold';
  const sizeStyles = {
    small: 'px-4 py-2.5 text-sm',
    medium: 'px-5 py-3 text-base',
    large: 'px-6 py-3.5 text-lg'
  };
  
  const modeStyles = primary
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  return (
    <button
      type="button"
      className={`${baseButton} ${sizeStyles[size]} ${modeStyles} ${disabledStyles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional disabled state
   */
  disabled: PropTypes.bool
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
  disabled: false
};