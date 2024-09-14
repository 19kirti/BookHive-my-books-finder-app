import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BookItem from './components/BookItem';
import BooksInfo from './components/BooksInfo';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [progress, setProgress] = useState(0);

  const showProgress = (progress) => {
    setProgress(progress);
  }

  return (

    <Router>

    <div className="App">

    <Navbar/>

    <LoadingBar 
    height={4}
    color='#f11946'
    progress={progress}
    />
    
    <Routes>
    
    <Route exact path = "/society" element={<BooksInfo showProgress={showProgress} category="society" />} />
    <Route exact path = "/development" element={<BooksInfo showProgress={showProgress} category="development" />} /> 
    <Route exact path = "/economics" element={<BooksInfo showProgress={showProgress} category="economics" />} />
    <Route exact path = "/technology" element={<BooksInfo showProgress={showProgress} category="technology" />} />

    </Routes>
    
    </div>

    </Router>
  );
}

export default App;
