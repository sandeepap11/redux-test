import React from 'react';
import { connect } from 'react-redux';
import { getGames, getSorted } from '../redux/actions';
import SortableComponent from '../components/SortableComponent';
import MatchTable from '../components/MatchTable';

const mapDispatchToProps = {
     getGames: getGames,
     sortThem: getSorted
};

const mapStateToProps = ({games}) => {

    console.log("games from container", games ? games : []);
    

    return {
        games: games ? games : [],
        gameComponents: games ? games.map((value, index) => (<MatchTable game={value} />)) : []
    };
};

export const Sortable = connect(mapStateToProps,mapDispatchToProps)(SortableComponent);