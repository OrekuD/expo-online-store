import React, { createContext, useState, useEffect } from "react";

const Context = createContext({});

const Provider: React.FC = () => {
  const [products, setProducts] = useState<object[] | null>([]);

  return <Context.Provider value={{ products }}></Context.Provider>;
};

const Consumer = Context.Consumer;

export { Consumer, Context, Provider };
