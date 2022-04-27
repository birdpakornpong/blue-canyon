import logo from './logo.svg';
import './App.css';
import NavComponent from './components/NavComponent'
import ContentComponent from './components/ContentComponent';
import CarouselComponent from './components/CarouselComponent'
import ContentImgComponent from './components/ContentImgComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <div className="App">
      <NavComponent />
      <div className="first-block">
        First Block
      </div>
      <ContentImgComponent />
      <CarouselComponent />
      <ContentComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
