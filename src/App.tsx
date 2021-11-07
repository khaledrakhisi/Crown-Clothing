import { Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/home/homepage";

import "./App.css";
import ShopPage from "./pages/shop/ShopPage";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
