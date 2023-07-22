import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero//Hero.jsx";
import MidSection from "./components/MidSection/MidSection.jsx";
import APIinstance from "./components/APIinstance/APIinstance.jsx";

const App = () => {
  return (
    <>
      <div className="main">
        {/* navbar */}
        <Nav />
        <Hero />
        <MidSection />

        <APIinstance />
      </div>
    </>
  );
};

export default App;
