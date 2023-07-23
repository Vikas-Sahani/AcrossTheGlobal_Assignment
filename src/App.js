import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero//Hero.jsx";
import MidSection from "./components/MidSection/MidSection.jsx";
import APIinstance from "./components/APIinstance/APIinstanceofCard";
import SideComponent from "./components/SideComponent/SideComponent";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="main">
        <Nav />
        <Hero />
        <MidSection />

        <div className="cardSideComp">
          <APIinstance />
          <SideComponent />
        </div>

        <Routes>
          <Route path="sign-up" element={<Register />} />
          <Route path="sign-in" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
