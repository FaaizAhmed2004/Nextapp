import Banner from "@/Components/Banner/Banner";
import Card from "@/Components/Card/Card";
import Choose from "@/Components/Choose/Choose";
import Desert from "@/Components/Deserts_card/Desert";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/HeroSection/Hero";
import Navbar from "@/Components/Navbar/Navbar";


export default function Home() {
  return (
    <>
  <Navbar/>
  <Hero/>
  <Desert/>
  <Banner/>
  <Choose/>
  <Card/>
  <Footer/>
    </>

    
  );
}
