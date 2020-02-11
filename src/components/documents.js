import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from '../components/main';
class Documents extends Component{
    render(){
        return(
            <div className="demo-big-content">
            <Layout>
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
                        <Link to="/dasboard">DashBoard</Link>
                        <Link to="/documents">Documents</Link>
                        <Link to="/calender">Calender</Link>
                        <Link to="#">Sign out</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
        )
    }

}

export default Documents;