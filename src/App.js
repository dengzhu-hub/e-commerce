import Directory from "./components/directories/directory.component";
import "./components/directories/directory.component";
import jsonData from "./data.json";
// import Category from "./components/category.component";
function App() {
  // console.log(jsonData);
  return <Directory category={jsonData} />;
}

export default App;
