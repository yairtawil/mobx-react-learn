import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import stores from './stores';
import { configure } from 'mobx';

configure({ enforceActions: true });

ReactDOM.render((
    <Provider {...stores}>
        <App />
    </Provider>
), document.getElementById('root'));

