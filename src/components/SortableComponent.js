import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    SortableContainer,
    SortableElement,
    SortableHandle,
    arrayMove,
} from 'react-sortable-hoc';

import { getGames } from '../utils/Api';
import MatchTable from './MatchTable';


//const DragHandle = SortableHandle(() => <span>::</span>); // This can be any component you want

const SortableItem = SortableElement(({ value }) => {
    return (
        <tbody>
            {value}
        </tbody>
    );
});

const SortableList = SortableContainer(({ items }) => {

    console.log("Items", items);
    
    return (
        <table>
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
        </table>
    );
});

class SortableComponent extends Component {
    deleteRow = (rowId) => {
        console.log("Deleting", rowId);
        const newRow = this.state.itemValues.filter((value) => value.id !== rowId);
        this.setState({
            items: newRow.map((value, index) => (<MatchTable game={value} />)),
            itemValues: newRow
        });


    };

    componentDidMount() {

        this.props.getGames("BRA");

    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        

      /**  this.setState({
            items: arrayMove(items, oldIndex, newIndex),
            itemValues: arrayMove(itemValues, oldIndex, newIndex),
        });**/

        const newValues = arrayMove(this.props.games, oldIndex, newIndex);
        this.props.sortThem(newValues);
    };

    sorter = () => {
        console.log("Let's sort");

        const newValues = this.state.itemValues.sort((a, b) => (
            (a.team > b.team) ? 1 : -1
        ));
        this.setState({
            items: newValues.map((value, index) => (<MatchTable game={value} />)),
            itemValues: newValues
        });

    };


    render() {
        const { games, gameComponents } = this.props;
        console.log("On Drag", gameComponents);

        return (
            <div>
                <button onClick={this.sorter}>Sort Me</button>
                <SortableList items={gameComponents} onSortEnd={this.onSortEnd} pressDelay={100} useDragHandle={false} />
            </div>
        );
    }
}

export default SortableComponent;