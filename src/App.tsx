import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { PageLayout } from "./pages/PageLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="home" element={<HomePage />}>
            {/* <Route path="nestedRoute1" element={<nestedRoute1Page />} /> */}
            {/* <Route path="nestedRoute2" element={<nestedRoute2Page />} /> */}
          </Route>
          {/* <Route path="workflow" element={<Workflows />} />
          <Route path="permissions" element={<Permissions />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
