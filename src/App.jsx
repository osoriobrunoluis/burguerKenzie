import { useState, useEffect } from "react";
import { api } from "./services/api";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { CurrentSale } from "./components/CurrentSale";
import { StyledMain, StyledDiv } from "./styles/main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const localStorageCurrent = localStorage.getItem("@KenzieBurguer");
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(
    localStorageCurrent ? JSON.parse(localStorageCurrent) : []
  );
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    async function loadApi() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {}
    }
    loadApi();
  }, []);

  useEffect(() => {
    localStorage.setItem("@KenzieBurguer", JSON.stringify(currentSale));
  }, [currentSale]);

  const addProduct = (id) => {
    const alreadyInCart = currentSale.some((cartItem) => {
      return cartItem.id === id;
    });

    if (alreadyInCart) {
      const newSale = currentSale.map((cartItem) => {
        if (cartItem.id !== id) return cartItem;

        return { id: cartItem.id, quantity: cartItem.quantity + 1 };
      });
      setCurrentSale(newSale);
    } else {
      toast.success("Item adicionado com sucesso!");
      const newSale = [...currentSale, { id, quantity: 1 }];
      setCurrentSale(newSale);
    }
  };

  const decreaseQuantity = (id) => {
    const updatedSale = currentSale.map((cartItem) => {
      if (cartItem.id !== id) return cartItem;

      return { id: cartItem.id, quantity: cartItem.quantity - 1 };
    });
    const newSale = updatedSale.filter((cartItem) => cartItem.quantity > 0);
    if (newSale.length < updatedSale.length) {
      toast.error("item removido!");
    } else {
    }
    setCurrentSale(newSale);
  };

  const removeProduct = (currenId) => {
    toast.error("Item removido!");
    const newCurrentSale = currentSale.filter(
      (product) => product.id !== currenId
    );
    setCurrentSale(newCurrentSale);
  };

  const removeAll = () => {
    setCurrentSale([]);
    toast.error("Itens removidos!");
  };

  const filteredProducts = searchInputValue
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchInputValue)
      )
    : products;

  return (
    <>
      <Header
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />
      <StyledMain>
        <StyledDiv>
          <ProductList products={filteredProducts} addProduct={addProduct} />
          <CurrentSale
            currentSale={currentSale}
            products={products}
            removeProduct={decreaseQuantity}
            removeAll={removeAll}
          />
        </StyledDiv>
      </StyledMain>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
