import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisiMisi from './components/VisiMisi';
import StrukturOrganisasi from './components/StrukturOrganisasi';
import APBDesa from './components/Apbd';
import Galeri from './components/Galeri';
import Potensi from './components/Potensi';
import Wilayah from './components/Wilayah';
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisiMisi />
      <StrukturOrganisasi />
      <APBDesa />
      <Galeri />
      <Potensi />
      <Wilayah />
      <Footer />
    </>
  );
};

export default App;
