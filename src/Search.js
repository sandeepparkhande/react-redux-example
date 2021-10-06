import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./action";

export const Search = () => {
  const { counter, products } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(" state ", counter);
  console.log(" products ", products);

  return (
    <h3>
      Search Component {counter} <br />
      <button onClick={() => dispatch(increment())}> My O Button </button>
      <button onClick={() => dispatch(decrement())}> My N Button </button>
      {products.map((product) => {
        <div> {product.id}</div>;
      })}
    </h3>
  );
};
