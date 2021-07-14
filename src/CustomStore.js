import Reducer from "./Reducer";

function createStore(reducer) {
  let state;
  let listners = [];
  function getState() {
    return state;
  }
  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listners.length; i++) {
      listners[i]();
    }
  }
  function subscribe(listner) {
    listners.push(listner);
  }
  return {
    getState,
    dispatch,
    subscribe,
  };
}

export default createStore(Reducer);
