import { useDispatch } from 'react-redux';
import { StyledFilterInput } from './Styled';
import { filterContacts } from 'redux/Contacts/contacts.reducer';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <StyledFilterInput>
      <div>
        <input
          className="filter-input"
          placeholder="Search contacts"
          type="text"
          name="filter"
          onChange={handleFilterChange}
        />
      </div>
    </StyledFilterInput>
  );
};
