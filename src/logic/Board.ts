import AbstractGameItem from './AbstractGameItem';
import { LETTERS, NUMBERS } from 'src/utils/constants';

import type { BoardState, TileLetter, TileNumber } from 'src/typeDefs';
import type Tile from './Tile';
import type Game from './Game';

export default class Board extends AbstractGameItem<BoardState & { id: 'board' }> {
    constructor(game: Game) {
        const state: BoardState = {
            highlightedCells: {},
            tiles: LETTERS.map(() =>
                NUMBERS.map(() => null)
            ),
        };

        super(game, { ...state, id: 'board' });
    }

    getHighlight(number: TileNumber, letter: TileLetter) {
        return this.state.highlightedCells[`${number}${letter}`] || null;
    }

    playTile(tile: Tile) {
        this.update(state => {
            state.tiles[LETTERS.indexOf(tile.state.letter)][tile.state.number - 1] = tile;
        });
    }

    highlightCell(number: TileNumber, letter: TileLetter, color: string | null) {
        this.update(state => {
            if (color) state.highlightedCells[`${number}${letter}`] = color;
            else delete state.highlightedCells[`${number}${letter}`];
        });
    }
}
