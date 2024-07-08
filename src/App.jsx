import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import PageNotFound from './pages/PageNotFound';

function App() {
 
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path='/Restaurant' element={<Home/>}/>
            <Route path='/Restaurant/about' element={<About/>}/>
            <Route path='/Restaurant/contact' element={<Contact/>}/>
            <Route path='/Restaurant/menu' element={<Menu/>}/>
            <Route path='*' element={<PageNotFound/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
