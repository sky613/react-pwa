import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { ConfigProvider } from 'antd';
import koKR from 'antd/lib/locale/ko_KR';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { sagaMiddleware, store } from './redux/store';

import 'moment/locale/ko';
import rootSaga from './redux/saga';

// saga 실행
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* BrowserRouter: HTML5의 history API를 활용하여 UI를 업데이 */}
    <Provider store={store}>
      {/* Provider : store 를 손쉽게 연동 */}
      <ConfigProvider locale={koKR}>
        <App />
      </ConfigProvider>
    </Provider>
  </BrowserRouter>,
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
