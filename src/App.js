import React from 'react';
import './App.css';
import Journal from "./Components/Journal";
import Home from "./Components/Home";
import Ideas from "./Components/Ideas";
import Authors from "./Components/Authors";
import Footer from "./Components/Footer";
//import CallToAction from "./Components/CallToAction";


import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";
import CallToAction from "./Components/CallToAction";



export default function App() {
    return (
        <Router>
            <div>
                <nav className="flex">
                    <ul className="Menu">
                        <li>
                            <Link className="Menu_title" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="Menu_title" to="/journal">Journal</Link>
                        </li>
                        <li>
                            <Link className="Menu_title" to="/ideas">Ideas</Link>
                        </li>
                        <li>
                            <Link className="Menu_title" to="/authors">Authors</Link>
                        </li>
                    </ul>
                    <button className="button" type="submit">Explore menu</button>

                </nav>
                <div className="mobile-menu"></div>


                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/journal">
                        <Journal />
                    </Route>
                    <Route path="/ideas">
                        <Ideas />
                    </Route>
                    <Route path="/authors">
                        <Authors />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>

            <CallToAction />

            <Footer/>
        </Router>
    );
}

