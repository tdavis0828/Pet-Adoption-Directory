import "./App.css";
import data from "./data.json";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <Table pets={data} />
    </div>
  );
}

export default App;
