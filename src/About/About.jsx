
import './about.css'
const About =(props)=>{
    return(
        
        <div className="about" >
            <div className="details">
                
                <div className="me">
                    <h2>About Me</h2>
                    <div className="info">
                        <h3>Who am I?</h3>
                        <p>I am a React web devloper and Web designer based in Chhattishgarh India, who loves fresh ideas, ambitious challenges, fast-paced startups and energizing conversations.</p>
                    </div>
                    <div className="info">
                        <h3>My Strenghts Finder</h3>
                        <p>Dedicated, go  getter, fast  learner, Competition, Achiever, team  player, problem solving </p>
                    </div>
                    <div className="info">
                        <h3>What I am currently?</h3>
                        <p>I am pursueing B.tech In Computer Science along with that I am a part time coding teacher. I am also looking for some project to work on.</p>
                    </div>
                    <div className="info">
                        <h3>Who are my goals?</h3>
                        <p>As for now I want to complete my studies and learn as much as possible about webdevlopment. After my graduation I want to work in a reputed firm to gaon industry experince and put my skills to some good use.  </p>
                    </div>
                </div>
                <div className="stats">
                    <h2>Skills and Expertises</h2>
                    <div className="stat">
                        <h3>React</h3>
                        <div className="progress">
                            <div className="progress-bar bgColor2" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="stat">
                        <h3>HTML5</h3>
                        <div className="progress">
                            <div className="progress-bar bgColor2" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="stat">
                        <h3>CSS3</h3>
                        <div className="progress">
                            <div className="progress-bar bgColor2" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="stat">
                        <h3>Javascript</h3>
                        <div className="progress">
                            <div className="progress-bar bgColor2" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="stat">
                        <h3>Firebase</h3>
                        <div className="progress">
                            <div className="progress-bar bgColor2" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="EdEx">
                <div className="education">
                    <h1>Education</h1>
                    <div className="my-1">
                        <h3>B.Tech in CSE</h3>
                        <p>at Kalinga University</p>
                    </div> 
                    <div className="my-1">
                        <h3>12th Grade</h3>
                        <p>at Gandhi Memorial Sr. sec School with 83%</p>
                    </div>
                    <div className="my-1">
                        <h3>10th Grade</h3>
                        <p>at Gandhi Memorial Sr. sec School with 10CGPA</p>
                    </div>
                </div>
                <div className="experience">
                <h1>Experience</h1>
                    <div className="my-1">
                        <h3>Coding teacher</h3>
                        <p>at Cuemath since April 2021</p>
                    </div> 
                    <div className="my-1">
                        <h3>Web Developer intern</h3>
                        <p>at Raise Digital from 5th Sep 2021 to 5th Nov 2021</p>
                    </div>
                    <div className="my-1">
                        <h3>Industrial Training in Web Devlopment</h3>
                        <p>by 1stop</p>
                    </div>

                </div>
            </div>
            <div className="hobby">
                <div className="text">
                    <h2>Outside of My Work life</h2>
                    <p>When I am not working, I love to do sketching , gardening, roller skating, listening to music and surfing internet. I really like to go to new places and meet new people.
                        Most Recently I went on trip to Shimla-Manali and I tool part in alot of adventures and activities like zip lining, go karting, river rafting and trekking.
                    </p>
                </div>
                <div className="image">
                    <img src={props.assets.sketch} alt="" />
                </div>
            </div>
            <div className="footer">
                
            </div>

        </div>
       
    
    )
}

export default About