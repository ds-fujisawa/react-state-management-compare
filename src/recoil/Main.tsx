import { RecoilRoot } from 'recoil';
import Todo from './Todo';

const App = () => (
  <RecoilRoot>
    <h1>Recoil</h1>
    <Todo />
  </RecoilRoot>
);

export default App;
