import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from './App';
import WhoAreYou from './Components/WhoAreYou';


const routes = () => {
    return (
        <>
            <Router>

                <Switch>
                    <Route exact path="/">
                        <WhoAreYou />
                    </Route>
                    <Route path="/chat">
                        <App />
                    </Route>
                </Switch>

            </Router>
        </>
    )
}

export default routes
