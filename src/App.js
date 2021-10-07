import "./App.css";
import { Link } from "react-router-dom";
import Routes from "./routes/index";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/formatura">Formatura</Link>
            </li>
            <li>
              <Link to="/casamento">Casamento</Link>
            </li>
            <li>
              <Link to="/confraternizacao">Confraternização</Link>
            </li>
          </ul>
        </nav>
        <Routes />
      </header>
    </div>
  );
}

export default App;
