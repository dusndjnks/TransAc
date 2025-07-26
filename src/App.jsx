import { Routes, Route } from "react-router-dom"; // ✅ Only import Routes & Route
import ScrollToTop from "./components/ScrollToTop";
import Header from './components/Header.jsx';
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import ProjectGallery from "./pages/Projects.jsx";
import General from "./secondorypages/General.jsx";
import Toshiba from "./secondorypages/Toshiba.jsx";
import Daikin from "./secondorypages/Daikin.jsx";
import Mitsubishi from "./secondorypages/Mitsubishi.jsx";
import WallMount from "./pages/brands/General/WallMount.jsx";
import Casette from "./pages/brands/General/Casette.jsx";
import Vrf from "./pages/brands/General/Vrf.jsx";
import Duct from "./pages/brands/General/Duct.jsx";
import BlueStar from "./secondorypages/BlueStar.jsx"; // ✅ Import BlueStar component
import ToshibaCassette from "./pages/brands/toshiba/Casette.jsx";
import ToshibaDucted from "./pages/brands/toshiba/Ducted.jsx";
import VrfIndoor from "./pages/brands/toshiba/VrfIndoor.jsx";
import IndoorAc from "./pages/brands/toshiba/IndoorAc.jsx";
import HiWallSplit from "./pages/brands/toshiba/HiWallSplit.jsx";
import DaikinSplit from "./pages/brands/Daikinx/DaikinSplit.jsx";
import DaikinCasette from "./pages/brands/Daikinx/DaikinCasette.jsx";
import DaikinDucted from "./pages/brands/Daikinx/DaikinDucted.jsx";
import DaikinVrv from "./pages/brands/Daikinx/DaikinVrv.jsx";
import DaikinFloor from "./pages/brands/Daikinx/DaikinFloor.jsx";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<ProjectGallery />} />
        <Route path="/product" element={<Product />} />
        <Route path="/general" element={<General />} />
        <Route path="/mitsubishi" element={<Mitsubishi />} />
        <Route path="/daikin" element={<Daikin />} />
        <Route path="/bluestar" element={<BlueStar/>} />
        <Route path="/toshiba" element={<Toshiba />} />
        <Route path="/wall-mounted" element={<WallMount />} />
        <Route path="/cassette" element={<Casette />} />
        <Route path="/vrf" element={<Vrf/>} />
        <Route path="/toshiba-casette" element={<ToshibaCassette/>} />
        <Route path="/toshiba-duct" element={<ToshibaDucted/>} />
        <Route path="/indoor-vrf" element={<VrfIndoor/>} />
        <Route path="/toshiba-vrf" element={<IndoorAc/>} />
        <Route path="/wall-split" element={<HiWallSplit/>} />
        <Route path="/daikin-split" element={<DaikinSplit/>} />
        <Route path="/daikin-cassette" element={<DaikinCasette/>} />
        <Route path="/daikin-ducted" element={<DaikinDucted/>} />
        <Route path="/daikin-vrv" element={<DaikinVrv/>} />
        <Route path="/daikin-floor" element={<DaikinFloor/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
