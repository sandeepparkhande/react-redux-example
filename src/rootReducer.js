const intitalState = {
  products: [],
  counter: 0,
};
export const rootRedcucer = (state = intitalState, action) => {
  // This line is important for rendering as state object always immutable
  let newState = { ...state };

  console.log("Root Reducer is called ", newState);

  if (action.type === "INCREMENT") {
    console.log(" INCREMENT IS CALLED", newState);
    newState.counter = newState.counter + 1;
    return newState;
  }
  if (action.type === "DECREMENT") {
    console.log(" DECREMENT IS CALLED", action.payload);
    newState.counter = newState.counter - 1;
    return newState;
  }
  if (action.type === "RETRIVE") {
    console.log(" RETRIVE IS CALLED Action", action);
    console.log(" RETRIVE IS CALLED newState", newState);
    newState.products = action.payload;
    return newState;
  }
  if (action.type === "RESET") {
    console.log(" RESET IS CALLED");
    return newState;
  }

  return newState;
};
