import React from 'react'
import Input from './Input';
import './Forms.css'

class Forms extends React.Component {
  constructor() {
    super()

    this.state ={
      name: '',
      email: '',
      cpf: '',
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

  // validateCity = e => {
  //   const regex = /^\d/;
  //   const { cidade } = this.state;
  //   const validate = e.target.value
  // }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  render() {  

    const { name, email, cpf, endereco, cidade, estado, homeType } = this.state;

    return (
      <div>
        <form className="form">
          <fieldset className="form-fieldset">

            Name: <Input 
              inputType="text"
              inputName="name"
              inputValue={ name.toUpperCase() }
              inputOnChange={ this.handleChange }
              isRequired
              maxLength="40"
              className="inputs"
            />

            Email:<Input 
              inputOnChange={ this.handleChange }
              inputValue={ email }
              inputType="email"
              inputName="email"
              isRequired
              maxLength="50"
              className="inputs"
            />

            CPF: <Input
              inputOnChange={ this.handleChange }
              inputValue={ cpf }
              inputType = "number"
              className="inputs"
              inputName = "cpf"
              maxLength="11"
              isRequired
            />

            Endereço: <Input 
              inputOnChange={ this.handleChange }
              inputValue={ endereco }
              className="inputs"
              maxLength="200"
              isRequired
            />

            Cidade: <Input 
              inputName="cidade"
              inputValue={ cidade }
              isRequired
              maxLength="28"
              inputOnChange={ this.handleChange }
              onBlur={(e) =>{
                if (e.target.value.match(/^\d/)) {
                  e.target.value = '';
                  this.setState({
                    cidade: ''
                  });
                } else {
                  return cidade
                }}}
            />

          </fieldset>
          <label>
          </label>
        </form>
      </div>
    )
  }
}

export default Forms
