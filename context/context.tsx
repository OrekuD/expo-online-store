import React, { ReactNode, useState, useEffect, useContext } from "react";
import { URL } from "../constants/Url";
import { dark, light } from "../constants/Colors";
import { StateProps, ProductProps, CartProps, ColorProps } from "../types";

interface Props {
  children: ReactNode;
}

const Context = React.createContext<StateProps>({});

const AppProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [cart, setCart] = useState<CartProps[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [colors, setColors] = useState<ColorProps>(dark);

  useEffect(() => {
    fetch(`${URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.products);
        setProducts(data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (darkTheme) {
      setColors(dark);
    } else {
      setColors(light);
    }
  }, [darkTheme]);

  useEffect(() => {
    calculateCartTotal();
  }, [cart]);

  const calculateCartTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.total));
    setCartTotal(total);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const manageCart = (action: string, product: CartProps) => {
    let tempCart: CartProps[] = [];
    let updatedProduct: CartProps = {};
    let updatedProductIndex = 0;
    switch (action) {
      case "ADD":
        if (getProduct(product)) {
          return;
        }
        product.count = 1;
        product.total = product.price;
        setCart([...cart, product]);
        break;
      case "REMOVE":
        setCart(cart.filter((cartItem) => cartItem._id !== product._id));
        break;
      case "EMPTY":
        setCart([]);
        break;
      case "INCREASE":
        tempCart = [...cart];
        updatedProductIndex = tempCart.findIndex(
          (item) => item._id === product._id
        );
        updatedProduct = tempCart[updatedProductIndex];
        updatedProduct.count++;
        updatedProduct.total = updatedProduct.count * updatedProduct.price;
        tempCart[updatedProductIndex] = updatedProduct;
        setCart(tempCart);
        break;
      case "DECREASE":
        tempCart = [...cart];
        updatedProductIndex = tempCart.findIndex(
          (item) => item._id === product._id
        );
        updatedProduct = tempCart[updatedProductIndex];
        if (updatedProduct.count === 1) {
          setCart(cart.filter((item) => item._id !== product._id));
          return;
        }
        updatedProduct.count--;
        updatedProduct.total = updatedProduct.count * updatedProduct.price;
        tempCart[updatedProductIndex] = updatedProduct;
        setCart(tempCart);
        break;
      default:
        break;
    }
  };

  const getProduct = (product: ProductProps) =>
    cart.find((item) => item._id === product._id);

  const state = {
    products,
    colors,
    manageCart,
    getProduct,
    cart,
    cartTotal,
    darkTheme,
    isLoggedIn,
    toggleTheme,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export { AppProvider, Context };
