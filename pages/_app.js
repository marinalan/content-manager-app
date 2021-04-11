import "bulma/css/bulma.min.css";
import "../styles/globals.css";

function MainApp({ Component, pageProps }) {
  console.log(Component)
  return <Component {...pageProps} />
}

export default MainApp
