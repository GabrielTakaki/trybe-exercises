import React from 'react'
import Input from './Input';

class Forms extends React.Component {
  constructor() {
    super()

    this.state ={
      name: '',
      email: '',
      cpf: 0,
      address: '',
      cidade: '',
      estado: '',
      homeType: false,
    }

    this.handleChange = this.handleChange.bind(this);

  }

  changeHandler = e => {
    let { name, value } = e.target;

    if(name === 'name') value = value.toUpperCase();
    if(name === 'address') value = this.validateAddress(value)
  }

  handleChange(e) {
    const { name } = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  render() {  

    const { name, email, cpf, endereco, cidade, estado, homeType } = this.state;

    return (
      <div>
        <form className="form">
          <fieldset>
            Name: <Input 
              inputType="text"
              inputName="name"
              inputValue={ name.toUpperCase() }
              inputOnChange={ this.handleChange }
              isRequired
              maxLength="40"
            />
          </fieldset> 
        </form>
      </div>
    )
  }
}

export default Forms
