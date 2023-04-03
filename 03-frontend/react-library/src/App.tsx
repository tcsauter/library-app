import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {Footer} from "./layouts/NavbarAndFooter/Footer";
import {HomePage} from "./layouts/HomePage/HomePage";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {Route} from "react-router-dom";

function App() {
  return (
      <div>
          <Navbar />

          <Route path='/'>
            <HomePage />
          </Route>

          <Route path='/search'>
            <SearchBooksPage />
          </Route>

          <Footer />
      </div>
  );
}

export default App;
