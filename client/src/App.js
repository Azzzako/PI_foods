import './App.css';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { DetailCard } from './components/DetailCard/DetailCard';
import { Form } from './components/Formulario/Formulario'

function App() {
  return (

    <div className='App'>
      <Switch>
        <Route exact path="/"><LandingPage /></Route>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/recipe/:id"><DetailCard /></Route>
        <Route exact path="/create"><Form/></Route>
      </Switch>
    </div>


  );
}

export default App;
