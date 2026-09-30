import './css/App.css';
import './css/styles.css';

import logo from './assets/logo.png'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { Website } from './pages/website';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Website logo={logo} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
