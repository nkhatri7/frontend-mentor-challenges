import { useState } from "react";
import ActionSelector from "./components/ActionSelector";
import Header from "./components/Header";
import RulesButton from "./components/Rules/RulesButton";
import RulesModal from "./components/Rules/RulesModal";
import "./App.scss";

function App() {
  const [showRules, setShowRules] = useState<boolean>(false);

  return (
    <>
      <Header />
      <main>
        <ActionSelector />
      </main>
      <footer>
        <RulesButton onClick={() => setShowRules(true)} />
      </footer>
      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
    </>
  );
}

export default App;
