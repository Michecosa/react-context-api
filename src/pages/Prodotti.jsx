import axios from "axios";
import { useState, useEffect, useContext } from "react";
import CardProdotti from "../components/CardProdotti";
import BudgetContext from "../context/BudgetContext";

export default function Prodotti({ urlProducts, addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(0);
  const [filterProducts, setFilterProducts] = useState(products);
  const { budgetMode } = useContext(BudgetContext);

  const filtroCategoria = (index) => {
    let filtered;

    if (categories[index] === "All") {
      filtered = products;
    } else {
      filtered = products.filter((el) => el.category === categories[index]);
    }

    if (budgetMode) {
      filtered = filtered.filter((el) => el.price <= 30);
    }

    setFilterProducts(filtered);
  };

  useEffect(() => {
    filtroCategoria(selected);
  }, [products, selected, budgetMode]);

  useEffect(() => {
    axios
      .get(urlProducts)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [urlProducts]);

  const categories = [];
  products.forEach((product) => {
    if (!categories.includes(product.category))
      categories.push(product.category);
  });
  categories.unshift("All");

  return (
    <div className="container my-4">
      <h2 className="mb-3">Our Products</h2>
      {loading ? (
        <div className="spinner-border text-primary" role="status"></div>
      ) : (
        <div>
          <div className="d-flex align-align-items-baseline flex-wrap mb-5">
            <p className="mb-0 d-flex align-items-center me-3 mb-1">
              Filter by:
            </p>
            {categories.map((category, index) => {
              return (
                <button
                  key={index}
                  className={`btn me-2 mb-1 ${
                    index === selected ? "btn-primary" : "btn-outline-secondary"
                  }`}
                  onClick={() => setSelected(index)}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <CardProdotti products={filterProducts} addToCart={addToCart} />
        </div>
      )}
    </div>
  );
}
