import logo from './logo.svg';
import './App.css';
import imagen from './assets/img/imagen.jpg';
import noviembre from './assets/img/noviembre.jpg';
import carnaval from './assets/img/carnaval.jpg';
import voladores from './assets/img/voladores.jpg';
const App = _ =>{

  return   (
    <div >
      <center>
   
    <br></br><br></br>
    <h1>TRADICIONES Y COSTUMBRES MEXICANAS</h1><br></br><br></br>
     <img src={imagen}width="400" />
     <img src={noviembre}width="400" /><br></br>
     <img src={carnaval}width="400" />
     <img src={voladores}width="400" /><br></br><br></br>
     </center>
    </div>
    
  )

};


export default App;