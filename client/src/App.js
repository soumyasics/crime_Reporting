import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'remixicon/fonts/remixicon.css'
import Navbar from './Components/Navbar/Navbar';
import CitizenLogin from './Components/Citizen/CitizenLogin';
import PoliceLogin from './Components/Police/PoliceLogin';
import ScrbLogin from './Components/Scrb/ScrbLogin';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CitizenRegistration from './Components/Citizen/CitizenRegistration';
import HomePage from './Components/Common/HomePage';
import About from './Components/Common/About';
import Services from './Components/Common/Services';
import Footer from './Components/Footer/Footer';
import PoliceRegister from './Components/Police/PoliceRegister';
import ForgotPassword from './Components/Common/ForgotPassword';

function App() {
  return (
    <BrowserRouter basename='crime_reporting' >
    <div className="App">
      <Routes>
        <Route path='/' element={[<Navbar/>,<HomePage/>,<About/>,<Services/>]} />
        <Route path='/about' element={[<Navbar/>,<About/>,<Services/>]} />

        {/* Citizen  */}

        <Route path='/citizen_login' element={[<Navbar/>,<CitizenLogin/>]} />
        <Route path='/citizen_forgotpassword' element={[<Navbar/>,<ForgotPassword activeUser='Citizen' />]} />
        <Route path='/citizen_register' element={[<Navbar/>,<CitizenRegistration/>]} />

        {/* Police  */}

        <Route path='/police_register' element={[<Navbar/>,<PoliceRegister/>]} />
        <Route path='/police_login' element={[<Navbar/>,<PoliceLogin/>]} />
        <Route path='/police_forgotpassword' element={[<Navbar/>,<ForgotPassword activeUser='Police' />]} />

        {/* Scrb  */}

        <Route path='/scrb_login' element={[<Navbar/>,<ScrbLogin/>]} />

      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
