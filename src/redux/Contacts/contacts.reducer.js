import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contactList/getContacts',
  // payloadCreater
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        'https://6560018a83aba11d99d015e2.mockapi.io/contacts'
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  // payloadCreater
  async (contactId, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `https://6560018a83aba11d99d015e2.mockapi.io/contacts/${Number(
          contactId
        )}`
      );
      return data.id;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  // payloadCreater
  async (newContact, thunkApi) => {
    try {
      const { data } = await axios.post(
        'https://6560018a83aba11d99d015e2.mockapi.io/contacts',
        newContact
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload
        );
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.items = [...state.contacts.items, payload];
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const { filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
