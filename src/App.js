import "./App.css";
import AddDefects from "./components/addDefects";
import LogIn from "./components/login";
import Defects from "./components/view_Defects";

function App() {
  return (
    <div className="App">
      <LogIn />
      <Defects />
      <AddDefects />
    </div>
  );
}

export default App;
