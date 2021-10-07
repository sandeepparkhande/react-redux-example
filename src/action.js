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
