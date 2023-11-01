import './App.css';
import { Header } from "./Header";
import { Welcome } from "./Welcome";
import { Why } from "./Why";
import { AboutTheChef } from "./AboutTheChef";
import { MenuControl } from "./MenuControl";
import { BookingInfo } from "./BookingInfo";
import { MediaFeed } from "./MediaFeed";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

function App() {
  return (
    <>
    <div className="App">
    <Header />
    <Welcome />
    <Why />
    <AboutTheChef />
    <MenuControl />
    <BookingInfo />
    <MediaFeed />
    <Contact />
    <Footer />
    </div>
    </>
  );
}

export default App;
