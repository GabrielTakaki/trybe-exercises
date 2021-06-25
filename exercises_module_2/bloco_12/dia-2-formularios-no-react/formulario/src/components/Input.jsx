import React from 'react';

class Input extends React.Component {
  render() {
    const { inputType, inputName, inputValue, inputOnChange, isRequired, maxLength } = this.props;
    return(
      <input 
        type={ inputType }
        name={ inputName }
        value={ inputValue }
        onChange={ inputOnChange }
        required={ isRequired }
        maxLength={ maxLength }
      />
    );
  }
}

export default Input;
