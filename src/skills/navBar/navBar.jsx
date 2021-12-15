import './navBar.css';

import ProjectLinks from "./projectsLinks/projectsLinks";
import HomeLink from "./homeLink/homeLink";
import AboutLink from './aboutLink/aboutLink';
import ContactMeLink from './contactMeLink/contactMeLink';

export default function NavBar(){
   return(
      <>
    <div className="nav-bar">
    <HomeLink className="first-link" />
    <ProjectLinks />
    <AboutLink />
    <ContactMeLink className="lastLink"/>
    </div>
   </>   
   )
}
