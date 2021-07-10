import type AbstractGameItem from './AbstractGameItem';
import Board from './Board';
import Deck from './Deck';
import Player from './Player';
import Tile from './Tile';

export default class Game {
    players: Player[] = [];
    board: Board = new Board(this);
    tileDeck: Deck = new Deck(this);
    toUpdate: Set<AbstractGameItem<any>> = new Set;

    constructor() {
        this.players = [
            new Player(this, {
                id: 'p_0',
                name: 'Judy',
                tiles: [],
            }),
            new Player(this, {
                id: 'p_1',
                name: 'Bob',
                tiles: [],
            }),
        ];

        this.tileDeck.shuffle();

        for (let i = 0; i < 6; ++i) {
            for (const player of this.players) {
                player.drawTile();
            }
        }
    }

    onUpdate(item: AbstractGameItem<any>) {
        this.toUpdate.add(item);
    }
}
