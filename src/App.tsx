import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { Login, Home } from "@/pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Switch>
    </Router>
  );
}

export default App;
