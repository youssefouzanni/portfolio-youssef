import Navbar from "./components/1-header/Navbar"
import Hero from "./components/2-hero/Hero"
import Main from "./components/3-main/Main"
import Services from "./components/4-services/Services"
import Contact from "./components/5-contact/Contact"
import Footer from "./components/6-footer/Footer"


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      
      <Hero />

      <div className="liner"/>
      <Main id=""/>

      <div className="liner"/>
      <Services />

      <div className="liner"/>
      <Contact />


      <Footer/>
    </div>
  )
}

export default App
