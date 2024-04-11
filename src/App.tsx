import Faqs from "./Components/Faqs/Faqs";
import Footer from "./Components/Footer/Footer";
import { LampDemo } from "./Components/Lampettect/Lampeffect";
import Logosample from "./Components/Logosamp/Logosamp";
import { MacbookScrollDemo } from "./Components/Mackbook/Mackbook";
import { InfiniteMovingCardsDemo } from "./Components/Movingcards/Movingcards";
import PricingTable from "./Components/Pricingtable/Pricingtable";
import { TypewriterEffectSmoothDemo } from "./Components/Typewriter/Typewriter";

function App() {
  return (
    <>
      {/* <header>
        <NavbarDemo />
      </header> */}

      <section>
        <div>
          <LampDemo />
        </div>
        {/* <HeroParallaxDemo/> */}
        {/* <TextGenerateEffectDemo/> */}
        <Logosample />
        {/* <StickyScrollRevealDemo /> */}
        <MacbookScrollDemo/>
        <InfiniteMovingCardsDemo />
        <PricingTable />
        {/* <GlobeDemo/> */}
        <div>
          <Faqs />
        </div>
        <div className="mt-9">
          <TypewriterEffectSmoothDemo />
        </div>
      </section>
      <footer>
        <Footer className="className" />
      </footer>
    </>
  );
}

export default App;
