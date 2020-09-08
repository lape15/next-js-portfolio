import { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <MenuContext.Provider value={{ showMenu, handleMenu }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
