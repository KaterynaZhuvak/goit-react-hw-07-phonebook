import { ContactsList } from 'components/List/ContactsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/contacts.reducer';

const MyContacts = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <div>
      <ContactsList />
    </div>
  );
};

export default MyContacts;
