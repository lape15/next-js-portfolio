import "../styles/global.css";
import MenuContextProvider from "../context/MenuContext";

export default function App({ Component, pageProps }) {
  return (
    <MenuContextProvider>
      {" "}
      <Component {...pageProps} />{" "}
    </MenuContextProvider>
  );
}
