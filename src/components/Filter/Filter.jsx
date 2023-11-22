import { StyledFilterInput } from './Styled';

export const Filter = ({ handleFilterChangeState }) => {
  const handleFilterChange = event => {
    handleFilterChangeState(event.target.value);
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
