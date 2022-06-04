import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start the app.
// We'll recibe an "onNavigate" callback from the container app.
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath],
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <App onSignIn={onSignIn} history={history} />,
    el,
  );

  return {
    // Handle navigation on the container app from this subapp.
    onParentNavigate({ pathname: containerPathname }) {
      const { pathname: subappPathname } = history.location;

      if (subappPathname !== containerPathname) {
        history.push(containerPathname);
      }
    }
  }
}

// If we are in development and in isolation,
// call mount immediately.
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// If we are running through container,
// we should export the mount function.
export { mount };
