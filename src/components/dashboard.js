import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer, Content} from 'react-mdl';
import {Link, withRouter} from 'react-router-dom';
import '../App.css';
import Main from '../components/main';
class Dashboard extends Component{
    render(){
        console.log(this.props)
        return(
            <div className="demo-big-content">
            <Layout>
                {
                this.props.location.pathname != "/login" ?
                <React.Fragment>
                    <Header className= "header-color" title="PAS" scroll>
                        <Navigation>
                            <Link to="/dashboard">DashBoard</Link>
                            <Link to="/documents">Documents</Link>
                            <Link to="/calender">Calender</Link>
                            <Link to="#">Sign out</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="PAS">
                        <Navigation>
                            <Link to="/dashboard">DashBoard</Link>
                            <Link to="/documents">Documents</Link>
                            <Link to="/calender">Calender</Link>
                            <Link to="#">Sign out</Link>
                        </Navigation>
                    </Drawer>
                </React.Fragment> : ""
                }
                <Content>
                    <div className="page-content" />
                   <Main/>
                </Content>
            </Layout>
        </div>
        )
    }

}

export default withRouter(Dashboard);