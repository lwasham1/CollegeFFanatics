import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./HomePage";
import TeamPage from "./TeamPage";
export default function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path ="/" element = {<HomePage />} />
            <Route path ="/team/:teamName" element = {<TeamPage />} />
            <Route path = "*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
    );
}