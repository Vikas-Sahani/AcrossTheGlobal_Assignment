import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero//Hero.jsx";
import MidSection from "./components/MidSection/MidSection.jsx";
import APIinstance from "./components/APIinstance/APIinstanceofCard";
import SideComponent from "./components/SideComponent/SideComponent";
import LoginRegister from "./components/LoginRegister/LoginRegister";

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
        <LoginRegister />
      </div>
    </>
  );
};

export default App;
