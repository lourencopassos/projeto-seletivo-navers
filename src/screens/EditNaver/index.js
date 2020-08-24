import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import BackArrow from "../../img/back-arrow.png";
import {
  FormHeader,
  AddNaverPage,
  FormsContainer,
  FormCard,
  FormFooter,
  LoadingContainer,
  FormColumnContainer,
  ConfirmModal,
} from "./styles";
import { useHistory, useParams } from "react-router-dom";
import { fetchDetail, updateNaver } from "../../utils/api";
import ReactLoading from "react-loading";
import { useForm } from "../../hooks/useForm";
import Modal from "react-modal";

function EditNaver(props) {
  const [naver, setNaver] = useState();
  const [openModal, setOpenModal] = useState();

  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);
  const [form, handleFormChange, resetForm] = useForm({
    name: "",
    birthdate: naver && naver.birthdate,
    project: naver && naver.project,
    job_role: naver && naver.job_role,
    admission_date: naver && naver.admission_date,
    url: naver && naver.url,
  });

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  let history = useHistory();
  const returnToDashboard = () => {
    history.replace("/dashboard");
  };
  const { id } = useParams();

  const fetchNaverDetail = async (id) => {
    try {
      const response = await fetchDetail(id, token);
      (await response) && setNaver(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    fetchNaverDetail(id);
  });

  const editNaver = async (event) => {
    event.preventDefault();
    try {
      await updateNaver(id, token, form);
      setOpenModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = async () => {
    setOpenModal(false);
    history.replace("/dashboard");
  };

  const naverRender = naver ? (
    <div>
      <AddNaverPage>
        <FormCard>
          <FormHeader>
            <img src={BackArrow} onClick={returnToDashboard} />
            <span>Editar Naver</span>
          </FormHeader>
          <FormsContainer>
            <form onSubmit={editNaver}>
              <FormColumnContainer>
                <div>
                  <p>Nome</p>
                  <input
                    placeholder="Nome"
                    name="name"
                    value={form.name || naver.name}
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
                    value={form.project || naver.project}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div>
                  <p>Cargo</p>
                  <input
                    placeholder="Cargo"
                    name="job_role"
                    value={form.job_role || naver.job_role}
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
                    value={form.url || naver.url}
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
          <span onClick={closeModal}>X</span>
          <h1>Naver criado</h1>
          <p>Naver editado com sucesso!</p>
        </ConfirmModal>
      </Modal>
    </div>
  ) : (
    <LoadingContainer>
      <ReactLoading type="spin" color="#000000" />
    </LoadingContainer>
  );

  return (
    <div>
      <Header />
      {naverRender}
    </div>
  );
}

export default EditNaver;
