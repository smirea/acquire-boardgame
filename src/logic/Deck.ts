import _ from 'lodash';
import type { DeckState } from 'src/typeDefs';
import { LETTERS, NUMBERS } from 'src/utils/constants';
import AbstractGameItem from './AbstractGameItem';
import type Game from './Game';
import Tile from './Tile';

export default class Deck extends AbstractGameItem<DeckState> {
    constructor(game: Game) {
        super(game, {
            id: 'd_tileDeck',
            tiles: [],
        });

        this.init();
    }

    init() {
        this.state.tiles = [];

        for (const letter of LETTERS) {
            for (const number of NUMBERS) {
                this.state.tiles.push(
                    new Tile(this.game, {
                        id: `t_${letter}${number}` as const,
                        letter,
                        number,
                    })
                )
            }
        }
    }

    get size() { return this.state.tiles.length; }

    shuffle() {
        this.state.tiles = _.shuffle(this.state.tiles);
    }

    draw() {
        if (!this.size) return null;
        return this.state.tiles.pop()!;
    }
}
