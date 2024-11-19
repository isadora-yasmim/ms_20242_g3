import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import SimilarFilmsPage from './components/similarFilmspage';
import FilterfilmPage from './components/Filterpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/filmes-similares" element={<SimilarFilmsPage />} />
        <Route path="/filmes-filtros" element={<FilterfilmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;