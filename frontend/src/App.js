import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Questions from "./pages/Questions";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/questions");
    } else {
      navigate("/");
    }
  }, []);

  const loggedIn = (userData) => {};

  return (
    <>
      <Routes>
        <Route path="/" element={<Login loggedIn={loggedIn} />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </>
  );
}

export default App;
