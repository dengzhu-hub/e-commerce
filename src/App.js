import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

function App() {
  // console.log(jsonData);
  console.log("hello world");

  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Navigator />}>
=======
      <Route path="/" element={<Navigation />}>
>>>>>>> jack-study-navigation
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
