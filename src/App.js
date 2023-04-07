import './App.css';
import Sidebar from "./components/Sidebar";
import AxiosCallComponent from './components/Openaicall';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";



function App() {
  return (
  
    <div className="App">
       <Router>
        <Sidebar />
         <Routes>
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/about-us/aim' element={<OurAim/>} />
          <Route path='/about-us/vision' element={<OurVision/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/services/services1' element={<ServicesOne/>} />
          <Route path='/services/services2' element={<ServicesTwo/>} />
          <Route path='/services/services3' element={<ServicesThree/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/events/events1' element={<EventsOne/>} />
          <Route path='/events/events2' element={<EventsTwo/>} />
          <Route path='/support' element={<Support/>} />
        </Routes>
        </Router>
      <header className="App-header">
       <AxiosCallComponent />
        <p
          style={{
            color:'black',
          }}>
          
        </p>
        <p className="small">
        </p>
        <p>
          <a
            className="App-link"
            href="https://eth-brownie.readthedocs.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '14px',
            }
              
            }
          >
            Learn Brownie
          </a>     
        </p>
        <div>
        <p1 className="askBtn"> 
        </p1>
        </div>
      </header>
    </div>
  );
}


export default App;
