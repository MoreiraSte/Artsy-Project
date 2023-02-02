// import logo from './logo.svg';
// import './App.css';
import Home from './components/home'
import NavBar from './components/navBar';
import About from './components/about'
import AboutMe from './components/aboutMe';
import MyArts from './components/myArts';
import Sales from './components/sales';
import Contact from './components/contact';


function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <AboutMe/>
      <MyArts/>
      <Sales/>
      <Contact/>
    </>
  );
}

export default App;
