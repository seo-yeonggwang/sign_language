import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./pages/Home";
import StudyMain from "./pages/StudyMain";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login"
import Header from "./Header";
import Mypage from './pages/Mypage';

function App() {
  return (
    <div className = 'App'> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/study-main/*" element={<StudyMain/>}></Route>
          <Route exact path="/mypage" element={<Mypage/>}></Route>
          <Route path="/login/*" element={<Login/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
