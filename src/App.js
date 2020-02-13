import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./assets/index.css";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import Login from "./components/Login";
import Documents from "./components/Documents";
import Calendar from "./components/Calendar";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={DashboardLayout(Dashboard)} />
      <Route path="/documents" component={DashboardLayout(Documents)} />
      <Route path="/calendar" component={DashboardLayout(Calendar)} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

const DashboardLayout = Main => props => (
  <div className="demo-big-content">
    <Layout>
      <Header className="header-color" title="PAS" scroll>
        <Navigation>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/documents">Documents</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="#">Sign out</Link>
        </Navigation>
      </Header>
      <Drawer title="PAS">
        <Navigation>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/documents">Documents</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="#">Sign out</Link>
        </Navigation>
      </Drawer>
    </Layout>
    <Content>
      <div className="page-content" />
      <Main {...props} />
    </Content>
  </div>
);

export default App;
