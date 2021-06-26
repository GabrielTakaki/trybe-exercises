import React from 'react';

class Input extends React.Component {
  render() {
    const { inputType, inputName, inputValue, inputOnChange, isRequired, maxLength, className, onBlur } = this.props;
    return(
      <input 
        type={ inputType }
        name={ inputName }
        value={ inputValue }
        onChange={ inputOnChange }
        required={ isRequired }
        maxLength={ maxLength }
        className={ className }
        onBlur={ onBlur }
      />
    );
  }
}

export default Input;
