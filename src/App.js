import './App.css';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
