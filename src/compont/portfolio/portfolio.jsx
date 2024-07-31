
import x from"./portfolio.module.css"
import img1 from"./../../assets/poert1.png"
import img2 from"./../../assets/port2.png"
import img3 from"./../../assets/port3.png"
function Porfolio() {
    return (
        <div className={x.Porfolio}>
        <div className={x.back}>
        <div className=" d-flex flex-column align-items-center justify-content-center ">
            <h2 className=" fs-1 text-uppercase p-4">
            portfolio component
            </h2>
            <div>
            <span className={x.w_t}></span>
            <i className="fa-solid fa-star  me-3 ms-3"></i>
            <span className={x.w_t}></span>
            </div>
            <div className="container mt-3" >
            <div className="row">
                <div className="col-md-4  overflow-hidden position-relative">
                <div className="iteam-hover" onClick={()=>myFunction()}>
                <img src={img1} alt="poret1" className="img-fluid mt-3 rounded-2"/>
                    <div className="hover w-100 h-100">
                    </div>
               </div>
                  <div className="item justify-content-center align-items-center d-none  position-fixed top-0 start-0 end-0 bottom-0">
                  <img src={img1} alt="poret1" className=" w-25 mt-3 rounded-2"/>
                  <span className=" position-relative" onClick={()=>
                    clos()
                   } ><i className="fa-solid fa-x text-white"></i></span>
                  </div>
                </div>
                <div className="col-md-4  overflow-hidden position-relative">
                <div className="iteam-hover" onClick={()=>myFunction1()}>
                <img src={img2} alt="poret1" className="img-fluid mt-3 rounded-2"/>
                    <div className="hover w-100 h-100">
                    </div>
               </div>
                  <div className="item1 justify-content-center align-items-center d-none  position-fixed top-0 start-0 end-0 bottom-0">
                  <img src={img2} alt="poret1" className=" w-25 mt-3 rounded-2"/>
                  <span className=" position-relative" onClick={()=>
                    clos()
                   } ><i className="fa-solid fa-x text-white"></i></span>
                  </div>
                </div>
                <div className="col-md-4  overflow-hidden position-relative">
                <div className="iteam-hover" onClick={()=>myFunction2()}>
                <img src={img3} alt="poret1" className="img-fluid mt-3 rounded-2"/>
                    <div className="hover w-100 h-100">
                    </div>
               </div>
                  <div className="item2 justify-content-center align-items-center d-none  position-fixed top-0 start-0 end-0 bottom-0">
                  <img src={img3} alt="poret1" className=" w-25 mt-3 rounded-2"/>
                  <span className=" position-relative" onClick={()=>
                    clos()
                   } ><i className="fa-solid fa-x text-white"></i></span>
                  </div>
                </div>
                <div className="col-md-4  overflow-hidden position-relative">
                <div className="iteam-hover" onClick={()=>myFunction3()}>
                <img src={img1} alt="poret1" className="img-fluid mt-3 rounded-2"/>
                    <div className="hover w-100 h-100">
                    </div>
               </div>
                  <div className="item3 justify-content-center align-items-center d-none  position-fixed top-0 start-0 end-0 bottom-0">
                  <img src={img1} alt="poret1" className=" w-25 mt-3 rounded-2"/>
                  <span className=" position-relative" onClick={()=>
                    clos()
                   } ><i className="fa-solid fa-x text-white"></i></span>
                  </div>
                </div>
                <div className="col-md-4  overflow-hidden position-relative">
                <div className="iteam-hover" onClick={()=>myFunction4()}>
                <img src={img2} alt="poret1" className="img-fluid mt-3 rounded-2"/>
                    <div className="hover w-100 h-100">
                    </div>
               </div>
                  <div className="item4 justify-content-center align-items-center d-none  position-fixed top-0 start-0 end-0 bottom-0">
                  <img src={img2} alt="poret1" className=" w-25 mt-3 rounded-2"/>
                  <span className=" position-relative" onClick={()=>
                    clos()
                   } ><i className="fa-solid fa-x text-white"></i></span>
                  </div>
                </div>
                <div className="col-md-4  overflow-hidden position-relative">
                <div className="iteam-hover" onClick={()=>myFunction5()}>
                <img src={img3} alt="poret1" className="img-fluid mt-3 rounded-2"/>
                    <div className="hover w-100 h-100">
                    </div>
               </div>
                  <div className="item5 justify-content-center align-items-center d-none  position-fixed top-0 start-0 end-0 bottom-0">
                  <img src={img3} alt="poret1" className=" w-25 mt-3 rounded-2"/>
                  <span className=" position-relative" onClick={()=>
                    clos()
                   } ><i className="fa-solid fa-x text-white"></i></span>
                  </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        
    );
    
}

export default Porfolio;



function myFunction() {
    document.querySelector(".item").classList.replace("d-none","d-flex")
}
  function clos() {
   document.querySelector(".item").classList.replace("d-flex","d-none")
   document.querySelector(".item1").classList.replace("d-flex","d-none")
   document.querySelector(".item2").classList.replace("d-flex","d-none")
   document.querySelector(".item3").classList.replace("d-flex","d-none")
   document.querySelector(".item4").classList.replace("d-flex","d-none")
   document.querySelector(".item5").classList.replace("d-flex","d-none")

}

function myFunction1() {
    document.querySelector(".item1").classList.replace("d-none","d-flex")
}
function myFunction2() {
    document.querySelector(".item2").classList.replace("d-none","d-flex")
}
function myFunction3() {
    document.querySelector(".item3").classList.replace("d-none","d-flex")
}
function myFunction4() {
    document.querySelector(".item4").classList.replace("d-none","d-flex")
}
function myFunction5() {
    document.querySelector(".item5").classList.replace("d-none","d-flex")
}




