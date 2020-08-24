import React, { useEffect, useState } from "react";
import editIcon from "../../img/edit.png";
import deleteIcon from "../../img/delete.png";
import {
  Card,
  NaverName,
  IconsContainer,
  DeleteNaverModalContainer,
  ConfirmDeleteModalButton,
  CancelDeleteModalButton,
  DeleteConfirmModal,
} from "./styles";
import { useHistory } from "react-router-dom";
import { deleteNaver } from "../../utils/api";
import { NaverDetailModal } from "../NaverDetailModal";
import Modal from "react-modal";
import "./index.css";

function NaverCard(props) {
  const [token, setToken] = useState();
  const [confirmationModal, setConfirmationModal] = useState(
    props.confirmationModal
  );
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(
    props.deleteConfirmationModal
  );

  const id = props.id;
  const naver = props.naversDetail;

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });

  let history = useHistory();

  const editNaver = (id) => {
    history.push(`/edit-naver/${id}`);

  };
  return (
    <div>
      <Card>
        <img src={props.photo} onClick={props.onClick} />
        <NaverName>{props.name}</NaverName>
        <p>{props.job_role}</p>
        <IconsContainer>
          <img src={deleteIcon} onClick={props.handleConfirmationModal} />
          <img src={editIcon} onClick={() => editNaver(props.id)} />
        </IconsContainer>
      </Card>
      <NaverDetailModal
        openModal={props.openModal}
        handleModal={props.handleModal}
        id={props.id}
        naver={naver}
        deleteNaverFromApp={props.handleConfirmationModal}
        editNaver={editNaver}
      />

      <Modal
        isOpen={deleteConfirmationModal}
        className="DeleteConfirmedModal"
        overlayClassName="Overlay"
      >
        <DeleteConfirmModal>
          <span onClick={props.handleDeleteConfirmedModal}>X</span>
          <h1>Naver Excluído</h1>
          <p>Naver excluído com sucesso!</p>
        </DeleteConfirmModal>
      </Modal>



      <Modal
        isOpen={props.confirmationModal}
        className="DeleteModal"
        overlayClassName="Overlay"
      >
        <DeleteNaverModalContainer>
          <h1>Excluir Naver</h1>
          <p>Tem certeza que deseja excluir este Naver?</p>
          <div>
            <CancelDeleteModalButton onClick={props.handleConfirmationModal}>
              Cancelar
            </CancelDeleteModalButton>
            <ConfirmDeleteModalButton
              onClick={() => props.deleteNaverFromApp(id, token)}
            >
              Excluir
            </ConfirmDeleteModalButton>
          </div>
        </DeleteNaverModalContainer>
      </Modal>
    </div>
  );
}

export default NaverCard;
