import logo from "./favicon.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Dictionary />
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
    </div>
  );
}

export default App;
