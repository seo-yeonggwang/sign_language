import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import StudySelect from './pages/StudySelect';
import StudyMain from "./pages/StudyMain";
import Study from "./pages/Study";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./Header";
import Mypage from "./pages/Mypage";
import { useCookies } from 'react-cookie';
import { useState, useEffect } from "react";
import PrivateRoute from './PrivateRoute';

function App() {
  const [id, setId] = useState('');
  const [cookies] = useCookies(['id']);

  useEffect(() => {
    const userId = cookies.id;
    if (userId) {
      setId(userId);
    }
  }, [cookies.id]);

  return (
    <div className = 'App'> 
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/study/" element={<PrivateRoute authenticated={cookies.id} component={<Study />} />}></Route>
            <Route path="/study-main/" element={<PrivateRoute authenticated={cookies.id} component={<StudyMain />} />}></Route>
            <Route path="/study-select/" element={<PrivateRoute authenticated={cookies.id} component={<StudySelect />} />}></Route>
            <Route path="/mypage/" element={<PrivateRoute authenticated={cookies.id} component={<Mypage />} />}></Route>
            <Route path="/login/" element={<Login/>}></Route>
            <Route path="/register/" element={<Register/>}></Route>
            <Route path="/*" element={<NotFound/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;