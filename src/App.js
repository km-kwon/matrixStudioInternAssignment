import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./router/detail/detail";
import Main from "./router/main/main";
import List from "./router/list/list";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
