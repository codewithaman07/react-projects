import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 overflow-x-hidden">
        <div className="fixed top-0 -z-10 h-full w-full pointer-events-none">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <div className="absolute top-0 z-[-1] h-screen w-screen bg-gradient-to-br from-transparent via-purple-900/5 to-cyan-900/10"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/20 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400/25 rounded-full animate-bounce"></div>
          </div>
        </div>
        
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Main />
          <About />
          <Tech />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
