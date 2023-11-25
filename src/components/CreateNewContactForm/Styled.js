import styled from 'styled-components';

export const StyledNewContactForm = styled.div`
  position: relative;
  .hero {
    background-color: #9dc180;
    width: 100%;
    height: 200px;
    padding: 0px;
    position: relative;
  }

  .hero svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: #fff;
  }

  .input-title {
    color: #9dc180;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
  }

  .title-box {
    text-align: center;
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
    position: absolute;
    top: 170px;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 366px;
    padding: 25px 0;
    border-radius: 15px;
    background: #fff;
    box-shadow: 3px 6px 6px 0px rgba(67, 67, 67, 0.25),
      0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  }

  .form-box {
    padding: 15px;
    position: absolute;
    top: 260px;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 351px;
    height: 273px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 3px 6px 6px 0px rgba(67, 67, 67, 0.25),
      0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  }

  .input {
    font-size: 18px;
    width: 300px;
    border: none;
    border-bottom: 1px solid #9dc180;
    background-color: transparent;
    margin-bottom: 20px;
  }

  .button-add-contact {
    width: 150px;
    padding: 15px;
    background-color: #9dc180;
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 18px;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translate(-50%, 0%);
    cursor: pointer;
    transition: 0.4s;
  }

  .button-add-contact:hover,
  .button-add-contact:focus {
    border: 1px solid #9dc180;
    background-color: #ffffff;
    color: #9dc180;
  }
`;
