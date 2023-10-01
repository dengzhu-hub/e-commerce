import Directory from "../../components/directories/directory.component";
import jsonData from "../../data.json";
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <div>
      <Outlet />
      <Directory categories={jsonData} />
    </div>
  );
}
export default Home;
