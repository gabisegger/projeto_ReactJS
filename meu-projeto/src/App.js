import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <SayMyName nome="Gabriela"/>
      <SayMyName nome="Maurici"/>
      <SayMyName nome="Romena"/>
      <Pessoa nome="Gabriela" idade="25" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
