import * as actions from "./ActionTypes";

let id = 0;

export default function Reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++id,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map((item) =>
        item.id !== action.payload.id ? item : { ...item, resolved: true }
      );
    default:
      return state;
  }
}
