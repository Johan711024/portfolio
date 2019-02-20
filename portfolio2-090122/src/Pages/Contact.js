
import React, { Component } from 'react';
import axios from '../axios-data';
import AxiosData from '../AxiosData/AxiosData';
import InputElement from '../UI/FormElements/InputElement';
import Button from '../UI/Button/Button';

class Contact extends Component {

    componentDidMount () {
      axios.get('/pageContents.json')
        .then(response => {
          this.setState({pageContents: response.data})
        });
    }
  
    state = {
      sent: false,
      orderForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Name'
          },
          value: '',
          validation: {
              required: true,
              minLength: 2,
              maxLength: 300
          },
          valid: false,
          touched: false
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Your Email'
          },
          value: '',
          validation: {
              required: true,
              minLength: 2,
              maxLength: 300
          },
          valid: false,
          touched: false
        },
        category: {
          elementType: 'select',
          elementConfig: {
            options: [
              {value: 'consulting', displayValue: 'Consulting'},
              {value: 'product', displayValue: 'Adliba product'},
              {value: 'other', displayValue: 'Other'}
            ]
          },
          value: '',
          validation: {
            required: false
        },
        valid: true,
          touched: false
        },
        description: {
          elementType: 'textarea',
          elementConfig: {
            type: 'text',
            placeholder: 'Details...'
          },
          value: '',
          validation: {
            required: false
        },
        valid: true,
          touched: false
        }   
      },
      email: '',
      formIsValid: false
    }
    checkValidity(value, rules){
        let isValid = true;
        
        if (rules.required){
            isValid = value.trim() !=='' && isValid;
        }
        if (rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }


        return isValid;
    }
  
    saveData = (event) => {
      alert(event.target.value);
      this.setState({loading: true});
      setTimeout(()=> {
        this.setState({loading: false});
      }, 3000);
      AxiosData(this.state);
    }
    updateEmail = (event) => {    
      this.setState({email: event.target.value});
      console.log(this.state.email);
      
    }
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm   //först en deep clone på denna
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]  //därefter en deep clone inuti
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        console.log(updatedFormElement);
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    submitHandler = (event) => {
        event.preventDefault();
        
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value //skapar key-value-pair
        }
        
        console.log(formData);
        AxiosData(formData);
        this.setState({sent: true});

    }
  
    render () {  
      const formElementsArray = [];
      for (let key in this.state.orderForm) {
        formElementsArray.push({
          id: key,
          config: this.state.orderForm[key]
        });
      }
      let content = "Skickat!"
      if (!this.state.sent){
        content = ""
      }
  
      return (
        <div className='contact'>
        <h1>Contact Me</h1>
        
        <div className="wrapper">
  <header className="header">&nbsp;</header>
  <article className="main">

          {content}
          <form onSubmit={this.submitHandler}>
          
          {formElementsArray.map(formElement => (
            <InputElement 
              key={formElement.id} 
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value} 
              invalid={!formElement.config.valid}
              shoudValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event) => this.inputChangedHandler(event, formElement.id)}
              />
          ))} 
          <Button disabled={!this.state.formIsValid} clicked={this.props.loading}>Send</Button>
          </form>
          <p>You can reach me via email: <strong>hyperjohan@hotmail.com</strong></p>

                  </article>
          <aside className="aside aside-1">&nbsp;</aside>
          <aside className="aside aside-2">&nbsp;</aside>
          <footer className="footer">&nbsp;</footer>
          </div>
        </div>
      )
    };
  };

  export default Contact;