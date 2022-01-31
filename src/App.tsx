import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import RoadMap from "./Components/RoadMap/RoadMap";
import WalletButton from "./WalletButton";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <RoadMap />
      <Footer />
      {/* <WalletButton /> */}
    </>
  );
}

export default App;
