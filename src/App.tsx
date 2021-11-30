import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./shared/components/Header";
import Signin_Signup from "./pages/sign-in-sign-up/SigninPage";
import {auth} from "./firebase/firebase.utils";
import firebase from "firebase/compat/app";

import "./App.css";

interface IProps{

}
interface IState{
  currentLoggedinUser: firebase.User | null,
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props);

    this.state = {
      currentLoggedinUser: null,
    }
  }

  unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentLoggedinUser: user})

      console.log(user);
      
    });
  }

  componentWillUnmount(){
    if(this.unsubscribeFromAuth)
      this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header currentLoggedinUser = {this.state.currentLoggedinUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={Signin_Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
