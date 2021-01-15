import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Profile from "./components/Content/Profile/Profile.jsx";
import Footer from "./components/Footer/Footer.jsx";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";
import Users from './components/Content/Dialogs/Users/Users';

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="main">
        <div className="content">
          <Route
            path="/profile"
            render={() => <Profile />}
          />
          <Route
            path="/messages"
            render={() => <DialogsContainer />}
          />
          <Route path="/users"
            render={() => <UsersContainer />} />
          <Route path="/news" />
          <Route path="/music" />
          <Route path="/settings" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;

// messages={props.state.dialogPages.messages} />} />
