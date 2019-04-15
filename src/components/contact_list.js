import React, { Component } from 'react';
import ContactCard from './contact_card';
// import contactData from '../data/contacts';

class ContactList extends Component{

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         contacts: contactData,
    //     }
    // }

    render(){
        // console.log('Contact Data',this.state.contacts);

        const list = this.props.contacts.map(function(item,index){
            // console.log('item: ',item);
            return <ContactCard contact = { item } key = { index }/>
        });

        return (
            // <h1>This is some text</h1>
            <div className = 'col-8'>
                <div className = 'row'>
                    { list }
                </div>
            </div>
        )
    }
}

export default ContactList;