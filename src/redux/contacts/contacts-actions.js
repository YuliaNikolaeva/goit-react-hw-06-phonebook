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

const deleteContact = idForDel => ({
    type: types.DELETE,
    payload: idForDel,
});

const changeFilter = value => ({
    type: types.FILTER,
    payload: value,
});

export default { addContact, deleteContact, changeFilter };
