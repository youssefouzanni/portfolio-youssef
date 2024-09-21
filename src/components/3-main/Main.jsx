import "./main.css";
import imgBootstrap from "./../../../public/assets/images/bootstrap.png"
import imgHtml from "./../../../public/assets/images/html5.png"
import imgCss from "./../../../public/assets/images/css.png"
import imgJs from "./../../../public/assets/images/js.png"
import imgNode from "./../../../public/assets/images/nodejs.png"
import imgEx from "./../../../public/assets/images/ex.png"
import imgPhp from "./../../../public/assets/images/php.png"
import imgLaravel from "./../../../public/assets/images/laravel.png"
import imgMysql from "./../../../public/assets/images/mysql.png"
import imgMongo from "./../../../public/assets/images/mongodb.png"
import imgReact from "./../../../public/assets/images/react.png"

function Main() {
  const images =[  {src :imgHtml , class:"html" } 
  ,{src :imgCss , class:"css"} , {src :imgJs , class:"javascript"}, {src :imgBootstrap , class:"bootstrap"} , {src :imgReact , class:"reactjs"},
   {src :imgNode , class:"nodejs"} ,{src :imgEx , class:"express"},{src :imgPhp, class:"php"} ,{src :imgLaravel , class:"laravel"},{src :imgMysql, class:"mysql"}
    ,{src :imgMongo , class:"mongodb"}]
  return (
    <main className="skills" id="skills">
      <h2>Skills</h2>

      
      <div className="flex skills-imges">
       
       {images.map((ele,i)=>{
            return  <div key={i} className="img">
              <img src={ele.src} className={ele.class} title={ele.class}/>
            </div>
       })}
       

      </div>
    </main>
  );
}

export default Main;
