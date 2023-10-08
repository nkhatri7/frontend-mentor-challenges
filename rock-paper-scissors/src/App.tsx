import { useState } from "react";
import Header from "./components/Header";
import ActionSelector from "./components/ActionSelector";
import RulesButton from "./components/Rules/RulesButton";
import "./App.scss";
import RulesModal from "./components/Rules/RulesModal";

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
