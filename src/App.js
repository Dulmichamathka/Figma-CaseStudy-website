import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Works from "./Components/Works";
import "./index.css";
import XreamVue from "./Components/XreamVue/XreamVue";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Works />} />
        <Route path="/Xream-vue-app" element={<XreamVue />} />
      </Routes>
    </div>
  );
}

export default App;
