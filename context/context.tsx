import React, { ReactNode, useState, useEffect, useContext } from "react";
import { URL } from "../constants/Url";
import { dark, light } from "../constants/Colors";

const Context = React.createContext({});

interface Props {
  children: ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<object[] | null>([]);
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [colors, setColors] = useState<object>(dark);

  useEffect(() => {
    fetch(`${URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
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

  return (
    <Context.Provider value={{ products, colors }}>{children}</Context.Provider>
  );
};

export { AppProvider, Context };
