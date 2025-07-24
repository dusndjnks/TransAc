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
        <Route path="/duct" element={<Duct/>} />
        <Route path="/duct" element={<Duct/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
