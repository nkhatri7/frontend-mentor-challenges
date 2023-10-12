import { useState } from "react";
import Game from "./components/Game";
import GameProvider from "./context/GameProvider";
import Header from "./components/Header";
import RulesButton from "./components/Rules/RulesButton";
import RulesModal from "./components/Rules/RulesModal";
import "./App.scss";

function App() {
  const [showRules, setShowRules] = useState<boolean>(false);

  return (
    <GameProvider>
      <Header />
      <main>
        <Game />
      </main>
      <footer>
        <RulesButton onClick={() => setShowRules(true)} />
      </footer>
      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
    </GameProvider>
  );
}

export default App;
