import React from 'react';
import PlayerInstance from 'src/logic/Player';
import AppContext from 'src/utils/AppContext';
import Tile from './Tile';

export default class Player extends React.PureComponent<{ instance: PlayerInstance }> {
    static contextType = AppContext;
    context!: React.ContextType<typeof AppContext>;

    componentDidMount() { this.context.attachComponent(this, this.props.instance); }
    componentWillUnmount() { this.context.detachComponent(this); }

    render() {
        const { instance, instance: { state: { name, tiles } } } = this.props;

        return <div className='Player'>
            <div>{name}:</div>
            <div className='Hand'>
                {tiles.map(tile =>
                    <Tile
                        key={tile.id}
                        instance={tile}
                        onClick={() => instance.playTile(tile)}
                    />
                )}
            </div>
        </div>;
    }
}
