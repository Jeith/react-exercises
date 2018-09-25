import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";

import movieReducer from "./reducers/movieReducer";

var store = createStore(movieReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();