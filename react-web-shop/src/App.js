import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import NavBar from "./Components/HomePage/NavBar/NavBar";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/shop">
        <ShopPage />
      </Route>
    </div>
  );
}

export default App;
