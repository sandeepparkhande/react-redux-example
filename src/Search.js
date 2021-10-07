import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findRecord } from "./action";

export const Search = () => {
  const { counter, products } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(" state ", counter);
  console.log(" products ", products);

  return (
    <div>
      <div> Search Product</div>
      <div>
        <input type="text" onChange={(e) => dispatch(findRecord(e))} />
      </div>
      <br />
    </div>
  );
};
