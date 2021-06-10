// console.clear();

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './styles.scss';

import Game from './components/Game';

import { AppContextProvider } from './utils/AppContext';

export default function App() {
    return <AppContextProvider>
        <Game />
    </AppContextProvider>;
}
