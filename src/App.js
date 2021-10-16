import "./App.css";

import { Search } from "./Search";
import { ProductList } from "./ProductList";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  let { cartProductList } = useSelector((state) => state);
  return (
    <div className="App">
      <div class="contrainer font">
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Amazing Shopping Cart
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link 1
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link 2
                  </a>
                </li>
              </ul>
              <Search></Search>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <ProductList></ProductList>
      </div>
      <div className="h6">Product Footer</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    retrive: () => dispatch({ type: "RETRIVE" }),
    reset: () => dispatch({ type: "RESET" }),
    removeProduct: () => dispatch({ type: "REMOVEPRODUCT" }),
  };
};
connect(mapStateToProps, mapDispatchToProps)(App);
