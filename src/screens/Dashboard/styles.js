import styled from "styled-components";

export const NaversContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 25px;

  div {
    cursor: pointer;
  }
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px;

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
  }

  button {
    background-color: #212121;
    color: white;
    height: 5vh;
    align-self: center;
    width: 10vw;
    border: none;
    cursor: pointer;
  }
`;

export const ModalNaverPhoto = styled.div`
  width: 50%;
  height: 100%;

  img {
    height: 100%;
  }
`;

export const ModalNaverInformation = styled.div`
  width: 50%;
  padding: 27px;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ModalExitButton = styled.img`
  position: absolute;
  right: 27px;
  cursor: pointer;
`;

export const ModalDetails = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

export const ModalFooter = styled.div`
  position: absolute;
  bottom: 27px;

  img {
    margin-right: 15px;
    cursor: pointer;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
