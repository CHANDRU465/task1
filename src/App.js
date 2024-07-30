import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "./assets/css/main.css";
import Dashboard from "./pages/dashboard";
import Task from "./pages/task";
import Notes from "./pages/notes";
import Form from "./pages/form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />

        <Route path="/task" element={<Task />} />
        <Route path="/notes" element={<Notes />} />

        <Route path="/*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
