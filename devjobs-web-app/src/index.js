import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
import ScrollToTop from './hooks/ScrollToTop';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <Router>
                <ScrollToTop />
                <App />
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
