import './App.css';
import Data from './components/testimonios'

function App() {
  return (
      <div className='contenedor-principal'>
        <div className="App">
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          <Data />
        </div>
      </div>
  );
}

export default App;
