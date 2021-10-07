import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, retrive } from "./action";

export const Search = () => {
  const { counter, products } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(" state ", counter);
  console.log(" products ", products);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => dispatch(retrive(response)));
  }, []);

  return (
    <div>
      Search Component {counter} <br />
      <button onClick={() => dispatch(increment())}> My O Button </button>
      <button onClick={() => dispatch(decrement())}> My N Button </button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
