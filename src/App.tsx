import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";
import { MyBestFriends } from "./pages/MyBestFriends/MyBestFriend";
import { MyComunications } from "./pages/MyComunications/MyComunications";
import { MyDetails } from "./pages/myDetails/MyDetails";
import { MyReturns } from "./pages/MyReturns/MyReturns";
import { MyTasks } from "./pages/myTasks/myTasks";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <div className="flex bg-[#f4f4f4] h-screen">
        <Routes>
          <Route path="/" element={<MyDetails />} />
          <Route path="/mis-datos" element={<MyDetails />} />
          <Route path="/mis-tareas" element={<MyTasks />} />
          <Route path="/mis-devoluciones" element={<MyReturns />} />
          <Route path="/mis-comunicaciones" element={<MyComunications />} />
          <Route path="/mis-mejores-amigos" element={<MyBestFriends />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
