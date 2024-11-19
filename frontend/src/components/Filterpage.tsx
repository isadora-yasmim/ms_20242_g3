import './filterpage.css';
import Header from '../elements/header/header';
import Footer from '../elements/footer/footer';
import MaincontentFilter from '../elements/maincontentfilter/maincontentFilter';


function FilterfilmPage() {
  return (
    <div className="FilterfilmPage">
     <Header />
     <MaincontentFilter/>
     <Footer />
    </div>
  );
}

export default FilterfilmPage;