import './App.css';
import Navbar from './components/Navbar';
import BooksInfo from './components/BooksInfo';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

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
    
    <Route exact path = "/home" element={<Home showProgress={showProgress} /> } />
    <Route exact path = "/about" element={<About showProgress={showProgress} />} />
    <Route exact path = "/" element={<Home showProgress={showProgress} /> } />
    
    <Route exact path = "/history" element={<BooksInfo showProgress={showProgress} category="history" maxResults={6}/>} />
    <Route exact path = "/society" element={<BooksInfo showProgress={showProgress} category="society" maxResults={6}/>} />
    <Route exact path = "/economics" element={<BooksInfo showProgress={showProgress} category="economics" maxResults={6} />} />
    <Route exact path = "/business" element={<BooksInfo showProgress={showProgress} category="business" maxResults={6} />} />
    <Route exact path = "/technology" element={<BooksInfo showProgress={showProgress} category="technology" maxResults={6} />} />
    <Route exact path = "/fantasy" element={<BooksInfo showProgress={showProgress} category="fantasy" maxResults={6} />} /> 
    <Route exact path = "/fiction" element={<BooksInfo showProgress={showProgress} category="fiction" maxResults={6}/>} />
    <Route exact path = "/horror" element={<BooksInfo showProgress={showProgress} category="horror" maxResults={6}/>} />
    <Route exact path = "/poetry" element={<BooksInfo showProgress={showProgress} category="poetry" maxResults={6}/>} />
    <Route exact path = "/literature" element={<BooksInfo showProgress={showProgress} category="literature" maxResults={6}/>} />
    <Route exact path = "/philosophy" element={<BooksInfo showProgress={showProgress} category="philosophy" maxResults={6}/>} />
    <Route exact path = "/travel" element={<BooksInfo showProgress={showProgress} category="travel" maxResults={6}/>} />

    </Routes>
    
    </div>

    </Router>
  );
}

export default App;
