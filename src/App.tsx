import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./shared/components/Header";
import Signin_Signup from "./pages/sign-in-sign-up/SigninPage";
import { auth, createUserProfileDocument } from "./shared/utility/firebase.utils";
import firebase from "firebase/compat/app";
import {IUser} from "./shared/interfaces/user";

import "./App.css";

interface IProps{

}
interface IState{
  currentLoggedinUser: IUser | null,
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth, null);

        userRef?.onSnapshot(snapshot=>{
          // console.log(snapshot.data());
          
          const {displayName, email}:any = snapshot.data();

          this.setState({
            currentLoggedinUser : {
              id: snapshot.id,
              displayName,
              email
            }            
          });
          console.log(this.state);
          
        });

      } 

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
