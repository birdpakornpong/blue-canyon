import logo from './logo.svg';
import './App.css';
import NavComponent from './components/NavBarComponent'
import ContentComponent from './components/ContentComponent';
import CarouselComponent from './components/CarouselComponent'
import ContentImgComponent from './components/ContentImgComponent'
import FooterComponent from './components/FooterComponent'
import ImgComponent from './components/ImgComponent';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <ImgComponent />
      <ContentImgComponent />
      <CarouselComponent />
      <ContentComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
