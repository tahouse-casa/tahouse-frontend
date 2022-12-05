import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/home/home'
import {AllProperties} from './pages/all-properties/allProperties'
import { Login } from './components/Login/Login';
import { Detail } from './pages/detail/detail';
import {GlobalStyle} from './stylesGlobal'
import { AppProvider } from './context'
import {Searched} from './pages/searched/searched'
import { Register } from './components/Register/Register';
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/register"} element={<Register/>}/>
          <Route path={"/detail/:id"} element={<Detail/>}/>
          <Route path={"/all-properties/detail/:id"} element={<Detail/>}/>
          <Route path={"/search/detail/:id"} element={<Detail/>}/>
          <Route path={"/all-properties"} element={<AllProperties/>}/>
          <Route path={"/search"} element={<Searched/>}/>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
