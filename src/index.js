import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Styles/index.css'

import { SnackbarProvider } from 'notistack';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SnackbarProvider
        maxSnack={3}
        autoHideDuration={1000}
        anchorOrigin={{
            vertical:'top',
            horizontal: 'right',
        }}
    >
        <App />
    </SnackbarProvider>
);


