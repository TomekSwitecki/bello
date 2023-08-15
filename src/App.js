import { Section } from "./Assets/Components/Section/Section";
import { Hero } from "./Assets/Sections/Hero/Hero";
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
      <Section sectionTitle={"What do we do?"} sectionSubtitle={"We will help you to create product of your dreams. Websites, apps, branding, logo. We got it all."} id="o_nas" dir="row" headingDir="column" ><img src="https://picsum.photos/200/300" ></img></Section>

    </div>
  );
}

export default App;
