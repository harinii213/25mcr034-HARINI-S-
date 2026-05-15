import { FcNext } from "react-icons/fc";
import { PiLinkSimpleBreak } from "react-icons/pi";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";


function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white text-4xl">
      <h1>Welcome to Employee Productivity System</h1>
      <PiLinkSimpleBreak className="text-6xl text-blue-500" />
      <input type="text" placeholder="Enter Employee id " />
      <input type="text" placeholder="Enter name" />
      <input type="password" placeholder="Enter password" />
      <button type="button" onClick={() => alert("Login successful")}>
        Login
      </button>

    </div>
  );
}

export default App;
