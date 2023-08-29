import { Section } from "./Assets/Components/Section/Section";
import BubblesSection from "./Assets/Sections/BubblesSection/BubblesSection";
import { Hero } from "./Assets/Sections/Hero/Hero";
import { HowWeDoIt } from "./Assets/Sections/HowWeDoIt/HowWeDoIt";
import Logos from "./Assets/Sections/LogoSlider/Logos";
import { WhatDoWeDo } from "./Assets/Sections/WhatDoWeDo/WhatDoWeDo";
import { Navbar } from "./Assets/Sections/Navbar/Navbar";
import { Fragment } from "react";
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
      </div >
    </Fragment>
  );
}

export default App;
