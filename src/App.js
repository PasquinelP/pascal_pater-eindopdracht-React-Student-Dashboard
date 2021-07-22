import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppProvider } from "./components/AppContext";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";
import Dashboard from "./components/views/Dashboard";
import Student from "./components/views/Student";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Switch>
              <Route path="/" exact>
                <Dashboard />
              </Route>
              <Route path="/student/:name">
                <Student />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
