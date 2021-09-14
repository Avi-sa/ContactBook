import { DELETE_CONTACT, CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, SELECT_CONTACT, CLEAR_CONTACT } from '../constants/types'

export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact,
    };
};


export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id,
}
);

// update a contact

export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
})


export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id,
})


export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload: id,
})
