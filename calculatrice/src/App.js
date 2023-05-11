import logo from "./logo.svg";
import "./App.css";
import ButtonNumber from "./components/ButtonNumber";
import NumericPad from "./components/NumericPad";
import Affichage from "./components/Affichage";
import Cadre from "./components/Cadre";

function ButtonCalc({ content }) {
  return (
    <button className="Elmnt" value={content}>
      {content}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <Cadre>
        <Affichage value="0" />
        <NumericPad></NumericPad>
      </Cadre>
    </div>
  );
}

export default App;
