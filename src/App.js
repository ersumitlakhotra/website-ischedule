import './css/App.css';
import './css/styles.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import logo from './Images/logo.png';
import { Website } from './pages';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Website />} />         
          </Routes>
      </BrowserRouter>
  );
}

export default App;
