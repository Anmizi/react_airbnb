import { useRoutes } from "react-router-dom";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import routes from "./router";
function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
}

export default App;
