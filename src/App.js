import { Section } from "./Assets/Components/Section/Section";
import BubblesSection from "./Assets/Sections/BubblesSection/BubblesSection";
import { Hero } from "./Assets/Sections/Hero/Hero";
import { HowWeDoIt } from "./Assets/Sections/HowWeDoIt/HowWeDoIt";
import Logos from "./Assets/Sections/LogoSlider/Logos";
import { Navbar } from "./Assets/Sections/Navbar/Navbar";
import { WhatDoWeDo } from "./Assets/Sections/WhatDoWeDo/WhatDoWeDo";
function App() {
  return (
    <div className="bello_container">
      <Navbar />
      <Hero />
      <Logos />
      <WhatDoWeDo />
      <BubblesSection />
      <HowWeDoIt />
    </div >
  );
}

export default App;
