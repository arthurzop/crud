import { Outlet } from "react-router";
import Home from "./pages/home";
import HomeLog from "./pages/homeLog";

function App() {
  return (
    <div className="app">
      <Outlet/>
    </div>
  );
}

export default App;
