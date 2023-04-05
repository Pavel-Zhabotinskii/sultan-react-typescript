import './styles/css/App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import {Route,  Routes} from "react-router-dom";
import { routes } from './router';

function App() {

  return (
    <div className="wrapper">
      <Header/>
      <Routes> 
        {routes.map(route => 
            <Route element={<route.component/>} path={route.path}/>
          )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
