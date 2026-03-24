import NavBar from './components/NavBar';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Teams from './components/Teams';
import Fixtures from './components/Fixtures';
import Standings from './components/Standings';
import Timeline from './components/Timeline';
import Partner from './components/Partner';
import Packages from './components/Packages';
import Enroll from './components/Enroll';
import SponsorsLegacy from './components/SponsorsLegacy';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollProgress />
      
      <main className="w-full bg-surface text-on-surface flex flex-col items-center relative overflow-hidden">
        <NavBar />
        <Hero />
        <About />
        <Teams />
        <Fixtures />
        <Standings />
        <Timeline />
        <Partner />
        <Packages />
        <Enroll />
        <SponsorsLegacy />
        <Gallery />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default App;
