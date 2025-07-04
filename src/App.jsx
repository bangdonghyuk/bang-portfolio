import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FeedbackForm from './pages/FeedbackForm';
import AdminPage from './pages/AdminFeedbacks'; // 아까 만든 어드민 페이지
import './assets/css/index.css';
import './assets/css/style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
