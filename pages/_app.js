import "../styles/global.css";
import "aos/dist/aos.css";
import MenuContextProvider from "../context/MenuContext";

export default function App({ Component, pageProps }) {
  return (
    <MenuContextProvider>
      <Component {...pageProps} />
    </MenuContextProvider>
  );
}
