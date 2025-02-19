import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import FavoriteContext from "./components/FavoriteContext";

function App() {
  return (
    <div className="flex flex-col min-h-screen p-4 md:p-10">
      <Router>
        <Header />
        <FavoriteContext>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/recipes" element={<Recipes />}></Route>
            <Route path="/recipe/:id" element={<Recipe />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </FavoriteContext>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
