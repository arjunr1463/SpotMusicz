import Nav from "./components/nav";
import Trending from "./components/trending";
import Jazz from "./components/jazz";
import Artist from "./components/artist";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-black">
      <Nav />
      <Trending />
      <Jazz />
      <Artist />
      <Footer />
    </div>
  );
}

export default App;
