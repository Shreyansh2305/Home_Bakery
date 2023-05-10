const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, price, product } = action.payload;
    // tackle the existing product
    let existingProduct = state.cart.find((item) => item.id === id);
    if (existingProduct) {
      let updatedProduct = state.cart.map((item) => {
        if (item.id === id) {
          let newAmount = item.amount + amount;
          return {
            ...item,
            amount: newAmount
          };
        } else return item;
      });
      return {
        ...state,
        cart: updatedProduct
      };
    } else {
      let cartProduct = {
        name: product.title,
        amount,
        image: product.image,
        price,
        id
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct]
      };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (element) => element.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: []
    };
  }

  //to set decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((item) => {
      if (item.id === action.payload) {
        let decAmount = item.amount - 1;
        if (decAmount <= 1) decAmount = 1;
        return {
          ...item,
          amount: decAmount
        };
      } else return item;
    });
    return { ...state, cart: updatedProduct };
  }

  //to set increment
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((item) => {
      if (item.id === action.payload) {
        let incAmount = item.amount + 1;
        if (incAmount >= 5) incAmount = 5;
        return {
          ...item,
          amount: incAmount
        };
      } else return item;
    });
    return { ...state, cart: updatedProduct };
  }

  //to get total cart item
  if (action.type === "CART_TOTAL_ITEM" && state.cart != null) {
    let updatedItem = state.cart.reduce((initial, item) => {
      let { amount } = item;
      initial = initial + amount;
      return initial;
    }, 0);

    return {
      ...state,
      total_item: updatedItem
    };
  }

  //to get total cart price
  if (action.type === "CART_TOTAL_PRICE") {
    let updatedPrice = state.cart.reduce((initial, item) => {
      let { price, amount } = item;
      initial = initial + price * amount;
      return initial;
    }, 0);

    return {
      ...state,
      total_price: updatedPrice
    };
  }

  return state;
};

export default cartReducer;
