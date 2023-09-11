import Home from "./components/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";
// import Category from "./components/category.component";
function Navigator() {
  return (
    <div>
      <h1>I'm a navigation,</h1>
      <Outlet />
    </div>
  );
}
function Shop() {
  return (
    <>
      <h1>Hello, I'm the shop page!</h1>
    </>
  );
}
function App() {
  // console.log(jsonData);
  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
