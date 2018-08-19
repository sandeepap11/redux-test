import React from 'react';
import { connect } from 'react-redux';
import { getGames } from '../redux/actions';
import MatchesComponent from '../components/Matches';

const mapDispatchToProps = {
     getGames: getGames
};

const mapStateToProps = ({games}) => {

    console.log("games from container", games);
    

    return {
        games: games ? games : []
    };
};

export const Matches = connect(mapStateToProps,mapDispatchToProps)(MatchesComponent);