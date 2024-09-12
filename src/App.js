import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BookItem from './components/BookItem';
import BooksInfo from './components/BooksInfo';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

function App() {

  const [progress, setProgress] = useState(0);

  const showProgress = (progress) => {
    setProgress(progress);
  }

  return (
    <div className="App">

    <Navbar/>

    <LoadingBar 
    height={4}
    color='#f11946'
    progress={progress}
    />

    <BooksInfo showProgress={showProgress} />
    
    </div>
  );
}

export default App;
