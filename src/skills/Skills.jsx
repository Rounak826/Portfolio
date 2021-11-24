

import './skills.css'
const Skills =()=>{

    return(
        <div className="skills">
        <div className="icons">
          <span className="icon react"><i className="fab fa-react fa-9x"></i></span>
          <span className="icon html"><i className="fab fa-html5 fa-9x"></i></span>
          <span className="icon css"><i className="fab fa-css3-alt fa-9x"></i></span>
          <span className="icon js"><i className="fab fa-js-square fa-9x"></i></span>
         
        </div>
        <div className="exp">

          <div className="head">
            <div className="links">
              <div className="link expand">
                <h3>Skills</h3>
                <hr />
                <div className="skill">
                  <ul>
                    
                    <li>Html5</li>
                    <li>CSS3</li>
                    <li>bootstrap</li>
                    <li>Responsive</li>
                      
                  </ul>
                  <ul>
                    <li>React js</li>
                    <li>Javascript</li>
                    <li>ES6</li>
                    <li>Firebase</li>

                  </ul>
                </div>
                
              </div>
              <div className="link">
                  <h3>LinkBuddy</h3>
                  <hr />
                  <p>A responsive web-app to manage all your school/university meeting links, schedule your classes easily and edit them as per need.</p>
                  <a href="https://meetinglink-manager.web.app/login.html">discover more<span><i className="fas fa-arrow-right"></i></span></a>
              </div>
              <div className="link">
                  <h3>weatherToday</h3>
                  <hr />
                  <p>Get accurate current weather informatoion of your location with this web-app, optimised for all devices with clean and beautiful UI.</p>
                  <a href="https://rounak826.github.io/weatherToday/">discover more<span><i className="fas fa-arrow-right"></i></span></a>

              </div>
              <div className="link">
                  <h3>Ecommerce Site</h3>
                  <hr />
                  <p>A complete E-Commerce website frontend project with Clean , responsive and stunning UI/Ux With a blog page and feedback form for asking queries. </p>
                  <a href="https://rounak826.github.io/Ecommerce-site/">discover more<span><i className="fas fa-arrow-right"></i></span></a>
              </div>
            </div>
          </div>          
        </div>

        
      </div>
    )
}

export default Skills