import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/home/home'
import {AllProperties} from './pages/all-properties/allProperties'
import { LoginDos } from './components/Login2/LoginDos';
import { Detail } from './pages/detail/detail';
import {GlobalStyle} from './stylesGlobal'
function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/login"} element={<LoginDos/>}/>
      <Route path={"/detail/:id"} element={<Detail/>}/>
      <Route path={"/all-properties/detail/:id"} element={<Detail/>}/>
      <Route path={"/all-properties"} element={<AllProperties/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
