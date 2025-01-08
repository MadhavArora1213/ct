import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Scroll from "./components/pages/Scroll";
import FAQ from "./components/pages/FAQ";
import Testimonial from "./components/pages/Testimonial";
import StickyScroll from "./components/pages/StickyScroll";
import Header from "./components/Header";
import Main from "./components/Main";
import { initialize } from "./smoothScroll";
import "./App.css";
import AwardsSection from "./components/pages/AwardsSection";
import PlacementSection from "./PlacementSection";
import Navbar from "./components/pages/Navbar";
import HeroSection from "./components/pages/HeroSection";
// import FluidCursor from "./Cursor";
import LuckyPopup from "./LuckyPopup";
// import Loading1 from "./Loading/Loading1"; // Import the loader

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div data-name="app" className="min-h-screen bg-white">
      {/* {isLoading ? (
        <Loading1 onFinish={() => setIsLoading(false)} />
      ) : ( */}
        <>
          <LuckyPopup />
          <div className="main-content">
            {/* <FluidCursor /> */}
            <Navbar />
            <HeroSection />
            <PlacementSection />
            <Scroll />
            
            <StickyScroll />
            <Header />
            <Main />
            <AwardsSection />
            
            <Testimonial />
            <FAQ />
            <Footer />
          </div>
        </>
      {/* )} */}
    </div>
  );
}

export default App;

// Initialize and render the app
// try {
//   const rootElement = document.getElementById("root");
//   ReactDOM.render(<App />, rootElement);
// } catch (error) {
//   console.error("Error rendering the app:", error);
// }
