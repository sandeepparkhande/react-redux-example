const intitalState = {
  products: [],
  counter: 0,
  searchProducts: [],
  searchFlag: false,
};

export const rootRedcucer = (state = intitalState, action) => {
  // This line is important for rendering as state object always immutable
  let newState = { ...state };

  console.log(
    "Root Reducer is called fo",
    action.type,
    action.payload,
    newState
  );

  if (action.type === "INCREMENT") {
    newState.counter = newState.counter + 1;
    return newState;
  }
  if (action.type === "DECREMENT") {
    newState.counter = newState.counter - 1;
    return newState;
  }
  if (action.type === "RETRIVE") {
    newState.products = action.payload;
    return newState;
  }
  if (action.type === "REMOVEPRODUCT") {
    const index = newState.products.findIndex(
      (product) => product.id === parseInt(action.payload)
    );
    newState.products.splice(index, 1);
    return newState;
  }
  if (action.type === "FINDRECORD") {
    newState.searchProducts = [];

    const product = newState.products.find(
      (product) => product.id === parseInt(action.payload)
    );

    newState.product = product;

    console.log("product found".product);

    if (product !== undefined) {
      newState.searchFlag = true;
      newState.searchProducts.push(product);
    } else {
      newState.searchFlag = false;
    }

    return newState;
  }
  if (action.type === "RESET") {
    return newState;
  }

  return newState;
};
