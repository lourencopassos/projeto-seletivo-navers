import styled from "styled-components";

export const AddNaverPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 90vh;
`;

export const FormHeader = styled.div`
  span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin-left: 16px;
  }
  img {
    cursor: pointer;
  }
`;

export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormsContainer = styled.div`
  display: flex;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #212121;
  }

  input {
    border: 1px solid #424242;
    box-sizing: border-box;
    width: 280px;
    height: 40px;

    ::placeholder {
      color: #9e9e9e;
      font-size: 16px;
    }
  }
`;

export const FormFooter = styled.div`
  display: flex;
  margin: 0 20px;
  justify-content: flex-end;

  button {
    background-color: #212121;
    color: white;
    width: 176px;
    border: none;
    height: 40px;
    margin-top: 32px;
  }
`;

export const FormColumnContainer = styled.div`
  display: flex;

  div {
    margin: 0 20px;
  }
`;

export const ConfirmModal = styled.div`
  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    position: absolute;
    left: 32px;
    top: 32px;
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;
    position: absolute;
    left: 32px;
    bottom: 32px;
  }

  span {
    font-size: 20px;
    position: absolute;
    top: 27px;
    right: 27px;
    cursor: pointer;
    color: #212121;
    font-weight: bold;
  }
`;
