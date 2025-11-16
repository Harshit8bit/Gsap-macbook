import './App.css';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import ProductViewer from './components/ProductViewer';
import Showcase from './components/Showcase';
import Performace from './components/Performace';
import Features from './components/Features';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
      <Showcase/>
      <Performace/>
      <Features/>
      <Highlights/>
      <Footer />
    </main>
  )
}

export default App
