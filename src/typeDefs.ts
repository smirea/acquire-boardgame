import type Tile from './logic/Tile';
import type { LETTERS, NUMBERS } from './utils/constants';

export type TileLetter = typeof LETTERS[number];
export type TileNumber = typeof NUMBERS[number];

export type TileId = `t_${TileLetter}${TileNumber}`;
export type DeckId = `d_${string}`;
export type PlayerId = `p_${number}`;

export type GameItemState = {
    id: Readonly<string>;
};

export type PlayerState = {
    id: PlayerId;
    name: string;
    tiles: Tile[];
};

export type TileState = Readonly<{
    id: TileId;
    letter: TileLetter;
    number: TileNumber;
}>;

export type BoardState = {
    tiles: (Tile | null)[][];
    highlightedCells: Record<string, string>;
};

export type DeckState = {
    id: DeckId;
    tiles: Tile[];
};
