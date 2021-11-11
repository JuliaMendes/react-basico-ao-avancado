import React, { Component } from "react";
import "./App.css";

import Comentario from "./components/Comentario";

class App extends Component {
  state = {
    comentarios: [
      {
        id: 1231,
        nome: "Julia",
        email: "julia@email.com",
        data: new Date(2020, 3, 10),
        mensagem: "Olá, tudo bem?",
      },
      {
        id: 3534,
        nome: "Maria",
        email: "maria@email.com",
        data: new Date(2020, 3, 11),
        mensagem: "Olá, tudo sim",
      },
    ],
  };
  
  adicionarComentario = () => {
    console.log("adicionando comentario");

    const novoComentario = {
      nome: "Luana",
      email: "luana@email.com",
      data: new Date(),
      mensagem: "Olá pessoal",
    };

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario]
    })

  };

  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={comentario.id}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}
          >
            {comentario.mensagem}
          </Comentario>
        ))}
        <button onClick={this.adicionarComentario}>
          Adicionar um comentário
        </button>
      </div>
    );
  }
}

export default App;
