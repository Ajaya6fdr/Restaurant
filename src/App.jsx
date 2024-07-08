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
            <Route path='https://ajaya6fdr.github.io/Restaurant/' element={<Home/>}/>
            <Route path='https://ajaya6fdr.github.io/Restaurant/about' element={<About/>}/>
            <Route path='https://ajaya6fdr.github.io/Restaurant/contact' element={<Contact/>}/>
            <Route path='https://ajaya6fdr.github.io/Restaurant/menu' element={<Menu/>}/>
            <Route path='*' element={<PageNotFound/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
