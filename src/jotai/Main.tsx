import { RecoilRoot } from 'recoil';
import Todo from './Todo';

const App = () => (
  <RecoilRoot>
    <h1>Jotai</h1>
    <Todo />
  </RecoilRoot>
);

export default App;
