import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import RouterForScreen from "./Components/RouterScreen";
import UserState from "./Context/User/userState";

function App() {
  return (
    <>
      <UserState>
        <div className="App">
          <Navbar title="React Hooks Home" />
          <RouterForScreen />
        </div>
      </UserState>
    </>
  );
}

export default App;
