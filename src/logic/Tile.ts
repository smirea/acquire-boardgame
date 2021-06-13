import AbstractGameItem from './AbstractGameItem';

import type { TileState } from 'src/typeDefs';

export default class Tile extends AbstractGameItem<TileState> {
    isHighlightedOnBoard() {
        return !!this.game.board.getHighlight(this.state.number, this.state.letter);
    }

    highlightOnBoard(color: string | null) {
        this.game.board.highlightCell(this.state.number, this.state.letter, color);
    }
}
