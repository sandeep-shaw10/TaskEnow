import Banner from '../components/Home/Banner'
import AboutUs from '../components/Home/AboutUs';
import SectionCTA from '../components/Home/SectionCTA'
import Process from '../components/Home/Process';
import Service from '../components/Home/Service';
import Team from '../components/Home/Team';
import Testimonials from '../components/Home/Testimonials';
import WhyUs from '../components/Home/WhyUs';
import Blog from '../components/Home/Blog';
import Client from '../components/Home/Client';


function Home() {
  return <>
        <Banner />
        <SectionCTA />
        <AboutUs />
        <Process />
        <Service />
        <Team />
        <Testimonials />
        <WhyUs/>
        <Blog />
        <Client />
    </>
}


export default Home;