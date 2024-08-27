
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import LayoutOne from './Layout/LayoutOne'
import About from './Pages/About'
import Contact from './Pages/Contact'
import AnimatedCursor from 'react-animated-cursor'


function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Route>
    )
  )


   

  
  

  return (
    <>


    
    <RouterProvider router={shanto}/>

    <AnimatedCursor
  innerSize={11}
  outerSize={20}
  color="255, 255, 255"  
  outerAlpha={0.2}
  innerScale={0.7}
  outerScale={3}
  clickables={[
    'a',
    'input[type="text"]',
    'input[type="email"]',
    'input[type="number"]',
    'input[type="submit"]',
    'input[type="image"]',
    'label[for]',
    'select',
    'textarea',
    'button',
    '.link'
  ]}
/>
      
    </>
  )
}

export default App
