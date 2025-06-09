import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Break from './assets/page/Break.jsx';
import Head from './components/Home/Head.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './assets/page/Homepage.jsx';
import Footermenu from './components/Home/Footermenu.jsx';
import Buttom from './components/Home/Buttom.jsx';
import Notfound from './assets/page/Notfound.jsx';
import Cake from './assets/page/Cake.jsx';
import Cakedisplay from './assets/page/Cakedisplay.jsx';
import Breakdisplay from './assets/page/Breakdisplay.jsx';
import Headcake from './assets/page/Headcake.jsx';
import CakeTabs from './components/Home/CakeTabs.jsx';
import Testprops from './components/Home/Testprops.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Break" element={<Break />} />
        <Route path="/Break/:id" element={<Breakdisplay />} />
        <Route path="/Footermenu" element={<Footermenu />} />
        <Route path="/Buttom" element={<Buttom />} />
        <Route path="/Cake" element={<Cake />} />
        <Route path="/Cake/:id" element={<Cakedisplay />} />
        <Route path='/Caketabs' element={<CakeTabs/>}/>
        <Route path='/Testprops' element={<Testprops name="chan tha"  age={20} student={true}/>}/>
        
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Buttom />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
