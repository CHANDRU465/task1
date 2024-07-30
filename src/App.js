import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "./assets/css/main.css";
import Dashboard from "./pages/dashboard";
import Notification from "./pages/notification";
import Task from "./pages/task";
import Notes from "./pages/notes";
import Email from "./pages/email";
import Calendar from "./pages/calendar";

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/task" element={<Task />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/email" element={<Email />} />
          <Route path="/calendar" element={<Calendar />} />

          <Route path="/*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
