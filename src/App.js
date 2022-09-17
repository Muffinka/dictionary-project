import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header">DICTIONARY</div>
      </header>
      <Dictionary defaultKeyword="Brave" />
      <div className="text-center">
        Go to my&nbsp;&nbsp;
        <a
          href="https://github.com/Muffinka/dictionary-project"
          target="_blank"
          rel="noreferrer"
          alt="Github repository @Muffinka"
        >
          GitHub repository
        </a>
        .
      </div>
      <br />
    </div>
  );
}

export default App;
