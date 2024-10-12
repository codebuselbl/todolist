import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";
import { MyDetails } from "./pages/myDetails/MyDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <div className="flex bg-[#f4f4f4] h-screen">
        <Routes>
          <Route path="/" element={<MyDetails />} />
          <Route path="/mis-datos" element={<MyDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
