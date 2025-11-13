import './App.css'
import Footer from './components/Foooter'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import CreateNew from './pages/CreateNewPage'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateNew />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
