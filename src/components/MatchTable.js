import React, { Component } from 'react';

class MatchTable extends Component {
    render() {

        const { game } = this.props;

        return (
            <tr>
                <td>{game.home_team_country}</td>
                <td>
                    {`${game.home_team.goals} : 
                    ${game.away_team.goals}`}
                </td>
                <td>{game.away_team_country}</td>
                <td>{game.venue}</td>
            </tr>
        );
    }
}

export default MatchTable;