
import x from"./Contact.module.css"


function Contact() {
    return (
        <div className=" vh-100  d-flex flex-column align-items-center justify-content-center ">
            <h2 className=" fs-1 text-uppercase p-4">
            CONATCT SECTION
            </h2>
            <div>
            <span className={x.w_t}></span>
            <i className="fa-solid fa-star  me-3 ms-3"></i>
            <span className={x.w_t}></span>
            </div>
             <div className="container-fluid ">
                <form  className="w-50 p-3 mx-auto mt-5">
                      <div>
                        <label htmlFor="userName" className="userName">userName</label>
                        <input type="text"  id="userName"  placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 shadow-none" onInput={()=>{
                          myFunction()
                        }}/>
                      </div>
                      <div>
                        <label htmlFor="userAge" className="userAge">userAge</label>
                        <input type="text"  id="userAge"  placeholder="userAge" name="userAge" className="form-control border-0 border-bottom py-3 shadow-none" onInput={()=>{
                          myFunction1()
                        }}/>
                      </div>
                      <div>
                        <label htmlFor="userEmail" className="userEmail">userEmail</label>
                        <input type="email"  id="userEmail"  placeholder="userEmail" name="userEmail" className="form-control border-0 border-bottom py-3 shadow-none" onInput={()=>{
                          myFunction2()
                        }}/>
                      </div>
                      <div>
                        <label htmlFor="userPassword" className="userPassword">userPassword</label>
                        <input type="password"  id="userPassword"  placeholder="userPassword" name="userPassword" className="form-control border-0 border-bottom py-3 shadow-none" onInput={()=>{
                          myFunction3()
                        }}/>
                      </div>
                      <button className={x.btn}> send Message </button>
                </form>
            </div>
        </div> 
    );
}

export default Contact;

function myFunction() {
  document.querySelector(".userName").style.cssText="color: #1abc9c;  opacity: 1; top:10px"
}
function myFunction1() {
  document.querySelector(".userAge").style.cssText="color: #1abc9c;  opacity: 1; top:10px "
 
}
function myFunction2() {
  document.querySelector(".userEmail").style.cssText="color: #1abc9c;  opacity: 1; top:10px "
 
}
function myFunction3() {
  document.querySelector(".userPassword").style.cssText="color: #1abc9c;  opacity: 1; top:10px "
}