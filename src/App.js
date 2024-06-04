import './App.css';
import Experience from "./pages/Experience"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Router>
        <Navbar/>
        <Routes>
          <Route path ="/" element={<Home />}/>
          <Route path ="/experience" element={<Experience />}/>
          <Route path ="/projects" element={<Projects />}/>
          <Route path ="/project/:id" element={<ProjectDisplay />}/>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
