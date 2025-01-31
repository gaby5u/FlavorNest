import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="p-4 min-h-screen md:p-10">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
