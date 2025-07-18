import { Routes , Route } from "react-router-dom"
import Header from './components/Header.jsx'
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Projects from "./pages/Projects.jsx"
import Product from "./pages/Product.jsx"

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App