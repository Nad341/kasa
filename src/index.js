import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style.css';
import reportWebVitals from './reportWebVitals';

// Import des pages
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Details from './pages/Details';
import Test from './pages/Test';

// Import des éléments de navigation
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <React.StrictMode>
  <Router>
<Header />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path='/test' element={<Test  texte='lmdsjflkdsjlkfs'/>} />
            <Route path="*" element={<Error />} />

            </Routes>
        <Footer />
        </Router>

  </React.StrictMode>
        
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
