

import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
//import components
import './App.css';
import Nav from './Navbar/Nav.jsx'
import Container from './container/Container';
import About from './About/About.jsx';
import Content from './Content/Content.jsx';
import Skills from './skills/Skills.jsx';
import Contact from './Contact/Contact.jsx';

//import assets
import blob from './assets/blob.svg'
import profile from './assets/profile-with-blob.svg'
import fb from './assets/facebook.svg'
import insta from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import github from './assets/github.svg'
import mail from './assets/mail.svg'
import sketch from './assets/collage.png'
import contact from './assets/contact.svg'





let assets = {blob:blob, profile:profile, fb:fb, insta:insta, twitter:twitter, github:github, sketch:sketch, mail:mail, contact:contact}
function App() {
  //right -12px top 40px

  //#7562E0 
 /* const[theme, setTheme] = useState({
    gridTemplateAreas:'". . nav nav nav ." ". . content content content ." ". . content content content ." ". .  skills skills skills ."'

  });

 const toggleTheme =(route)=>{
    switch (route) {
      case '/' : setTheme(
            {

              gridTemplateAreas:'". . nav nav nav ." ". . content content content ." ". . content content content ." ". .  skills skills skills ."'
            }
          )
          break;
      case 'about' : setTheme({

              gridTemplateAreas:'". . nav nav nav ." ". . about about about ." ". . about about about ." '
            }
          )
          break;
      case 'contact' : setTheme({

              gridTemplateAreas:'". . nav nav nav ." ". . content content content ." ". . content content content ." ". .  skills skills skills ."'
            }
          )
          break;
      case 'servicest' : setTheme({

            gridTemplateAreas:'". . nav nav nav ." ". . content content content ." ". . content content content ." ". .  skills skills skills ."'
          }
        )
        break;
      default: break;              
          
    }
 }*/
  return (
    <Router>
      <Container>

          <Nav class='nav-grid grid'></Nav>
          
          <Switch>
            <Route exact path="/">
              <Content assets ={assets} />
              <Skills />
            </Route>
            <Route exact path="/About">
              <About assets={assets} />

            </Route>
            <Route exact path="/Contact">
              <Contact assets={assets}/>
            </Route>
          </Switch>
      


      </Container>
    </Router>
  );
}

export default App;
