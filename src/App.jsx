import { BrowserRouter, Routes, Route }  from 'react-router-dom'
import AuthLayout from './layout/AuthLayout' 
import RutaProtegida from './layout/rutaProtegida'
import AdministrarPacientes from './paginas/AdministrarPacientes'
import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import EditarPerfil from './paginas/EditarPerfil'
import CambiarPassword from './paginas/CambiarPassword'

import { AuthProvider } from '../context/AuthProvider'
import { PacientesProvider } from '../context/PacientesProvider'


function App() {
  
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          <Routes>

            {/* //Publico */}
            <Route path="/" element={<AuthLayout/>}>

              <Route index element={<Login/>}/>
              <Route path='registrar' element={<Registrar />} />
              <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
              <Route path='olvide-password' element={<OlvidePassword />} />   
              <Route path='olvide-password/:token' element={<NuevoPassword />} />   
              
            </Route>            

            {/* Privado requiere Autenticacion   */}
            <Route path='/admin' element={<RutaProtegida/>}>            
              <Route index element={<AdministrarPacientes/>}/> 
              <Route path='perfil' element={<EditarPerfil/>}/> 
              <Route path='cambiar-password' element={<CambiarPassword/>}/> 
            </Route>


          </Routes> 
        </PacientesProvider>
      </AuthProvider> 
    </BrowserRouter>
  )
}

export default App;

