import "./App.css";

import { Search } from "./Search";
import { ProductList } from "./ProductList";
import { Product } from "./Product";
import { connect } from "react-redux";

export default function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <Search></Search>
          </form>
        </div>
      </nav>
      <div>
        <ProductList></ProductList>
      </div>
      <div class="h6">Product Footer</div>
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
