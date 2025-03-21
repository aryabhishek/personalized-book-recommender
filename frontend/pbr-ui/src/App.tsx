import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Preferences from "./components/Preferences";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard></Dashboard>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/signin" element={<Signin></Signin>}></Route>
      <Route path="/pref" element={<Preferences></Preferences>}></Route>
    
    </Routes>
  </BrowserRouter>
}

export default App;