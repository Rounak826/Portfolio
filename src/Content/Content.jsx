import './content.css'
import '../Title/Title'
import Title from '../Title/Title';
const title_list = ['React Developer', 'Web  Developer', 'Web Designer', 'Coding Teacher','Freelancer'];
const Content = (props)=>{
    
    return(

        <div className="content">
          <div className="info">
            <div className="intro">
                <h2>Rounak Bisen</h2>
            </div>
            <Title list={title_list} />
            <div className="desc">
                <p>A React web devloper and Web designer, who loves fresh ideas, ambitious challenges, fast-paced startups and energizing conversations.</p>
            </div>
            <div className="button">
                <button className="btn btn-primary button">Hire me!</button>
            </div>
          </div>

          <div className="media" >
              <img src={props.assets.profile} alt="" />
          </div>
          <div className="social">
            <a href='mailto:r26bisen@gmail.com'><img src={props.assets.mail} alt="" className="soc mail my-2" /></a>
            <a href='https://github.com/Rounak826'><img src={props.assets.github} alt="" className="soc github my-2" /></a>
            <a href='https://instagram.com/rounakrajput26?utm_medium=copy_link'><img src={props.assets.insta} alt="" className="soc insta my-2" /></a>
            <a href='https://facebook.com'><img src={props.assets.fb} alt="" className="soc meta my-2" /></a>
            <a href='https://twitter.com'><img src={props.assets.twitter} alt="" className="soc twitter my-2" /></a>
            
            
          </div>

        

      </div>
    )
}

export default Content;