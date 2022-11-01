import { configureStore, applyMiddleware } from "@reduxjs/toolkit"; //from slise redux
import club from "./club/slice";
import user from "./user/slice";

// import { createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; //|| compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );
// export default store;

const store = configureStore({
  reducer: {
    club,
    user,
  },
  composeEnhancers,
  // (applyMiddleware(thunk))
});

export default store;
