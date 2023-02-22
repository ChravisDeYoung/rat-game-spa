import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

function HomePage() {
  const [highscore, setHighscore] = useLocalStorage("highscore", 0);

  return (
    <div className="card">
      {highscore > 0 && <h1>{highscore}</h1>}
      <Link to="/game">Start Game</Link>
    </div>
  );
}

export default HomePage;
