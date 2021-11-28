import './App.css';
import ItemDetailContainer from './Components/ItemDetailsContainer/ItemDetailContainer';
import NavBarComp from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Route , Routes} from "react-router-dom";
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <NavBarComp/>
    <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
