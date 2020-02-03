import React from 'react';
import './App.css';
import HeaderBar from './Components/HeaderBar';
import SideBar from './Components/SideBar';
import Content from './Components/Content';
import FooterBar from './Components/FooterBar';

function App() {
  return (
    <div>
      <HeaderBar/>
      <div style = {{display:'flex'}}>
        <SideBar/>
        <Content/>
      </div>
      <FooterBar/>
    </div>
  );
}

export default App;
