import {combineReducers} from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import directoryReducer from "./directory/directory-reducer";
import shopDataReducer from "./shop-data/shop-data-reducer";

const presistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shopData: shopDataReducer,
});

export default persistReducer(presistConfig, rootReducer);