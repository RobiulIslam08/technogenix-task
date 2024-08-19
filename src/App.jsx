import AgensySection from "./complonent/agensy-section/AgensySection"
import Footer from "./complonent/footer/Footer"
import GoToTop from "./complonent/GoToTop/GoToTop"
import Hero from "./complonent/hero/Hero"
import Navbar from "./complonent/navbar/Navbar"
import SecitonTwo from "./complonent/section2/SecitonTwo"
import SectionFive from "./complonent/sectionFive/SectionFive"
import SectionFour from "./complonent/sectionFour/SectionFour"
import SectionThree from "./complonent/sectionThree/SectionThree"



function App() {


  return (
    <>
      <Hero></Hero>
      <Navbar></Navbar>
      <AgensySection></AgensySection>
      <SecitonTwo></SecitonTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
      <SectionFive></SectionFive>
      <Footer></Footer>
      <GoToTop></GoToTop>
     
    </>
  )
}

export default App
