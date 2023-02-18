import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import GamePage from "./pages/Game";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
