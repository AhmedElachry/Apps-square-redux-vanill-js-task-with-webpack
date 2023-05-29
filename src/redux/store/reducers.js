import { combineReducers } from "redux";

const divOneReducer = (state = "49%", action) => {
  switch (action.type) {
    case "expandWidthOne":
      return (state = action.payload);
    default:
      return state;
  }
};
const divTwoReducer = (state = "49%", action) => {
  switch (action.type) {
    case "expandWidthTwo":
      return (state = action.payload);
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  divOne: divOneReducer,
  divTwo: divTwoReducer,
});

export { rootReducer };
