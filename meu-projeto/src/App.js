import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Gabriela"/>
      <SayMyName nome="Maurici"/>
      <SayMyName nome="Romena"/>
      <Pessoa nome="Gabriela" idade="25" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
