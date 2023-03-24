import React, { useState } from 'react';
import './assets/css/style.min.css';
import LoginPage from './pages/LoginPage';

const database = [
  {
    userId: "user1",
    pass: "pass1"
  },
  {
    userId: "user2",
    pass: "pass2"
  },
  {
    userId: "12311000",
    pass: "admin0"
  },
  {
    userId: "12311001",
    pass: "admin1"
  },
  {
    userId: "12311002",
    pass: "admin2"
  },
  {
    userId: "12311003",
    pass: "admin3"
  },
];

const errors = {
  uname: "invalid username",
  pass: "invalid password"
};

const App = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  return (
    <div>
      <LoginPage handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;