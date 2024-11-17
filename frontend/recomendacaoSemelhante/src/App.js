import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Maincontent from './components/maincontent/maincontent';


function App() {
  return (
    <div className="App">
     <Header />
     <Maincontent/>
     <Footer />
    </div>
  );
}

export default App;
