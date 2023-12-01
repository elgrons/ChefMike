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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
    <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route exact path="/why" element={<Why />} />
      <Route exact path="/about" element={<AboutTheChef />} />
      <Route exact path="/menu" element={<MenuControl />} />
      <Route exact path="/booking" element={<BookingInfo />} />
      <Route exact path="/media" element={<MediaFeed />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
