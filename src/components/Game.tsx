import React from 'react';
import { useAppContext } from 'src/utils/AppContext';
import Board from './Board';
import GameInstance from 'src/logic/Game';
import Player from './Player';
import Deck from './Deck';

class Game extends React.PureComponent<{ instance: GameInstance }> {
    render() {
        const { instance: { board, players, tileDeck } } = this.props;

        return <div className='Game'>
            <Board instance={board} />
            <Deck instance={tileDeck} />
            {players.map(player => <Player key={player.id} instance={player} />)}
        </div>
    }
}

export default () => {
    const appContext = useAppContext();

    return <Game instance={appContext.game} />;
}
