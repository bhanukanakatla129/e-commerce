import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home';
import Header from './Reusable/Header';
import { } from '@mui/icons-material';


function App() {
  return (
    <div className="App">
    <HashRouter>
  <useFetch />
   <Header /> 
    <Routes> 
    <Route path='/' element={ <HomePage />} />
    </Routes>
    </HashRouter>
     
    </div>  
  );
}
 export default App;
