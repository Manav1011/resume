

function App() {
  return (    
      <div className="container App" style={{height:'100vh'}}>
      <div className="intro text-center">
      <span id="Name" style={{fontSize:'2rem', fontWeight:'100'}}> Manav Shah</span>
      <br />
      <span id="DOB" style={{fontSize:'0.8rem'}}>DOB:- 10-11-2001</span>
      <br />
      <span id="emailphone"  style={{fontSize:'0.8rem'}}><i class="bi bi-envelope"> manavshah1011.ms@gmail.com</i> | <i class="bi bi-telephone"> +91 9925717005 </i> <br /> <i class="bi bi-github"><span className="link"></span><a href="https://github.com/Manav1011" className="link-primary">Manav1011</a></i></span>
      </div>
      <hr />      
      <div className="row">
      <div className="col-6 border-end">
      <div className="education" style={{float:'left'}}>
      <span id="Name" style={{fontSize:'1.2rem'}} className="fw-light">Education</span>
      <div className="education-details mt-2 ms-2" style={{fontSize:'0.8rem'}}>
        <span id="diploma" className="text-capitalize text-left"><i className="bi bi-arrow-right"> diploma in computer engineering from LJ Polytechnic Ahmedabad 2019-2022</i></span>  <br />
        <span id="diploma" className="text-capitalize text-left"><i className="bi  bi-arrow-right"> Higher studies From ShardaMandir VinayMandir</i></span>  <br />        
        <span id="diploma" className="text-capitalize text-left"><i className="bi  bi-arrow-right"> Primary studies From diwan ballubhai | The H.B kapadiya</i></span>  <br />        
      </div>
      </div>
      <div className="skills mt-2" style={{float:'left'}}>
      <span id="Name" style={{fontSize:'1.2rem'}} className="fw-light">Skills</span>
      <br />
      <span id="Programming" className="ms-2 fw-bold">Language(s)</span>
      <div className="education-details ms-2" style={{fontSize:'0.8rem'}}>
        <span id="diploma" className="text-capitalize text-left"><i className="bi bi-arrow-right"> Beginner Level - C, C++</i></span>  <br />        
        <span id="diploma" className="text-capitalize text-left"><i className="bi bi-arrow-right"> Intermediate Level - Java, PHP</i></span>  <br />
        <span id="diploma" className="text-capitalize text-left"><i className="bi bi-arrow-right"> Area of Expertise - Python</i></span>  <br />
        <span id="diploma" className="text-capitalize text-left"><i className="bi bi-arrow-right"> WEB - HTML, CSS, JavaScript ES6</i></span>  <br />
        <span id="diploma" className="text-capitalize text-left"><i className="bi bi-arrow-right"> Familiar Databases - MySql, SQLite, PostgreSQL, </i></span>  <br />
        <span id="diploma" className="text-capitalize text-left"><i className="bi bi-arrow-right"> Little Experience in - Android  </i></span>  <br />
      </div>
      <span id="FrameWorks" className="ms-2 fw-bold">FrameWork(s)</span>
      <div className="education-details ms-2" style={{fontSize:'0.8rem'}}>
        <span id="diploma" className="text-capitalize text-left"><i className="bi bi-arrow-right"> BACKEND - <span className= "text-success">Django Web framework (Expertise)</span></i></span>  <br />        
        <span id="diploma" className="text-capitalize text-left"><i className="bi bi-arrow-right"> FRONTEND - <span className="text-primary">ReactJs (Beginner to intermediate)</span>  </i></span>  <br />
      </div>
      <span id="FrameWorks" className="ms-2 fw-bold">Other(s)</span>
      <div className="education-details ms-2" style={{fontSize:'0.8rem'}}>
      <span id="diploma" className="text-capitalize text-left"><i className="bi bi-arrow-right"> TailWind CSS</i></span>  <br />        
        <span id="diploma" className="text-capitalize text-left"><i className="bi bi-arrow-right"> Bootstrap</i></span>  <br />      
        <span id="diploma" className="text-capitalize text-left"><i className="bi bi-arrow-right"> Django REST framework, Celery, Django Channels</i></span>  <br />          
        <span id="diploma" className="text-capitalize text-left"><i className="bi bi-arrow-right">Data Structures and algorithms</i></span>  <br />  
      </div>
      </div>
      </div>
      <div className="col-6">
      <div className="education" style={{float:'left'}}>
      <span id="Name" style={{fontSize:'1.2rem'}} className="fw-light">Projects</span>
      <div className="education-details mt-2 ms-2" style={{fontSize:'0.8rem'}}>
        <div className="eCommerceDjango text-justify">
          <div className="title">
            <span style={{fontSize:'1rem'}}>eCommerce&nbsp;</span><span style={{fontSize:'0.7rem'}}>Python | Django</span>
            </div>
            <div className="content ms-2 text-capitalize">
            <span style={{fontSize:'0.6rem'}}>one of the project i built during the time i was learning django. contains almost all the basic functionlities of an eCommerce site</span>         <br />
            <span style={{fontSize:'0.6rem'}}>Sites is deployed here - <a href="https://manav-shah-django-ecommerce.herokuapp.com">Here</a> Learn More about the project here - <a href="https://github.com/Manav1011/ecommerce">Here</a></span>  <br />                      
            </div>
        </div>
        <div className="ChatDjano text-justify">
          <div className="title">
            <span style={{fontSize:'1rem'}}>Django  Chat Project&nbsp;</span><span style={{fontSize:'0.7rem'}}>Python | Django</span>
            </div>
            <div className="content ms-2 text-capitalize">
            <span style={{fontSize:'0.6rem'}}>Uses Django channels for Websockets to implement realtime chat compatibility</span>         <br />
            <span style={{fontSize:'0.6rem'}}>Includes features like: Personal chat, group chat, user authentication, real time notifications Learn More about the project here - <a href="https://github.com/Manav1011/django-chat-project">Here</a> </span>  <br />            
            </div>
        </div>
        <div className="notes text-justify">
          <div className="title">
            <span style={{fontSize:'1rem'}}>Notes App&nbsp;</span><span style={{fontSize:'0.7rem'}}>Python | Django  JavaScript | ReactJS</span>
            </div>
            <div className="content ms-2 text-capitalize">
            <span style={{fontSize:'0.6rem'}}>django with react frontend using REST framework</span>         <br />
            <span style={{fontSize:'0.6rem'}}>Includes features like: Synchronized notes on all devices, user authentication. Learn More about the project here - <a href="https://github.com/Manav1011/notes-frontend">Here</a></span>  <br />                      
            </div>
        </div>
        <div className="typing text-justify">
          <div className="title">
            <span style={{fontSize:'1rem'}}>Typing Practice App&nbsp;</span><span style={{fontSize:'0.7rem'}}>Python | Django  JavaScript | ReactJS</span>
            </div>
            <div className="content ms-2 text-capitalize">
            <span style={{fontSize:'0.6rem'}}>A simple fun app to improve your typing speed</span>         <br />
            <span style={{fontSize:'0.6rem'}}>Includes features like: levels, Themes, Cool Sonds on KeyPress</span><br />
            <span style={{fontSize:'0.6rem'}}>Learn More about the project here - <a href="https://github.com/Manav1011/typing-practice-frontend">Here</a></span>  

            </div>
        </div>
        <br />
        <div className="ending text-justify">
          <div className="content" style={{fontSize: '0.8rem'}}>
            <span>Above mentioned projects are those which i preffered more as per my learning experience. </span><br />
            <span>I have many more simple and projects on my GitHub.</span>
          </div>
        </div>
      </div>      
      </div>   
      </div>   
      </div>      
      </div>  
  );
}

export default App;
