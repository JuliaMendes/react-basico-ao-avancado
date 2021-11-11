import React, { Component } from "react";
import "./App.css";

import Comentario from "./components/Comentario";

class App extends Component {
  state = {
    comentarios: [
      {
        nome: "Julia",
        email: "julia@email.com",
        data: new Date(2020, 3, 10),
        mensagem: "Olá, tudo bem?",
      },
      {
        nome: "Maria",
        email: "maria@email.com",
        data: new Date(2020, 3, 11),
        mensagem: "Olá, tudo sim",
      },
    ],
    novoComentario: {
      nome: "",
      email: "",
      mensagem: "",
    },
  };

  adicionarComentario = (evento) => {
    evento.preventDefault();
    const novoComentario = {...this.state.novoComentario, data: new Date()}

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario:{nome: '', email:'', mensagem:''}
    });
  };

  digitacao = evento =>{
    const {name, value} = evento.target.value;
   
    this.setState({novoComentario:{...this.state.novoComentario, [name]: value}})
  }

  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}
          >
            {comentario.mensagem}
          </Comentario>
        ))}
        <form method="post" onSubmit={this.adicionarComentario}>
          <h2>Adicionar comentário</h2>
          <div>
            <input type="text" name="nome" value={this.state.novoComentario.nome} onChange={this.digitacao} placeholder="Digite seu nome" />
          </div>
          <div>
            <input type="email" name="email" value={this.state.novoComentario.email} onChange={this.digitacao} placeholder="Digite seu email" />
          </div>
          <div>
            <textarea name="mensagem" onChange={this.digitacao} value={this.state.novoComentario.mensagem} rows="4"/>
          </div>
          <button type="submit">Adicionar Comentário</button>
        </form>
      </div>
    );
  }
}

export default App;
