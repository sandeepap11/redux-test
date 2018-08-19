import React, { Component } from 'react';

class Game extends Component {
    render() {

        const {game} = this.props;

        return (
            <div>
                <h1>{`${game.home_team_country} ${game.home_team.goals} : 
                ${game.away_team.goals} ${game.away_team_country}`}</h1>
                <h3>{`Venue: ${game.venue}`}</h3>

                
            </div>
        );
    }
}

export default Game;