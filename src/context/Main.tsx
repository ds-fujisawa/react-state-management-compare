import Todo from './Todo';
import { Provider } from './store';

const App = () => (
  <Provider>
    <h1>Context</h1>
    <Todo />
  </Provider>
);

export default App;
