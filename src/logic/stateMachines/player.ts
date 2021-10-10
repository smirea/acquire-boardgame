import { createMachine } from 'xstate';

const player = createMachine({
    id: 'player',
    initial: 'startTurn',
    context: {
        totalPlayers: 2,
        currentPlayer: 0,
        hotelMerger: false,
        hotelMergerTie: false,
    },
    states: {
        startTurn: {
            on: {
                PLACE_TILE: {
                    target: 'tilePlaced',
                },
            },
        },
        tilePlaced: {
            always: [
                { target: 'merger', cond: 'hasMerger' },
                { target: 'endTurn' },
            ],
        },
        merger: {
            always: [
                { target: 'chooseHotel', cond: '' },
            ],
        },
        endTurn: { type: 'final' },
    },
}, {
    actions: {

    },
    guards: {
        hasMerger: ctx => ctx.hotelMerger,
        hasMergerTie: ctx => ctx.hotelMergerTie,
    },
});

export default player;
