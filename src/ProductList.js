import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, removeProduct, retrive } from "./action";

export const ProductList = () => {
  let { counter, products, searchFlag, searchProducts } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  console.log(" state ", counter);
  console.log(" products ", products);
  console.log(" seachFlag ", searchFlag);

  if (searchFlag) {
    products = searchProducts;
  }

  console.log(" searchProducts ", products);
  useEffect(() => {
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
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                <td scope="row">{product.id}</td>
                <td>{product.title}</td>
                <td> {product.description}</td>
                <td valign="middle" align="center">
                  <img src={product.image} width="100"></img>
                </td>
                <td>${product.price}</td>
                <td>
                  <button onClick={() => dispatch(removeProduct())}>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
