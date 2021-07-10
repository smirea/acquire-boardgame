import React from 'react';
import type DeckInstance from 'src/logic/Deck';

export type DeckProps<T extends DeckInstance> = {
    instance: T;
};

export default class Deck<T extends DeckInstance> extends React.PureComponent<DeckProps<T>> {
    render() {
        const { instance, ...props } = this.props;

        return <div {...props} className='Deck'>
            <div className='Tile'>
                <div className='TileName'>
                    <div className='TileName-number'>{instance.state.tiles.length}</div>
                    <div className='TileName-letter'>tiles</div>
                </div>
            </div>
        </div>;
    }
}
