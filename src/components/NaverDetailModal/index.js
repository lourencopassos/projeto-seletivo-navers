import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { fetchDetail } from "../../utils/api";
import Modal from "react-modal";
import {
  ModalNaverPhoto,
  ModalNaverInformation,
  ModalContainer,
  ModalExitButton,
  ModalDetails,
  ModalFooter,
  LoadingContainer,
} from "./styles";
import editIcon from "../../img/edit.png";
import deleteIcon from "../../img/delete.png";
import exitIcon from "../../img/exit.png";

export function NaverDetailModal(props) {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);
  const id = props.id;
  const naver = props.naver;

  useEffect(() => {
    setToken(localStorage.getItem("token"));

    if (naver) {
      setLoading(false);
    } 
  });


  const reloading = () => {
    setLoading(true);
  };

  const details = !loading ? (
    <ModalContainer>
      <ModalNaverPhoto>
        <img src={naver && naver.url} />
      </ModalNaverPhoto>
      <ModalNaverInformation>
        <ModalExitButton
          src={exitIcon}
          onClick={() => {
            props.handleModal();
            reloading();
          }}
        />
        <h1>{naver && naver.name}</h1>
        <p>{naver && naver.job_role}</p>
        <ModalDetails>Aniversário</ModalDetails>
        <p>{naver && naver.birthdate}</p>
        <ModalDetails>Tempo de empresa</ModalDetails>
        <p>{naver && naver.admission_date}</p>
        <ModalDetails>Projetos que participou</ModalDetails>
        <p>{naver && naver.project}</p>
        <ModalFooter>
          <img src={deleteIcon} onClick={() => props.deleteNaverFromApp(props.id, token)} />
          <img src={editIcon} onClick={() => props.editNaver()} />
        </ModalFooter>
      </ModalNaverInformation>
    </ModalContainer>
  ) : (
    <LoadingContainer>
      <ReactLoading type="spin" color="000000" />
    </LoadingContainer>
  );

  return (
    <div>
      <Modal
        isOpen={props.openModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        {details}
      </Modal>
    </div>
  );
}

export default NaverDetailModal;
