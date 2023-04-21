import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import { component } from "react";
// import About from "./components/About";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact"
import Services from "./components/Services"
import "./styles/App.scss"; 
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/Footer.scss";
import "./styles/contact.scss";
import "./styles/queries.scss"
function App() {
  return ( 
    <>
  <Router>
    
   < Header />
  <Routes>
  <Route path="/"element={<Home/>}/>
  <Route path="/contact"element={<Contact/>}/>
  <Route path="/services"element={<Services/>}/>
  </Routes>
 < Footer/>
    </ Router>
  
  </>
  )
  
   
    
}

export default App;
