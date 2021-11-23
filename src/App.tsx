import { Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/home/homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./shared/components/Header";
import Signin_Signup from "./pages/sign-in-sign-up/SigninPage";

import "./App.css";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={Signin_Signup} />
      </Switch>
    </div>
  );
}

export default App;
