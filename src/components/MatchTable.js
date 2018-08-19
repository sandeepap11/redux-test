import React, { Component } from 'react';
import '../styles/MatchTable.css';

class MatchTable extends Component {
    render() {

        const { game } = this.props;

        return (
            <tr className="row">
                <td className="column1">{game.home_team.country}</td>
                <td className="column2">
                    {`${game.home_team.goals} : 
                    ${game.away_team.goals}`}
                </td>
                <td className="column3">{game.away_team.country}</td>
                <td className="column4">{game.venue}</td>
            </tr>
        );
    }
}

export default MatchTable;