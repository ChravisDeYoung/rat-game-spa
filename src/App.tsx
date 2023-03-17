import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import GamePage from "./pages/Game";
import HowToPage from "./pages/HowTo";
import SettingsPage from "./pages/Settings";
import GameOverPage from "./pages/GameOver";

function App() {
  return (
    <div className="bg-cheese">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/game-over" element={<GameOverPage />} />
          <Route path="/how-to" element={<HowToPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
