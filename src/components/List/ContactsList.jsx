import { useSelector } from 'react-redux';
import { StyledList } from './Styled';
import { ReactComponent as TrashSvg } from 'icons/trashSvg.svg';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contacts.reducer';

import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectFilteredContacts,
} from 'redux/Contacts/contacts.selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filteredContacts = useSelector(selectFilteredContacts);

  // переносимо в складний селектор для складних обчислень (те саме що і useMemo)!!!
  // const filteredContacts = () => {
  //   return contacts.filter(
  //     contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
  //       contact.number.toString().includes(filter.toLowerCase().trim())
  //   );
  // };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <StyledList>
      <Filter />

      {filteredContacts.length !== 0 ? (
        <h1 className="main-title">My contacts</h1>
      ) : (
        <p>No contacts available</p>
      )}
      {error !== null && <p>{error}</p>}
      {isLoading && <Loader />}
      <ul className="contacts-list">
        {filteredContacts.map(({ id, name, number, avatar }) => (
          <li key={id} className="list-name">
            <img className="profile-photo" src={avatar} alt={name} />
            <div>
              <p>{name}:</p>
              <p>{number}</p>
            </div>
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
