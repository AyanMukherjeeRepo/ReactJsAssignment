import "./App.css";
import Genre from "./Components/Genre/Genre";
import Header from "./Components/Header/Header";

function App() {
  const genres = [
    { id: 1, value: "ALL" },
    { id: 2, value: "DOCUMENTARY" },
    { id: 3, value: "COMEDY" },
    { id: 4, value: "HORROR" },
    { id: 5, value: "CRIME" },
  ];
  return (
    <div className="App">
      <Header />
      <div className="genre-sort">
        <Genre genres={genres} />
      </div>
    </div>
  );
}

export default App;
