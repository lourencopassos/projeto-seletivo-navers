import React from "react";
import { ScreenContainer, LoginContainer } from "./styles";
import logo from "../../img/logo.png";
import { useHistory } from "react-router-dom";
import { login } from "../../utils/api";
import { useForm } from "../../hooks/useForm";

function LoginPage(props) {
  let history = useHistory();

  const [form, handleFormChange, resetForm] = useForm({
    email: "",
    password: "",
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await login(form);
    if (response.token) {
      localStorage.setItem("token", response.token);
      history.replace("/dashboard");
      resetForm();
    } else {
      window.alert(response.message);
    }
  };

  return (
    <ScreenContainer>
      <LoginContainer>
        <form onSubmit={handleLogin}>
          <img src={logo} />
          <label>E-mail</label>
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleFormChange}
            required
          />
          <label>Senha</label>
          <input
            type="password"
            placeholder="Senha"
            name="password"
            onChange={handleFormChange}
            value={form.password}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </LoginContainer>
    </ScreenContainer>
  );
}

export default LoginPage;
