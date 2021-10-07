import "./App.css";

import { Search } from "./Search";
import { ProductList } from "./ProductList";
import { Product } from "./Product";
import { connect } from "react-redux";

export default function App() {
  return (
    <div className="App">
      Learn React
      <Search></Search>
      <ProductList></ProductList>
      <Product></Product>
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
  };
};
connect(mapStateToProps, mapDispatchToProps)(App);
