import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledList } from './Styled';
import { ReactComponent as TrashSvg } from 'icons/trashSvg.svg';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contacts.reducer';

import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contactsStore.contacts);
  const isLoading = useSelector(state => state.contactsStore.isLoading);
  const error = useSelector(state => state.contactsStore.error);

  const handleFilterChangeState = newFilter => {
    setFilter(newFilter);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <StyledList>
      <Filter handleFilterChangeState={handleFilterChangeState} />

      {filteredContacts().length !== 0 ? (
        <h1 className="main-title">My contacts</h1>
      ) : (
        <p>No contacts available</p>
      )}
      {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
      <ul className="contacts-list">
        {filteredContacts().map(({ id, name, number, avatar }) => (
          <li key={id} className="list-name">
            <img className='profile-photo' src={ avatar } alt={name} />
            <p>
              {name}: {number}
            </p>
            <button
              className="remove-btn"
              type="button"
              onClick={() => handleDeleteContact(id)}
            >
              <TrashSvg />
            </button>
          </li>
        ))}
      </ul>
    </StyledList>
  );
};
