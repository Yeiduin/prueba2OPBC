import logo from "./logo.svg";
import "./App.css";
import Clock1 from "./components/componentC";
import Clock from "./components/componentF";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Clock1></Clock1> */}
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
