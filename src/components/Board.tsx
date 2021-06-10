import React from 'react';
import { LETTERS, NUMBERS } from 'src/utils/constants';
import BoardInstance from 'src/logic/Board';
import AppContext from 'src/utils/AppContext';
import Tile, { TileName } from './Tile';

export default class Board extends React.PureComponent<{ instance: BoardInstance }> {
    static contextType = AppContext;
    context!: React.ContextType<typeof AppContext>;

    componentDidMount() { this.context.attachComponent(this, this.props.instance); }
    componentWillUnmount() { this.context.detachComponent(this); }

    render() {
        const { instance } = this.props;

        return <div className='Board'>
            {LETTERS.map((letter, i) =>
                <div key={letter} className='Board-row'>
                    {NUMBERS.map((number, j) => {
                        const tile = instance.state.tiles[i][j];

                        return <div key={number} className='Board-cell'>
                            <TileName letter={letter} number={number} />

                            {tile &&
                                <Tile instance={tile} />
                            }
                        </div>
                    })}
                </div>
            )}
        </div>
    }
}
