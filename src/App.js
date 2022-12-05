import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/home/home'
import {AllProperties} from './pages/all-properties/allProperties'
import { LoginDos } from './components/Login2/LoginDos';
import { Detail } from './pages/detail/detail';
import {GlobalStyle} from './stylesGlobal'
import { AppProvider } from './context'
import {Searched} from './pages/searched/searched'
import {Administration} from './pages/administration/administration'
import {CreatePropertie} from './pages/createPropertie/createPropertie'
import {EditProperty} from './pages/editProperty/editProperty'
//import {SendFetch} from './pages/sendfetch'
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/login"} element={<LoginDos/>}/>
          <Route path={"/detail/:id"} element={<Detail/>}/>
          <Route path={"/all-properties/detail/:id"} element={<Detail/>}/>
          <Route path={"/search/detail/:id"} element={<Detail/>}/>
          <Route path={"/administration/detail/:id"} element={<Detail/>}/>
          <Route path={"/all-properties"} element={<AllProperties/>}/>
          <Route path={"/search"} element={<Searched/>}/>
          <Route path={"/administration/properties"} element={<Administration/>}/>
          <Route path={"/administration/properties/create"} element={<CreatePropertie/>}/>
          <Route path={"/administration/properties/edit/:id"} element={<EditProperty/>}/>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
