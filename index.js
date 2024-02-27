
import ReactDOM from 'react-dom/client';
import "./index.css";
import Navbar from './navbar';
import Header from './header';
import Projsection from './projsection';
import About from './about';
import Contact from './contact';
import Footer from './footer';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 <Navbar/>
 <Header/>
 <Projsection/>
 <About/>
 <Contact/>
 <Footer/>

  </>
 
);

