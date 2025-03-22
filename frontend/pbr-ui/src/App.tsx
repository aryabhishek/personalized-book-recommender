import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Preferences from "./components/Preferences";
import StarIcon from "./components/icons/StarIcon";
import CloseIcon from "./components/icons/CloseIcon";
import { useState } from "react";
import DescriptionModal from "./components/DescriptionModal";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard></Dashboard>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/signin" element={<Signin></Signin>}></Route>
      <Route path="/pref" element={<Preferences></Preferences>}></Route>
      <Route path="/test" element={<Test></Test>}></Route>

    </Routes>
  </BrowserRouter>
}

function Test() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return <div className="flex justify-start gap-4 items-center bg-slate-300 size-fit">
    <DescriptionModal isOpen={isOpen} setIsOpen={setIsOpen} description={"New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled."}></DescriptionModal>
  </div>
}

export default App;