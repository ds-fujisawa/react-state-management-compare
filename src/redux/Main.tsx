import { Provider } from 'react-redux';
import Todo from './Todo';
import store from './store';

const App = () => (
  <Provider store={store}>
    <h1>Redux</h1>
    <Todo />
  </Provider>
);

export default App;
