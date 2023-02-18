import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="card">
      <Link to="/game">Start Game</Link>
    </div>
  );
}

export default HomePage;
