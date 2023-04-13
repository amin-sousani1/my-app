import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import About from "./pages/about/About"
import { BrowserRouter,Routes,Route } from 'react-router-dom';

 
  const App=()=>{
    return(
           <>
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
           </>
    )
  }

export default App