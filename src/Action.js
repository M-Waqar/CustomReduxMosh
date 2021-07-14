import * as actions from "./ActionTypes";

export const bugAdded = (description) => {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: description,
    },
  };
};

export const bugDeleted = (id) => {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id: id,
    },
  };
};

export const bugResolved = (id) => {
  return {
    type: actions.BUG_RESOLVED,
    payload: {
      id: id,
    },
  };
};
