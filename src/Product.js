import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "./action";
import "bootstrap/dist/css/bootstrap.min.css";

export const Product = (props) => {
  //const { counter, products } = useSelector((state) => state);
  const { product } = props;

  const dispatch = useDispatch();

  /*
  console.log(" state ", counter);
  console.log(" products ", products);
  */
  return (
    <div class="col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-10 offset-sm-1 my-lg-0 my-2">
      <div class="card">
        <img class="card-img-top" src={product?.image} />
        <div class="card-body">
          <div class="d-flex align-items-start justify-content-between">
            <div class="d-flex flex-column">
              <div class="font-weight-bold text-center">{product?.title}</div>
              <div class="h6 font-weight-bold d-flex justify-content-center">
                ${product?.price}
              </div>
            </div>
          </div>
          <div class="btn">
            <span class="far fa-heart">
              <a
                href="#"
                onClick={() => dispatch(addProduct(product?.id))}
                class="btn btn-primary"
              >
                Add to Cart
              </a>
            </span>
          </div>
          <div class="btn">
            <span class="far fa-heart">
              <a
                href="#"
                onClick={() => dispatch(removeProduct(product?.id))}
                class="btn btn-danger"
              >
                Remove
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
