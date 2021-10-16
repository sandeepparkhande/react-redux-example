export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const retrive = (payload) => {
  console.log("payload", payload);
  return {
    type: "RETRIVE",
    payload: payload,
  };
};

export const removeProduct = (payload) => {
  return {
    type: "REMOVEPRODUCT",
    payload: payload,
  };
};

export const addProduct = (payload) => {
  return {
    type: "ADDPRODUCT",
    payload: payload,
  };
};

export const findRecord = (payload) => {
  return {
    type: "FINDRECORD",
    payload: payload.target.value,
  };
};
