import "./App.css";
import Home from "./components/Home/Home";
import Login1 from "./components/login/Login1";
import Admin from "./pages/Admin/Admin";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login1 />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
