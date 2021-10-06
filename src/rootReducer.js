const intitalState = {
  products: [],
  counter: 0,
};
export const rootRedcucer = (state = intitalState, action) => {
  let newState = { ...state };

  console.log("Root Reducer is called ", newState);

  if (action.type === "INCREMENT") {
    console.log(" INCREMENT IS CALLED", newState);
    newState.products.push({ id: "11111" });
    newState.counter = newState.counter + 1;
    return newState;
  }
  if (action.type === "DECREMENT") {
    console.log(" DECREMENT IS CALLED");
    newState.products.splice(0, 1);
    console.log(" DECREMENT IS CALLED", newState);
    newState.counter = newState.counter - 1;
    return newState;
  }
  if (action.type === "RESET") {
    console.log(" RESET IS CALLED");
    return newState;
  }

  return newState;
};
