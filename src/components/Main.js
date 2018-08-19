import React, { Component } from 'react';
import {Matches} from '../containers/Matches';
import {Sortable} from '../containers/Sortable';

class Main extends Component {

    state = {
        country: "ENG"
    };

    submitCountry = (country) => this.setState({country});

    render() {

        return (
            <Sortable/>

        );
        
    }
}

export default Main;