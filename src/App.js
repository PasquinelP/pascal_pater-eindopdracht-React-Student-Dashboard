import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppProvider } from "./components/AppContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import About from "./components/About";

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
              <Route path="/about">
                <About />
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
