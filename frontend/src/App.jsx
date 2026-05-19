import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";

import "./index.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <div>
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;