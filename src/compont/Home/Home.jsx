
import H from "./Home.module.css"
import img1 from'./../../assets/avataaars.svg'
function Home() {
    return (
        <div className={H.back}>
           <div className=" d-flex flex-column align-items-center justify-content-center text-white ">
            <img src={img1} alt="" width='250px'/>
            <h1 className=" fs-1">
            start Framework
            </h1>
            <div>
            <span className={H.w_t}></span>
            <i className="fa-solid fa-star  me-3 ms-3"></i>
            <span className={H.w_t}></span>
            </div>
            <h5>Graphic Artist - Web Designer - Illustrator</h5>
           </div>
        </div>
    );
}

export default Home;