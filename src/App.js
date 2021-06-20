import logo from './logo.svg';
import './App.css';
import imagen from './assets/img/imagen.jpg';
import salon from './assets/img/salon.jpg';
import salon2 from './assets/img/salon2.jpg';
const App = _ =>{

  return   (
    <div >
      <center>
   
  
     <img src={imagen} /><br></br><br></br><br></br>
     <img src={salon} width="400" />
     <img src={salon2}width="400" />
     </center>
    </div>
    
  )

};


export default App;