import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  isSingleLoading: false,
  singleProduct: {}
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getProducts();
  }, []);

  //my 1st API call for productList
  const getProducts = async () => {
    const options = {
      method: "GET",
      url: "https://the-birthday-cake-db.p.rapidapi.com/",
      headers: {
        "X-RapidAPI-Key": "610db88192mshc5692a1311c548fp1f7befjsn27a80bab1e4a",
        "X-RapidAPI-Host": "the-birthday-cake-db.p.rapidapi.com"
      }
    };

    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.request(options);
      const product = await res.data;
      console.log(product);
      let newProduct = product.map((item) => {
        return { ...item, price: Math.floor(Math.random() * 1000) + 1 };
      });
      // console.log(newProduct);
      dispatch({ type: "SET_API_DATA", payload: newProduct });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //second api call for single product description
  const getSingleProduct = async (id) => {
    const options = {
      method: "GET",
      url: `https://the-birthday-cake-db.p.rapidapi.com/${id}`,
      headers: {
        "X-RapidAPI-Key": "610db88192mshc5692a1311c548fp1f7befjsn27a80bab1e4a",
        "X-RapidAPI-Host": "the-birthday-cake-db.p.rapidapi.com"
      }
    };

    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.request(options);
      const singleProduct = await res.data;
      // console.log(singleProduct);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });
    }
  };

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
