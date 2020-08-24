import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import BackArrow from "../../img/back-arrow.png";
import {
  FormHeader,
  AddNaverPage,
  FormsContainer,
  FormCard,
  FormFooter,
  FormColumnContainer,
  ConfirmModal,
} from "./styles";
import { useHistory } from "react-router-dom";
import { createNaver, getNavers } from "../../utils/api";
import { useForm } from "../../hooks/useForm";
import Modal from "react-modal";
import "./index.css";
import { Exit } from "../../img/Vector.png";

function AddNaver(props) {
  const [token, setToken] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [form, handleFormChange, resetForm] = useForm({
    name: "",
    birthdate: "",
    project: "",
    job_role: "",
    admission_date: "",
    url: "",
  });
  let history = useHistory();
  const returnToDashboard = () => {
    history.replace("/dashboard");
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token === null) {
      alert("Login necessário!");
      history.push("/");
    }
  });

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleNaverCreation = async (event) => {
    event.preventDefault();
    const result = await createNaver(form, token);
    if (result) {
      setOpenModal(true);
      resetForm();
    } else {
      window.alert("Ocorreu um erro");
    }
  };

  return (
    <div>
      <Header />
      <AddNaverPage>
        <FormCard>
          <FormHeader>
            <img src={BackArrow} onClick={returnToDashboard} />
            <span>Adicionar Naver</span>
          </FormHeader>
          <FormsContainer>
            <form onSubmit={handleNaverCreation}>
              <FormColumnContainer>
                <div>
                  <p>Nome</p>
                  <input
                    placeholder="Nome"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    required
                  />
                  <p>Idade</p>
                  <input
                    placeholder="Idade"
                    name="birthdate"
                    value={form.birthdate}
                    onChange={handleFormChange}
                    required
                  />
                  <p>Projetos que participou</p>
                  <input
                    placeholder="Projetos que participou"
                    name="project"
                    value={form.project}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div>
                  <p>Cargo</p>
                  <input
                    placeholder="Cargo"
                    name="job_role"
                    value={form.job_role}
                    onChange={handleFormChange}
                    required
                  />
                  <p>Tempo de Empresa</p>
                  <input
                    placeholder="Tempo de Empresa"
                    name="admission_date"
                    value={form.admission_date}
                    onChange={handleFormChange}
                    required
                  />
                  <p>URL da foto do Naver</p>
                  <input
                    placeholder="URL da foto do Naver"
                    name="url"
                    value={form.url}
                    onChange={handleFormChange}
                    required
                  />
                </div>
              </FormColumnContainer>
              <FormFooter>
                <button type="submit">Salvar</button>
              </FormFooter>
            </form>
          </FormsContainer>
        </FormCard>
      </AddNaverPage>
      <Modal
        isOpen={openModal}
        className="ConfirmModal"
        overlayClassName="Overlay"
      >
        <ConfirmModal>
          <span onClick={handleModal}>X</span>
          <h1>Naver criado</h1>
          <p>Naver criado com sucesso!</p>
        </ConfirmModal>
      </Modal>
    </div>
  );
}

export default AddNaver;
