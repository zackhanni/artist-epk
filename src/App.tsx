import "./App.css";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Listen from "./components/Listen";
import Nav from "./components/Nav";
// import Photos from "./components/Photos";
import Videos from "./components/Videos";

export default function App() {
  return (
    <div className="App bg-black">
      <header className="App-header">
        <Nav />
        <main className="pt-16">
          <Hero />
          {/* <Photos /> */}
          <Biography />
          <Listen />
          <Videos />
        </main>

        <Footer />
      </header>
    </div>
  );
}
