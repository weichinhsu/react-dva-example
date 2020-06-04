import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history';
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import travel from './models/travel';

const app = dva({ history: createHistory( ) });

app.model(travel)
app.router(require('./router').default);
app.start('#root');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
