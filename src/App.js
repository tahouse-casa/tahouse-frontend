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
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import {AdminCountries} from './pages/AdminCountries/AdminCountries'
import {StepCreateCountry} from './pages/AdminCountries/stepCreateCountry'
import {StepEditCountry} from './pages/AdminCountries/stepEditCountry'
import {RecoveryPassword} from './pages/recovery-password/recoveryPasword'
import {Favorites} from './pages/favorites/favorites'
import {ChangePassword} from './pages/recovery-password/change-password'
//import {SendFetch} from './pages/sendfetch'

function App() {

  const PrivateRoute = ({children}) => {
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
 if(localStorage.getItem('JWT')){
  return  <Navigate to="/" replace={true}/>
 } else {
  return children
 }
}
const RouteNeedLogin = ({children}) => {
  if(localStorage.getItem('JWT')){
    return children
  } else {
    return  <Navigate to="/login" replace={true}/>
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
          <Route path={"/recovery-password"} element={<RecoveryPassword/>}/>
          <Route path={"/change-password/:token"} element={<ChangePassword/>}/>
          <Route path={"/detail/:id"} element={<Detail/>}/>
          <Route path={"/search/detail/:id"} element={<Detail/>}/>
          <Route path={"/all-properties"} element={<AllProperties/>}/>
          <Route path={"/favorites-properties"} element={<RouteNeedLogin><Favorites/></RouteNeedLogin>}/>
          <Route path={"/search"} element={<Searched/>}/>
          <Route path={"/administration/properties"} element={<PrivateRoute><Administration/></PrivateRoute>}/>
          <Route path={"/administration/properties/create"} element={<PrivateRoute><CreatePropertie/></PrivateRoute>}/>
          <Route path={"/administration/properties/edit/:id"} element={<PrivateRoute><EditProperty/></PrivateRoute>}/>
          <Route path={"/administration/countries"} element={<PrivateRoute><AdminCountries/></PrivateRoute>}/>
          <Route path={"/administration/countries/edit/:id"} element={<PrivateRoute><StepEditCountry/></PrivateRoute>}/>
          <Route path={"/administration/countries/create"} element={<PrivateRoute><StepCreateCountry/></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
