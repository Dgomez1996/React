import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import NavBar from './components/ItemListContainer';



function App() {

const mensajeBievenida = "Bienvenidos a React!!!!"

const stylesLi = {
  color: "red"
} 

const alertMsg = () => { alert ("hola") }

  return (
    <div className="App">
      <h1>{mensajeBievenida}</h1>  
    <ul>
      <li style = {stylesLi}>React</li>
      <li>JSX</li>
      <li>Webpack</li>
    </ul>
    <Footer name= "Juan" action={alertMsg}>
      <h3> Mi children</h3>
    </Footer>
    </div>
  );
}

export default App;
