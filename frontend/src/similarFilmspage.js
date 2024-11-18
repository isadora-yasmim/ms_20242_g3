import './similarFilmspage.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Maincontent from './components/maincontentSimilarFilms/maincontent';


function SimilarFilmsPage() {
  return (
    <div className="SimilarFilmsPage">
     <Header />
     <Maincontent/>
     <Footer />
    </div>
  );
}

export default SimilarFilmsPage;
