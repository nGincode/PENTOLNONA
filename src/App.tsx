import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Preloader from './components/Preloader';

function App() {
  useEffect(() => {
    // Set page title on mount
    document.title = 'Pentol Nona - Baso Aci Juara, Pedasnya Bikin Nagih!';
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <CTA />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;
