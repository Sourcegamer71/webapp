import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { state } from './state';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <App appState = {state}/>
);

