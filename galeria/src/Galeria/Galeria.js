import React from "react";
import "./Galeria.css"; 



export default function Galeria(){

    return (<div>


      
      <header className="header">
     
       <nav>

            <ul className="menu">
                <li><a href="">Home</a></li>
                <li><a className="perfil" href="">Perfil</a></li>
            </ul>

        </nav>
          
      </header>


      <div className="titulo">

         <h1>Galeria de imagens </h1>
         <h3>Aqui você encontra as imagens mais diversas.</h3>

      </div>


      <section className="flex">
        <div>
         
          <img src="https://1.bp.blogspot.com/-viLzUGAq_lk/XdnMog083AI/AAAAAAAAf7Y/d4pIAnZFFn0a7VpdzdqLXYoEiQdK432yACLcBGAsYHQ/s2560/mountains-reflection-sunlight-a5-2560x1440.jpg"/>
         
          <div className="legenda">
          <p>Legenda...</p>
          <div className="link">
          <p><a className="ver" href="">VER</a></p>
          </div>
          </div>

        </div>


      <div>
          <img src="https://www.10wallpaper.com/wallpaper/1366x768/1311/river_lake_dawn_beautifully-Landscape_HD_Wallpaper_1366x768.jpg"/>
          <div className="legenda">
          <p>Legenda...</p>
          <div className="link">
          <p><a className="ver" href="">VER</a></p>
          </div>
          </div>
      </div>

       <div>
           <img src="https://www.10wallpaper.com/wallpaper/1366x768/1711/Morning_river_shore_flying_bird_Scenery_HD_Wallpaper_1366x768.jpg"/>
           <div className="legenda">
           <p>Legenda...</p>
           <div className="link">
          <p><a className="ver" href="">VER</a></p>
          </div>
           </div>
       </div>

      </section>



      <footer>

        <h2>Galeria</h2>
        <h3>As mais belas imagens </h3>
        <h3>  Copyright &copy; Bruno Amorim 2021</h3>

      </footer>













    </div>)
}
