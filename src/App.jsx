import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-10">
        <Outlet />
      </div>
    </div>
  )
}
export default App;