/** @format */

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import StickyHeader from "components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LandingPage from "screens/LandingPage";
import ProductPage from "screens/ProductPage";
import ProductDetail from "screens/ProductPage/ProductDetail";
import AdminPage from "screens/AdminPage";
import CartPage from "screens/CartPage";
import OrderPage from "screens/OrderPage";
import OrderDetails from "screens/OrderPage/OrderDetails";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#666666",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router basename="/">
        <StickyHeader />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/products" exact component={ProductPage} />
          <Route path="/products/:id" exact component={ProductDetail} />
          <Route path="/admin" exact component={AdminPage} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/order" exact component={OrderPage} />
          <Route path="/order/:id" exact component={OrderDetails} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
