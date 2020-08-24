import styled from "styled-components";

export const ScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  img {
    margin-top: 40px;
    width: 226px;
    height: 60px;
    align-self: center;

  }

  form {
    width: 448px;
    height: 408px;
    left: 416px;
    top: 156px;
    border: 1px solid #212121;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  button {
    background-color: #212121;
    margin-top:25px;
    color: white;
    border: none;
    height: 5vh;
    align-self: center;
    width: 85%;
    cursor: pointer;
  }

  label {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    margin-top: 4px;
    margin-left: 40px;
    margin-bottom: 4px;

    color: #212121;
  }

  input {
    height: 5vh;
    width: 80%;
    align-self: center;
    margin-bottom: 32px;
  }
`;
