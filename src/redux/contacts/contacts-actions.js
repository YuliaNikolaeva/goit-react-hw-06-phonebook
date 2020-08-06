import { v4 as uuidv4 } from 'uuid';
import types from './contacts-types';

const addContact = newContact => ({
    type: types.ADD,
    payload: {
        id: uuidv4(),
        name: newContact.name,
        number: newContact.number,
    },
});

export { addContact };
