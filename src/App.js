import { useState } from 'react';
import './assets/css/style.min.css';
import students from './assets/database/students.json';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [nickName, setNickName] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = () => {
    const userId = document.getElementById("userId").value;
    const pass = document.getElementById("pass").value;
    const user = students.find((user) => user.userId === userId);
    if (user) {
      if (user.pass === pass) {
        setLoggedIn(true);
        setUserName(user.name);
        setNickName(user.nickName);
        setUserId(user.userId);
      } else {
        alert("Password is incorrect");
      }
    } else {
      alert("User not found");
    }
  }

  return (
    <div>
      {loggedIn ? <Dashboard name={userName} nickName={nickName} userId={userId} /> : <LoginPage handleSubmit={handleSubmit} />}
    </div>
  );
};

export default App;