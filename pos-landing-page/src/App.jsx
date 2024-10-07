import { Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


//import useAutoLogout from './hooks/useAutoLogout';


// Pages
import Home from './pages/Home';
import AboutPage from './pages/About';
import BlogPage from './pages/blog';
import ContactPage from './pages/contact';
import FaqPage from './pages/faq';


const App = () => {
 
  

  return (
    
     <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home/>} />
     
      <Route path="/about" element={<AboutPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
     </Routes>
    
  );
};

export default App;
