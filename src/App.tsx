import { Switch , Route, Link } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';

import './App.css';

const HatsPage = (props: any) => {
  console.log(props);
  
  return <h3>Hats Page</h3>
}

function App() {
  return (
    <div>
            
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/hats" component={HatsPage}/>
      
    </div>
  );
}

export default App;
