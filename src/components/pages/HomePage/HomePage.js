import React, { Component } from 'react';
import TopMenu from '../../navbar/TopMenu'
import './HomePage.css'
import PageContent from '../../page_content/PageContent'

class HomePage extends Component{

    render(){
        return (
            <div>
                <TopMenu />
                <PageContent />
            </div>
        );
    }
}

export default HomePage;