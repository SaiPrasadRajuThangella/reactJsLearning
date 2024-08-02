import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./navbar.js";
import { Product } from "./product.js";
//

const root = ReactDOM.createRoot(document.getElementById("root"));

const Navbartitle = "aravind";

root.render(
  <>
    {<Navbar tittle={Navbartitle} description={"something"} />}
    {
      <Product
        title="sdfsdf"
        imageUrl="https://cdn.britannica.com/75/152975-050-99123EE6/Clint-Eastwood-2008.jpg?w=400&h=300&c=crop"
        price="101"
      />
    }
  </>
);
