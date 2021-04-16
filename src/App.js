import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const Home = props => (
  <>
    <TaskForm />
    <TaskList />
  </>
);

function App () {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
