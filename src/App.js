import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import RouterForScreen from "./Components/RouterScreen";

function App() {
  return (
    <>
      <div className="App">
        <Navbar title="React Hooks Home" />
        <RouterForScreen />
      </div>
    </>
  );
}

export default App;
