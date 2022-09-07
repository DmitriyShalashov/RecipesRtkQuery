
import './App.css';
import NavBar from './components/NavBar';
import {Provider} from 'react-redux'
import { setupStore } from './store';
import RecipeList from './components/business/RecipeList';
import API from './components/business/API';

function App() {
  const store = setupStore()
  return (
    <Provider store={store}>
    <div className="App">
        <NavBar/>
        <RecipeList/>
        <API/>
    </div>
    </Provider>
  );
}

export default App;
