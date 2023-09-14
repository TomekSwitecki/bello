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
      </div >
    </Fragment>
  );
}

export default App;
