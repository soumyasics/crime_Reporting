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
import PoliceViewCases from './Components/Police/PoliceViewCases';
import CaseDetails from './Components/Police/CaseDetails';
import ScrbForgetpswd from './Components/Scrb/ScrbForgetpswd';
import ReportCrime from './Components/Citizen/ReportCrime';
import ScrbSidebar from './Components/Scrb/ScrbSidebar';
import ScrbDashboard from './Components/Scrb/ScrbDashboard';
import ScrbMain from './Components/Scrb/ScrbMain';
import PoliceProfile from './Components/Police/PoliceProfile';
import ViewAllPoliceStation from './Components/Police/ViewAllPoliceStation';
import LoginNav from './Components/Navbar/LoginNav';
import UpdateCrimeReport from './Components/Citizen/UpdateCrimeReport';
import CitizenAddComplaint from './Components/Citizen/CitizenAddComplaint';

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
        <Route path='/citizen/reportcrime' element={[<UserNavbar/>,<ReportCrime/>]}/>
        <Route path='/updatecrime/:id' element={[<UserNavbar/>,<UpdateCrimeReport/>]}/>
        <Route path='/addcomplaints' element={[<UserNavbar />,<CitizenAddComplaint />]} />


        {/* Police  */}

        <Route path='/police_register' element={[<LandingNavbar/>,<PoliceRegister/>]} />
        <Route path='/police_login' element={[<LandingNavbar/>,<PoliceLogin/>]} />
        <Route path='/police_forgotpassword' element={[<LandingNavbar/>,<ForgotPassword activeUser='Police' />]} />
        <Route path='/police_home' element={[<PoliceNavbar/>,<LoginBanner user='police' />,<PoliceLandingPageContent/>,<PoliceRecentCrimes/>]} />
        <Route path='/policeviewcases' element={[<PoliceNavbar/>,<PoliceViewCases type='request' />]} />
        <Route path='/policeviewApprovedcases' element={[<PoliceNavbar/>,<PoliceViewCases type='view' />]} />
        <Route path='/casedetails/:id' element={[<PoliceNavbar/>,<CaseDetails type='request' />]}/>
        <Route path='/approvedcasedetails/:id' element={[<PoliceNavbar/>,<CaseDetails type='view' />]}/>
        <Route path='/policeprofile/:id' element={[<PoliceNavbar/>,<PoliceProfile/>]} />


        {/* Scrb  */}

        <Route path='/scrb_login' element={[<LandingNavbar/>,<ScrbLogin/>]} />
        <Route path='/scrb-forgetpswd' element={[<LandingNavbar/>,<ScrbForgetpswd/>]}/>
        <Route path='/scrb-sidebar' element={[<LandingNavbar/>,<ScrbSidebar/>]} />
        <Route path='/scrb-dashboard' element={[<LoginNav/>,<ScrbMain data="scrbdashboard"/>]}/>


        {/* Admin  */}

        <Route path='/admin' element={[<LoginNav/>,<AdminLogin/>]} />
        <Route path='/admin_home' element={[<LoginNav/>,<AdminHome/>]} />
        <Route path='/admin-dashboard' element={[<LoginNav/>,<AdminMain data="admindashboard"/>]} />
        <Route path='/admin-viewallcases' element={[<LoginNav/>,<AdminMain data='adminviewallcasedetails'/>]} />
        <Route path='/admin_viewcasedetails/:id' element={[<LoginNav/>,<AdminMain data='adminvieweachcasedetails'/>]} />

        {/* Admin View Police */}

        <Route path='/viewallpolicestation' element={[<LoginNav/>,<AdminMain data="viewallpolicestation"/>]} />
        <Route path='/viewallpolice/:id' element={[<LoginNav/>,<AdminMain data="viewallpoliceprofile"/>]}/>
        <Route path='/viewallpolicereq/:id' element={[<LoginNav/>,<AdminMain data="viewallpolicereqprofile"/>]}/>
        <Route path='/newpolicestationreq' element={[<LoginNav />,<AdminMain data="newpolicestationreq"/>]} />


      </Routes>
    </div>
    <Footer/>
    <Footer2/>
    </BrowserRouter>
    
  );
}

export default App;
