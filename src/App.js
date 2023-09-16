import { Section } from "./Assets/Components/Section/Section";
import BubblesSection from "./Assets/Sections/BubblesSection/BubblesSection";
import { Hero } from "./Assets/Sections/Hero/Hero";
import { HowWeDoIt } from "./Assets/Sections/HowWeDoIt/HowWeDoIt";
import Logos from "./Assets/Sections/LogoSlider/Logos";
import { WhatDoWeDo } from "./Assets/Sections/WhatDoWeDo/WhatDoWeDo";
import { Navbar } from "./Assets/Sections/Navbar/Navbar";
import { Fragment } from "react";
import { BrandSection } from "./Assets/Sections/BrandSection/BrandSection";
import { DesignSection } from "./Assets/Sections/DesignSection/DesignSection";
import { BriliantExcecution } from "./Assets/Sections/BriliantExecution/BriliantExecution";
import { PricingSection } from "./Assets/Sections/PricingSection/PricingSection";
import { Footer } from "./Assets/Sections/Footer/Footer";
import { Contact } from "./Assets/Sections/ContactSection/Contact";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="bello_container">

        <Hero />
        <Logos />
        <WhatDoWeDo />
        <BubblesSection />
        <HowWeDoIt />
        <BrandSection />
        <DesignSection />
        <BriliantExcecution />
        <PricingSection />
        <Contact />
      </div >
      <Footer />
      <ToastContainer
        bodyClassName="toastBody"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Fragment>
  );
}

export default App;
