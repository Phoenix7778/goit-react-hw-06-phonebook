import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsData  = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsData,
  reducers: {
    addNewContact: {
      reducer(state, action) {
        return state.filter(contact => contact.name === action.payload.name)
          .length
          ? alert(`${action.payload.name} is already in contacts`)
          : [action.payload, ...state];
      },

      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      return state.filter(contact  => contact.id !== action.payload);
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts;
export const ContactsReducer = contactsSlice.reducer;
