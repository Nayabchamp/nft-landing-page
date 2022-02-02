import "./App.css";
import Banner from "./Sections/Banner/Banner";
import Faqs from "./Sections/Faqs/Faqs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import RoadMap from "./Sections/RoadMap/RoadMap";
import ConnectWalletButton from "./ConnectWalletButton";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <RoadMap />
      <Faqs text="dhhdhd" title="dgdgdd" />
      <Footer />
      {/* <ConnectWalletButton /> */}
    </>
  );
}

export default App;
