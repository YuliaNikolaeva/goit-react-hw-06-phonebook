import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/contacts/contacts-actions';
import { v4 as uuidv4 } from 'uuid';

import s from './ContactForm.module.css';

console.log('импорт addContact', addContact);

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    createIdName = uuidv4();
    createIdNumber = uuidv4();

    saveContact = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        });
    };

    submitContact = e => {
        e.preventDefault();

        console.log('локальный стейт:', this.state);
        console.log('OnSubmit в props:', this.props.OnSubmit());

        this.props.OnSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.submitContact}>
                <label className={s.label} htmlFor={this.createIdName}>
                    <div className={s.head__field}>Name</div>
                    <input
                        type="text"
                        name="name"
                        className={s.input}
                        value={this.state.name}
                        onChange={this.saveContact}
                        id={this.createIdName}
                    />
                </label>

                <label className={s.label} htmlFor={this.createIdNumber}>
                    <div className={s.head__field}>Number</div>
                    <input
                        type="tel"
                        name="number"
                        className={s.input}
                        value={this.state.number}
                        onChange={this.saveContact}
                        id={this.createIdNumber}
                    />
                </label>
                <button className={s.btn} type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: newContact => dispatch(addContact(newContact)),
});

ContactForm.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(ContactForm);
