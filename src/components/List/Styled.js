import styled from 'styled-components';

export const StyledList = styled.div`
  .profile-photo {
    border-radius: 50%;
    overflow: hidden;
    width: 50px;
    height: 50px;
    repeat: no-repeat;
    background-size: cover;
  }

  .list-name {
    list-style-type: none;
    display: flex;
    padding: 15px 0px;
    gap: 30px;
    justify-content: baseline;
    align-items: center;
    padding-left: 10px;
    position: relative;
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    transition: 0.4s;
  }

  .list-name:hover,
  .list-name:focus {
    background-color: #9dc180;
    color: #fff;
    fill: #fff;
  }

  .remove-btn {
    border: none;
    background-color: transparent;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50px;
    right: 40px;
    cursor: pointer;
    transform: translateX(0);
    transition: 0.4s;
  }

  .remove-btn:hover,
  .remove-btn:focus {
    transform: translateX(0.5rem);
  }

  .main-title {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  .contacts-list {
    padding: 0px;
    overflow: hidden;
  }
`;
