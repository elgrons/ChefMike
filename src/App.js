import './App.css';
import { Header } from "./components/Header/Header";
import { Welcome } from "./components/Welcome/Welcome";
import { Why } from "./components/Why/Why";
import { AboutTheChef } from "./components/AboutTheChef/AboutTheChef";
import { Menu } from "./screens/Menu/Menu";
import { BookingInfo } from "./components/BookingInfo/BookingInfo";
import { MediaFeed } from "./components/MediaFeed/MediaFeed";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
    <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route exact path="/about" element={<AboutTheChef />} />
      <Route exact path="/menu" element={<Menu />} />
      <Route exact path="/booking" element={<BookingInfo />} />
      <Route exact path="/media" element={<MediaFeed />} />
      <Route exact path="/why" element={<Why />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
