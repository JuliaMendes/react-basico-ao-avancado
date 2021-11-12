import React, { Component } from "react";
import "./App.css";

import Comentario from "./components/Comentario";

class App extends Component {
  state = {
    comentarios: [
      {
        nome: "Júlia Mendes",
        email: "julia@email.com",
        data: new Date(2020, 3, 10, 17, 30, 0),
        mensagem: "Olá, tudo bem?",
      },
      {
        nome: "Maria Souza",
        email: "maria@email.com",
        data: new Date(2020, 3, 11, 12, 15, 0),
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

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c!== comentario)
    this.setState({ comentarios: lista})
  }

  digitacao = evento => {
    const {name, value} = evento.target;
   
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
            onRemove = {this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}
        <form method="post" onSubmit={this.adicionarComentario} className="Novo-Comentario">
          <h2>Adicionar comentário</h2>
          <div>
            <input type="text" name="nome" value={this.state.novoComentario.nome} required onChange={this.digitacao} placeholder="Digite seu nome" />
          </div>
          <div>
            <input type="email" name="email" value={this.state.novoComentario.email} required onChange={this.digitacao} placeholder="Digite seu email" />
          </div>
          <div>
            <textarea name="mensagem" onChange={this.digitacao} required value={this.state.novoComentario.mensagem} rows="4"/>
          </div>
          <button type="submit">Adicionar Comentário</button>
        </form>
      </div>
    );
  }
}

export default App;
