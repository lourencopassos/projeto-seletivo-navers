import styled from "styled-components";

export const ModalNaverPhoto = styled.div`
  width: 50%;
  height: 100%;

  img {
    object-fit: cover;
    object-position: 80% 0; 
    height: 100%;
    width: 100%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
