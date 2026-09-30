
import { useRef } from "react";
import Navbar from "./navbar";
import Home from "./Home/home.jsx";
import FeatureStarSection from "./Feature/featurestar.jsx";
import FeatureShowcase from "./Feature/showcase.jsx";
import TrustedSection from "./trusted.jsx";
import PricingSection from "./pricing.jsx";
import RequestDemo from "./requestdemo.jsx";
import Footer from "./footer.jsx";

export const Website= ({logo}) => {
     const sectionRef = useRef(null);
     const showcaseRef = useRef(null);
    return (
        <div className="bg-[#0f172a] text-white ">
            <Navbar logo={logo} />
            <main id="Home" className="relative w-full bg-black">
                <section id="Home" className="relative h-[1400vh]">
                    <div className="sticky top-0 h-screen overflow-hidden">
                        <Home />
                    </div>
                </section>
            </main>

            <section id="Features" ref={sectionRef} className="relative h-[400vh] bg-white">
                <FeatureStarSection sectionRef={sectionRef} />
            </section>

            <section id="Showcase" ref={showcaseRef} className="relative h-[500vh] ">
                <FeatureShowcase sectionRef={showcaseRef} />
            </section>

            <TrustedSection/>

            <PricingSection/>

            <RequestDemo/>


              
            
            {/*  
             
            <FeatureShowcase/>
                 <Navbar />
            <Hero />
            <IntroductionSection/>
            <FeaturesSection/>
            <Features1Section/>
            <IndustriesSection/>
            <HowIScheduleWorksSection/>
            <TestimonialsSection/>
            <TrustedSection/>
            <PricingSection/>
            <RequestDemo/>
            <Footer/>
        
        
            <LaserCalendar/>
            <StickyFeatures/>*/}
           
        </div>
    )
}
