import logo from './logo.svg';
import './App.css';
import Users from './Users';
import { UserStore } from './userStore';

function App() {
  return (
    <div className="App">
      <h1>Names Store</h1>
      <Users store={UserStore} />
    </div>
  );
}

export default App;
