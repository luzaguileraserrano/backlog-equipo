import logo from './logo.svg';
import './App.css';
import imagen from './assets/img/imagen.png';
import capillac from './assets/img/capillac.jpg';
import capillav from './assets/img/capillav.jpg';
import cementerio from './assets/img/cementerio.jpg';

const App = _ =>{

  return   (
    <div >
      <center>
   
  
     <img src={imagen} /><br></br><br></br><br></br>
    <h1>¡BIENVENIDO A GAYOSSO!</h1><br></br><h1>Conoce nuestras instalaciones en:</h1>
    <br></br><br></br>
    
    <h2>Capillas del Carmen</h2><br></br><br></br>
      <img src={capillac}/><br></br><br></br><br></br>
      <h2>Capillas Vallarta</h2><br></br><br></br>
      <img src={capillav}/><br></br><br></br><br></br>
      <h2>Parque funeral colonias</h2><br></br><br></br>
      <img src={cementerio}/><br></br><br></br><br></br>

        <p></p>
         </center>
    </div>
    
  )

};


export default App;
