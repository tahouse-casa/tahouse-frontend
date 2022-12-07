import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Home} from './pages/home/home'
import {AllProperties} from './pages/all-properties/allProperties'
import { Detail } from './pages/detail/detail';
import {GlobalStyle} from './stylesGlobal'
import { AppProvider } from './context'
import {Searched} from './pages/searched/searched'
import {Administration} from './pages/administration/administration'
import {CreatePropertie} from './pages/createPropertie/createPropertie'
import {EditProperty} from './pages/editProperty/editProperty'
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
//import {SendFetch} from './pages/sendfetch'

function App() {

  const PrivateRoute = ({children}) => {
    console.log(localStorage.getItem('JWT'))
 if(localStorage.getItem('JWT')){
      const data = localStorage.getItem('JWT')
      const parseo = JSON.parse(data)
      if(parseo.user.role === "admin") {
        return children
      } else {
        return <Navigate to="/" replace={true}/>
      }
    } else {
      return <Navigate to="/login" replace={true} />
    }
  }

const RouteReplaceLogin = ({children}) => {
  console.log(localStorage.getItem('JWT'))
 if(localStorage.getItem('JWT')){
  return  <Navigate to="/" replace={true}/>
 } else {
  return children
 }
}
  return (
    <AppProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/login"} element={<RouteReplaceLogin><Login/></RouteReplaceLogin>}/>
          <Route path={"/register"} element={<RouteReplaceLogin><Register/></RouteReplaceLogin>}/>
          <Route path={"/detail/:id"} element={<Detail/>}/>
          <Route path={"/all-properties/detail/:id"} element={<Detail/>}/>
          <Route path={"/search/detail/:id"} element={<Detail/>}/>
          <Route path={"/administration/detail/:id"} element={<Detail/>}/>
          <Route path={"/all-properties"} element={<AllProperties/>}/>
          <Route path={"/search"} element={<Searched/>}/>
          <Route path={"/administration/properties"} element={<PrivateRoute><Administration/></PrivateRoute>}/>
          <Route path={"/administration/properties/create"} element={<PrivateRoute><CreatePropertie/></PrivateRoute>}/>
          <Route path={"/administration/properties/edit/:id"} element={<PrivateRoute><EditProperty/></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
