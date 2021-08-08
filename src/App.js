import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Hero from './components/Hero'

function App() {

  return (
    <div>
      <Nav
      ></Nav>
      <Hero />
      <main>
        <Projects ></Projects>
        <About></About>
        <Resume></Resume>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>

    </div>
  );
}

export default App;
