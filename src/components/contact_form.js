import React, { Component } from 'react';
import Field from './field';

class ContactForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            form: {
                firstName: '',
                lastName: ''
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const { value, name } = event.target;
    
        const { form } = this.state;

        // console.log('value',value);
        // console.log('name',name);
    
        form[name] = value;
        
        // need to ask why form: {...form}
        this.setState({
            form: {...form}
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('handleSubmit called, form values are: ',this.state.form);

    }

    render(){

        const { firstName, lastName } = this.state.form;

        // on input, remember name, value, onChange
        return (
            <form onSubmit = { this.handleSubmit }>
                <div className = 'form-group'>
                    <label>First Name</label>
                    <input onChange = { this.handleInputChange } value = { firstName } name = 'firstName' type = 'text' className = 'form-control'></input>
                </div>
                <div className = 'form-group'>
                    <label>Last Name</label>
                    <input onChange = { this.handleInputChange } value = { lastName } name = 'lastName' type = 'text' className = 'form-control'></input>
                </div>
                <button>Add Contact</button>
            </form>
        )
    }
}

export default ContactForm;
