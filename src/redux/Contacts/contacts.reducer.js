import { createSlice } from '@reduxjs/toolkit';
const contacts = [
  { id: 'id-1', name: 'Harry', number: '459-12-56' },
  { id: 'id-2', name: 'Dumbledore', number: '443-89-12' },
  { id: 'id-3', name: 'Voldemort', number: '645-17-79' },
  { id: 'id-4', name: 'Snape', number: '227-91-00' },
  { id: 'id-5', name: 'Hermione', number: '245-91-54' },
  { id: 'id-6', name: 'Ron', number: '227-91-73' },
  { id: 'id-7', name: 'Draco', number: '227-91-11' },
  { id: 'id-8', name: 'Hagrid', number: '227-91-26' },
];

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? contacts,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
