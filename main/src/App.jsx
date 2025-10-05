import './App.css';
import './index.css';

import { LoadingScreen } from './components/LoadingScreen';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { Purpose } from './components/sections/Purpose';
import { Footer } from './components/Footer';
import { Create } from './components/sections/Create';
import { Read } from './components/sections/Read';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-black text text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
        </Routes>

        <Purpose />
        <Footer />
      </div>
    </>
  );
}

export default App;
