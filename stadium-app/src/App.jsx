import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Entry from './pages/Auth/Entry'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import SportType from './pages/Auth/SportType'
import SportRating from './pages/Auth/SportRating'
import ActivityList from './pages/Activity/ActivityList'
import StadiumList from './pages/Stadium/StadiumList'
import MessageList from './pages/Message/MessageList'
import LikeList from './pages/Like/LikeList'
import ActivityInfo from './pages/Activity/ActivityInfo';
import './index.css'

const AppRoutes = () => {
  const { isAuth } = useAuth()

  return (
    <Routes>
      <Route path='/' element={<Entry />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/register/sportType' element={<SportType />} />
      <Route path='/register/rating' element={<SportRating />} />
      <Route path='/home' element={isAuth ? <Home /> : <Navigate to="/" />} />
      <Route path='/activity/list' element={<ActivityList />} />
      <Route path='/stadium/list' element={<StadiumList />} />
      <Route path='/message/list' element={<MessageList />} />
      <Route path='/like/list' element={<LikeList />} />
      <Route path='/activity/info/:activity_id' element={<ActivityInfo />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
