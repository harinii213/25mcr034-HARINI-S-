
import React,{useState} from "react"; 
import Dashboard from "../components/dashboard/dashboard";
import { PiTextB } from "react-icons/pi";
export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <div>
      {isLoggedIn ? <Dashboard /> : <p>Please log in to view the dashboard.</p>}
        <sidebar style={{ width: '200px', height: '100vh', backgroundColor: 'blue', position: 'fixed', left: 0, top: 0 }}>
        <h3 style={{ padding: '20px' }}>Navigation</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ padding: '10px 20px' }}><a href="/dashboard">Dashboard</a></li>
          <li style={{ padding: '10px 20px' }}><a href="/profile">Profile</a></li>
          <li style={{ padding: '10px 20px' }}><a href="/settings">Settings</a></li>
          <li style={{ padding: '10px 20px' }}><a href="/logout">Logout</a></li>
        </ul>
      </sidebar>
        
      
      <textarea placeholder="welcome to the dashboard"
        style={{ width: '100%', height: '200px', marginTop: '20px' }}
      />
      <button style={{ marginTop: '10px' }} onClick={() => alert('clicked')}>Enter your name </button>
      <textbox placeholder="Enter your name" style={{ width: '100%', height: '100px', marginTop: '20px' }} />
      <button style={{ marginTop: '10px' }} onClick={() => alert('Task submitted')}>Submit Task</button>
      <textbox placeholder="Enter task details" style={{ width: '100%', height: '100px', marginTop: '20px' }} />
      
      </div>
    );
}