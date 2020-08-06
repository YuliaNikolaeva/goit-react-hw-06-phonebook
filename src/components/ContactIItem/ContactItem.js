import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

import Button from '../Buttons';

const ContactItem = ({ contactItem, onClick }) => {
    return (
        <>
            <div className={s.name}>{contactItem.name}</div>
            <div className={s.number}>{contactItem.number}</div>
            <div className={s.btnBox}>
                <Button onClick={onClick} contactId={contactItem.id} />
            </div>
        </>
    );
};

ContactItem.propTypes = {
    contactItem: PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.string,
        id: PropTypes.string,
    }),
    onClick: PropTypes.func,
};

export default ContactItem;
