import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
export const ProductsContext = createContext({
  categoriesMap: {},
});
export const ProductsProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);
  const value = { categoriesMap };

  useEffect(() => {
    let isMounted = true;
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      if (isMounted) setCategoriesMap(categoryMap);
    };

    getCategoryMap();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
