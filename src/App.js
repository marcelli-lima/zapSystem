import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header/header';
import Home from './pages/Home';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import * as yup from 'yup';

function App() {
  return (
    
    <BrowserRouter>
     <div className="App">
      <Header/>
      <Routes/>
    </div>
    </BrowserRouter>
   
  
  );
}

export default App;
