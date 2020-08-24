import React, { useState, useEffect } from "react";
import NaverCard from "../../components/NaverCard/NaverCard";
import { NaversContainer, DashboardHeader, LoadingContainer } from "./styles";

import Header from "../../components/Header";
import { useHistory } from "react-router-dom";

import "../../components/NaverDetailModal/index.css";
import { getNavers, fetchDetail, deleteNaver } from "../../utils/api";
import ReactLoading from "react-loading";

function Dashboard(props) {
  const [naver, setNaver] = useState();
  const [naversData, setNaversData] = useState();
  const [token, setToken] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  let history = useHistory();
  const goToCreateNaverPage = () => {
    history.replace("/create-naver");
  };

  const fetchNavers = async () => {
    try {
      const response = await getNavers(token);
      (await response) && setNaversData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirmationModal = () => {
    setConfirmationModal(true);

    if (openModal) {
      setOpenModal(false);
    }
  };

  const handleDeleteConfirmedModal = () => {
    setDeleteConfirmationModal(!deleteConfirmationModal);
    history.push("/dashboard");
  };

  const deleteNaverFromApp = async (id, token) => {
    try {
      await deleteNaver(id, token);
      setOpenModal(false);
      setConfirmationModal(!confirmationModal);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchNaverDetail = async (id) => {
    try {
      const response = await fetchDetail(id, token);
      (await response) && setNaver(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token === null) {
      alert("Login necessário!");
      history.push("/");
    }
    fetchNavers();
  });

  const handleModal = () => {
    setOpenModal(!openModal);
    if (openModal) {
      setNaver();
    }
  };

  const naversDetail = naver;

  const naversRender = naversData ? (
    <NaversContainer>
      {naversData &&
        naversData.map((naver) => {
          return (
            <div>
              <NaverCard
                name={naver.name}
                photo={naver.url}
                job_role={naver.job_role}
                id={naver.id}
                onClick={() => {
                  fetchNaverDetail(naver.id);
                  handleModal();
                }}
                openModal={openModal}
                handleModal={handleModal}
                naversDetail={naversDetail}
                deleteNaverFromApp={deleteNaverFromApp}
                handleConfirmationModal={handleConfirmationModal}
                handleDeleteConfirmedModal={handleDeleteConfirmedModal}
                confirmationModal={confirmationModal}
                deleteConfirmationModal={deleteConfirmationModal}
              />
            </div>
          );
        })}
    </NaversContainer>
  ) : (
    <LoadingContainer>
      <ReactLoading type="spin" color="#000000" />
    </LoadingContainer>
  );

  return (
    <div>
      <Header />
      <DashboardHeader>
        <p>Navers</p>
        <button onClick={goToCreateNaverPage}>Adicionar Naver</button>
      </DashboardHeader>
      {naversRender}
    </div>
  );
}

export default Dashboard;
