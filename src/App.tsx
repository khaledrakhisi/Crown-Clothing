import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/home/homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./shared/components/Header";
import SigninSignup from "./pages/sign-in-sign-up/SigninPage";
import { auth, createUserProfileDocument, } from "./shared/utility/firebase.utils";
import firebase from "firebase/compat/app";
import { IUser } from "./shared/interfaces/user";
import { setCurrentUser } from "./shared/redux/user/user-actions";
import { selectCurrentUser } from "./shared/redux/user/user-selector";
import CheckoutPage from "./pages/checkout/CheckoutPage";

import "./App.css";

interface IProps {
  setCurrentUser: (user: IUser) => void;
  currentLoggedinUser: IUser | null;
}

class App extends React.Component<IProps> {
  // constructor(props: IProps){
  //   super(props);

  //   this.state = {
  //     currentLoggedinUser: null,
  //   }
  // }

  unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // user reference or user collection
        const userRef = await createUserProfileDocument(userAuth, {});

        userRef?.onSnapshot((snapshot) => {
          const { displayName, email }: any = snapshot.data();

          this.props.setCurrentUser({
            id: snapshot.id,
            displayName,
            email,
          });
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentLoggedinUser ? (
                <Redirect to="/" />
              ) : (
                <SigninSignup />
              )
            }
          />
          <Route exact path="/checkout" component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    currentLoggedinUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: IUser) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
