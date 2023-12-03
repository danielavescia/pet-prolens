import Form from "react-bootstrap/Form";
import "../styles/my-form.css";
import React, { useState } from "react";

const MyForm = () => {
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMessageData({
      ...messageData,
      [name]: value,
    });
    console.log(messageData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });

      if (response.ok) {
        console.log("Mensagem enviada!");
      } else {
        console.error("Erro ao tentar enviar a mensagem. Tente novamente!");
      }
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
    }
  };

  return (
    <Form id="my-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="custom-label">Nome: </Form.Label>
        <Form.Control
          type="text"
          name="name"
          autoComplete="name"
          placeholder="digite seu nome aqui"
          className="custom-input"
          value={messageData.name}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label className="custom-label">E-mail: </Form.Label>
        <Form.Control
          type="email"
          name="email"
          autoComplete="email"
          placeholder="name@example.com"
          className="custom-input"
          value={messageData.email}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label className="custom-label">Telefone: </Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="(XX)99999-9999"
          className="custom-input"
          value={messageData.phone}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="custom-label">Descreva sua Ideia:</Form.Label>
        <Form.Control
          size="lg"
          as="textarea"
          name="message"
          rows={3}
          className="custom-textarea"
          value={messageData.message}
          onChange={handleInputChange}
        />
      </Form.Group>
      <div className="button-container">
        <h3 className="h3-button">Enviar</h3>
        <button className="custom-button" type="submit">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="#676CDB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.25 6.25L25 15L16.25 23.75"
              stroke="#676CDB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </Form>
  );
};

export default MyForm;
