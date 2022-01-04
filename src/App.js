import './App.css';
import AboutMe from './aboutMe/aboutMe';
import Project from './Projects/skillsProjects';
import NavBar from './navBar/navBar';

import LandingPage from './landingPage/landingPage';

import ContactMe from './ContactMe/ContactMe.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <LandingPage/> 
        <Project/>
        <AboutMe />
       
        <ContactMe/>
        <NavBar/>
      
      </header>
    </div>
  );
}

export default App;
