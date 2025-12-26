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
      <div className="text-slate-200 antialiased selection:bg-cyan-300/30 selection:text-white overflow-x-hidden">
        {/* Night Sky Background */}
        <div className="fixed top-0 -z-10 h-full w-full pointer-events-none">
          {/* Deep night gradient */}
          <div className="absolute top-0 z-[-3] h-screen w-screen bg-gradient-to-b from-[#0b1528] via-[#162544] to-[#1e3a5f]"></div>

          {/* Moon glow at top */}
          <div className="absolute top-[-10%] right-[10%] z-[-2] w-64 h-64 bg-[#e8f4f8] rounded-full blur-[80px] opacity-20"></div>
          <div className="absolute top-[-5%] right-[15%] z-[-2] w-40 h-40 bg-[#a5f3fc] rounded-full blur-[60px] opacity-30"></div>

          {/* Cloud gradients at bottom */}
          <div className="absolute bottom-0 z-[-2] h-1/3 w-screen bg-gradient-to-t from-[#f97316]/10 via-[#fbbf24]/5 to-transparent"></div>
          <div className="absolute bottom-[10%] left-[10%] w-80 h-40 bg-[#fdba74]/15 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[5%] right-[20%] w-60 h-32 bg-[#f97316]/10 rounded-full blur-[60px]"></div>

          {/* Stars */}
          <div className="absolute inset-0 overflow-hidden star-field opacity-60"></div>

          {/* Floating star particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[5%] left-[10%] w-1.5 h-1.5 bg-[#fef9c3] rounded-full animate-star-twinkle" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-[15%] right-[25%] w-1 h-1 bg-[#a5f3fc] rounded-full animate-star-twinkle" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-[25%] left-[30%] w-2 h-2 bg-[#fef9c3] rounded-full animate-star-twinkle" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-[10%] right-[40%] w-1 h-1 bg-[#e8f4f8] rounded-full animate-star-twinkle" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-[35%] left-[60%] w-1.5 h-1.5 bg-[#a5f3fc] rounded-full animate-star-twinkle" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-[20%] left-[80%] w-1 h-1 bg-[#fef9c3] rounded-full animate-star-twinkle" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute top-[40%] right-[15%] w-2 h-2 bg-[#e8f4f8] rounded-full animate-star-twinkle" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-[8%] left-[45%] w-1 h-1 bg-[#fef9c3] rounded-full animate-star-twinkle" style={{ animationDelay: '3.5s' }}></div>
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
