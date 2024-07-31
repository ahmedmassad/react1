


import x from"./About.module.css"

function About() {
    return (
        <div className={x.About}>
        <div className={x.back}>
        <div className="d-flex flex-column align-items-center justify-content-center text-white">
            <h2 className=" fs-1 text-uppercase">
            about component
            </h2>
            <div>
            <span className={x.w_t}></span>
            <i className="fa-solid fa-star  me-3 ms-3"></i>
            <span className={x.w_t}></span>
            </div>
            <div className="container mt-3">
            <div className="row">
                <div className=" col-md-6">
                    Freelancer is a free bootstrap theme created by Route.
                    The download includes the complete source files including HTML, CSS, and 
                    JavaScript as well as optional SASS stylesheets for easy customization.
                </div>
                <div className=" col-md-6">
                    Freelancer is a free bootstrap theme created by Route.
                    The download includes the complete source files including HTML, CSS, and 
                    JavaScript as well as optional SASS stylesheets for easy customization.
                </div>

            </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default About;