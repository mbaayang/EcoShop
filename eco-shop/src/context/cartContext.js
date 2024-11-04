import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

// Utilisation de la fonction pour définir l'état initial
const initialState = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart
    ? JSON.parse(storedCart)
    : {
        items: [],
        total: 0,
      };
};

// Action types
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";

// Reducer
function cartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems),
        };
      } else {
        const updatedItems = [...state.items, action.payload];
        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems),
        };
      }

    case REMOVE_FROM_CART:
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        items: filteredItems,
        total: calculateTotal(filteredItems),
      };

    case UPDATE_QUANTITY:
      const updatedQuantities = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        items: updatedQuantities,
        total: calculateTotal(updatedQuantities),
      };

    default:
      return state;
  }
}

// Helper function to calculate total
const calculateTotal = (items) =>
  items.reduce((acc, item) => acc + item.price * item.quantity, 0);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState());

  // Sauvegarde du panier dans le localStorage chaque fois que `state` change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const addToCart = (product, quantity = 1) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { ...product, quantity },
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({
      type: UPDATE_QUANTITY,
      payload: { id, quantity },
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
