import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'remixicon/fonts/remixicon.css'
import LandingNavbar from './Components/Navbar/LandingNavbar';
import CitizenLogin from './Components/Citizen/CitizenLogin';
import PoliceLogin from './Components/Police/PoliceLogin';
import ScrbLogin from './Components/Scrb/ScrbLogin';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CitizenRegistration from './Components/Citizen/CitizenRegistration';
import About from './Components/Common/About';
import Services from './Components/Common/Services';
import Footer from './Components/Footer/Footer';
import PoliceRegister from './Components/Police/PoliceRegister';
import ForgotPassword from './Components/Common/ForgotPassword';
import CitizenProfile from './Components/Citizen/CitizenProfile';
import ScrollToTop from './Components/Common/ScrollToTop';
import Navbar from './Components/Navbar/Navbar';
import CitizenLandingPage from './Components/Citizen/CitizenLandingPage';
import Banner from './Components/Common/Banner';
import Home from './Components/Common/Home';
import Footer2 from './Components/Footer/Footer2';
import AdminLogin from './Components/Admin/AdminLogin';
import LoginBanner from './Components/Common/LoginBanner';
import UserNavbar from './Components/Navbar/UserNavbar';
import NavbarCall from './Components/Navbar/NavbarCall';

function App() {
  return (
    <BrowserRouter basename='crime_reporting' >
      <ScrollToTop/>
      {/* <Navbar/> */}
    <div className="App">
      <Routes>
        <Route path='/' element={[<LandingNavbar/>,<Home/>]} />
        <Route path='/about' element={[<LandingNavbar/>,<About/>,<Services/>]} />

        {/* Citizen  */}

        <Route path='/citizen_login' element={[<LandingNavbar/>,<CitizenLogin/>]} />
        <Route path='/citizen_forgotpassword' element={[<LandingNavbar/>,<ForgotPassword activeUser='Citizen' />]} />
        <Route path='/citizen_register' element={[<LandingNavbar/>,<CitizenRegistration/>]} />
        <Route path='/citizen_home' element={[<UserNavbar/>,<LoginBanner/>,<CitizenLandingPage/>]} />
        <Route path='/citizen_profile' element={[<UserNavbar/>,<CitizenProfile/>]} />

        {/* Police  */}

        <Route path='/police_register' element={[<Navbar/>,<PoliceRegister/>]} />
        <Route path='/police_login' element={[<Navbar/>,<PoliceLogin/>]} />
        <Route path='/police_forgotpassword' element={[<ForgotPassword activeUser='Police' />]} />

        {/* Scrb  */}

        <Route path='/scrb_login' element={[<ScrbLogin/>]} />


        {/* Admin  */}

        <Route path='/admin' element={[<AdminLogin/>]} />



      </Routes>
    </div>
    <Footer/>
    <Footer2/>
    </BrowserRouter>
    
  );
}

export default App;
