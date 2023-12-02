import "./App.css";
import { LanguageSwitcher } from "./Components/LanguageSwitcher";
import { MainPart } from "./Components/MainPart";
import { WordsList } from "./Components/WordsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>TEST i18next</p>
        <LanguageSwitcher />
        <MainPart />
        <WordsList />
      </header>
    </div>
  );
}

export default App;
