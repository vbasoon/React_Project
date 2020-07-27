import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Profile from './components/Content/Profile/Profile.jsx'
import Footer from './components/Footer/Footer.jsx';
import Dialogs from './components/Content/Dialogs/Dialogs';



const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="main">
        <div className="content">
          {/*<Profile /> */}
          <Dialogs />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
