import React from 'react';
import type AbstractGameItem from 'src/logic/AbstractGameItem';
import Game from 'src/logic/Game';

export type AppContextT = {
    game: Game;
    attachComponent(element: React.Component, item: AbstractGameItem<any>): void;
    detachComponent(element: React.Component): void;
};

const AppContext = React.createContext<AppContextT>({} as any);

export const useAppContext = () => React.useContext(AppContext);

export class AppContextProvider extends React.PureComponent {
    state: AppContextT = {
        game: new Game(),
        attachComponent: this.attachComponent.bind(this),
        detachComponent: this.detachComponent.bind(this),
    };

    private interval?: NodeJS.Timeout;
    itemReactMap: Map<AbstractGameItem<any>, React.Component> = new Map();
    reactItemMap: Map<React.Component, AbstractGameItem<any>> = new Map();

    componentDidMount() {
        this.interval = setInterval(() => {
            const { game}  = this.state;
            if (!game.toUpdate.size) return;
            for (const item of game.toUpdate) {
                const node = this.itemReactMap.get(item);
                if (node) {
                    node.forceUpdate();
                }
                item.needsUpdate = false;
            }
            game.toUpdate = new Set;
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval!);
    }

    attachComponent(element: React.Component, item: AbstractGameItem<any>) {
        this.itemReactMap.set(item, element);
        this.reactItemMap.set(element, item);
    }

    detachComponent(element: React.Component) {
        const item = this.reactItemMap.get(element);
        if (item) {
            this.reactItemMap.delete(element);
            this.itemReactMap.delete(item);
        }
    }

    render () {
        console.log(this.state.game)
        return <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>;
    }
}

export default AppContext;
