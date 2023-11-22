import styled from 'styled-components';

export const StyledBook = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 428px;
  height: 816px;
  padding: 0px 20px;
  overflow: scroll;
  border: 1px solid #9dc180;

  header nav ul {
    padding: 20px 0px;
    display: flex;
    gap: 30px;
    list-style-type: none;
  }

  .nav-link {
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid #9dc180;
    background-color: #ffffff;
    color: #9dc180;
  }

  header .active {
    background-color: #9dc180;
    color: #ffffff;
  }
`;
