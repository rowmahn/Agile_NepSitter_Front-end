import './App.css';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer';
import './style/form.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       
        <Body></Body>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
