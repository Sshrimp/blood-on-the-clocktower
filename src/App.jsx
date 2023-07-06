import React from 'react';
import { useRoutes } from 'react-router';
import ALLRoutes from './routes/index';
import { IconStyle } from './assets/iconfont/iconfont';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './style';

// function App() {
//   const routes = useRoutes(routes);
//   return routes;
// }

const App = () => {
  let routes = useRoutes(ALLRoutes);
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {routes}
    </Provider>
  );
}
export default App;
