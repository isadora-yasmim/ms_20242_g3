import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import SimilarFilmsPage from './components/similarFilmspage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/filmes-similares" element={<SimilarFilmsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;