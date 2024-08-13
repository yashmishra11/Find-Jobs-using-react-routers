import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from './pages/home/Home'
import About from './pages/about/About'
import RootLayouts from "./Layouts/RootLayouts"
import HelpLayouts from "./Layouts/HelpLayouts"
import  Faq  from './pages/help/Faq';
import  Contact  from './pages/help/Contact';
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} /> 
        <Route path="help" element={<HelpLayouts />} >
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        </Route>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router = {router} />
  )
}

export default App;
