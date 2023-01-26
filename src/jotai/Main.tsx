import Todo from './Todo';
import { RecoilRoot } from 'recoil';

const App = () => (
  <RecoilRoot>
    <h1>Jotai</h1>
    <Todo />
  </RecoilRoot>
);

export default App;
