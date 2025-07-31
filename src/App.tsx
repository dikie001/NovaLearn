import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main_page";

import ShortStoriesPage from "./pages/study_mode/ShortStoriesPage";
import QuizzesPage from "./pages/study_mode/QuizzesPage";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-violet-950 text-white overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/short_stories" element={<ShortStoriesPage />} />
          <Route path="/quizzes" element={<QuizzesPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
