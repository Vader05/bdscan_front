import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div>
      <Router>
        <Sidebar></Sidebar>
      </Router>
    </div>
  );
}

export default App;
