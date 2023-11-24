import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// const contacts = [
//   { id: 'id-1', name: 'Harry', number: '459-12-56' },
//   { id: 'id-2', name: 'Dumbledore', number: '443-89-12' },
//   { id: 'id-3', name: 'Voldemort', number: '645-17-79' },
//   { id: 'id-4', name: 'Snape', number: '227-91-00' },
//   { id: 'id-5', name: 'Hermione', number: '245-91-54' },
//   { id: 'id-6', name: 'Ron', number: '227-91-73' },
//   { id: 'id-7', name: 'Draco', number: '227-91-11' },
//   { id: 'id-8', name: 'Hagrid', number: '227-91-26' },
// ];

export const fetchContacts = createAsyncThunk(
  'contactList/get',
  // payloadCreater
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('https://6560018a83aba11d99d015e2.mockapi.io/contacts')
      console.log(data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message)
    }
  }
)

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
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
  extraReducers: builder => builder.addCase(fetchContacts.pending, (state) => {
    state.isLoading = true;
    state.error = null;
  }).addCase(fetchContacts.fulfilled, (state, {payload}) => {
    state.isLoading = false;
    state.contacts = payload;
  }).addCase(fetchContacts.rejected, (state, {payload}) => {
     state.isLoading = false;
    state.error = payload;
   })
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
