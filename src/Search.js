import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findRecord } from "./action";

export const Search = () => {
  const { counter, products } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(" state ", counter);
  console.log(" products ", products);

  return (
    <div class="input-group md-form form-sm form-2 pl-0">
      <input
        class="form-control my-0 py-1 lime-border"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => dispatch(findRecord(e))}
      />
      <div class="input-group-append">
        <span class="input-group-text lime lighten-2" id="basic-text1">
          <i class="fas fa-search text-grey" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
};
