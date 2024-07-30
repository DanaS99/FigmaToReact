import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import FirstHeader from './components/FirstHeader/FirstHeader';
import Topics from './components/Topics/Topics';
import Posts from './components/Posts/Posts';
import Students from './components/Students/Students';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <FirstHeader />
      <Topics />
      <Info />
      <Posts />
      <Students />
      <Footer />
    </div>
  );
}

export default App;
