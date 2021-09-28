import './App.css';
import BodyLoginPage from './components/BodyLoginPage';
import { Route } from 'react-router-dom';
import Wallet from './Pages/Wallet';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ BodyLoginPage } />
      <Route exact path="/wallet" component={ Wallet } />
    </div>
  );
}

export default App;
