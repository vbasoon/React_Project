import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Profile from './components/Content/Profile/Profile.jsx'
import Footer from './components/Footer/Footer.jsx';
import Dialogs from './components/Content/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="main">
          <div className="content">
            <Route path="/profile" render={() => <Profile posts={props.posts} />} />
            <Route path="/messages" render={() => <Dialogs dialogs={props.users} messages={props.messages} />} />
            <Route path="/news" render={() => <Profile />} />
            <Route path="/music" render={() => <Profile />} />
            <Route path="/settings" render={() => <Profile />} />
          </div>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
