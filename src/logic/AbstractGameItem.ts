import produce, { Draft } from 'immer';
import { GameItemState } from 'src/typeDefs';
import type Game from './Game';

export default abstract class AbstractGameItem<T extends GameItemState> {
    public needsUpdate: boolean = true;

    constructor(protected game: Game, public state: T) {}

    get id () { return this.state.id; }

    update(fn: (draft: Draft<T>) => void) {
        const newState = produce(this.state, draft => {
            fn(draft);
        });

        if (newState !== this.state) {
            this.needsUpdate = this.needsUpdate || newState !== this.state;
            this.state = newState;
            this.game.onUpdate(this);
        }
    }
}
