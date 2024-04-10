import Faqs from "./Components/Faqs/Faqs"
import Footer from "./Components/Footer/Footer"
import { NavbarDemo } from "./Components/Header/Navheader"

import { LampDemo } from "./Components/Lampettect/Lampeffect"
import Logosample from "./Components/Logosamp/Logosamp"
import { InfiniteMovingCardsDemo } from "./Components/Movingcards/Movingcards"
import PricingTable from "./Components/Pricingtable/Pricingtable"
import { StickyScrollRevealDemo } from "./Components/Stickyscrollbar/Stickyscrollbar"
import { TypewriterEffectSmoothDemo } from "./Components/Typewriter/Typewriter"



function App() {


  return (
    <>
      <header> 

    <NavbarDemo/>
      </header>

      <section>
        <LampDemo/>
        {/* <HeroParallaxDemo/> */}
        {/* <TextGenerateEffectDemo/> */}
        <Logosample/>
        <StickyScrollRevealDemo/>
        <InfiniteMovingCardsDemo/>
        <PricingTable/>
        <div>
          <Faqs/>
        </div>
        <div className="mt-9">

        <TypewriterEffectSmoothDemo/>
        </div>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
