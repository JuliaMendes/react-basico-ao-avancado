import './App.css';

import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu Projeto</h1>
      <Comentario nome="João" email="joao@email.com" data={new Date(2021, 3, 19 )}>
      Olá,tudo bem?
      </Comentario>
      <Comentario nome="Maria" email="maria@email.com" data={new Date(2021, 3, 20 )}>
      tudo sim
      </Comentario>
    </div>
  );
}

export default App;
