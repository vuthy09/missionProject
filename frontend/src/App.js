import React from 'react';
import "./styles.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgressTracker from "./pages/ProgressTracker";
import StudentProfile from "./pages/StudentProfile";
import HelpRequest from "./pages/HelpRequest";
import ProjectSubmission from "./pages/ProjectSubmission";
import ProjectLibrary from "./pages/ProjectLibrary";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="body-container">
        <Sidebar />
        <MainContent/>
        </div>
        <Switch>
          <Route path="/progresstracker" component={ProgressTracker} />
          <Route path="/studentprofile" component={StudentProfile} />
          <Route path="/helprequest" component={HelpRequest} />
          <Route path="/projectsubmission" component={ProjectSubmission} />
          <Route path="/projectlibrary" component={ProjectLibrary} />
        </Switch>
      </Router>
    </div>
  );
}
