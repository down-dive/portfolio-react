import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Hero from './components/Hero'

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      {/* <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav> */}
      <Hero />


    </div>
  );
}

export default App;
