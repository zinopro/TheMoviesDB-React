import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import { CSSStyle } from './global-style';


const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:movieId' element={<MovieDetail />} />
    </Routes>
    <CSSStyle />
  </Router>
);

export default App;
