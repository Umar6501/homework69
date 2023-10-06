// import './App.css';
import PostDetails from "./components/PostDetails";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />} />
        {/* <Route path="/:userId" element={<PostDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
