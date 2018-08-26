import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myApp from './redux/reducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(myApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
