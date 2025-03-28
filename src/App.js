import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Tecnologias from './components/Tecnologias';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Projects />
        <About />
        <Tecnologias />
      </main>
      <Footer />
    </div>
  );
}

export default App;
