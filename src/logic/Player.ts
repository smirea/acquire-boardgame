import AbstractGameItem from './AbstractGameItem';

import type { PlayerState } from 'src/typeDefs';
import type Tile from './Tile';

export default class Player extends AbstractGameItem<PlayerState> {
    addTile(tile: Tile) { this.state.tiles.push(tile); }
    hasTile(tile: Tile) { return this.state.tiles.includes(tile); }

    playTile(tile: Tile) {
        if (!this.hasTile(tile)) {
            return console.warn(`Player ${this.id} does not have tile ${tile.id}`);
        }

        this.game.board.playTile(tile);

        this.update(state => {
            state.tiles = state.tiles.filter(t => t.id !== tile.id);
        });
    }
}
