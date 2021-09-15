import React from 'react';

const Button = ({ className, children, disalbed, onClcik }) => {
  <button
    onClick={ onClcik }
    className={ `button-text ${className}` }
    disabled={ disalbed }>
      { children }
  </button>
}

export default Button;
