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
import PoliceRecentCrimes from './Components/Police/PoliceRecentCrimes';
import PoliceLandingPageContent from'./Components/Police/PoliceLandingPageContent';
import PoliceNavbar from './Components/Navbar/PoliceNavbar';
import AdminHome from './Components/Admin/AdminHome';
import AdminSidebar from './Components/Admin/AdminSidebar';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminMain from './Components/Admin/AdminMain';
import NewPoliceStationReq from './Components/Police/NewPoliceStationReq';

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
        <Route path='/citizen_home' element={[<UserNavbar/>,<LoginBanner user='citizen' />,<CitizenLandingPage/>]} />
        <Route path='/citizen_profile' element={[<UserNavbar/>,<CitizenProfile/>]} />

        {/* Police  */}

        <Route path='/police_register' element={[<LandingNavbar/>,<PoliceRegister/>]} />
        <Route path='/police_login' element={[<LandingNavbar/>,<PoliceLogin/>]} />
        <Route path='/police_forgotpassword' element={[<LandingNavbar/>,<ForgotPassword activeUser='Police' />]} />
        <Route path='/police_home' element={[<PoliceNavbar/>,<LoginBanner user='police' />,<PoliceLandingPageContent/>,<PoliceRecentCrimes/>]} />
        <Route path='/newpolicestationreq' element={[<LandingNavbar/>,<AdminMain data="newpolicestationreq"/>]} />
        

        {/* Scrb  */}

        <Route path='/scrb_login' element={[<ScrbLogin/>]} />


        {/* Admin  */}

        <Route path='/admin' element={[<LandingNavbar/>,<AdminLogin/>]} />
        <Route path='/admin_home' element={[<LandingNavbar/>,<AdminHome/>]} />
        {/* <Route path='/admin-main' element={[<LandingNavbar/>,<AdminMain/>]} /> */}
        <Route path='/admin-dashboard' element={[<LandingNavbar/>,<AdminMain data="admindashboard"/>]} />


      </Routes>
    </div>
    {/* <Footer/>
    <Footer2/> */}
    </BrowserRouter>
    
  );
}

export default App;
