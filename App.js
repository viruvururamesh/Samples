import logo from './logo.svg';
import './App.css';
import Agenttransfer from './Charts/Agenttransfer';
import Authenticationtype from './Charts/Authenticationtype';
import Containment from './Charts/Containment';
import Applevelcontainment from './Charts/Applevelcontainment';

function App() {
  return (
    <div className="App">
     <div className="container">
       <div className="row">
         <div className="col-md-4">
           <Containment />
         </div>
         <div className="col-md-4">
           <Agenttransfer />
         </div>
         <div className="col-md-4">
           <Authenticationtype />

         </div>
       </div>
       <div className="row">
         <div className="container">
         <Applevelcontainment />
         </div>
       </div>
     </div>
        
    </div>
  );
}

export default App;
