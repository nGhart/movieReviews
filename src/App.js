import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieReviewClass from './Components/MovieReviewClass';
import icon from './images/movie-theater-clipart.png'
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar fixed="top" className='headerContainer'>
        <div className='header' >
          <img src={icon} alt='icon' width={50} />
          <span>MOVIE REVIEWS</span>
        </div>
      </Navbar>
    <button>
        <a href="https://wa.link/y3jczy">whatsapp</a>
      </button>
      <div className='notHeader'><MovieReviewClass /></div>
    </div>
  );
}

export default App;
