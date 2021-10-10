import { createMachine } from 'xstate';

const game = createMachine({
    id: 'game',
    initial: 'start',
    context: {
        totalPlayers: 2,
        currentPlayer: 0,
    },
    states: {
        start: {
            on: {

            },
        },
    },
});

export default game;
