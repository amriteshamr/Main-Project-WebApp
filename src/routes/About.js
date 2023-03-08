import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/grp7.jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Us"
        btnClass="hide"
      />
    </>
  );
}
export default About;
