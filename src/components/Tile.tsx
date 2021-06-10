import React from 'react';
import type TileInstance from 'src/logic/Tile';
import type { TileLetter, TileNumber } from 'src/typeDefs';

export type TileProps<T extends TileInstance> = {
    instance: T;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};

export default class Tile<T extends TileInstance> extends React.PureComponent<TileProps<T>> {
    render () {
        const { instance: { state: { letter, number } }, ...props } = this.props;

        return <div {...props} className='Tile'>
            <TileName letter={letter} number={number} />
        </div>
    }
}

export const TileName: React.FC<{ letter: TileLetter, number: TileNumber }> = ({ letter, number, ...props }) =>
    <div {...props} className='TileName'>
        <span className='TileName-number'>{number}</span>
        <span className='TileName-letter'>{letter}</span>
    </div>
