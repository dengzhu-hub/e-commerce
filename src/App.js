import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
// import Category from "./components/category.component";
function Shop() {
  return (
    <>
      <h1>Hello, I'm the shop page!</h1>
    </>
    
  );
}
function App() {
  // console.log(jsonData);
  console.log('hello world');
  
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Navigator />}>
=======
      <Route path="/" element={<Navigation />}>
>>>>>>> jack-study-navigation
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
