import React, {useState} from "react";
import { HeaderContainer } from "./styles";
import logo from "../../img/logo.png";
import { useHistory } from "react-router-dom";

function Header(props) {
  let history = useHistory();
  const [token, setToken] = useState();



  const logout = () => {
    window.localStorage.clear();
    history.replace("/");
  };
  
  return (
    <HeaderContainer>
      <img src={logo} />
      <p onClick={logout}>Sair</p>
    </HeaderContainer>
  );
}

export default Header;
