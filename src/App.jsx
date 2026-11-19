import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import ProductGallery from './components/ProductGallery';
import Craftsmanship from './components/Craftsmanship';
import LifestyleGallery from './components/LifestyleGallery';
import Specifications from './components/Specifications';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <ProductGallery />
        <Craftsmanship />
        <LifestyleGallery />
        <div className="section-divider" />
        <Specifications />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
