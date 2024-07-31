import { Outlet } from "react-router-dom";
import Navbar from "../Nav/Nav.jsx";
import style from"./style.module.css"

function Layout (){
    return (
        <>
         <Navbar />  
         <Outlet /> 
         <footer className=" text-center text-white">
            <div className={style.bc}> 
            <div className="container p-5">
                <div className="row flex-column">
                    <div className=" col-12">
                         <div className="row">
                            <div className=" col-md-4">
                           <div className="inner  mt-3">
                           <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                           </div>
                            </div>
                            <div className=" col-md-4">
                            <div className="inner  mt-3">
                            <h3>AROUND THE WEB</h3>
                              <div className=" d-flex justify-content-center align-items-center">
                              <span className={style.bac_grownd}> <i className="fa-brands fa-facebook"></i></span>
                              <span className={style.bac_grownd}> <i className="fa-brands fa-twitter"></i></span>
                              <span className={style.bac_grownd}>  <i className="fa-brands fa-linkedin-in"></i></span>
                              <span className={style.bac_grownd}>  <i className="fa-solid fa-globe"></i></span>
                              
                            </div>
                             
                              
                              </div>
                            </div>
                            <div className="col-md-4">
                               <div className="inner   mt-3">
                               <h3>ABOUT FREELANCER</h3>
                               <p>Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                               </div>
                            </div>
                         </div>
                    </div>
                </div>

            </div>
            </div>
            <div className={style.Copyright}>
            <h2 className=" fs-6 pt-3 pb-3">Copyright © Your Website 2021</h2>
            </div>
         </footer>
        </>
    );
}

export default Layout;