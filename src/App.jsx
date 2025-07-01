import {Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import VVIPSecurity from "./pages/services/vvip-security";
import VVIPConcierge from "./pages/services/vvip-concierge";
import PrivateJet from "./pages/services/private-jet";
import Blog from "./pages/blog";
import Membership from "./pages/membership";
import GetStarted from "./pages/get-started";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgot-password";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/get-started" element={<GetStarted/>}/>
      <Route path="/services/vvip-concierge" element={<VVIPConcierge/>}/>
      <Route path="/services/vvip-security" element={<VVIPSecurity/>}/>
      <Route path="/services/private-jet-charter" element={<PrivateJet/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/membership" element={<Membership/>}/>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/auth/signup" element={<Signup/>}/>
      <Route path="/auth/forgot-password" element={<ForgotPassword/>}/>
    </Routes>
  )
}

export default App;