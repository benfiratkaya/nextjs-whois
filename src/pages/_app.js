import { ThemeProvider } from "next-themes";
import { wrapper } from "../redux/store";
import "../../public/static/css/theme.scss";
import "../utils/icons/fontawesome";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(App);
