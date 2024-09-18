import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Discover from './pages/Discover';
import MyFeed from './pages/MyFeed';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/myfeed' element={<MyFeed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
