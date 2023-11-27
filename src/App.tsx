import FeaturesModel from "./model/FeaturesModel";
import Footer from "./model/Footer";
import HeroModel from "./model/HeroModel";
import NavModel from "./model/NavModel";
import Process from "./model/Process";

function App() {
  return (
    <>
      <NavModel />
      <HeroModel />
      <FeaturesModel />
      <Process />
      <Footer />
    </>
  );
}

export default App;
