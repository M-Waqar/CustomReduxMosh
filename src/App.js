import "./App.css";
import store from "./Store";
import { bugAdded, bugDeleted, bugResolved } from "./Action";

// import store from "./CustomStore";

function App() {
  // store.subscribe(() => {
  //   console.log("Store Changed");
  // });

  // store.dispatch(bugAdded("BUG 01"));
  // store.dispatch(bugAdded("BUG 02"));
  // console.log(store.getState());

  // const unSubscribed = store.subscribe(() => {
  //   console.log("store changed:");
  // });
  debugger;
  console.log("page started");
  // store.dispatch(bugAdded("BUG 1"));
  // store.dispatch(bugAdded("BUG 2"));
  // store.dispatch(bugAdded("BUG 3"));
  // store.dispatch(bugAdded("BUG 4"));
  console.log(store.getState());
  // store.dispatch({
  //   type: actions.BUG_ADDED,
  //   payload: {
  //     description: "BUG 1",
  //   },
  // });

  // unSubscribed();

  // store.dispatch({
  //   type: actions.BUG_REMOVED,
  //   payload: {
  //     id: 1,
  //   },
  // });
  // console.log(store.getState());
  return <div className="App"></div>;
}

export default App;
