import React from "react";
import Header from "./Header";
import './App.css';
import Sidebar from "./Sidebar"
import RecomendedVideos from "./RecomendedVideos";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    // BEM class naming convention
    <div className="app">
      
      <Router>
      <Header/>
        <Switch>
        <Route path="/search/:searchTerm">
        <div className="app_page">
        <Sidebar/>
        <SearchPage/>

        
      </div>

          </Route>
          <Route path="/">
          
      <div className="app_page">
        <Sidebar/>
        <RecomendedVideos/>
        
      </div>

          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
