import {Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import GetStarted from "./pages/get-started";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/get-started" element={<GetStarted/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App;