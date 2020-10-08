import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Profile from "./components/Content/Profile/Profile.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="main">
        <div className="content">
          <Route
            path="/profile"
            render={() => <Profile store={props.store} />}
          />
          <Route
            path="/messages"
            render={() => <Dialogs store={props.store} />}
          />
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
