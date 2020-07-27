import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Profile from './components/Content/Profile/Profile.jsx'
import Footer from './components/Footer/Footer.jsx';
import Dialogs from './components/Content/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="main">
          <div className="content">
            <Route path="/profile" component={Profile} />
            <Route path="/messages" component={Dialogs} />
            <Route path="/news" component={Profile} />
            <Route path="/music" component={Profile} />
            <Route path="/settings" component={Profile} />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
