import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home/>} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;