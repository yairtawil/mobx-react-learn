import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'mobx-react';
import stores from './stores';
import Main from './components/Main';

function App() {
    return (
        <Provider {...stores}>
          <Main />
        </Provider>
    );
}

export default App;
