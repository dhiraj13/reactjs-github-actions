import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/dashboard" component={DashboardPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
}

export default App;
