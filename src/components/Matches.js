import React, { Component } from 'react';
import Game from './Game';

class England extends Component {

    state = {
        results: []
    };

    componentDidMount() {
        
        this.props.getGames(this.props.row.country);

    }

    

    render() {

        const { games, row } = this.props;


        return (
            <div>
                <h1>{row.country}</h1>
                {
                    games.map(
                        (result, index) => <Game key={index} game={result} />
                    )

                }

                

            </div>
        );
    }
}

export default England;