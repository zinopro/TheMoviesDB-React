import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import PageNotFound from './pages/PageNotFound';
import { CSSStyle } from './global-style';


const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:movieId' element={<MovieDetail />} />
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
    <CSSStyle />
  </Router>
);

export default App;


