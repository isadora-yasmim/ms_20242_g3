import './similarFilmspage.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Maincontent from './components/maincontentSimilarFilms/maincontent';


function App() {
  return (
    <div className="App">
     <Header />
     <Maincontent/>
     <Footer />
    </div>
  );
}

export default SimilarFilmsPage;
