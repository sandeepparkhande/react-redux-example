import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, removeProduct, retrive } from "./action";

export const Product = () => {
  const { counter, products, product } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(" state ", counter);
  console.log(" products ", products);
  console.log(" product ", product);

  return (
    <div>
      Product Component {product?.id} <br />
      <button onClick={() => dispatch(increment())}> My O Button </button>
      <button onClick={() => dispatch(decrement())}> My N Button </button>
    </div>
  );
};
