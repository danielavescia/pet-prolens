import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [isLoginFormVisible, setLoginFormVisible] = React.useState(false);

  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleSubmit = async (event) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Login bem-sucedido!");
      } else {
        console.error("Erro no login.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const handleLoginClick = () => {
    // evento para abrir o formulário
    setLoginFormVisible(true);
  };

  const handleCloseClick = () => {
    //evento para fechar formulário
    setLoginFormVisible(false);
  };

  const handleInputChange = (event) => {
    //evento que altera o estado das variáveis do formulário
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(userData);
  };

  return (
    <div className="login-container">
      <button className="login" onClick={handleLoginClick}>
        Login
      </button>
      {isLoginFormVisible === true && ( //se Login visível renderiza o formulário
        <div
          className="popup-wrapper"
          style={{ display: isLoginFormVisible ? "block" : "none" }}
        >
          <div className="popup">
            <div className="popup-close" onClick={handleCloseClick}>
              X
            </div>
            <div className="popup-content-container">
              <div className="popup-image"></div>
              <div className="popup-content">
                <h1 className="popup-title1"> Bem-vindo!</h1>
                <p className="popup-text">
                  Para explorar seu ensaio e realizar compras, faça login com as
                  informações fornecidas pelo fotógrafo:
                </p>
                <form className="form">
                  <label>
                    Usuário:
                    <input
                      className="input"
                      type="text"
                      name="username"
                      autoComplete="username"
                      value={userData.username}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Senha:
                    <input
                      className="input"
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      value={userData.password}
                      onChange={handleInputChange}
                    />
                  </label>
                </form>
                <button
                  className="submit-button"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
