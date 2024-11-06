import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Component/MainPage";
import MainInfo from "./Component/MainInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:mealid" element={<MainInfo />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
