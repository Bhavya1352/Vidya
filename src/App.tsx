import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParticleCanvas from './components/Canvas/ParticleCanvas';
import HUD from './components/HUD/HUD';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ServicesPage from './pages/Services/ServicesPage';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import TestimonialsPage from './pages/Testimonials/TestimonialsPage';
import ContactPage from './pages/Contact/ContactPage';
import SplashCursor from './components/ui/SplashCursor';

function App() {
  return (
    <Router>
      <SplashCursor />
      <ParticleCanvas />
      <HUD />
      <div className="page-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
