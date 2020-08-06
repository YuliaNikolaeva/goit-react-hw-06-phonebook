import React, { Component } from 'react';

// import { v4 as uuidv4 } from 'uuid';

import s from './App.module.css';

import ContactForm from './components/ContactForm';
import Container from './components/Container';
// import ContactsList from './components/ContactsList';
// import Filter from './components/Filter';
// import Message from './components/Message';

export default class App extends Component {
    // state = {
    //     contacts: [],
    //     filter: '',
    // }

    // componentDidMount() {
    //     const contacts = localStorage.getItem('contacts');
    //     const parseContacts = JSON.parse(contacts);
    //     if (parseContacts) {
    //         this.setState({ contacts: parseContacts });
    //     }
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.contacts !== this.state.contacts) {
    //         localStorage.setItem(
    //             'contacts',
    //             JSON.stringify(this.state.contacts),
    //         );
    //     }
    // }

    // addContact = newContact => {
    //     const { contacts } = this.state;
    //     const contactItem = {
    //         id: uuidv4(),
    //         name: newContact.name,
    //         number: newContact.number,
    //     };
    //     const isCorrectInput =
    //         contactItem.name.length !== 0 && contactItem.number.length !== 0;

    //     if (!isCorrectInput) {
    //         alert('One or more fields is full');
    //         return;
    //     }

    //     const isNewContactDublicate = contacts.some(
    //         contact => contact.name === newContact.name.trim(),
    //     );

    //     if (isNewContactDublicate) {
    //         alert(`${newContact.name.trim()} is alredy in contacts`);
    //         return;
    //     }

    //     this.setState({ contacts: [contactItem, ...contacts] });
    // };

    // const = e => {
    //     this.setState({ filter: e.currentTarget.value });
    // };

    // getVisibleContacts = () => {
    //     const { contacts, filter } = this.state;
    //     const normalizerFilter = filter.toLocaleLowerCase();
    //     return contacts.filter(contact =>
    //         contact.name.toLocaleLowerCase().includes(normalizerFilter),
    //     );
    // };

    // deleteContact = idForDel => {
    //     this.setState(prevState => ({
    //         contacts: prevState.contacts.filter(
    //             prevContact => prevContact.id !== idForDel,
    //         ),
    //     }));
    // };

    render() {
        // const visibleContacts = this.getVisibleContacts();
        return (
            <div className={s.page__wrapper}>
                <Container title={'Phonebook'}>
                    <ContactForm />
                    {/* {this.state.contacts.length > 1 && (
                        <Filter
                            value={this.state.filter}
                            onChange={this.changeFilter}
                        />
                    )}
                    <ContactForm OnSubmit={this.addContact} /> */}
                </Container>

                <Container title={'Contacts'}>
                    {/* {this.state.contacts.length > 0 ? (
                        <ContactsList
                            contacts={visibleContacts}
                            onclickBtn={this.deleteContact}
                        />
                    ) : (
                        <Message text={'Phonebook is empty'} />
                    )} */}
                </Container>
            </div>
        );
    }
}
