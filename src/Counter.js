import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, removeProduct, retrive } from "./action";

export const Counter = (props) => {
  const { counter, products } = useSelector((state) => state);
  const { product } = props;
  const dispatch = useDispatch();
  console.log(" state ", counter);
  console.log(" products ", products);

  return (
    <div>
      Counter Component {product?.id} <br />
      <button onClick={() => dispatch(increment())}> My O Button </button>
      <button onClick={() => dispatch(decrement())}> My N Button </button>
    </div>
  );
};
