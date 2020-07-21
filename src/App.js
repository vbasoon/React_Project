import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Content from './components/Content/Profile/Profile.jsx'
import Footer from './components/Footer/Footer.jsx';



const App = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    </div >
  );
}

export default App;
