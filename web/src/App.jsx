import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Docs from "./pages/Docs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/docs" element={<Docs />} />
      </Route>
    </Routes>
  );
}

export default App;
