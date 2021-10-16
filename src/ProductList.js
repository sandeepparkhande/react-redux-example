import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { retrive } from "./action";
import { Product } from "./Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchData } from "./service";

export const ProductList = () => {
  let { counter, products, searchFlag, searchProducts } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  console.log(
    " state ",
    counter,
    " products ",
    products,
    " seachFlag ",
    searchFlag
  );

  if (searchFlag) {
    products = searchProducts;
  }

  console.log(" searchProducts ", products);
  useEffect(() => {
    (async () => {
      let response = await fetchData("https://fakestoreapi.com/products");
      dispatch(retrive(response));
    })();

    /*
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => dispatch(retrive(response)))
      .catch(() => {
        dispatch(
          retrive([
            {
              id: "111",
              title: "title",
              description: "description",
              image: "",
            },
            {
              id: "222",
              title: "title 2",
              description: "description 2",
              image: "",
            },
          ])
        );
      });
      */
  }, []);

  return (
    <div class="container mt-3">
      <div class="d-flex align-items-center justify-content-between py-4 results">
        <div>Showing 1 of {products.length}</div>
        <div>
          <span>Price: </span>
          <select name="price" id="price">
            <option defaultValue="l2h">low to high</option>
            <option value="h2l">high to low</option>
          </select>
        </div>
      </div>
      <div class="row py-3">
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};
