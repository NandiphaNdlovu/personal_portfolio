import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { PageLayout } from "./pages/PageLayout";
import { SkillsLayout } from "./pages/Skills/SkillsLayout";
import { ContactPage } from "./pages/Contact/ContactPage";
import { TechnicalSkillsPage } from "./pages/Skills/TechnicalSkillsPage";
import { SoftSkillsPage } from "./pages/Skills/SoftSkillsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/personal_portfolio/" element={<PageLayout />}>
          <Route path="/personal_portfolio/" element={<HomePage />} />
          <Route path="skills/" element={<SkillsLayout />}>
            <Route path="technical" element={<TechnicalSkillsPage />} />
            <Route path="soft" element={<SoftSkillsPage />} />
          </Route>
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
