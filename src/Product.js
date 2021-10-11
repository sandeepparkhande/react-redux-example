import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "./action";
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
              <div class="h6 font-weight-bold">{product?.title}</div>
              <div class="text-muted">${product?.price}</div>
            </div>
            <div class="btn">
              <span class="far fa-heart">
                <a
                  href="#"
                  onClick={() => dispatch(removeProduct(product?.id))}
                  class="btn btn-primary"
                >
                  Remove
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
