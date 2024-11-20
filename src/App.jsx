import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Users } from "./pages/Users";
import { Home } from "./pages/Home";
import { PostDetails } from "./pages/PostDetails";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts/:postId" element={<PostDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
