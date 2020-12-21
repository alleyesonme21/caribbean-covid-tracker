import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import middlewareLogger from './middleware/middleware-logger';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, middlewareLogger));

store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);




















// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// // import rootReducer from './reducers/index';
// // import { Provider } from 'react-redux';
// // import { createStore, applyMiddleware } from 'redux';
// // import thunkMiddleware from 'redux-thunk';
// // import middlewareLogger from './middleware/middleware-logger';

//   // import './index.css';

// // const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, middlewareLogger));

// // store.subscribe(() =>
// //   console.log(store.getState())
// // );


// ReactDOM.render(
//   <App/>,
// //   <Provider store={store}>
// //   <App />
// // </Provider>,
//   document.getElementById('root')
// );
