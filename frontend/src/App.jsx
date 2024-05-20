
import { Routes, Route } from "react-router-dom";
import Header from './Component/Header'
import Home from './Component/Home'
import NoPage from './Component/NoPage';
import Profile from './Component/Profile';
import Contact from './Component/Contact';
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />

       
      </Routes>

    </>
  )
}

export default App
