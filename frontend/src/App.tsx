import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import SimilarFilmsPage from './components/similarFilmspage';
import SimilarLoadingPage from "./components/similarLoadingpage";
import SimilarSearchingPage from './components/similarSearchingpage';
import SimilarFinalRecomendation from "./components/similarfinalRecomendation";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/filmes-similares" element={<SimilarFilmsPage />} />
        <Route path="/procurando-similares" element={<SimilarSearchingPage />} />
        <Route path="/carregando-similares" element={<SimilarLoadingPage />} />
        <Route path="/recomendacao-similares" element={<SimilarFinalRecomendation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;