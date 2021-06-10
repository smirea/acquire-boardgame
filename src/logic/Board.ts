import AbstractGameItem from './AbstractGameItem';
import { LETTERS, NUMBERS } from 'src/utils/constants';

import type { BoardState } from 'src/typeDefs';
import type Tile from './Tile';
import type Game from './Game';

export default class Board extends AbstractGameItem<BoardState & { id: 'board' }> {
    constructor(game: Game) {
        const state: BoardState = {
            tiles: LETTERS.map(() =>
                NUMBERS.map(() => null)
            ),
        };

        super(game, { ...state, id: 'board' });
    }

    playTile(tile: Tile) {
        this.update(state => {
            state.tiles[LETTERS.indexOf(tile.state.letter)][tile.state.number - 1] = tile;
        });
    }
}
