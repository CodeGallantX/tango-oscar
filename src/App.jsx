import {Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import VVIPSecurity from "./pages/services/vvip-security";
import LuxuryChauffeur from "./pages/services/luxury-chauffeur";
import PrivateJet from "./pages/services/private-jet";
import Blog from "./pages/blog";
import Membership from "./pages/membership";
import GetStarted from "./pages/get-started";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/get-started" element={<GetStarted/>}/>
      <Route path="/services/vvip-security" element={<VVIPSecurity/>}/>
      <Route path="/services/private-jet" element={<PrivateJet/>}/>
      <Route path="/services/luxury-chauffeur" element={<LuxuryChauffeur/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/membership" element={<Membership/>}/>
      <Route path="/auth/signup" element={<Signup/>}/>
      <Route path="/auth/login" element={<Login/>}/>
    </Routes>
  )
}

export default App;