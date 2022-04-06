import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { CSSStyle } from './global-style';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <CSSStyle />
  </Router>
);

export default App;
