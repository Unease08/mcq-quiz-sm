import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import Admin from "./pages/Admin/Admin";
import Class from "./pages/Admin/class/Class";
import Faculty from "./pages/Admin/faculty/Faculty";
import Setup from "./pages/Admin/setup/Setup";
import Homepage from "./pages/user/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Profile from "./pages/user/profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/setup" element={<Setup />}></Route>
        <Route path="/class" element={<Class />}></Route>
        <Route path="/faculty" element={<Faculty />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
