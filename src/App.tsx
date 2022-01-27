import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import AppEntry from './AppEntry';

const App = () => {
  return (
    <Provider store={store}>
      <AppEntry />
    </Provider>
  );
};

export default App;
