import Faqs from "./Components/Faqs/Faqs";
import Featuresection from "./Components/Featuresection/Featuresection";
import Footer from "./Components/Footer/Footer";
import Imagetitle from "./Components/Imagetitle/Imagetitle";
import { LampDemo } from "./Components/Lampettect/Lampeffect";
import Logosample from "./Components/Logosamp/Logosamp";
import { MacbookScrollDemo } from "./Components/Mackbook/Mackbook";
import { InfiniteMovingCardsDemo } from "./Components/Movingcards/Movingcards";
import PricingTable from "./Components/Pricingtable/Pricingtable";
import { TypewriterEffectSmoothDemo } from "./Components/Typewriter/Typewriter";

function App() {
  return (
    
    <>
      <section>
        <div>
          <LampDemo />
        </div>

        <Logosample />

        <MacbookScrollDemo />
        
        <Featuresection/>
        <Imagetitle/>
        <InfiniteMovingCardsDemo />
        <PricingTable />

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
