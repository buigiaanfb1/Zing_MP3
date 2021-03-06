import React from 'react';
import ReactDOM from 'react-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/index.css';
import App from './App';
import { projectAuth } from './firebase/config';

// redux
import { Provider } from 'react-redux';
import store from './redux/reducers/config';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './common/theme/theme';

let app;

projectAuth.onAuthStateChanged((_user) => {
  if (!app) {
    app = ReactDOM.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
});
