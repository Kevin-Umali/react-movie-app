import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";
import { Showcase } from "./components/Showcase";

function App() {
  return (
    <>
    <Header />
      <section id="main">
        <h1 className="showcase-heading">Showcase</h1>
        <ul id="autoWidth" className="cs-hidden">
          <Showcase />
        </ul>
      </section>
      
      <div className="movies-heading">
        <h2>Movies</h2>
      </div>

      <section id="movies-list">
        <MovieList />
      </section>
      <div className="btns">
        <a href="#">Previous</a>
        
        <a href="#">Next</a>
      </div>
      <Footer />
    </>
  );
}

export default App;
