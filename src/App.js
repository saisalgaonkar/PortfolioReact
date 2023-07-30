import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/PortfolioSai" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/PortfolioSai/about' element={<About/>}/>
        <Route path='/PortfolioSai/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
