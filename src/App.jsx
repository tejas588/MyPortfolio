import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from './components/Navbar/Navbar';
import { Hero } from "./components/Hero/Hero";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume"; // PDF preview component
import Certifications from "./components/Resume/Certifications";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Navbar />

        <Routes>
          {/* Home Route (with all sections) */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />

          {/* Resume Route */}
          <Route path="/resume" element={<Resume />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
