import logo from './logo.svg';
import './App.css';

function App() {

const mensajeBievenida = "Bienvenidos a React!!!!"

  return (
    <div className="App">
      <h1>{mensajeBievenida}</h1>
    
    <ul>
      <li>React</li>
      <li>JSX</li>
      <li>Webpack</li>
    </ul>
     
    </div>
  );
}

export default App;
