import { useState } from 'react';
import './assets/css/style.min.css';
import students from './assets/database/students.json';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [userId, setUserId] = useState("");
  const [section, setSection] = useState("");
  const [blood, setBlood] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const userId = document.getElementById("userId").value;
    const pass = document.getElementById("pass").value;
    const user = students.find((user) => user.userId === userId);
    if (user) {
      if (user.pass === pass) {
        setLoggedIn(true);
        setName(user.name);
        setNickName(user.nickName);
        setUserId(user.userId);
        setSection(user.section);
        setBlood(user.blood);
        setMobile(user.mobile);
        setEmail(user.email);
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
      {loggedIn ? <Dashboard name={name} nickName={nickName} userId={userId} section={section} blood={blood} mobile={mobile} email={email} handleLogOut={handleLogOut} /> : <LoginPage handleSubmit={handleSubmit} />}
    </div>
  );
};

export default App;