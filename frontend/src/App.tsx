import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import SimilarFilmsPage from './components/similarFilmspage';
import FilterfilmPage from './components/Filterpage';
import SimilarLoadingPage from "./components/similarLoadingpage";
import SimilarSearchingPage from './components/similarSearchingpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/filmes-similares" element={<SimilarFilmsPage />} />
        <Route path="/filmes-filtros" element={<FilterfilmPage />} />
        <Route path="/procurando-similares" element={<SimilarSearchingPage />} />
        <Route path="/carregandoSimilarfilm" element={<SimilarLoadingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;