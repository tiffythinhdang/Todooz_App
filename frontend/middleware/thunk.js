// const myThunk = (store) => next => action => {
//   if (typeof action === "function") {
//     return action(store.dispatch, store.getState);
//   } else {
//     return next(action);
//   }
// };

const myThunk = ({dispatch, getState}) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
    
  return next(action);
};

export default myThunk;