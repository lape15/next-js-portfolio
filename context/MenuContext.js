import { createContext } from "react";

export const MenuContext = createContext();

const menuState = {
  menuOpen: false,
};

const menuReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MENU":
      return {
        ...state,
        menuOpen: !menuState.menuOpen,
      };
    default:
      return state;
  }
};
const MenuContextProvider = (props) => {
  const [state, dispatch] = useReducer(menuReducer, menuState);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
