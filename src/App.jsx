import {  createHashRouter, RouterProvider } from "react-router-dom";


import About from "./compont/About/About.jsx";
import Porfolio from "./compont/portfolio/portfolio.jsx";
import Contact from "./compont/contact/Contact.jsx";
import Layout from "./compont/Lyout/Layout.jsx";
import Home from "./compont/Home/Home.jsx";

function App() {

const myDataWap = createHashRouter([
 { path:'/',element:<Layout /> , children:[
  {path:'/contact',element:<Contact />},
  {path:'/home',element:<Home />},
  { path:'/pro',element:<Porfolio />},
  { path:'/About',element:<About />},
 ] } 

])

  return (
    <>
      <RouterProvider router={myDataWap} />
    </>
  );
}

export default App;
