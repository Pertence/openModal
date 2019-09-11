import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Modal from '../views/Modal';
//import GeoData from '../views/GeoData';
//import Project from '../views/Project';
import Docs from '../views/Docs';
import Contribute from '../views/Contribute';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Route exact path='/' render={() => (
                    <Modal />
                )} />

                {/* <Route exact path='/geodata' render={() => (
                    <GeoData />
                )} /> */}

                {/* <Route exact path='/project' render={() => (
                    <Project />
                )} />
 */}
                <Route exact path='/docs' render={() => (
                    <Docs />
                )} />

                <Route exact path='/contribute' render={() => (
                    <Contribute />
                )} />
            </div>
        )
    }
}

export default App;