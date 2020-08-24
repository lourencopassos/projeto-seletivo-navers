import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 376px;

  p {
    margin: 0;
    margin-top: 8px;
  }

  img {
    height: 100%;
    object-fit: cover;
    object-position: 80% 0;
  }
`;

export const NaverName = styled.p`
  font-weight: bold;
`;

export const IconsContainer = styled.div`
  margin-top: 8px;

  img {
    margin-right: 16px;
    cursor: pointer;
  }
`;

export const DeleteNaverModalContainer = styled.div`
  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin-left: 32px;
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;
    margin-left: 32px;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const ConfirmDeleteModalButton = styled.button`
  background-color: #212121;
  margin-top: 50px;
  color: white;
  border: none;
  height: 5vh;
  align-self: center;
  width: 176px;
  height: 40px;
  cursor: pointer;
  margin-right: 32px;
  /* position: absolute;
  bottom: 32px; */
`;

export const CancelDeleteModalButton = styled.button`
  background-color: white;
  margin-top: 50px;
  color: #212121;
  border: 1px solid #212121;
  height: 5vh;
  align-self: center;
  width: 176px;
  height: 40px;
  cursor: pointer;
  margin-right: 32px;
`;

export const DeleteConfirmModal = styled.div`
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