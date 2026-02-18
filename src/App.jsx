import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './home'
import Page from './assets/page'
import Contact from './assets/contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page" element={<Page />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App
