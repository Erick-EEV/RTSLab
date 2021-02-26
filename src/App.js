import "./App.css";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import History from "./components/History";
function App() {
  return (
    <div className="App">
      <SearchBar />
      <Results />
      <History />
    </div>
  );
}

export default App;
