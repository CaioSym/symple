import ReactOnRails from 'react-on-rails';

import AppContext from '../bundles/App/ClientAppContext';

// This is how react_on_rails can see the App in the browser.
ReactOnRails.register({
  AppContext
});
