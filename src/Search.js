import { useSelector, useDispatch } from "react-redux";
import { findRecord } from "./action";
import { BsMinecart } from "react-icons/bs";

export const Search = () => {
  const { counter, cartProductList, products } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(" state ", counter);
  console.log(" products ", products);

  return (
    <form class="d-flex">
      <div className="form-inline my-2 my-lg-0">
        <span id="lblCartCount">{cartProductList.length} </span>
        <span id="lblCartCount">
          <BsMinecart size="1em" />
        </span>
      </div>
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => dispatch(findRecord(e))}
      />
      <button class="btn btn-outline-light" type="submit">
        Search
      </button>
    </form>
  );
};
