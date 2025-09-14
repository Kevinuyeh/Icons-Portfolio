import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ScrollToTop from "./Components/ScrollToTop";
import ProjectPage from "./Pages/ProjectPage";

function App() {
  return (
    <div>
     <BrowserRouter>
     <ScrollToTop>
      
        <Routes>
          <Route path="/" index element={<Home/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="contact" element={<ContactPage/>} />
          <Route path="projectpage" element={<ProjectPage/>} />
        </Routes>
        
        </ScrollToTop>
     </BrowserRouter>
    </div>
  );
}

export default App;
