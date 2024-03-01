import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import SelectChapter from './pages/SelectChapter';
import SelectLevel from "./pages/SelectLevel";
import Study from "./pages/Study";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Mypage from "./pages/Mypage";
import Search from './pages/Search';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from "react";
import RestrictedRoutes from './RestrictedRoutes';

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
            <Route exact path="/" element={<Home/>}/>
            <Route path="/search/" element={<RestrictedRoutes authenticated={sessionStorage.getItem('user_id')} component={<Search />} redirectPath="/login/"/>}/>
            <Route path="/select-level/" element={<RestrictedRoutes authenticated={sessionStorage.getItem('user_id')} component={<SelectLevel />} redirectPath="/login/"/>}/>
            <Route path="/study/*" element={<RestrictedRoutes authenticated={sessionStorage.getItem('user_id')} component={<Study />} redirectPath="/login/"/>}/>
            <Route path="/select-chapter/*" element={<RestrictedRoutes authenticated={sessionStorage.getItem('user_id')} component={<SelectChapter />} redirectPath="/login/"/>}/>
            <Route path="/mypage/" element={<RestrictedRoutes authenticated={sessionStorage.getItem('user_id')} component={<Mypage />} redirectPath="/login/" />}/>
            <Route path="/login/" element={<RestrictedRoutes authenticated={sessionStorage.getItem('user_id')===null} component={<Login />} redirectPath="/" />}/>
            <Route path="/register/" element={<RestrictedRoutes authenticated={sessionStorage.getItem('user_id')===null} component={<Register />} redirectPath="/" />}/>
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;