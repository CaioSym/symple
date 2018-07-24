import ReactOnRails from 'react-on-rails';

import AppContext from '../bundles/App/ServerAppContext';

// This is how react_on_rails can see the App for server side rendering.
ReactOnRails.register({
  AppContext
});
