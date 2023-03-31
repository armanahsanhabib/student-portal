import { useState } from 'react';
import './assets/css/style.min.css';
import students from './assets/database/students.json';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  const handleSubmit = () => {
    const userId = document.getElementById("userId").value;
    const pass = document.getElementById("pass").value;
    const user = students.find((user) => user.userId === userId);
    if (user) {
      if (user.pass === pass) {
        setLoggedIn(true);
        setUserId(user.userId);
      } else {
        alert("Password is incorrect");
      }
    } else {
      alert("User not found");
    }
  }

  const handleLogOut = () => {
    setLoggedIn(false);
  }

  return (
    <div>
      {loggedIn ?
        <Dashboard
          userId={userId}
          handleLogOut={handleLogOut}
        /> : <LoginPage
          handleSubmit={handleSubmit}
        />}
    </div>
  );
};

export default App;