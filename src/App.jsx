import "./App.css";
import Card from "./components/Card";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="img-grid">
        <img src="/public/images/photo-grid.png" alt="" />
      </div>
      <Experience />
    </div>
  );
}

export default App;
