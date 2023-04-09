import { useState } from 'react';
import './assets/css/style.css';
import students from './assets/database/students.json';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

const App = () => {
  /*   const [loggedIn, setLoggedIn] = useState(false);
    const [userId, setUserId] = useState(""); */

  /*   const handleSubmit = () => {
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
    } */

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");


  const handleSubmit = () => {
    const userId = document.getElementById("userId").value;
    const pass = document.getElementById("pass").value;
    const user = students.find((user) => user.userId === userId);

    if (user.pass === pass) {
      setLoggedIn(true);
      setUserId(user.userId);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("userId", user.userId);
    } else {
      alert("Password is incorrect");
    }

  }

  /*   const handleLogOut = () => {
      setLoggedIn(false);
    } */

  const handleLogOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userId");
  }


  return (
    <div>
      {loggedIn ? <Dashboard userId={userId} handleLogOut={handleLogOut} /> : <LoginPage handleSubmit={handleSubmit} />}
    </div>
  );
};

export default App;