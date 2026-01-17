import Navbar from "./Components/Navbar"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UniAdmission from "./Components/UniAdmission/UniAdmission";
import Hsc from "./Components/Hsc/Hsc";
import ImageScroller from "./Components/ImageScroller";
import TeachersPanel from "./Components/Teachers/TeachersPanel"
import SessionTabs from "./Components/Sessions/SessionTabs";
import Yr2425 from './Components/achievements/yr2425';
import Yr2526 from './Components/achievements/yr2526';
import TeachersCategory from "./Components/Teachers/TeachersCategory";
import LearningPlaylists from "./Components/LearningPlaylists";
import FreeExamInfo from "./Components/FreeExamInfo";
import Footer from "./Components/Footer";
import Liveclass from "./Components/Liveclass";
import Joinus from "./Components/Joinus";





 const router = createBrowserRouter([

  {
    path: "/",
    element: 
    <div>
      <Navbar></Navbar>
      <ImageScroller></ImageScroller>
      <TeachersPanel></TeachersPanel>
      <Liveclass></Liveclass>
      <SessionTabs></SessionTabs>
      <TeachersCategory></TeachersCategory>
      <Joinus></Joinus>
      <LearningPlaylists></LearningPlaylists>
      <FreeExamInfo></FreeExamInfo>
      <Footer></Footer>
    </div>,
    
  },

   {
    path: "/uniadmission",
    element: 
    <div>
      <Navbar></Navbar>
      <UniAdmission></UniAdmission>
      <Footer></Footer>
    </div>,
    
  },

  {
    path: "/hsc",
    element: 
    <div>
      <Navbar></Navbar>
      <Hsc></Hsc>
      <Footer></Footer>
    </div>,
    
  },

  {
    path: "/teachers",
    element: 
    <div>
      <Navbar></Navbar>
      
      <TeachersPanel></TeachersPanel>
      <TeachersCategory></TeachersCategory>
      <Footer></Footer>
      
    </div>,
    
  },

  {
    path: "/yr2425",
    element: 
    <div>
      <Navbar></Navbar>
      <Yr2425></Yr2425>
      <Footer></Footer>
      
    </div>,
    
  },

  {
    path: "/yr2526",
    element: 
    <div>
      <Navbar></Navbar>
      <Yr2526></Yr2526>
      <Footer></Footer>
      
    </div>,
    
  },

 ])

function App() {
  return (
   <div>
       <RouterProvider router={router} />
   </div>
  )
}

export default App
