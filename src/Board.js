import React from 'react';
import { Square } from './Square';

export class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        const board = [[0,1,2],[3,4,5],[6,7,8]];
        return (
            <div>
                {board.map(row => (
                    <div className="board-row">
                        {row.map(col => (
                            this.renderSquare(col)
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}