import Maincontent from '../elements/maincontentSimilarFilms/maincontent';
import Header from '../elements/header/header';
import Footer from '../elements/footer/footer';
import './similarFilmspage.css';

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